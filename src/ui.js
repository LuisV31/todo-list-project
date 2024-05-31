import ProjectManager from './logic/projectManager.js';
import Project from './logic/Project.js';
import Todo from './logic/Todo.js';
import { saveProjects } from './storage.js'; // Import the saveProjects function

class TodoApp {
    constructor() {
        this.projectManager = new ProjectManager();
        this.currentProject = this.projectManager.getCurrentProject();
        
        // Bind methods
        this.handleProjectClick = this.handleProjectClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.handleEditProject = this.handleEditProject.bind(this);
        this.handleDeleteProject = this.handleDeleteProject.bind(this);
        this.handleTodoAction = this.handleTodoAction.bind(this);
        this.addProject = this.addProject.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    init() {
        this.renderProjects();
        this.addEventListeners();
        this.renderTodos();
    }

    addEventListeners() {       
        // Project interactions
        document.getElementById('add-project').addEventListener('click', () => this.toggleModal('project-modal', true));
        document.getElementById('confirm-add-project').addEventListener('click', () => {
            this.addProject();
            this.toggleModal('project-modal', false); // Close modal explicitly here
        });
        document.getElementById('close-project-modal').addEventListener('click', () => this.toggleModal('project-modal', false));
    
        // Todo interactions
        document.getElementById('add-todo').addEventListener('click', () => this.showTodoModal());
        document.getElementById('close-todo-modal').addEventListener('click', () => this.toggleModal('todo-modal', false));
        document.getElementById('todo-form').addEventListener('submit', (event) => {
            event.preventDefault();
            this.saveTodo();
            this.toggleModal('todo-modal', false); // Close modal right after adding
        });

        // Delegate project edit and delete button clicks
        document.getElementById('project-list').addEventListener('click', (event) => {
            const projectItem = event.target.closest('li');
            if (event.target.matches('.edit-project')) {
                this.handleEditProject(event);
            } else if (event.target.matches('.delete-project')) {
                this.handleDeleteProject(event);
            } else if (projectItem) {
                this.handleProjectClick(event);
            }
        });
                
        // Delegate todo actions (edit, delete, mark complete)
        document.getElementById('todo-list').addEventListener('click', this.handleTodoAction);

        // Task filters 
        const taskFilters = document.querySelectorAll('.task-filters li');
        taskFilters.forEach(filter => {
            filter.addEventListener('click', this.handleFilterClick);
        });
    }
    
    renderProjects() {
        const projectContainer = document.getElementById('project-list');
        projectContainer.innerHTML = this.projectManager.getProjects().map(project => `
            <li class="${project === this.currentProject ? 'active' : ''}">
                <span class="project-name">${project.name}</span>
                <div class="project-actions">
                    <button class="edit-project"><i class="fas fa-edit"></i></button>
                    <button class="delete-project"><i class="fas fa-trash-alt"></i></button>
                </div>
            </li>
        `).join('');
        this.updateProjectHeader();
    }

    addProject() {
        const projectNameInput = document.getElementById('new-project-name');
        const projectName = projectNameInput.value;
        if (projectName) {
            const newProject = new Project(projectName);
            this.projectManager.addProject(newProject);
            projectNameInput.value = '';
            this.renderProjects();
            this.selectCurrentProject(newProject);
            saveProjects(this.projectManager.getProjects());
        }
    }

    handleEditProject(event) {
        const projectElement = event.target.closest('li');
        const oldName = projectElement.querySelector('.project-name').textContent.trim();
        const newName = prompt("Enter the new project name:", oldName);
        if (newName && oldName !== newName) {
            if (this.projectManager.updateProjectName(oldName, newName)) {
                this.renderProjects();
                this.renderTodos();
                saveProjects(this.projectManager.getProjects());
            } else {
                alert("Project name must be unique and valid.");
            }
        }
    }

    handleDeleteProject(event) {
        const projectElement = event.target.closest('li');
        const projectName = projectElement.querySelector('.project-name').textContent.trim();
        if (confirm("Are you sure you want to delete this project?")) {
            this.projectManager.removeProject(projectName);
            this.renderProjects();
            if (this.currentProject && this.currentProject.name === projectName) {
                this.currentProject = this.projectManager.getProjects()[0] || null;
                this.renderTodos();
            }
            saveProjects(this.projectManager.getProjects());
        }
    }
    
    handleProjectClick(event) {
        const clickedElement = event.target.closest('li');
        const selectedProject = this.projectManager.getProjects().find(project => project.name === clickedElement.querySelector('.project-name').textContent.trim());
        if (selectedProject) {
            this.selectCurrentProject(selectedProject);
            saveProjects(this.projectManager.getProjects());
        }
    }
    
    handleFilterClick(event) {
        const taskFilters = document.querySelectorAll('.task-filters li');
        taskFilters.forEach(f => f.classList.remove('active'));
        event.target.classList.add('active');
        const filterType = event.target.getAttribute('data-filter');
        this.filterTasks(filterType);
    }

    filterTasks(filterType) {
        const todos = document.querySelectorAll('#todo-list li');
        const today = new Date().toISOString().split('T')[0]; 

        todos.forEach(todo => {
            const dueDate = todo.querySelector('.todo-due-date').textContent.replace('Due: ', '');
            const priority = todo.querySelector('.priority-circle').classList.contains('high') ? 'important' : '';
            const completed = todo.classList.contains('completed');

            switch (filterType) {
                case 'all': 
                    todo.style.display = 'flex';
                    break;
                case 'today':
                    todo.style.display = (dueDate === today) ? 'flex' : 'none';
                    break;
                case 'week':
                    const weekStart = new Date();
                    const weekEnd = new Date();
                    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                    weekEnd.setDate(weekEnd.getDate() + (6 - weekEnd.getDay()));
                    const dueDateObj = new Date(dueDate);
                    todo.style.display = (dueDateObj >= weekStart && dueDateObj <= weekEnd) ? 'flex' : 'none';
                    break;
                case 'important':
                    todo.style.display = (priority === 'important') ? 'flex' : 'none';
                    break
                case 'completed':
                    todo.style.display = completed ? 'flex' : 'none';
                    break;
            }
        });
    }

    selectCurrentProject(project) {
        this.currentProject = project; 
        this.renderProjects();
        this.renderTodos();
        this.updateProjectHeader();
        saveProjects(this.projectManager.getProjects());
    }

    toggleModal(modalId, show) {
        const modal = document.getElementById(modalId);
        if (show) {
            modal.classList.remove('hidden');
            modal.classList.add('visible');
        } else {
            modal.classList.remove('visible');
            modal.classList.add('hidden');
        }
    }
    

    updateProjectHeader() {
        const projectHeaderElement = document.getElementById('project-title');
        const projectHeaderText = projectHeaderElement.querySelector('.project-title-text');

        if (this.currentProject) {
            projectHeaderText.textContent = this.currentProject.name;
        } else {
            projectHeaderText.textContent = 'Select a Project';
        }
    }
    
    showTodoModal(todo = null) {
        // Fill the form with the todo details if editing, otherwise clear the form
        document.getElementById('todo-title').value = todo ? todo.title : '';
        document.getElementById('todo-description').value = todo ? todo.description : '';
        document.getElementById('todo-due-date').value = todo ? todo.dueDate : '';
        document.getElementById('todo-priority').value = todo ? todo.priority : '';

        // Save the todo being edited or indicate a new todo
        this.todoBeingEdited = todo;

        // Show the modal
        this.toggleModal('todo-modal', true);
    }
    
    saveTodo() {
        const titleElement = document.getElementById('todo-title');
        const descriptionElement = document.getElementById('todo-description');
        const dueDateElement = document.getElementById('todo-due-date');
        const priorityElement = document.getElementById('todo-priority');
        
        const title = titleElement.value;
        const description = descriptionElement.value;
        const dueDate = dueDateElement.value;
        const priority = priorityElement.value;
        
        if (this.currentProject) {
            if(this.todoBeingEdited) {
                // Edit the existing todo
                this.todoBeingEdited.editTodoDetails({
                    title: title,
                    description: description,
                    dueDate: dueDate,
                    priority: priority
                });
            } else {
                // Add a new todo
                const newTodo = new Todo(title, description, dueDate, priority);
                this.currentProject.addTodo(newTodo);
            }
            this.renderTodos();
            saveProjects(this.projectManager.getProjects());

            // Clear the form fields
            titleElement.value = '';
            descriptionElement.value = '';
            dueDateElement.value = '';
            priorityElement.selectedIndex = 0;
        } else {
            console.error("No current project selected");
        }
    }

    handleTodoAction(event) {
        const todoElement = event.target.closest('li');
        if (!todoElement) {
            console.error("No todo element found.");
            return;
        }

        const todoTitle = todoElement.querySelector('.todo-title').textContent;
        const todo = this.currentProject.getTodos().find(t => t.title === todoTitle);

        if (todo) {
            if (event.target.classList.contains('mark-complete') || event.target.closest('.mark-complete')) {
                todo.completed = !todo.completed;
                this.renderTodos();
                saveProjects(this.projectManager.getProjects());
            } else if (event.target.classList.contains('edit-todo') || event.target.closest('.edit-todo')) {
                this.showTodoModal(todo);
            } else if (event.target.classList.contains('delete-todo') || event.target.closest('.delete-todo')) {
                if (confirm("Are you sure you want to delete this todo?")) {
                    this.currentProject.removeTodo(todo);
                    this.renderTodos();
                    saveProjects(this.projectManager.getProjects());
                }
            }
        } else {
            console.error("Todo not found for action.");
        }
    }

    renderTodos() {
        const todoContainer = document.getElementById('todo-list');
        if (this.currentProject) {
            todoContainer.innerHTML = this.currentProject.getTodos().map(todo => `
                <li class="todo-item ${todo.completed ? 'completed' : ''}">
                    <label class="priority-circle ${todo.priority}">
                        <input type="checkbox" class="mark-complete" ${todo.completed ? 'checked' : ''}>
                    </label>
                    <span class="todo-details">
                        <span class="todo-title">${todo.title}</span>
                        <span class="todo-due-date">Due: ${todo.dueDate}</span>
                        <span class="todo-description">${todo.description}</span>
                    </span>
                    <div class="todo-actions">
                        <button class="edit-todo"><i class="fas fa-edit"></i></button>
                        <button class="delete-todo"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </li>
            `).join('');
        } else {
            todoContainer.innerHTML = ''; // Clear the container if no current project
        }
    }
    
}

// Initialize the TodoApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const app = new TodoApp();
    app.init();
});

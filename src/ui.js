import ProjectManager from './logic/projectManager.js';
import Project from './logic/Project.js';
import Todo from './logic/Todo.js';

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
            if (event.target.classList.contains('edit-project')) {
                this.handleEditProject(event);
            } else if (event.target.classList.contains('delete-project')) {
                this.handleDeleteProject(event);
            } else if (event.target.tagName === 'LI') {
                this.handleProjectClick(event);
            }
        });
        
        // Delegate todo actions (edit, delete, mark complete)
        document.getElementById('todo-list').addEventListener('click', this.handleTodoAction);
    }
    
    renderProjects() {
        const projectContainer = document.getElementById('project-list');
        projectContainer.innerHTML = '';
        this.projectManager.getProjects().forEach(project => {
            const projectElement = document.createElement('li');
            projectElement.className = project === this.currentProject ? 'active' : '';
            projectElement.innerHTML = `
               <span class="project-name">${project.name}</span>
                <div class="project-actions">
                    <button class="edit-project"><i class="fas fa-edit"></i></button>
                    <button class="delete-project"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            projectContainer.appendChild(projectElement);
        });
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
        }
    }
    
    handleProjectClick(event) {
        const clickedElement = event.target.closest('li');
        const selectedProject = this.projectManager.getProjects().find(project => project.name === clickedElement.querySelector('.project-name').textContent.trim());
        if (selectedProject) {
            this.selectCurrentProject(selectedProject);
        }
    }

    selectCurrentProject(project) {
        this.currentProject = project; 
        this.renderProjects();
        this.renderTodos();
    }

    toggleModal(modalId, show) {
        const modal = document.getElementById(modalId);
        modal.classList.toggle('show', show);
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

        const todoTitle = todoElement.querySelector('.todo-title').textContent.split(' - Due: ')[0];
        const todo = this.currentProject.getTodos().find(t => t.title === todoTitle);

        if (todo) {
            if (event.target.classList.contains('edit-todo') || event.target.closest('.edit-todo')) {
                this.showTodoModal(todo);
            } else if (event.target.classList.contains('delete-todo') || event.target.closest('.delete-todo')) {
                if (confirm("Are you sure you want to delete this todo?")) {
                    this.currentProject.removeTodo(todo);
                    this.renderTodos();
                }
            } else if (event.target.classList.contains('mark-complete')) {
                todo.completed = !todo.completed;
                this.renderTodos();
            }
        } else {
            console.error("Todo not found for action.");
        }
    }


    renderTodos() {
        const todoContainer = document.getElementById('todo-list');
        todoContainer.innerHTML = '';
        if (this.currentProject) {
            this.currentProject.getTodos().forEach(todo => {
                const todoElement = document.createElement('li');
                todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                todoElement.innerHTML = `
                    <input type="checkbox" class="mark-complete" ${todo.completed ? 'checked' : ''}>
                    <span class="todo-details">
                        <span class="todo-title">${todo.title}</span>
                        <span class="todo-due-date">Due: ${todo.dueDate}</span>
                    </span>
                    <button class="edit-todo"><i class="fas fa-edit"></i></button>
                    <button class="delete-todo"><i class="fas fa-trash-alt"></i></button>
                `;
                todoContainer.appendChild(todoElement);
            });
        }
    }
    
}

// Initialize the TodoApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const app = new TodoApp();
    app.init();
});

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
        this.addProjectToUI = this.addProjectToUI.bind(this);
        this.addTodoToUI = this.addTodoToUI.bind(this);
        this.handleEditProject = this.handleEditProject.bind(this);
        this.handleDeleteProject = this.handleDeleteProject.bind(this);
    }

    init() {
        this.renderProjects();
        this.addEventListeners();
    }

    addEventListeners() {       
        // Project interactions
        document.getElementById('add-project').addEventListener('click', () => this.toggleModal('project-modal', true));
        document.getElementById('confirm-add-project').addEventListener('click', () => {
            this.addProjectToUI();
            this.toggleModal('project-modal', false); // Close modal explicitly here
        });
        document.getElementById('close-project-modal').addEventListener('click', () => this.toggleModal('project-modal', false));
    
        // Todo interactions
        document.getElementById('add-todo').addEventListener('click', () => this.toggleModal('todo-modal', true));
        document.getElementById('close-todo-modal').addEventListener('click', () => this.toggleModal('todo-modal', false));
    
        // Only handle adding a todo through form submission to prevent duplication
        document.getElementById('todo-form').addEventListener('submit', (event) => {
            event.preventDefault();
            this.addTodoToUI();
            this.toggleModal('todo-modal', false); // Close modal right after adding
        });

        // Delegate project edit and delete button clicks
        document.getElementById('project-list').addEventListener('click', (event) => {
            if (event.target.classList.contains('edit-project')) {
                this.handleEditProject(event);
            } else if (event.target.classList.contains('delete-project')) {
                this.handleDeleteProject(event);
            }
        });
    }
    

    renderProjects() {
        const projectContainer = document.getElementById('project-list');
        projectContainer.innerHTML = '';
        this.projectManager.getProjects().forEach(project => {
            const projectElement = document.createElement('li');
            projectElement.className = project === this.currentProject ? 'active' : '';
            projectElement.innerHTML = `
                ${project.name}
                <div class="project-actions">
                    <button class="edit-project"><i class="fas fa-edit"></i></button>
                    <button class="delete-project"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            projectContainer.appendChild(projectElement);
        });
    }

    handleEditProject(event) {
        const projectElement = event.target.closest('li');
        const oldName = projectElement.childNodes[0].textContent.trim();
        
    }

    handleDeleteProject(event) {
        if(confirm("Are you sure you want to delete this project?")) {
            const projectElement = event.target.closest('li');
            const projectName = projectElement.textContent.trim();
            this.projectManager.removeProject(projectName);
            this.renderProjects();
        }
    }
    
    handleProjectClick(event) {
        const clickedElement = event.target;
        const selectedProject = this.projectManager.getProjects().find(project => project.name === clickedElement.textContent);
        if (selectedProject) {
            this.selectProject(selectedProject)
        }
    }

    selectProject(project) {
        this.currentProject = project; 
        this.renderProjects();
        this.updateProjectDisplay();
    }

    toggleModal(modalId, show) {
        const modal = document.getElementById(modalId);
        console.log(`Toggling modal: ${modalId}, Current display: ${modal.style.display}`);
        modal.style.display = show? 'block' : 'none';
        console.log(`New display:${modal.style.display}`);
    }    
    
    addProjectToUI() {
        const projectNameInput = document.getElementById('new-project-name');
        const projectName = projectNameInput.value;
        if (projectName) {
            const newProject = new Project(projectName);
            this.projectManager.addProject(newProject);
            projectNameInput.value = '';
            this.renderProjects();
        }
    }


    addTodoToUI() {
        const titleElement = document.getElementById('todo-title');
        const descriptionElement= document.getElementById('todo-description');
        const dueDateElement= document.getElementById('todo-due-date');
        const priorityElement = document.getElementById('todo-priority');
        
        const title = titleElement.value;
        const description = descriptionElement.value;
        const dueDate = dueDateElement.value;
        const priority = priorityElement.value;
        
        if (this.currentProject) {   
            const newTodo = new Todo(title, description, dueDate, priority);
            this.currentProject.addTodo(newTodo);
            this.updateProjectDisplay();

            //Clear the form fields
            titleElement.value = '';
            descriptionElement.value = '';
            dueDateElement.value = '';
            priorityElement.selectedIndex = 0;
        } else {
            console.error("No current project selected");
        }
    }

    updateProjectDisplay() {
        const todoContainer = document.getElementById('todo-list');
        todoContainer.innerHTML = '';
        this.currentProject.getTodos().forEach(todo => {
            const todoElement = document.createElement('li');
            todoElement.textContent = `${todo.title} - Due: ${todo.dueDate}`;
            todoContainer.appendChild(todoElement);
        });
    }
}

// Initialize the TodoApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const app = new TodoApp();
    app.init();
});
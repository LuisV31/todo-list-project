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
    }
    

    renderProjects() {
        const projectContainer = document.getElementById('project-list');
        projectContainer.innerHTML = '';
        this.projectManager.getProjects().forEach(project => {
            const projectElement = document.createElement('li');
            projectElement.textContent = project.name;
            projectElement.className = project === this.currentProject ? 'active' : '';
            projectContainer.appendChild(projectElement);
        });
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
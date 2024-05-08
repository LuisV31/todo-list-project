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

        document.addEventListener('DOMContentLoaded', () => this.init());
    }

    init() {
        this.renderProjects();
        this.addEventListeners();
    }

    addEventListeners() {
        document.getElementById('project-list').addEventListener('click', this.handleProjectClick);
        document.getElementById('add-project').addEventListener('click', this.toggleModal);
        document.getElementById('confirm-add-project').addEventListener('click', this.addProjectToUI);
        document.getElementById('close-button').addEventListener('click',this.toggleModal);
        document.getElementById('todo-form').addEventListener('submit', (event) => {
            event.preventDefault();
            this.addTodoToUI();
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

    toggleModal() {
        const modal = document.getElementById('project-modal');
        modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
    }

    addProjectToUI() {
        const projectNameInput = document.getElementById('new-project-name');
        const projectName = projectNameInput.value;
        if (projectName) {
            const newProject = new Project(projectName);
            this.projectManager.addProject(newProject);
            this.toggleModal();
            projectNameInput.value = '';
            this.renderProjects();
        }
    }


    addTodoToUI() {
        const title = document.getElementById('todo-title').value;
        const description = document.getElementById('todo-description').value;
        const dueDate = document.getElementById('todo-due-date').value;
        const priority = document.getElementById('todo-priority').value;
        
        if (this.currentProject) {   
            const newTodo = new Todo(title, description, dueDate, priority);
            this.currentProject.addTodo(newTodo);
            this.updateProjectDisplay();
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

new TodoApp();


import ProjectManager from './logic/projectManager.js';
import Project from './logic/Project.js';
import Todo from './logic/Todo.js';

const projectManager = new ProjectManager();

// Function to render all projects

const renderProjects = () => {
    const projectContainer = document.getElementById('project-list');
    projectContainer.innerHTML = '';
    projectManager.getProjects().forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.textContent = project.name;
        projectElement.className = project === currentProject ? 'active' : '';
        projectElement.addEventListener('click', () => {
            currentProject = project; // Update the current project
            selectProject(project);   // Call to update the UI
            renderProjects();         // Re-redner to update active class  
        });
        projectContainer.appendChild(projectElement);
    });
};

const selectProject = project => {
    const todoContainer = document.getElementById('todo-list');
    todoContainer.innerHTML = '';
    project.getTodos().forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.textContent = `${todo.title} - Due: ${todo.dueDate}`;
        todoContainer.appendChild(todoElement);
    });
};

let currentProject = projectManager.getCurrentProject();

const addProjectToUI = () => {
    const projectNameInput = document.getElementById('new-project-name');
    const projectName = projectNameInput.value;
    if (projectName) {
        const newProject = new Project(projectName);
        projectManager.addProject(newProject);
        renderProjects();
        projectNameInput.value = '';
    }
};

const addTodoToUI = () => {
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-due-date').value;
    const priority = document.getElementById('todo-priority').value;

    if (currentProject) {   
        const newTodo = new Todo(title, description, dueDate, priority);
        currentProject.addTodo(newTodo);
        updateProjectDisplay(currentProject);
    } else {
        console.error("No current project selected");
    }
};

const updateProjectDisplay = (project) => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    project.getTodos().forEach(todo => {
        const todoElement = document.createElement('li');
        todoElement.textContent = `${todo.title} - Due: ${todo.dueDate}`;
        todoList.appendChild(todoElement);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    const addProjectButton = document.getElementById('add-project');
    if (addProjectButton) {
        addProjectButton.addEventListener('click', addProjectToUI);
    } else {
        console.error("Add project button not found");
    }

    const todoForm = document.getElementById('todo-form');
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodoToUI();
    });
});


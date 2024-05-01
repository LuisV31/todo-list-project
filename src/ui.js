import ProjectManager from './logic/projectManager.js';

const projectManager = new ProjectManager();

// Function to render all projects

const renderProjects = () => {
    const projectContainer = document.getElementById('project-list');
    projectContainer.innerHTML = '';
    projectManager.getProjects().forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.textContent = project.name;
        projectElement.addEventListener('click', () => selectProject(project));
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

const addProject = () => {
    const projectNameInput = document.getElementById('new-project-name');
    const projectName = projectNameInput.value;
    if (projectName) {
        projectManager.addProject(projectName);
        renderProjects();
        projectNameInput.value = '';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    const addProjectButton = document.getElementById('add-project-btn');
    if (addProjectButton) {
        addProjectButton.addEventListener('click', addProject);
    } else {
        console.error("Add project button not found");
    }
});


document.getElementById('add-project-btn').addEventListener('click', addProject)
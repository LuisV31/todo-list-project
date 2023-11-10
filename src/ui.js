import { createProject } from "./projectManager";
import Todo from './Todo';

// keep track of all projects and the currently selected project
let projects = [];
let selectedProject = null;

document.addEventListener('DOMContentLoaded', () => {
    setupCreateProjectButton();
    setupTodoForm();
});

function setupCreateProjectButton() {
    const createProjectButton = document.getElementById('create-project-button');
    const projectList = document.getElementById('project-list');

    createProjectButton.addEventListener('click', () => {
        const projectName = prompt("Enter project name:");
        if (projectName) {
            const newProject = createProject(projectName);
            projects.push(newProject); 
            const projectElement = createProjectElement(newProject);
            projectList.appendChild(projectElement);
        }
    });
}

function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.textContent = project.name;

    projectElement.addEventListener('click', () => {
        handleProjectSelection(project, projectElement);
    });

    return projectElement;
}

function handleProjectSelection(project, projectElement) {
    // Remove the 'selected' class from the previously selected project
    if (selectedProject) {
        selectedProject.element.classList.remove('selected');
    }

    // set the selected project to current one
    selectedProject = {
        project: project,
        element: projectElement
    };

    //add the 'selected' class to highlight the current project
    projectElement.classList.add('selected');

    //show the todo form when a project is selected
    document.getElementById('todo-form').style.display = 'block';
}

function setupTodoForm() {
    const todoForm = document.getElementById('todo-form');

    todoForm.addEventListener('submit', event => {
        event.preventDefault();
        if (selectedProject) {
            const newTodo = createNewTodo();
            selectedProject.project.addTodo(newTodo);
            // optionally, update the UI here to show the new TODO
        } else {
            alert('Please select a project first');
        }
    });
}

function createNewTodo() {
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-dueDate').value;
    const priority = document.getElementById('todo-priority').value;

    return new Todo(title, description, dueDate, priority);
}

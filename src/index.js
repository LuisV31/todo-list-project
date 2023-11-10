import './ui.js'; // Where the DOM manipulations and event listeners are
import './Todo.js'; // Todo class definition.
import './projectManager.js'; // this has createProject function.
import Project from './Project';

// Instantiate a default project
const defaultProject = new Project('Default');

// Initialize selected project
let selectedProject = defaultProject;


// Function to change seleceted project (this could be caled based on user input)
function changeSelectedProject(newProject) {
    selectedProject = newProject;
}
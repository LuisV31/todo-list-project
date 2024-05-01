import Project from "./Project";

class ProjectManager {
    constructor() {
        this.projects = [];
        this.createDefaultProject();
    }

    createDefaultProject() {
        this.addProject("Default");
    }

    addProject(name) {
    if (!name || typeof name !== 'string' || this.findProjectByName(name)) {
        console.error("Project name must be unique and valid string.");
        return;
    }
    const newProject = new Project(name);
    this.projects.push(newProject);
    }
    
    findProjectByName(name) {
        return this.projects.find(project => project.name === name);
    }
    
    // View all projects//
    getProjects() {
        return this.projects;
    }

    removeProject(name) {
        const projectIndex = this.projects.findIndex(project => project.name === name);
        if (projectIndex !== -1) {
            this.projects.splice(projectIndex, 1);
            return true;
        }
        return false;
    }

    updateProjectName(oldName, newName) {
        const project = this.findProjectByName(oldName);
        if (project && !this.findProjectByName(newName)) {
            project.name = newName;
            return true;
        }
        return false;
    }

}

export default ProjectManager;
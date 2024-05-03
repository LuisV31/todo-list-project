import Project from "./Project";

class ProjectManager {
    constructor() {
        this.projects = [];
        this.currentProject = null;
        this.createDefaultProject();
    }

    createDefaultProject() {
        const defaultProject = new Project("default");
        this.addProject(defaultProject);
        this.currentProject = defaultProject;
    }

    addProject(project) {
    if (!project.name || typeof project.name !== 'string' || this.findProjectByName(project.name)) {
        console.error("Project name must be unique and valid string.");
        return;
    }
    this.projects.push(project);
    this.currentProject = project;
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
            // If the current project is the one being removed, set currentProject to null or another project
            if (this.currentProject && this.currentProject.name === name) {
                this.currentProject = this.projects[0] || null;
            }
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

    setCurrentProject(name) {
        const project = this.findProjectByName(name);
        if (project) {
            this.currentProject = project;
        }
    }

    getCurrentProject() {
        return this.currentProject;
    }

}

export default ProjectManager;
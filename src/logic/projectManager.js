import Project from './Project';
import { saveProjects, loadProjects } from '../storage.js';

class ProjectManager {
  constructor() {
    this.projects = loadProjects() || [];
    if (this.projects.length === 0) {
      this.projects.push(this.createDefaultProject());
    }
    this.currentProject = this.projects[0] || null;
  }

  createDefaultProject() {
    const defaultProject = new Project('Default Project');
    this.addProject(defaultProject);
    return defaultProject;
  }

  addProject(project) {
    if (
      !project.name ||
      typeof project.name !== 'string' ||
      this.findProjectByName(project.name)
    ) {
      console.error('Project name must be unique and valid string.');
      return;
    }
    this.projects.push(project);
    this.currentProject = project;
    saveProjects(this.projects);
  }

  findProjectByName(name) {
    return this.projects.find((project) => project.name === name);
  }

  // View all projects//
  getProjects() {
    return this.projects;
  }

  removeProject(name) {
    const projectIndex = this.projects.findIndex(
      (project) => project.name === name
    );
    if (projectIndex !== -1) {
      this.projects.splice(projectIndex, 1);
      // If the current project is the one being removed, set currentProject to null or another project
      if (this.currentProject && this.currentProject.name === name) {
        this.currentProject = this.projects[0] || null;
      }
      saveProjects(this.projects);
      return true;
    }
    return false;
  }

  updateProjectName(oldName, newName) {
    const project = this.findProjectByName(oldName);
    if (project && !this.findProjectByName(newName)) {
      project.name = newName;
      saveProjects(this.projects);
      return true;
    }
    return false;
  }

  setCurrentProject(name) {
    const project = this.findProjectByName(name);
    if (project) {
      this.currentProject = project;
      saveProjects(this.projects);
    }
  }

  getCurrentProject() {
    return this.currentProject;
  }
}

export default ProjectManager;

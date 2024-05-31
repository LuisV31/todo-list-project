import Project from './logic/Project';
import Todo from './logic/Todo';

export function saveProjects(projects) {
    const projectsData = projects.map(project => ({
        name: project.name,
        todos: project.getTodos().map(todo => ({
            title: todo.title, 
            description: todo.description,
            dueDate: todo.dueDate,
            priority: todo.priority,
            completed: todo.completed,
            notes: todo.notes,
            checklist: todo.checklist
        }))
    }));
    localStorage.setItem('projects', JSON.stringify(projectsData));
}

export function loadProjects() {
    const projectsData = JSON.parse(localStorage.getItem('projects'));
    if (!projectsData) return null;

    return projectsData.map(projectData => {
        const project = new Project(projectData.name);
        project.todos = projectData.todos.map(todoData => {
            const todo = new Todo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority
            );
            todo.completed = todoData.completed;
            todo.notes = todoData.notes;
            todo.checklist = todoData.checklist;
            return todo;
        });
        return project;
    });
}
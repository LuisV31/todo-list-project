export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = [];
        this.checklist = [];
        this.completed = false;
    }

    addNote(note) {
        if (note) {
            this.notes.push(note);
        }
    }

    addTaskToChecklist(task) {
        if(task) {
            this.checklist.push({ task: task, completed: false});
        }
    }

    markTaskAsComplete(task) {
        const taskItem = this.checklist.find(item => item.task === task);
        if (taskItem) {
            taskItem.completed = true;
        }
    }

    removeTaskFromChecklist(task) {
        this.checklist = this.checklist.filter(item => item.task !== task);
    }


    // Method to edit todo details
    editTodoDetails({ title, description, dueDate, priority }) {
        if (title) this.title = title; 
        if (description) this.description = description;
        if (dueDate) this.dueDate = dueDate;
        if (priority) this. priority = priority;
    }
}

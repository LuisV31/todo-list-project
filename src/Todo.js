export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = '';
        this.checklist = [];
    }

    addNote(note) {
        this.notes = note;
    }

    addTaskToChecklist(task) {
        this.checklist.push({ task: task, done: false });
    }

    markTaskAsDone(task) {
        const taskItem = this.checklist.find(item => item.task === task);
        if (taskItem) {
            taskItem.done = true;
        }
    }

}

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

    // Method to edit todo details
    editTodoDetails({ title, description, dueDate, priority }) {
        if (title !== undefined) {
            this.title = title;
        }
        if (description !== undefined) {
            this.description = description;
        }
        if (dueDate !== undefined) {
            this.dueDate = dueDate;
        }
        if (priority !== undefined) {
            this.priority = priority;
        }
    }

}

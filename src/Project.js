export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoTitle) {
        const index = this.todos.findIndex(todo => todo.title === todoTitle);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }

    getTodo(todoTitle) {
        return this.todos.find(todo => todo.title === todoTitle);
    }

    getTodos() {
        return this.todos;
    }

    updateTodo(todoTitle, updateProperties) {
        const todo = this.getTodo(todoTitle);
        if (todo) {
            todo.editTodoDetails(updateProperties);
        }
    }
}

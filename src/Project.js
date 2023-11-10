export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoTitle) {
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    }

    getTodo(todoTitle) {
        return this.todos.find(todo => todo.title === todoTitle);
    }

    getTodos() {
        return this.todos;
    }
}

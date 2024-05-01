export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
    
    removeTodo(todo) {
       this.todos = this.todos.filter(t => t !== todo);
    }

    // View all todos in each project
    getTodos() {
        return this.todos;
    }

    // updateTodo(todoTitle, updateProperties) {
    //     const todo = this.getTodo(todoTitle);
    //     if (todo) {
    //         todo.editTodoDetails(updateProperties);
    //     }
    // }
}

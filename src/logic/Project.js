export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        if (todo.title) {
            this.todos.push(todo);
        } else {
            console.error("Todo must have a title");
        }
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

export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    if (todo.title) {
      this.todos.push(todo);
    } else {
      console.error('Todo must have a title');
    }
  }

  removeTodo(todo) {
    this.todos = this.todos.filter((t) => t.title !== todo.title);
  }

  getTodos() {
    return this.todos;
  }
}

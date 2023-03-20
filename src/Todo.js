export function getTodo(title, description, date) {
    class Todo {
        constructor(title, description, date) {
            this.title = title
            this.description = description
            this.date = date
        }
    }
    const todo = new Todo(title, description, date);
    return todo;
}

// expects title description and date the todo must be done and passes them on Todo class
export function getTodo(title, description, date) {
    //class returns new todo object
    class Todo {
        constructor(title, description, date) {
            this.title = title
            this.description = description
            this.date = date
        }
    }
    const todo = new Todo(title, description, date);
    // returning new todo object
    return todo;
}

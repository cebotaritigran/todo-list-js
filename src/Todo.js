

export function printTodo(title, description, date) {
    class TodoList {
        constructor(title, description, date) {
            this.title = title
            this.description = description
            this.date = date
        }
    }

    const itemOne = new TodoList(title, description, date);
    return itemOne;
}
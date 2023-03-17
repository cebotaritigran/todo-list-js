import { printTodo } from "./Todo";

function uiTodo(e) {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;
    let list = [];
    list.push(printTodo(title, description, date));
    const titleTodo = document.createTextNode(list[0]["title"]);
    const descriptionTodo = document.createTextNode(list[0]["description"]);
    const dateTodo = document.createTextNode(list[0]["date"]);
    const nodeTitle = document.createElement('p');
    const nodeAuthor = document.createElement('p');
    const nodePages = document.createElement('p');
    nodeTitle.appendChild(titleTodo);
    nodeAuthor.appendChild(descriptionTodo);
    nodePages.appendChild(dateTodo);
    const div = document.querySelector('.result');
    div.append(nodeTitle, nodeAuthor, nodePages);
    e.preventDefault();
}

export function call() {
    const submitTodo = document.querySelector('.form');
    submitTodo.addEventListener('submit', (e)=>{
        uiTodo(e)
    });
}

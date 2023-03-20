import { getTodo } from "./Todo";

function addTodo(e) {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;

    let list = [];
    list.push(getTodo(title, description, date));

    const titleTodo = document.createTextNode(list[0]["title"]);
    const descriptionTodo = document.createTextNode(list[0]["description"]);
    const dateTodo = document.createTextNode(list[0]["date"]);
    const nodeTitle = document.createElement('p');
    const nodeDescription = document.createElement('p');
    const nodeDate = document.createElement('p');

    nodeTitle.appendChild(titleTodo);
    nodeDescription.appendChild(descriptionTodo);
    nodeDate.appendChild(dateTodo);

    const div = document.querySelector('.result');
    div.append(nodeTitle, nodeDescription, nodeDate);

    e.preventDefault();
}

export function uiTodo() {
    const submitTodo = document.querySelector('.form');
    submitTodo.addEventListener('submit', (e) => {
        addTodo(e);
    });
}

function addProject(e) {
    const project = document.querySelector('#project').value;
    let list = [];
    list.push(project);
    const projectTitle = document.createTextNode(list[0]);
    const nodeProject = document.createElement('p');

    nodeProject.appendChild(projectTitle);
    const div = document.querySelector('.result');
    div.appendChild(nodeProject);
    e.preventDefault();
}

export function uiProject() {
    const submitProject = document.querySelector('.project');
    submitProject.addEventListener('submit', (e) => {
        addProject(e);
    });
}
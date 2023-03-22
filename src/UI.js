import { getProject } from "./Project";
import { displayTodoListProject } from "./ProjectTabs";

import { getTodo } from "./Todo";

// list of todos
export let list = [];
function addTodo(e) {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;
    list.push(getTodo(title, description, date));
    // adding new todo at the end of the row
    const titleTodo = document.createTextNode(list[list.length - 1]["title"]);
    const descriptionTodo = document.createTextNode(list[list.length - 1]["description"]);
    const dateTodo = document.createTextNode(list[list.length - 1]["date"]);

    const nodeTitle = document.createElement('p');
    const nodeDescription = document.createElement('p');
    const nodeDate = document.createElement('p');

    nodeTitle.appendChild(titleTodo);
    nodeDescription.appendChild(descriptionTodo);
    nodeDate.appendChild(dateTodo);

    const div = document.querySelector('.todos');
    div.append(nodeTitle, nodeDescription, nodeDate);
    e.preventDefault();
}

// on submit add todo to the todos div
export function submitTodo() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        addTodo(e);
    });
}

// add project in side bar
export let projects = [];
export let todoInProject = []
function addProject(e) {
    const project = document.querySelector('#project').value;
    projects.push(getProject(project));
    const projectsList = document.querySelector('.projects');
    projectsList.innerHTML += `<div class="project-title" value="${projects.length - 1}">${projects[projects.length - 1]["title"]}</div>`

    let todoList = [];
    todoInProject.push(todoList);

    displayTodoListProject();
    e.preventDefault();
}

export function submitProject() {
    const form = document.querySelector('.project');
    form.addEventListener('submit', (e) => {
        addProject(e);
    });
}

// add todo inside given project tab

function addTodoInProject(e, index) {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;

    todoInProject[index].push(getTodo(title, description, date));


    let uiList;
    uiList = todoInProject[index]
    const titleTodo = document.createTextNode(uiList[uiList.length - 1]["title"]);
    const descriptionTodo = document.createTextNode(uiList[uiList.length - 1]["description"]);
    const dateTodo = document.createTextNode(uiList[uiList.length - 1]["date"]);

    const nodeTitle = document.createElement('p');
    const nodeDescription = document.createElement('p');
    const nodeDate = document.createElement('p');

    nodeTitle.appendChild(titleTodo);
    nodeDescription.appendChild(descriptionTodo);
    nodeDate.appendChild(dateTodo);

    const div = document.querySelector('.todos');
    div.append(nodeTitle, nodeDescription, nodeDate);
    e.preventDefault();
}

export function submitProjectTodo(index) {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        addTodoInProject(e, index);
    });
}

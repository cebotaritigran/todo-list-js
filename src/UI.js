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
    const todoBox = document.createElement('div');
    todoBox.setAttribute('class', 'todo-box')

    // remove button to remove given todo list item
    // we set value and id to later get those values to splice array and remove given element
    todoBox.setAttribute('id', list.length - 1);
    todoBox.setAttribute('value', list.length - 1);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('class', 'remove-button');
    removeButton.setAttribute('value', list.length - 1);
    removeButton.addEventListener('click', () => {
        // if the removed element is in the middle we need to restructure all the values and ids of elements we can't have a gap
        for (let i = 0; i < list.length; i++) {
            const todoBoxses = document.querySelectorAll('.todo-box');
            for (let k = 0; k < todoBoxses.length; k++) {
                todoBoxses[k].setAttribute('id', k);
                todoBoxses[k].setAttribute('value', k);
            }
        }
        let position = parseInt(todoBox.getAttribute('value'));
        let positionText = position.toString();
        // we splice given index of item in an  array with splice functions
        list.splice(position, 1);
        //we assign the given div with id we gave it above and we call that div with remove function which will remove it
        const toRemove = document.getElementById(positionText);
        if (toRemove) {
            toRemove.remove();
        }
    });
    todoBox.append(nodeTitle, nodeDescription, nodeDate, removeButton);

    div.appendChild(todoBox);

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
    const todoBox = document.createElement('div');
    todoBox.setAttribute('class', 'todo-box')

    // remove button to remove given todo list item
    // we set value and id to later get those values to splice array and remove given element
    todoBox.setAttribute('id', uiList.length - 1);
    todoBox.setAttribute('value', uiList.length - 1);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('class', 'remove-button');
    removeButton.setAttribute('value', uiList.length - 1);
    removeButton.addEventListener('click', () => {
        // if the removed element is in the middle we need to restructure all the values and ids of elements we can't have a gap
        for (let i = 0; i < uiList.length; i++) {
            const todoBoxses = document.querySelectorAll('.todo-box');
            for (let k = 0; k < todoBoxses.length; k++) {
                todoBoxses[k].setAttribute('id', k);
                todoBoxses[k].setAttribute('value', k);
            }
        }
        let position = parseInt(todoBox.getAttribute('value'));
        let positionText = position.toString();
        // we splice given index of item in an  array with splice functions
        uiList.splice(position, 1);
        //we assign the given div with id we gave it above and we call that div with remove function which will remove it
        const toRemove = document.getElementById(positionText);
        if (toRemove) {
            toRemove.remove();
        }
    });
    todoBox.append(nodeTitle, nodeDescription, nodeDate, removeButton);

    div.appendChild(todoBox);
    e.preventDefault();
}

export function submitProjectTodo(index) {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        addTodoInProject(e, index);
    });
}

//hide-how side bar

export function hideShowButton() {
    const todoTab = document.querySelector('.todo-tab');
    const title = document.querySelector('.title');
    const projectForm = document.querySelector('.project-form');
    const projects = document.querySelector('.projects');
    const hSButton = document.querySelector('.hide-show');
    hSButton.addEventListener('click', () => {
        if (todoTab.style.display == "none") {
            todoTab.style.display = "flex";
            title.style.display = "flex";
            projectForm.style.display = "flex";
            projects.style.display = "flex";
            hSButton.textContent = "Hide";

        } else {
            todoTab.style.display = "none";
            title.style.display = "none";
            projectForm.style.display = "none";
            projects.style.display = "none";
            hSButton.textContent = "Show";
        }
    });
}

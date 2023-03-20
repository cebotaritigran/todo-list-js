import { getTodo } from "./Todo";
// list of todos
export let list = [];

function addTodo(e) {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;
    list.push(getTodo(title, description, date));
    // adding new todo at the end of the row
    const titleTodo = document.createTextNode(list[list.length-1]["title"]);
    const descriptionTodo = document.createTextNode(list[list.length-1]["description"]);
    const dateTodo = document.createTextNode(list[list.length-1]["date"]);
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
export function uiTodo() {
    const submitTodo = document.querySelector('.form');
    submitTodo.addEventListener('submit', (e) => {
        addTodo(e);
    });
}

// function addProject(e) {
//     const project = document.querySelector('#project').value;
//     let list = [];
//     list.push(project);
//     const projectTitle = document.createTextNode(list[0]);
//     const nodeProject = document.createElement('p');

//     nodeProject.appendChild(projectTitle);
//     const div = document.querySelector('.result');
//     div.appendChild(nodeProject);
//     e.preventDefault();
// }

// export function uiProject() {
//     const submitProject = document.querySelector('.project');
//     submitProject.addEventListener('submit', (e) => {
//         addProject(e);
//     });
// }
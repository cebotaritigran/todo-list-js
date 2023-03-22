import { submitProjectTodo, todoInProject } from "./UI";


// displays form and todos on click
export function displayTodoListProject() {

    const content = document.querySelector('.content');

    // todo navbar text that we are going to click
    const projects = document.querySelectorAll('.project-title');
    for (let x = 0; x < projects.length; x++) {
        projects[x].addEventListener('click', () => {
            // replace every element in content
            content.replaceChildren();
            let index = parseInt(projects[x].getAttribute('value'));
            content.innerHTML += `<div class="main-todo-list">
        <div class="form-container">
            <form autocomplete="off" class="form">
                <input id="title" type="text" placeholder="Title" minlength="3" maxlength="40" required>
                <input id="description" type="text" placeholder="description" minlength="3" required>
                <input id="date" type="date" placeholder="date" required>
                <button class="book-add-button" type="submit">Submit</button>
            </form>
        </div>
        <div class="todos"></div>`
            // if there are any todos already we have to display them
            const existingTodos = document.querySelector('.todos');

            if (todoInProject[index].length > 0) {
                for (let i = 0; i < todoInProject[index].length; i++) {
                    existingTodos.innerHTML += `<p>${todoInProject[index][i]["title"]}</p>`
                    existingTodos.innerHTML += `<p>${todoInProject[index][i]["description"]}</p>`
                    existingTodos.innerHTML += `<p>${todoInProject[index][i]["date"]}</p>`
                }
            }
            submitProjectTodo(index);
        });
    }

}
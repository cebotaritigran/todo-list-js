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
                <button class="todo-add-button" type="submit">Submit</button>
            </form>
        </div>
        <div class="todos"></div>`
            // if there are any todos already we have to display them
            const existingTodos = document.querySelector('.todos');

            if (todoInProject[index].length > 0) {
                for (let i = 0; i < todoInProject[index].length; i++) {
                    const todoBox = document.createElement('div');
                    todoBox.setAttribute('class', 'todo-box')
                    todoBox.innerHTML += `<p>${todoInProject[index][i]["title"]}</p>`
                    todoBox.innerHTML += `<p>${todoInProject[index][i]["description"]}</p>`
                    todoBox.innerHTML += `<p>${todoInProject[index][i]["date"]}</p>`

                    // remove button to remove given todo list item
                    // we set value and id to later get those values to splice array and remove given element
                    todoBox.setAttribute('id', i);
                    todoBox.setAttribute('value', i);
                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'Remove';
                    removeButton.setAttribute('class', 'remove-button');
                    removeButton.setAttribute('value', i);
                    removeButton.addEventListener('click', () => {
                        // if the removed element is in the middle we need to restructure all the values and ids of elements we can't have a gap
                        for (let i = 0; i < todoInProject[index].length; i++) {
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
                    todoBox.append(removeButton);

                    existingTodos.appendChild(todoBox);
                }
            }
            submitProjectTodo(index);
        });
    }

}
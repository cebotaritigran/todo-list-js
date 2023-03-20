import { list, uiTodo } from "./UI";

// displays form and todos on click
export function displayTodoList() {

    const content = document.querySelector('.content');
    const mainTodoList = document.createElement('node');
    const todoListTab = document.querySelector('.todo-tab');

    todoListTab.addEventListener('click', () => {
        mainTodoList.innerHTML = `<div class="main-todo-list">
        <div class="form-container">
            <form autocomplete="off" class="form">
                <input id="title" type="text" placeholder="Title" minlength="3" maxlength="40" required>
                <input id="description" type="text" placeholder="description" minlength="3" required>
                <input id="date" type="date" placeholder="date" required>
                <button class="book-add-button" type="submit">Submit</button>
            </form>
        </div>
        <div class="todos"></div>`
        const existingTodos = document.querySelector('.todos');
        if(list.length > 0){
            for(let i = 0; i < list.length; i++){
                existingTodos.innerHTML += `<p>${list[i]["title"]}</p>`
                existingTodos.innerHTML += `<p>${list[i]["description"]}</p>`
                existingTodos.innerHTML += `<p>${list[i]["date"]}</p>`
            }
        }
        content.appendChild(mainTodoList);
        uiTodo();
    });
}
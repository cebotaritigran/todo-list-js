// displays form and todos on click
export function displayTodoList() {
    const content = document.querySelector('.main-todo-list');
    const todoListTab = document.querySelector('.todo-tab');
    todoListTab.addEventListener('click', () => {
        if (content.style.display === "none") {
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }
    });
}

// displays form and todos on click
export function displayTodoList() {

    const content = document.querySelector('.content');
    const todoListTab = document.querySelector('.todo-list');
    todoListTab.addEventListener('click', () => {
        if (content.style.display === "none") {
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }
    });
}
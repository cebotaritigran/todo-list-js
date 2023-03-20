export function getProject(title) {
    class Project {
        constructor(title, projectTodoList = []) {
            this.title = title
            this.projectTodoList = projectTodoList
        }
    }

    const project = new Project(title);
    //project["projectTodoList"].push();
    return project;
}

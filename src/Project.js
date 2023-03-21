export function getProject(title) {
    class Project {
        constructor(title) {
            this.title = title
        }
    }

    const project = new Project(title);
    //project["projectTodoList"].push();
    return project;
}

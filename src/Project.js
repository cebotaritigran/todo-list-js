export function projectList(title) {
    class Project {
        constructor(title) {
            this.title = title
        }
    }

    const projectNew = new Project(title);
    return projectNew;
}
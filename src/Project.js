export function projectList(title) {
    class project {
        constructor(title) {
            this.title = title
        }
    }

    const projectNew = new projectList(title);
    return projectNew;
}
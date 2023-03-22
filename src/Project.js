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

export function getArray(array) {
    class List {
        constructor(array = []) {
            this.array = array
        }
    }

    const list = new List(array);
    return list;
}

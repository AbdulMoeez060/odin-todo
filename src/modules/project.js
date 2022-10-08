import { projectController } from "./projectController";

export default class Project{
    constructor(name){
        this.name = name;
        this.todos = [];
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    addDomElements(){
        var div = document.createElement('div');
        div.classList.add('project-item');

        var dragImg = document.createElement('img');
        dragImg.setAttribute('src','drag.png');
        dragImg.setAttribute('width','27px');

        var p = document.createElement('p');
        p.textContent = this.name;

        var delImg = document.createElement('img');
        delImg.setAttribute('src','del.png');
        delImg.addEventListener('click',projectController.deleteProject);

        div.appendChild(dragImg);
        div.appendChild(p);
        div.appendChild(delImg);

        return div;
    }
}
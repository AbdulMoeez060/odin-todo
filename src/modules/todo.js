import { projectController } from "./projectController";


export default class Todo{
    constructor(title,desc,date,project,checked){
        this.title = title;
        this.desc = desc;
        this.date =new Date(date).toLocaleDateString()

        //this.date = date;
        this.project = project;
        this.checked = checked;
    }

    addDomElements(){
        var mainDiv = document.createElement('div');
        mainDiv.classList.add('todo-item');
        mainDiv.setAttribute('data-project-title',this.project);

        var left = document.createElement('div');
        left.classList.add('left');

        var box = document.createElement('div');
        box.classList.add("unchecked");

        box.addEventListener('click',projectController.toggleTaskCheck)

        var texts = document.createElement('div');
        texts.classList.add('text');

        if(this.checked){
            box.classList.add('checked');
            texts.classList.add('item-checked');
        }

        var p1 = document.createElement('p');
        p1.innerText = this.title;
        var p2 = document.createElement('p');
        p2.innerText = this.desc;

        texts.appendChild(p1);
        texts.appendChild(p2);

        left.appendChild(box);
        left.appendChild(texts);

        mainDiv.appendChild(left);

        var right = document.createElement('div');
        right.classList.add('right');

        var date = document.createElement('p');
        date.classList.add('date');
        date.innerText = this.date;

        var delImg = document.createElement('img');
        delImg.setAttribute('src','del.png');

        delImg.addEventListener('click',projectController.deleteTodo);

        right.appendChild(date);
        right.appendChild(delImg);

        mainDiv.appendChild(right);

        return mainDiv;

    }
}
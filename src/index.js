import "./styles/main.css";
import hamburger from "./assets/hamburger.png";
import todo from "./assets/todo.png";
import tasks from "./assets/tasks.png";
import today from "./assets/today.png";
import week from "./assets/week.png";
import add from "./assets/add.png";
import del from "./assets/del.png";
import drag from "./assets/drag.png";


const displayController = (()=>{

    addEvents();
    function addEvents() {
        var menu = document.querySelector('.hamburger');
        var addProjectButton = document.querySelector('.add-project');
        var projectForm = document.querySelector('.project-form');

        menu.addEventListener('click',clickMenu);
        addProjectButton.addEventListener('click',toggleProjectForm);
        projectForm.addEventListener('click',toggleProjectForm);
    }


    function clickMenu(){
        var sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('hide');
    }

    function toggleProjectForm(e){
        if (e.target.classList.contains('add-project')) {
            e.target.classList.add('hide');
            var form = document.querySelector('.project-form');
            form.classList.remove('hide')
        }
        else if (e.target.classList.contains('cancel-project')) {
            var form = document.querySelector('.project-form');

            form.classList.add('hide');
            var projectButton = document.querySelector('.add-project');

            projectButton.classList.remove('hide')
        }
    }
})()

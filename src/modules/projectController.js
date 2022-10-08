import Project from "./project";
import Todo from "./todo";
import { displayController } from "..";

const projectController = (()=>{
    var projects = [];

    function addProject(e){
        e.preventDefault();
        var input = document.querySelector(".project-name-inp");

        if(input.value==""){
            return;
        }

        var newProject = new Project(e.target.parentNode.parentNode[0].value)
        projects.push(newProject);

        var projectList = document.querySelector('.project-items')
        var item = newProject.addDomElements()
        item.addEventListener('click',displayController.changeTaskTab)
        projectList.appendChild(item)


        var form = document.querySelector(".project-form");

        form.classList.add("hide");
        input.value = "";
        var projectButton = document.querySelector(".add-project");

        projectButton.classList.remove("hide");

    }

    function addTodoTask(e){
        var form = e.target.parentNode.parentNode;
        if(form[0].value==''||form[2].value==''){
            return;
        }
        
        var todo = new Todo(form[0].value,form[1].value,form[2].value,false)
        
        var addTodoButton = document.querySelector('.add-todo')
        var projectName = addTodoButton.getAttribute('data-project-name');
        projects.forEach(project =>{
            if (project.name===projectName) {
                project.addTodo(todo);
            }
        })
        console.log(projects)

        form[0].value = '';
        form[1].value = '';
        form[2].value = '';
        form.parentNode.classList.add('hide');

        addTodoButton.classList.remove('hide');

    }


    return {addProject,addTodoTask}
})()

export {projectController};
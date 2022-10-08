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
        
        var addTodoButton = document.querySelector('.add-todo')
        var projectName = addTodoButton.getAttribute('data-project-name');
        var todo = new Todo(form[0].value,form[1].value,form[2].value,projectName,false)
        
        projects.forEach(project =>{
            if (project.name===projectName) {
                project.addTodo(todo);
            }
        })

        form[0].value = '';
        form[1].value = '';
        form[2].value = '';
        form.parentNode.classList.add('hide');

        addTodoButton.classList.remove('hide');

        var task = todo.addDomElements();
        var todoList = document.querySelector('.todos');
        todoList.appendChild(task);

    }

    function toggleTaskCheck(e){
        e.target.classList.toggle('checked');
        e.target.nextSibling.classList.toggle('item-checked');

        var title = e.target.nextSibling.querySelector('p').innerText

        projects.forEach(project=>{
            project.todos.forEach(todo => {
                if (todo.title == title) {
                    todo.checked = !todo.checked;
                }
            });
        })
    }

    function showAllTasks(){
        var todoList = document.querySelector('.todos');
        todoList.innerHTML = '';
        projects.forEach(project=>{
                project.todos.forEach(todo=>todoList.appendChild(todo.addDomElements()))
        })
    }

    function showProjects(name){
        var todoList = document.querySelector('.todos');
        todoList.innerHTML = '';

        projects.forEach(project=>{
            if(project.name == name){
                project.todos.forEach(todo=>todoList.appendChild(todo.addDomElements()))
            }
        })
    }

    function deleteTodo(e){

        var projectName = e.target.parentNode.parentNode.getAttribute('data-project-title');
        var taskTitle = e.target.parentNode.parentNode.querySelector('p').innerText;
        var todoItem;
        projects.forEach(project=>{
            if (project.name==projectName) {
                project.todos.forEach(todo=>{
                    if(todo.title==taskTitle){
                        todoItem = todo;
                    }
                })
                project.todos.splice(todoItem,1);
            }
        })
        var page = document.querySelector('.name').textContent;
        if (page === 'All Tasks') {
            showAllTasks()
        }
        else{

            showProjects(projectName);
        }
        


    }
    function deleteProject(e){

        var projectName = e.target.parentNode.querySelector('p').innerText;
        var proj;
        projects.forEach(project=>{
            if(project.name== projectName){
                proj = project
            }
        })
        projects.splice(proj,1);
        showAllProjects();


    }

    function showAllProjects(){
        var projectItems = document.querySelector('.project-items');
        projectItems.innerHTML = '';
        projects.forEach(project=> projectItems.appendChild(project.addDomElements()))
    }


    return {addProject,addTodoTask,toggleTaskCheck,showAllTasks,showProjects,deleteTodo,deleteProject}
})()

export {projectController};
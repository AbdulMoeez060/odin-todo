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
        setLocalStorage()

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
        setLocalStorage()


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
        
        setLocalStorage()
        

    }
    function deleteProject(e){

        var projectName = e.target.parentNode.querySelector('p').innerText;
        e.target.parentNode.classList.remove('active');
        var proj;
        projects.forEach(project=>{
            if(project.name== projectName){
                proj = project
            }
        })
        projects.splice(proj,1);
        setLocalStorage();
       

        var heading = document.querySelector(".name");
        var addTodo = document.querySelector('.add-todo');

        heading.innerText = "All Tasks";
        addTodo.classList.add('hide');

        showAllProjects();


    }

    function showAllProjects(){
        var projectItems = document.querySelector('.project-items');
        projectItems.innerHTML = '';
        
        
        projects.forEach(project=> {
            var item =project.addDomElements();
            item.addEventListener('click',displayController.changeTaskTab)

            projectItems.appendChild(item)
        })
    }

    function setLocalStorage(){
        localStorage.clear('projects');
        var arr = []

        projects.forEach(project=>{
            let temp={}
            temp.name = project.name;
            temp.todos = [];
            project.todos.forEach(todo =>{
                let t = {};
                t.title = todo.title;
                t.desc = todo.desc;
                t.date = todo.date;
                t.checked = todo.checked;
                temp.todos.push(t);
            })
            arr.push(temp);
        })
        localStorage.setItem('projects',JSON.stringify(arr)); 
    }

    function getLocalStorage(){
        var items = JSON.parse(localStorage.getItem('projects'))
        
        if(items==null){
            return;
        }
        else{
            Object.entries(items).forEach(proj=>{
                let project = new Project(proj[1].name);
                if (proj[1].todos!=null) {
                    
                    Object.entries(proj[1].todos).forEach(t=>{
                        var temp = new Todo(t[1].title,t[1].desc,t[1].date,proj[1].name,t[1].checked);
                        project.addTodo(temp);
                    })
                }
                projects.push(project);
            })
        }

    }

    function tasksToday(){
        var todoList = document.querySelector('.todos');
        todoList.innerHTML = '';


        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${month}/${day}/${year}`;
        projects.forEach(project=>{
            
                project.todos.forEach(todo=>{
                    
                    if(todo.date.toString()==currentDate.toString()){
                        todoList.appendChild(todo.addDomElements())
                    }
                })
        })
    }


    return {addProject,addTodoTask,toggleTaskCheck,showAllTasks,showProjects,deleteTodo,deleteProject,getLocalStorage,setLocalStorage,showAllProjects,tasksToday}
})()

export {projectController};
import Project from "./project";
import Todo from "./todo";

const projectController = (()=>{
    var projects = [];

    function addProject(e){
        var newProject = new Project(e.target.parentNode.parentNode[0].value)
        projects.push(newProject);

        var projectList = document.querySelector('.project-items')
        projectList.appendChild(newProject.addDomElements())

    }


    return {addProject}
})()

export {projectController};
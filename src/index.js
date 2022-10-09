import "./styles/main.css";
import hamburger from "./assets/hamburger.png";
import todo from "./assets/todo.png";
import tasks from "./assets/tasks.png";
import today from "./assets/today.png";
import week from "./assets/week.png";
import add from "./assets/add.png";
import del from "./assets/del.png";
import drag from "./assets/drag.png";
import { projectController } from "./modules/projectController";

const displayController = (() => {
  function initializeWebsite() {
    addEvents();
    projectController.getLocalStorage();

    projectController.showAllProjects();

    projectController.showAllTasks();
  }

  function addEvents() {
    var menu = document.querySelector(".hamburger");
    var addProjectButton = document.querySelector(".add-project");
    var cancelProject = document.querySelector(".cancel-project");

    var tasksButtons = document.querySelectorAll(".btn");

    var addTodoButton = document.querySelector(".add-todo");
    var cancelTodo = document.querySelector(".cancel-todo");

    var projectSubmit = document.querySelector(".project-add");
    projectSubmit.addEventListener("click", projectController.addProject);

    var todoSubmit = document.querySelector(".todo-add");
    todoSubmit.addEventListener("click", projectController.addTodoTask);

    menu.addEventListener("click", clickMenu);
    addProjectButton.addEventListener("click", toggleProjectForm);
    cancelProject.addEventListener("click", toggleProjectForm);

    addTodoButton.addEventListener("click", toggleTodoForm);
    cancelTodo.addEventListener("click", toggleTodoForm);

    tasksButtons.forEach((btn) => btn.addEventListener("click", changeTaskTab));
  }

  function clickMenu() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hide");
  }

  function changeTaskTab(e) {
    var btns = document.querySelectorAll(".btn");
    var projectItems = document.querySelectorAll(".project-item");
    var addTodo = document.querySelector(".add-todo");
    addTodo.setAttribute("data-project-name", "");

    btns.forEach((btn) => btn.classList.remove("active"));
    projectItems.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    var heading = document.querySelector(".name");
    if (e.target.classList.contains("all-tasks")) {
      heading.innerText = "All Tasks";
      addTodo.classList.add("hide");
      projectController.showAllTasks();
    } else if (e.target.classList.contains("today")) {
      heading.innerText = "Today's Tasks";
      addTodo.classList.add("hide");
      projectController.tasksToday();
    } else if (e.target.classList.contains("week")) {
      heading.innerText = "This Week's Tasks";
      addTodo.classList.add("hide");
      projectController.tasksWeek();
    } else if (e.target.classList.contains("project-item")) {
      heading.innerText = e.target.querySelector("p").innerText;
      addTodo.classList.remove("hide");
      addTodo.setAttribute(
        "data-project-name",
        e.target.querySelector("p").innerText
      );
      projectController.showProjects(e.target.querySelector("p").innerText);
    }
  }

  function toggleProjectForm(e) {
    if (e.target.classList.contains("add-project")) {
      e.target.classList.add("hide");
      var form = document.querySelector(".project-form");
      form.classList.remove("hide");
    } else if (e.target.classList.contains("cancel-project")) {
      var form = document.querySelector(".project-form");

      form.classList.add("hide");
      var input = document.querySelector(".project-name-inp");
      input.value = "";
      var projectButton = document.querySelector(".add-project");

      projectButton.classList.remove("hide");
    }
  }

  function toggleTodoForm(e) {
    if (e.target.classList.contains("add-todo")) {
      e.target.classList.add("hide");
      var form = document.querySelector(".todo-form");
      form.classList.remove("hide");
    } else if (e.target.classList.contains("cancel-todo")) {
      var form = document.querySelector(".todo-form");

      form.classList.add("hide");

      var todoButton = document.querySelector(".add-todo");

      todoButton.classList.remove("hide");
    }
  }

  return { changeTaskTab, addEvents, initializeWebsite };
})();

displayController.initializeWebsite();
export { displayController };

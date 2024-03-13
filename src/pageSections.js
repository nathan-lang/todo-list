import { projects } from "./todoLists.js";
import { projectInit, todoInit } from "./initializers.js";

export function navbar() {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  navbar.textContent = "my todo";
  return navbar;
}

export function renderProjects(projects) {
  let projectSection = document.createElement("div");
  projectSection.classList.add("projects");
  for (let i = 0; i < projects.length; i++) {
    const project = document.createElement("div");
    project.textContent = projects[i].title;
    projectSection.appendChild(project);
  }
  return projectSection;
}

export function renderToDo(todoList) {
  const todoSection = document.createElement("div");
  todoSection.classList.add("todos");
  for (let i = 0; i < todoList.length; i++) {
    const todo = document.createElement("div");
    todo.textContent = todoList[i].title;
    todoSection.appendChild(todo);
  }
  const newTodo = document.createElement("button");
  newTodo.textContent = "+ To-do";
  newTodo.classList.add("new-todo-button");
  newTodo.addEventListener("click", function () {
    let userInput = prompt("Enter your new to-do name:");
    let todoObj = todoInit(userInput, "", "", "");
    todoList.push(todoObj);
    document.body.replaceChild(renderToDo(todoList), todoSection);
  });
  todoSection.appendChild(newTodo);
  return todoSection;
}

export function addButtons() {
  const buttonArea = document.createElement("div");
  buttonArea.classList.add("buttons");
  const newProject = document.createElement("button");
  newProject.textContent = "+ Project";
  newProject.classList.add("new-project-button");
  newProject.addEventListener("click", function () {
    let userInput = prompt("Enter your new project name:");
    let projectObj = projectInit(userInput, []);
    projects.push(projectObj);
    let projectSection = document.body.querySelector(".projects");
    document.body.replaceChild(renderProjects(projects), projectSection);
  });

  buttonArea.appendChild(newProject);
  return buttonArea;
}

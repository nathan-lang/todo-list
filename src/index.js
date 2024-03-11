import "./style.css";
import { todoInit } from "./todoLogic.js";

function navbar() {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  navbar.textContent = "my todo";
  return navbar;
}

function renderToDo(todoList) {
  const todoSection = document.createElement("div");
  for (let i = 0; i < todoList.length; i++) {
    const todo = document.createElement("div");
    todo.style.border = "2px solid black";
    todo.style.height = "50px";
    todo.style.width = "50px";
    todo.textContent = todoList[i].title;
    todoSection.appendChild(todo);
  }
  return todoSection;
}

const todoItem = todoInit(
  "Cook Lunch",
  "Prepare vegetables, sauce, and cook meat.",
  "March 11, 2024, 12pm",
  "Urgent"
);

const todoItem2 = todoInit(
  "Bake Cake",
  "Bake strawberry cake to give to friend over the weekend.",
  "March 17, 2024, 12pm",
  "Not Urgent"
);

let todoList = [todoItem, todoItem2];

document.body.appendChild(navbar());
document.body.appendChild(renderToDo(todoList));

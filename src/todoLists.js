import { todoInit, projectInit } from "./initializers";

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

const todoItem3 = todoInit(
  "Submit Biology Homework",
  "Finish exercises on page 25.",
  "March 11, 2024, 1pm",
  "Emergency"
);

const todoItem4 = todoInit(
  "Text Friends",
  "Host an event this weekend.",
  "March 16, 2024, 3pm",
  "Urgent"
);

const todoItem5 = todoInit(
  "Write song",
  "Write a song over the weekend for new album.",
  "March 16, 2024, 9am",
  "Not Urgent"
);

const todoItem6 = todoInit(
  "Record Music",
  "Come to recording studio to record a song.",
  "March 19, 2024, 4pm",
  "Not Urgent"
);

let all = projectInit("All", [
  todoItem,
  todoItem2,
  todoItem3,
  todoItem4,
  todoItem5,
  todoItem6,
]);
let food = projectInit("Food", [todoItem, todoItem2]);
let school = projectInit("School", [todoItem3, todoItem4]);
let music = projectInit("Music", [todoItem5, todoItem6]);

export let projects = [all, food, school, music];

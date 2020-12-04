// let val;
//
// val = document;
// // val = document.all;
//
// console.log(val)

const newHeading = document.createElement("h2");

newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("New Heading"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

// Replace child
cardAction.replaceChild(newHeading, oldHeading);
console.log(newHeading);

var taskTitle = document.getElementById("task-title");

// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";



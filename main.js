"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todoList = [];
var conditions = true;
console.log("\n\tWelcom to Rashid ToDo List App.\n");
while (conditions) {
    var addTask = await inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task:",
        }
    ]);
    todoList.push(addTask.task);
    console.log("".concat(addTask.task, " Task added in ToDo List Successfully."));
    var addMoreTask = await inquirer_1.default.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do You want to add more Task?",
            default: "False",
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated  ToDo List:", todoList);

import inquirer from "inquirer";

let todoList = [];
let conditions = true;

console.log("\n\tWelcom to Rashid ToDo List App.\n");

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task:",

        }
    ]);
    todoList.push(addTask.task)
    console.log(`${addTask.task} Task added in ToDo List Successfully.`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do You want to add more Task?",
            default: "False",
        }
    ]);
    conditions = addMoreTask.addmore
    
}
console.log("Your updated  ToDo List:", todoList);

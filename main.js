import inquirer from "inquirer";
let todo = [];
let todoquestions = await inquirer.prompt([
    {
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add in your todos?"
    },
    {
        name: "secondQuestion",
        type: "confirm",
        message: "would you like to add more in your todos?",
        default: "true"
    }
]);
todo.push(todoquestions.firstQuestion);
console.log(todo);

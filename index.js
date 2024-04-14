#! urs/bin/env node
import inquirer from "inquirer";
let list = [];
let condition = 'true';
while (condition) {
    let todo = await inquirer.prompt([{
            name: "question",
            type: "input",
            message: "What you want to do today?",
        }]);
    if (todo == "question") {
        console.log(todo.question);
    }
    let reConform = await inquirer.prompt([{
            name: "conform",
            type: "confirm",
            message: "Are you sure to add it in to do list ? ",
            default: "false",
        }]);
    list.push(todo.question);
    console.log(list);
    condition = reConform.conform;
}

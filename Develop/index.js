// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMark = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
//const questions = ['What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?', 'What makes your project stand out?'];
const questions = [{type:'input', name:'motivation', message:'What was your motivation?'}] 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        console.log(data)
    })
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMark = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{type:'input', name:'motivation', message:'What was your motivation?'}, {type:'imput', name:'why', message:'Why did you build this project?'}, {type:'imput', name:'problem', message:'What problem does it solve?'}, {type:'imput', name:'learn', message:'What did you learn?'}, {type:'imput', name:'stand-out', message:'What makes your project stand out?'}]; 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        console.log(data)
    })
}

// Function call to initialize app
init();

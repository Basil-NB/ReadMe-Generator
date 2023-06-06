const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'stand-out',
    message: 'What makes your project stand out?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
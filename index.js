// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "Title"
},
{
    type: "input",
    message: "Give a brief Description of you project",
    name: "Description"
},
{
    type: "input",
    message: "How do you install your project?",
    name: "Installation"
},
{
    type: "input",
    message: "Provide instructions for use.",
    name: "Usage"
},
{
    type: "list",
    message: "Select license",
    name: "License",
    choices: ['mit', 'bsd','Apache']
},
{
    type: "input",
    message: "Any Contributors?",
    name: "Contributors"
},
{
    type: "input",
    message: "How do you test your project?",
    name: "Test"
},
{
  type: "input",
  message: "questions",
  name: "Questions"
},
{
    type: "input",
    message: "Your Github username",
    name: "Username"
},
{
    type: "input",
    message: "What is your email?",
    name: "Email"
}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
if(err) {
  throw err;
}
console.log('ReadMe')
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
        
    const response = generateMarkdown(answers);
    console.log(answers);
   
    writeToFile("README.md", response);
})
}

// Function call to initialize app
init();

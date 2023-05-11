// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your application?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation command?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?",
  },
  {
    type: "input",
    name: "guidelines",
    message: "How do you contribute to this application?",
  },
  {
    type: "input",
    name: "testing",
    message: "How do you test the application?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: ["Apache 2.0", "GNU GPL v3", "MIT", "Mozilla Public License 2.0"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
    //   console.log(answers)
        let string = generateMarkdown(answers)
        console.log(string)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();

// STEPS
// require inquirer (check)
// require the generateMarkdown function (check!)
// finish questions array according to inquirer Syntax
// setup the prompt in the init function
// finish the logic from generateMarkdown function
// use the answers from the prompt to generate a markdown string
// use the markdown string to generate the file

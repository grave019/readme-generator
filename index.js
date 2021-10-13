// TODO: Include packages needed for this application to run 
//fs comes with the core package
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('.utils/generateMarkdown');

// list of comments to help me write my questions

// Project Title
// Description of Project
// Project Goals
// Motivation to Build Project
// What makes this project different?
// Project Installation
// Projects Usage
// Technologies used to design project
// How to Test project
// Problems encountered when designing project
// What features does your project use
// Credits for project
// Collaborators on project
// Contact information
// License to assign project
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your project's description?",
        name: "description",
    },
    {
        type: "input",
        message: "What goals did you have when building your project?",
        name: "goals",
    },
    {
        type: "input",
        message: "What motivated you to build this project",
        name: "motivation",
    },
    {
        type: "Input",
        message: "What sets your project apart from other projects available?",
        name: "uniqueness",
    },
    {
        type: "Input",
        message: "What are your project's installation instructions?",
        name: "install",
        default: "npm i",
    },
    {
        type: "input",
        message: "What is your project's intended use?",
        name: "usage",
    },
    {
        type: "input",
        message: "What technologies does your project use?",
        name: "tech",
    },
    {
        type:"input",
        message: "What problems did you face when designing this this project?",
        name: "problems",
    },
    {
        type: "input",
        message: "What commands should be run to test your project?",
        name: "tests",
        default: "npm run test",
    },
    {
        type: "input",
        message: "Who needs credit on this project?",
        name: "credits",
    },
    {
        type: "input",
        message: "How does someone contribute to this project?",
        name: "contribute",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "contact",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "list",
        message: "How is this project licensed?",
        name: "license",
        choices: ["Apache", "Boost Software", "Creative Commons", "GNU", "ISC", "MIT", "Mozilla Public", "The Unlicense", "Other"],
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
init();

// node packages required for function of application
const inquirer = require('inquirer');
const fs = require('fs');



function teamManager() {
    
inquirer.prompt([

    {
        type: "input",
        name: "teamManagersName",
        message: "Please enter the name of the team manager.",
    },
    
    {
        type: "input",
        name: "employeeID",
        message: "Please enter the ID of the team manager.",
    },

    {
        type: "input",
        name: "emailAddress",
        message: "Please enter the email address of the team manager.",
    },

    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number of the team manager.",
    },




])

// run next function depending on which choice is picked after initial prompts.

}
function engineer() {
    
inquirer.prompt([

    {
        type: "input",
        name: "teamManagersName",
        message: "Please enter the name of the engineer.",
    },
    
    {
        type: "input",
        name: "employeeID",
        message: "Please enter the ID of the engineer.",
    },

    {
        type: "input",
        name: "emailAddress",
        message: "Please enter the email address of the engineer.",
    },

    {
        type: "github",
        name: "gitHubUser",
        message: "Please enter the office number of the engineer.",
    },




])

}
function intern() {
    
inquirer.prompt([

    {
        type: "input",
        name: "teamManagersName",
        message: "Please enter the name of the intern.",
    },
    
    {
        type: "input",
        name: "employeeID",
        message: "Please enter the ID of the intern.",
    },

    {
        type: "input",
        name: "emailAddress",
        message: "Please enter the email address of the inter.",
    },

    {
        type: "input",
        name: "school",
        message: "Please enter the school of the intern.",
    },




])

}
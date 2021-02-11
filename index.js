// node packages required for function of application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: "Please enter the office number of the new employee.",
    },




])
// node packages required for function of application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')



// function teamCreator() {

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

    ]) .then (responses=>{


       teamCreator () 
    })
// create a function
teamCreator = () => { inquirer.prompt ([
    {
        type: "list",
        name: "className",
        message: "Would you like to add anyone else to this team?",
        choices: ["Engineer", "Intern", "I am finished adding team members!"]
    }


]) .then (answers=>{
switch(answers.className) {
    case "Engineer":
        engineerPrompt()
        break;
    case "Intern":
        internPrompt()
        break;
        default:

        /// put answers into this
// fs.writeFileSync('index.html', HTMLCreator(answers))
}})

        function engineerPrompt() {
            
    
            // if (className === "Engineer") {
            //     return function engineer() {

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
                            type: "input",
                            name: "gitHubUser",
                            message: "Please enter the office number of the engineer.",
                        },

                        {
                            type: "list",
                            name: "className",
                            message: "Would you like to add anyone else to this team?",
                            choices: ["Engineer", "Intern", "I am finished adding team members!"]
                        },


                    ])  .then (answers=>{
                        switch(answers.className) {
                            case "Engineer":
                                engineerPrompt()
                                break;
                            case "Intern":
                                internPrompt()
                                break;
                                default:
                        
                        }})
            //     }
            // }


            // else if (className === "Intern") {
            //     return function internPrompt() {
            //         inquirer.prompt([

            //             {
            //                 type: "input",
            //                 name: "teamManagersName",
            //                 message: "Please enter the name of the intern.",
            //             },

            //             {
            //                 type: "input",
            //                 name: "employeeID",
            //                 message: "Please enter the ID of the intern.",
            //             },

            //             {
            //                 type: "input",
            //                 name: "emailAddress",
            //                 message: "Please enter the email address of the inter.",
            //             },

            //             {
            //                 type: "input",
            //                 name: "school",
            //                 message: "Please enter the school of the intern.",
            //             },




            //         ])
            //     }
            // }


        


             }}



// node packages required for function of application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Engineer = require(`./lib/Engineer`)
const Intern = require(`./lib/Intern`)
const Manager = require(`./lib/Manager`)
const importfromJSfile = (`./src/htmldata.js`)

fs.writeFileSync('Team.html', importfromJSfile(teamArray))
//
const teamArray = []

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

    ]) .then (answers=>{
const managerAppend = new Manager (answers.teamManagersName, answers.employeeID, answers.emailAddress, answers.officeNumber)
teamArray.push(managerAppend)

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
                    inquirer.prompt([

                        {
                            type: "input",
                            name: "engineersName",
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
                            message: "Please enter the github username of the engineer.",
                        },

                        
                        
                    ]).then (answers=>{
                        const engineerAppend = new Engineer (answers.engineersName, answers.employeeID, answers.emailAddress, answers.gitHubUser)
                        teamArray.push(engineerAppend)
                        
                               teamCreator () 
                            })
                
                
                }}
            




            
        function internPrompt() {
                    inquirer.prompt([

                        {
                            type: "input",
                            name: "internsName",
                            message: "Please enter the name of the Intern.",
                        },

                        {
                            type: "input",
                            name: "employeeID",
                            message: "Please enter the ID of the Intern.",
                        },

                        {
                            type: "input",
                            name: "emailAddress",
                            message: "Please enter the email address of the Intern.",
                        },

                        {
                            type: "input",
                            name: "school",
                            message: "Please enter the School of the Intern.",
                        },



                    ]) .then (answers=>{
                        const internAppend = new Intern (answers.internsName, answers.employeeID, answers.emailAddress, answers.school)
                        teamArray.push(internAppend)
                        
                               teamCreator () 
                            })
                     
                        }

                        // console.log(teamArray)
            
            
            
            
            
            
            



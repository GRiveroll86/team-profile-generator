const inquirer = require('inquirer')
const fs = require('fs')

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOffice'
    }
]

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            console.log(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
        });
}

init();
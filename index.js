const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const outputDir = path.resolve(__dirname, './output');
const outputPath = path.join(outputDir, 'team.html');

const teamMembers = [];

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNumber'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the engineer's github username?",
        name: 'github'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school'
    }
]

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            teamMembers.push(new Manager(response.name, response.id, response.email, response.officeNumber))
            createTeam();
        });
}

function createTeam(){
    inquirer
        .prompt({
            type: 'list',
            message: "What type of employee would you like to add?",
            name: 'employee',
            choices: ['Engineer', 'Intern', 'Create team']
        })
        .then((response) => {
            if (response.employee === 'Engineer'){
                createEngineer()
            } else if (response.employee === 'Intern'){
                createIntern();
            } else {
                finalizeTeam();
            }
        })
}

function createEngineer() {
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        teamMembers.push(new Engineer(response.name, response.id, response.email, response.github))
        createTeam();
    });
}

function createIntern() {
    inquirer
    .prompt(internQuestions)
    .then((response) => {
        teamMembers.push(new Intern(response.name, response.id, response.email, response.school))
        createTeam();
    });
}

function finalizeTeam() {

    let employeeCards = ``;

    for (i=1;i<teamMembers.length;i++){
        if (teamMembers[i].github){
            employeeCards += 
    `
    <div class="employeeCard">
        <h2 class="employeeName">${teamMembers[i].getName()}</h2>
        <h3 class="employeeRole">${teamMembers[i].getRole()}</h3>
        <p class="employeeInfo">ID: ${teamMembers[i].getId()}</p>
        <p class="employeeInfo">Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></p>
        <p class="employeeInfo">Github: <a href="https://www.github.com/${teamMembers[i].getGithub()}" target="_blank">${teamMembers[i].getGithub()}</a></p>
    </div>
    `
        } else {
            employeeCards += 
    `
    <div class="employeeCard">
        <h2 class="employeeName">${teamMembers[i].getName()}</h2>
        <h3 class="employeeRole">${teamMembers[i].getRole()}</h3>
        <p class="employeeInfo">ID: ${teamMembers[i].getId()}</p>
        <p class="employeeInfo">Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></p>
        <p class="employeeInfo">School: ${teamMembers[i].getSchool()}</p>
    </div>
    `
        }

    }

    let HTMLContent = `<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="style.css">

    <title>My Team</title>

</head>

<body>
    
<h1>My Team</h1>

<div id="cardContainer">

    <div class="employeeCard">
        <h2 class="employeeName">${teamMembers[0].getName()}</h2>
        <h3 class="employeeRole">${teamMembers[0].getRole()}</h3>
        <p class="employeeInfo">ID: ${teamMembers[0].getId()}</p>
        <p class="employeeInfo">Email: <a href="mailto:${teamMembers[0].getEmail()}">${teamMembers[0].getEmail()}</a></p>
        <p class="employeeInfo">Office Number: ${teamMembers[0].getOfficeNumber()}</p>
    </div>

    ${employeeCards}

</div>

</body>

</html>
`

    fs.writeFile(outputPath, HTMLContent, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('team.html created in output folder!')
        }
    })

}

init();
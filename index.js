// link node modules
const inquirer = require('inquirer');
const fs = require('fs');


// connects to user profile data
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// generates html
const generateHTML = require('.src/generateHTML');
// create team array
const myTeam = [];

// manager prompts
const newManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team Managers name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the managers name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the managers ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ("Please provide the managers ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('"Please input an email address for the manager!');
                    return false;
                } 
            } 
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the managers office number (Required)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log ('Please enter an office number');
                    return false;
                }
            }
        }
    ])
    .then(inputManager => {
        const { name, id, email, office } = inputManager;
        const manager = new Manager (name, id, email, office);
        teamArray.push(manager);
        console.log(manager);
    })
};
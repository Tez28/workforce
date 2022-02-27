// generates html
const generateHTML = require('./src/generateHTML');
// link node modules
const inquirer = require('inquirer');
const fs = require('fs');


// connects to user profile data
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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


const newEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'job',
            message: 'Please choose a team member (Required)',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is this employees name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter a name for the employee!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter an employee ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('Please enter an emplyeed ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the employees email. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please input an employee email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the Engineers github name. (Required)',
            when: (input) => input.function === 'Engineer',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ('Please enter the Engineers GitHub username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'university',
            message: 'Please enter a University. (Required)',
            when: (input) => input.function === 'Intern',
            validate: universityInput => {
                if (universityInput) {
                    return true;
                } else {
                    console.log ('Please enter the University name!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Will there be more team members? (Optional)',
            default: false
        }
    ])
    .then(employeeInput => {
        let { name, id, email, job, github, university, confirmEmployee } = employeeInput;
        let employee;

        if (job === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }else if (job === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        myTeam.push(employee);
        if (confirmEmployee) {
            return newEmployee(myTeam);
        } else {
            return myTeam;
        }
    })
};

// writes file to generateHTML
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
            // HTML generated successfully
        } else {
            console.log('Team successfully created!')
        }
    })
};

newManager()
    .then(newEmployee)
    .then(myTeam => {
        return generateHTML(myTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });

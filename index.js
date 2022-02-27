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
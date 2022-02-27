//employee construct
const Employee = require('./Employee');

//add intern constructor
class Intern extends Employee {
    constructor (name, id, email, university) {
        super (name, id, email);
        this.university = university;
    }
    getUniversity() {
        return this.university
    }
    getJob() {
        return "Intern";
    }
}

// exports module
module.exports = Intern;
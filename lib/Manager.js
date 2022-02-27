// add employee construct
const Employee = require('./Employee');

// manager to employee construct
class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.office = office;
    }

    getJob() {
        return "Manager";
    }
}

module.exports = Manager;
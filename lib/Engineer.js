const Employee = require('./Employee');

// creat and push engineer construct
class Engineer extends Employee {
    constructor (name, id , email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getJob() {
        return "Engineer"
    }
}

// module export
module.exports = Engineer;
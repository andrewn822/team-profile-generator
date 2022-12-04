const Employee = require("./Employee")

//generates an engineer
class Engineer extends Employee {
    constructor(name, id, email, role, git) {
        super(name, id, email)
        this.role = role
        this.git = git
    }
     // Getter
     getGit() {
        return this.git
    }
}

module.exports = Engineer

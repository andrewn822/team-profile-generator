const Employee = require("./Employee");

// function to get Engineers github
class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email)
        this.role = role
        this.school = school
    }
    getSchool(){
        return this.school
    }
};

//function to override role into engineer
module.exports = Intern 
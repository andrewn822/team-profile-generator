const Employee = require("./Employee");

// function to get Engineers github
class Manager extends Employee{
    constructor(name, id, email, role, officeNumber){
        super(name, id, email)
        this.role = role
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

}

//function to override role into engineer

module.exports = Manager
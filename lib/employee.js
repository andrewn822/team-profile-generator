//generates an employee
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    //methods
     getName() {
        return this.name
    }
     getId() {
        return this.id
    }
     getEmail() {
        return this.email
    }
     getRole() {
        if (!this.role){
            return 'Employee'
        } else return this.role
    }
    getEmployeeDetails() {
        return {name:this.name, id:this.id, email:this.email, role:this.role}
    }
}

module.exports = Employee
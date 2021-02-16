const Employee = require("./Employee.js")

//Manager Class created based on README file stipulations.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)
        this.officeNumber = officeNumber



    }
    getSchool() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }

}
module.exports = Manager
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

    describe('Manager', () => {
        describe('subclass of Employee', () => {
            it('should be a subclass of the Employee class', () => {
                const a = Manager
                const b = Employee

                expect(a.prototype instanceof b).toEqual(true)
            })
        })
    })
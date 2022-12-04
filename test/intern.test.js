const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

    describe('Intern', () => {
        describe('is a subclass of Employee', () => {
            it('should be a an instance of Employee', () => {
                const a = Employee
                const b = Intern
                
                expect(b.prototype instanceof a).toEqual(true)
            })
        })
    })
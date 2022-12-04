const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('constructor', () => {
        it('should return an object containing a name, id, and email property when called with the new keyword', () => {
            const obj = new Employee('andrew', '22', 'adrewn822@gmail.com')

            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
        })
    })
})
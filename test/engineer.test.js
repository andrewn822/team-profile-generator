const Engineer = require('../lib/engineer')

    describe('Engineer', () => {
        describe('constructor', () => {
            it('should return an object with parent properties name, id, email, and new properties role, and git', () => {
                const obj = new Engineer ('james', '4', 'some@email', 'Engineer', 'user')

                expect('name' in obj).toEqual(true)
                expect('id' in obj).toEqual(true)
                expect('email' in obj).toEqual(true)
                expect('role' in obj).toEqual(true)
                expect('git' in obj).toEqual(true)
            })
        })
    })
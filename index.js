const inqurier = require('inquirer')
const fs = require('fs')
const util = require('util')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./src/generateHTML')

const managerPrompt = [{
    type: 'input',
    name: 'managerName',
    message: `Enter team manger's name`

}, {
    type: 'input',
    name: 'managerID',
    message: 'enter employee ID'
}, {
    type: 'input',
    name: 'managerEmail',
    message: 'enter manager email'
}, {
    type: 'input',
    name: 'officeNumber',
    message: 'eneter office number'
}]

const teamPrompt = [{
    type: 'list',
    name: 'memberSelect',
    choices: ['Engineer', 'Intern']
}, {
    type: 'input',
    name: 'name',
    message: 'enter employee name'
}, {
    type: 'input',
    name: 'id',
    message: 'eneter employee ID'
}, {
    type: 'input',
    name: 'email',
    message: 'eneter employee email'
}, {
    type: 'input',
    name: 'git',
    message: 'eneter employees github username',
    when (answers) {
        let validate = 'Engineer'
        return answers.memeberSelect && answers.memberSelect.includes(validate)
    }
}, {
    type: 'input',
    name: 'school',
    message: 'enter employees school',
    when (answers) {
        let validate ='Intern'
        return answers.memberSelect && answers.memberSelect.includes(validate)
    }
}, {
    type: 'confirm',
    name: 'addMore',
    message: 'would you like to add another team member?'
    
}]

var teamArray = []

const nextPrompt = async () => {
    const res = await inqurier.prompt(teamPrompt)
    if(res.memberSelect === 'Engineer'){
        const engi = new Engineer (res.name, res.id, res.email, res.memberSelect, res.git)
        teamArray.push(engi)
    } else if(res.memberSelect === 'Intern') {
        const intern = new Intern (res.name, res.id, res.email, res.memberSelect, res.school)
        teamArray.push(intern)
    }

    if(res.addMore){
    nextPrompt();
    } else {
        console.log('no new members')
        console.log(teamArray)
        generateHTML(teamArray)
        return
    }
}


// starts the app
const init = async () => {
    const res = await inqurier.prompt(managerPrompt)
    const manager = new Manager (res.managerName, res.managerID, res.managerEmail, 'Manager', res.officeNumber)
    teamArray.push(manager)
    nextPrompt();

}

init()
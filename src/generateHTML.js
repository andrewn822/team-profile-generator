function generateHTML(data){
    var head = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Generator</title>
    </head>`
    var html = head + `\n<body>\n<header><h1>Team Roster</></header>\n<div class="main">\n`
    var closing = `\n</div>\n</body>\n</html>`
    data.forEach(element => {
        const {name, id, email, role, officeNumber, git, school} = element

        if (role === 'Engineer') {
            html += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                <p class="card-text">id: ${id}</p>
                <p class="card-text">email: ${email}</p>
              <p class="card-text">Github: <a href="https://github.com/${git}">${git}</a></p>
            </div>
          </div>\n`
        }
        if (role === 'Intern') {
            html += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: ${email}</p>
              <p class="card-text">School: ${school}</p>
            </div>
          </div>\n`
        }

        if (role === 'Manager'){
            html += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <p class="card-text">ID: ${id}</p>
              <p class="card-text">Email: ${email}</p>
              <p class="card-text">Office Number: ${officeNumber}</p>
            </div>
          </div>\n`
            
        }
        

    });
    FileSystem.writeFile('./dis/team.html', html+closing, (err) => {
        if (err) {
            console.log(err)
        }
    })
    console.log(html)


}

module.exports = generateHTML;
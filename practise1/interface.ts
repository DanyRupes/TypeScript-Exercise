interface Person {
    firstName : String,
    lastName : String
}

function human (person : Person) {
    
    return  "Hello "+person.firstName+' thank you '+person.lastName
}


document.body.textContent = human({firstName: 'Danyrupes', lastName:'Arputharaj'});

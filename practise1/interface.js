function human(person) {
    return "Hello " + person.firstName + ' thank you ' + person.lastName;
}
document.body.textContent = human({ firstName: 'Danyrupes', lastName: 'Arputharaj' });

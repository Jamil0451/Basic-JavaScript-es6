var Person = require("./person");

class Jamil extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}

var jamil = new Jamil("Jamil", "Rahman");
console.log(jamil.getFullName);
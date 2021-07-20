class Person {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get getFullName() {
        return this.firstName + " " + this.lastName;
    }

    getLastName() {
        return this.lastName;
    }
}

// var jamil = new Person("jamil", "rahman");
// console.log(jamil.getFullName);
// console.log(jamil.getLastName());

module.exports = Person;
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

var jamil = new Person("Jamil", "Rahman");
console.log(jamil.getFullName());
console.log(jamil);
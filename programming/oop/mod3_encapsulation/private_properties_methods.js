// Private Properties and Methods
class Person {
    #ssn;

    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;
    }

    getSSN() {
        return this.#ssn;
    }
}

const person1 = new Person('John', '123-45-6789');
console.log(person1.getSSN()); // 123-45-6789
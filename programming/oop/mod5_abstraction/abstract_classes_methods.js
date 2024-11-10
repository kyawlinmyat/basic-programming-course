// Abstract Classes and Methods
class Animal {
    constructor(name) {
        if (this.constructor === Animal) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
    }

    speak() {
        throw new Error("Abstract method has no implementation");
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
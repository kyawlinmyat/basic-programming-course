// Method Overriding
class Animal {
    speak() {
        console.log('Animal makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks.');
    }
}

const animal = new Animal();
const dog = new Dog();

animal.speak(); // Animal makes a noise.
dog.speak(); // Dog barks.



//1.Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

const person = {
    name: 'Prince',
    age: 30,
    gender: 'male',
    occupation: 'Developer'
};

// Destructuring 
const { name, age } = person;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

//2.Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.
import { calculateArea } from "./circle.js";
const radius = 5;
const area = calculateArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area}`);

//3.Problem: Create a class Rectangle with properties width and height and a method to calculate the area.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(`Area: ${rectangle.calculateArea()}`);

//.Problem: Create a class Person with a getter and setter for the fullName property.
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for fullName
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const myPerson = new Person('rezwanul', 'Haque');
console.log(myPerson.fullName); 

myPerson.fullName = 'rezwanul Perince';
console.log(myPerson.firstName); 
console.log(myPerson.lastName); 
console.log(myPerson.fullName); 

//.Problem: Create a class expression for a Circle with a method to calculate the circumference.

// Class expression for Circle
const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
};


const myCircle = new Circle(5);
console.log(`Circumference: ${myCircle.calculateCircumference()}`); 

//.Problem: Create an object with computed property names based on variables.

// Variables for property names
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

// Creating an object with computed property names
const man = {
    [propName1]: 'ami',
    [propName2]: 'tumi',
    [propName3]: 30
};


console.log(man); 

//7.Problem: Create a base class Animal and a derived class Dog that inherits from Animal.

//  class Animal
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    // Method to make sound
    makeSound() {
        console.log(`${this.name} makes a sound: ${this.sound}`);
    }
}

// class Dog that inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Call the constructor of the base class
        super(name, 'Bark');
        this.breed = breed;
    }

    // Method specific to Dog
    fetch() {
        console.log(`${this.name} is fetching!`);
    }
}

const myDog = new Dog('Buddy', 'Golden');
myDog.makeSound(); 
myDog.fetch(); 

console.log(`Name: ${myDog.name}`); 
console.log(`Breed: ${myDog.breed}`); 

//.8.Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.


class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate an abstract class.");
        }
    }

    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented.");
    }
}

class MyCircle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class MYRectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}


try {
    const shape = new Shape(); // Error
} catch (error) {
    console.error(error.message); 
}

const myNewCircle = new MyCircle(5);
console.log(`Circle area: ${myNewCircle.calculateArea()}`);

const myRectangle = new MYRectangle(4, 6);
console.log(`Rectangle area: ${myRectangle.calculateArea()}`); 

//9.Problem: Create a class MathUtil with a static method square to calculate the square of a number.
class MathUtil {
    
    static square(number) {
        return number * number;
    }
}

const result = MathUtil.square(5);
console.log(`The square of 5 is: ${result}`);


//.10.Problem: Create an object with a symbol as a property key and demonstrate accessing it.

const uniqueKey = Symbol('uniqueKey');

// Create an object with a symbol 
const myObject = {
    [uniqueKey]: 'This is a unique value'
};


console.log(myObject[uniqueKey]); 
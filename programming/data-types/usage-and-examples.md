### Primitive Data Types

1. **Integer (int)** : Whole numbers, positive or negative, without decimals.
   **javascript**

```
   let age = 25; // Integer
```

1. **Floating Point (float)** : Numbers that have decimal points.
   **javascript**

```
   let price = 19.99; // Floating Point
```

1. **String** : A sequence of characters, used for text.
   **javascript**

```
   let name = "Alice"; // String
```

1. **Boolean** : Represents true or false values.
   **javascript**

```
   let isStudent = true; // Boolean
```

1. **Character (char)** : A single character (used in some languages like C).
   **c**

```
   chargrade = 'A'; // Character
```

### Complex Data Types

1. **Array** : A collection of elements of the same type.
   **javascript**

```
   let scores = [85, 90, 92]; // Array
```

1. **Object** : A collection of key-value pairs (often used in JavaScript).
   **javascript**

```
   let person = {
       name: "Bob",
       age: 30
   }; // Object
```

1. **Function** : A block of code designed to perform a particular task.
   **javascript**

```
   functiongreet() {
       console.log("Hello, World!");
   } // Function
```

### Data Types in Different Languages

* **JavaScript** : Supports dynamic types, meaning a variable can hold any data type.
* **Python** : Also supports dynamic types, making it very flexible.
* **C/C++** : Requires explicit type definitions, offering more control over memory usage.
* **Java** : Statically typed, requiring explicit type declarations, which helps catch errors at compile time.

### Visual Example

Here’s a summary table: Ready to dive into how these are used in real programs?

### Example

// Define an object to store student information
let  student = {
    name: "Alice",
    age: 20,
    scores: [85, 90, 92]
};

// Define a function to calculate the average score
function calculateAverage(scores) {
    let  total = 0;
    for(let  i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

// Calculate and display the student's average score
let  averageScore = calculateAverage(student.scores);
console.log(student.name + "'s average score is: " + averageScore); // Outputs: Alice's average score is: 89

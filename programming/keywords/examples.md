### Control Flow

**javascript**Copy

```
if(condition) {
    // if statement
} elseif(anotherCondition) {
    // else if statement
} else{
    // else statement
}

switch(expression) {
    casevalue1:
        // code block
        break;
    casevalue2:
        // code block
        break;
    default:
        // default code block
}
```

### Loops

**javascript**Copy

```
for(leti = 0; i < 5; i++) {
    // for loop
}

while(condition) {
    // while loop
}

do{
    // do-while loop
} while(condition);

break; // exits a loop or switch statement
continue; // skips the current iteration of a loop
```

### Variable Declaration

**javascript**Copy

```
letx = 10;
consty = 20;
varz = 30; // avoid using var, prefer let and const
```

### Functions and Classes

**javascript**Copy

```
functionmyFunction(param) {
    returnparam * 2; // return statement
}

classMyClassextendsParentClass{
    constructor() {
        super(); // calls the parent class constructor
        this.name= 'MyClass'; // this keyword
    }
}
```

### Error Handling

**javascript**Copy

```
try{
    // code that may throw an error
} catch(error) {
    // handle the error
} finally{
    // code that executes regardless of an error
}

thrownewError('Something went wrong!'); // throw statement
```

### Modules

**javascript**Copy

```
import{ myFunction } from'myModule'; // import statement

exportfunctionmyFunction() {
    // export statement
}

exportdefaultmyFunction; // default export
```

### Other Keywords

**javascript**Copy

```
constperson = {
    name: 'Alice',
    age: 25,
    isStudent: true,
    greet() {
        console.log('Hello, '+ this.name); // this keyword
    }
};

deleteperson.age; // deletes a property

consttype = typeofperson; // typeof operator
constisInstance = person instanceofMyClass; // instanceof operator

with(person) {
    console.log(name); // outputs: Alice
} // with statement (not recommended to use)
```

### Unary and Binary Operators

**javascript**Copy

```
letcounter = 0;
counter++; // increment
counter--; // decrement

constbitwiseNot = ~counter; // bitwise NOT

constpositive = +counter; // unary plus
constnegative = -counter; // unary minus
```

### Ternary Operator

**javascript**Copy

```
constisAdult = age >= 18? 'Yes': 'No'; // ternary operator
```

### Assignment Operators

**javascript**Copy

```
leta = 10;
a += 5; // equivalent to a = a + 5
a -= 3; // equivalent to a = a - 3
a *= 2; // equivalent to a = a * 2
a /= 2; // equivalent to a = a / 2
a %= 3; // equivalent to a = a % 3

a &= 1; // bitwise AND and assign
a |= 2; // bitwise OR and assign
a ^= 3; // bitwise XOR and assign
a <<= 1; // left shift and assign
a >>= 1; // right shift and assign
a >>>= 1; // zero-fill right shift and assign
```

That’s a lot of ground to cover! Each keyword has its own special role in making your programs work effectively. Anything specific you'd like to explore further?

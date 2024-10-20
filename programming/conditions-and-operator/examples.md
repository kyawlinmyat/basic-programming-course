### Conditional Statements

 **If Statement** : Executes a block of code if a specified condition is true.

**javascript**

```
letage = 18;
if(age >= 18) {
    console.log("You are an adult."); // Outputs: You are an adult.
}
```

 **If-Else Statement** : Executes one block of code if the condition is true and another if it is false.

**javascript**

```
letage = 16;
if(age >= 18) {
    console.log("You are an adult.");
} else{
    console.log("You are a minor."); // Outputs: You are a minor.
}
```

 **Else-If Statement** : Tests multiple conditions.

**javascript**

```
letscore = 75;
if(score >= 90) {
    console.log("Grade: A");
} elseif(score >= 80) {
    console.log("Grade: B");
} elseif(score >= 70) {
    console.log("Grade: C"); // Outputs: Grade: C
} else{
    console.log("Grade: F");
}
```

### Operators

 **Arithmetic Operators** : Perform basic mathematical operations.

**javascript**

```
leta = 5;
letb = 2;
console.log(a + b); // Addition, Outputs: 7
console.log(a - b); // Subtraction, Outputs: 3
console.log(a * b); // Multiplication, Outputs: 10
console.log(a / b); // Division, Outputs: 2.5
console.log(a % b); // Modulus, Outputs: 1 (remainder)
```

 **Comparison Operators** : Compare values and return a Boolean (true/false).

**javascript**

```
leta = 5;
letb = 2;
console.log(a == b); // Equal to, Outputs: false
console.log(a != b); // Not equal to, Outputs: true
console.log(a > b);  // Greater than, Outputs: true
console.log(a < b);  // Less than, Outputs: false
```

 **Logical Operators** : Combine multiple conditions.

**javascript**

```
letage = 20;
lethasID = true;
console.log(age >= 18&& hasID); // AND, Outputs: true
console.log(age >= 18|| hasID); // OR, Outputs: true
console.log(!hasID); // NOT, Outputs: false
```

### Example in Context

Let’s put it all together in a practical example. Imagine you are building a simple access control system for a club.

**javascript**

```
letage = 19;
lethasID = true;

if(age >= 18&& hasID) {
    console.log("Access granted.");
} elseif(age >= 18&& !hasID) {
    console.log("Please show your ID.");
} else{
    console.log("Access denied.");
}
```

In this example, we check if the person is at least 18 years old and has an ID to grant access.



### Example 1: Checking for Voting Eligibility

**javascript**

```
letage = 17;

if(age >= 18) {
    console.log("You are eligible to vote.");
} else{
    console.log("You are not eligible to vote.");
}
// Outputs: You are not eligible to vote.
```

### Example 2: Grading System

**javascript**

```
letscore = 85;
letgrade;

if(score >= 90) {
    grade = 'A';
} elseif(score >= 80) {
    grade = 'B';
} elseif(score >= 70) {
    grade = 'C';
} elseif(score >= 60) {
    grade = 'D';
} else{
    grade = 'F';
}

console.log("Your grade is: "+ grade);
// Outputs: Your grade is: B
```

### Example 3: Checking for Discount Eligibility

**javascript**

```
letmember = true;
lettotalPurchase = 120;

if(member || totalPurchase > 100) {
    console.log("You are eligible for a discount!");
} else{
    console.log("No discount for you.");
}
// Outputs: You are eligible for a discount!
```

### Example 4: Traffic Light Simulation

**javascript**

```
lettrafficLight = 'green';

if(trafficLight === 'green') {
    console.log("Go");
} elseif(trafficLight === 'yellow') {
    console.log("Slow down");
} elseif(trafficLight === 'red') {
    console.log("Stop");
} else{
    console.log("Invalid traffic light color");
}
// Outputs: Go
```

### Example 5: User Login Authentication

**javascript**

```
letusername = 'admin';
letpassword = '1234';

if(username === 'admin'&& password === '1234') {
    console.log("Login successful!");
} else{
    console.log("Login failed. Check your username and password.");
}
// Outputs: Login successful!
```

### Example 6: Shopping Cart with Discounts

**javascript**

```
letcartTotal = 200;
lethasDiscount = true;

if(cartTotal >= 150&& hasDiscount) {
    console.log("You get a 10% discount!");
} elseif(cartTotal >= 100&& hasDiscount) {
    console.log("You get a 5% discount!");
} else{
    console.log("No discount available.");
}
// Outputs: You get a 10% discount!
```

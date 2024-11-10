// OOP Project2
// Build a more complex application incorporating all OOP principles
// Example: Student Management System
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getDetails() {
        return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

class School {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    listStudents() {
        return this.students.map(student => student.getDetails());
    }
}

const school = new School();
const student1 = new Student('Alice', 14, '8th Grade');
school.addStudent(student1);
console.log(school.listStudents());
// OOP Project1
// Example: Library Management System
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        return this.books;
    }
}

const library = new Library();
const book1 = new Book('1984', 'George Orwell');
library.addBook(book1);
console.log(library.listBooks());
'use strict';

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this._year = null;
        this.year = year;
    }
    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
    getDescription() {
        return `This is a book titled '${this.title}' by ${this.author}.`;
    }
    set year(value) {
        if (typeof value === "number") {
            this._year = value;
        } else {
            console.error("Year must be a number.");
        }
    }

    get year() {
        return this._year;
    }
}
class PrintedBook extends Book {
    constructor(title, author, year, pageCount) {
        super(title, author, year);
        this._pageCount = null;
        this.pageCount = pageCount;
    }
    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Pages: ${this.pageCount}`;
    }
    getDescription() {
        return super.getDescription() + ` It has ${this.pageCount} pages.`;
    }
    set pageCount(value) {
        if (typeof value === "number" && value > 0) {
            this._pageCount = value;
        } else {
            console.error("Page count must be a positive number.");
        }
    }
    get pageCount() {
        return this._pageCount;
    }
}
class Ebook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this._fileSize = null;
        this.fileSize = fileSize;
    }

    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Size: ${this.fileSize}MB`;
    }
    getDescription() {
        return super.getDescription() + ` File size is ${this.fileSize} MB.`;
    }
    set fileSize(value) {
        if (typeof value === "number" && value > 0) {
            this._fileSize = value;
        } else {
            console.error("File size must be a positive number.");
        }
    }

    get fileSize() {
        return this._fileSize;
    }
}
const printedBook = new PrintedBook("The Portrait of Dorian Gray", "Oscar Wilde", 1890, 1324);
console.log(printedBook.info);
console.log(printedBook.getDescription());

const ebook = new Ebook("1984", "George Orwell", 1949, 1.5);
console.log(ebook.info);
console.log(ebook.getDescription());



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read === 'yes') this.read = 'read';
    else this.read = 'not read yet';
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    let title = window.prompt('Enter book title');
    let author = window.prompt('Enter book\'s author');
    let pages = window.prompt('Enter number of pages');
    let read = window.prompt('Have you read the book?');
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

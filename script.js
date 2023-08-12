let myLibrary = [];
const addBookButton = document.querySelector('.add-book');
const addBookModal = document.querySelector('.add-book-modal');
const submitBookButton = document.querySelector('#submit-book');

const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const readInput = document.querySelector('#read-input');

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
    let title = titleInput.textContent;
    let author = authorInput.textContent;
    let pages = pagesInput.textContent;
    let read = '';
    if (readInput.checked) read = 'Read';
    else read = 'Not read yet';
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBookCard() {
    let bookCards = document.querySelector('.book-cards');
    for (const book in myLibrary) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `Title: ${myLibrary[book].title}<br>Author: ${myLibrary[book].author}<br># of pages: ${myLibrary[book].pages}<br>${myLibrary[book].read}`;
        bookCards.appendChild(card);
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 444, 'yes');
const sorcerersStone = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 234, 'no');
const lifeOfPi = new Book('The Life of Pi', 'Yann Martel', 342, 'no');
myLibrary.push(theHobbit);
myLibrary.push(sorcerersStone);
myLibrary.push(lifeOfPi);

displayBookCard();

addBookButton.addEventListener('click', () => addBookModal.style.display = 'block');
submitBookButton.addEventListener('click', () => addBookModal.style.display = 'none');
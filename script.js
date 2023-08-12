let myLibrary = [];
const addBookButton = document.querySelector('.add-book');
const addBookModal = document.querySelector('.add-book-modal');
const submitBookButton = document.querySelector('#submit-book');
const bookForm = document.querySelector('.book-form');

const modalInputs = document.querySelectorAll('input');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const readInput = document.querySelector('#read-input');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = '';
    if (readInput.checked) read = 'Read'
    else read = 'Not read yet';
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBookCard() {
    const bookCards = document.querySelector('.book-cards');
    const cardsList = document.querySelectorAll('.card');
    cardsList.forEach((div) => {
        bookCards.removeChild(div);
    })
    for (const book in myLibrary) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `Title: ${myLibrary[book].title}<br>Author: ${myLibrary[book].author}<br># of pages: ${myLibrary[book].pages}<br>${myLibrary[book].read}`;
        bookCards.appendChild(card);
    }
}

function resetInputs() {
    modalInputs.forEach((input) => input.value = '');
    readInput.checked = false;
}

function handleSubmitButton(e) {
    e.preventDefault();
    addBookToLibrary();
    resetInputs();
    displayBookCard();
    addBookModal.style.display = 'none';
}

addBookButton.addEventListener('click', () => addBookModal.style.display = 'block');
bookForm.addEventListener('submit', handleSubmitButton);
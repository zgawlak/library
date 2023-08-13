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
const bookCardsContainer = document.querySelector('.book-cards');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const isRead = readInput.checked ? 'Read' : 'Not read yet';
    newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function displayBookCards() {
    bookCardsContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const card = createBookCard(book, index);
        bookCardsContainer.appendChild(card);
    });
}

function createBookCard(book, index) {
    const card = document.createElement('div');
    card.setAttribute('data-index', index);
    card.classList.add('card');

    const titleElement = document.createElement('p');
    titleElement.textContent = `Title: ${book.title}`;
    card.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;
    card.appendChild(authorElement);

    const pagesElement = document.createElement('p');
    pagesElement.textContent = `# of pages: ${book.pages}`;
    card.appendChild(pagesElement);

    const readElement = document.createElement('p');
    readElement.textContent = book.isRead;
    card.appendChild(readElement);

    const readButton = document.createElement('button');
    readButton.textContent = "Read?";
    readButton.addEventListener('click', () => {
        book.isRead = book.isRead === 'Read' ? 'Not read yet' : 'Read';
        displayBookCards();
        console.table(myLibrary);
    });
    card.appendChild(readButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', () => {
        const dataIndex = card.getAttribute('data-index');
        removeBook(dataIndex);
        displayBookCards();
        console.table(myLibrary);
    });
    card.appendChild(removeButton);

   return card;
}

function resetInputs() {
    modalInputs.forEach((input) => input.value = '');
    readInput.checked = false;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
}

function handleSubmitButton(e) {
    e.preventDefault();
    addBookToLibrary();
    resetInputs();
    displayBookCards();
    addBookModal.classList.remove('modal-active');
}

addBookButton.addEventListener('click', () => addBookModal.classList.add('modal-active'));
bookForm.addEventListener('submit', handleSubmitButton);
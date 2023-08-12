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
    for (const index in myLibrary) {
        const book = myLibrary[index];
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
        readElement.textContent = book.read;
        card.appendChild(readElement);

        const readButton = document.createElement('button');
        readButton.textContent = "Read?";
        readButton.addEventListener('click', () => {
            if (book.read === 'Read') book.read = 'Not read yet';
            else book.read = 'Read';
            displayBookCard();
            console.table(myLibrary);
        });
        card.appendChild(readButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.addEventListener('click', () => {
            const dataIndex = card.getAttribute('data-index');
            removeBook(dataIndex);
            displayBookCard();
            console.table(myLibrary);
        });
        card.appendChild(removeButton);

        bookCards.appendChild(card);
    }
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
    displayBookCard();
    addBookModal.style.display = 'none';
}

addBookButton.addEventListener('click', () => addBookModal.style.display = 'block');
bookForm.addEventListener('submit', handleSubmitButton);
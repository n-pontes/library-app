// Selects DOM elements
const display = document.querySelector("#library-display");
const container = document.querySelector(".grid-container");

// Modal popup 

let popup = document.querySelector("#popup");
const modal = document.querySelector(".modal");

// Books will be stored in this array
const myBooks = [];

// The book constructor
class Book {
    constructor (title, author, genre, pages, year, read) {
        this.id = crypto.randomUUID(); // Generates an unique ID
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.year = year;
        this.read = read;
    }
}

// Function that adds a new book into the myBooks array
const addBookToLibrary = (title, author, genre, pages, year, read) => {
    const newBook = new Book(title, author, genre, pages, year, read);
    crypto.randomUUID(newBook); 
    myBooks.push(newBook);

    // Create card element
    const createDiv = document.createElement('div');
    createDiv.classList.add('card');
    createDiv.innerHTML = `
        <h2>${newBook.title}</h2>
        <p>Author: ${newBook.author}</p>
        <p>Genre: ${newBook.genre}</p>
        <p>Pages: ${newBook.pages}</p>
        <p>Published: ${newBook.year}</p>
        <p>Status: ${newBook.read}</p>    
    `;

    // Append the card to the container
    container.appendChild(createDiv);
}

// Function to delete a Book from the myBooks array
const deleteBook = (id) => {
    const index = myBooks.findIndex((book) => book.id === id);
    if (index !== -1) {
        myBooks.splice(index, 1);
        displayBooks(); // Re-render the UI
    }
};

const displayBooks = () => {
    const container = document.getElementById('library-display');
    container.innerHTML = ''; // Clear the previous display to avoid duplicates

    myBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.textContent = `${book.title} by ${book.author}`;
        container.appendChild(bookCard);
    });
};

// Testing to insert books manually
addBookToLibrary('The Count of Monte Cristo', 'Alexandre Dumas', 'Historical Fiction', 1276, 'January 15, 1846', 'Read');
addBookToLibrary('Crime and Punishment', 'Fyodor Dostoevsky', 'Russian Literature', 671, 'January 1, 1866', 'Read');
addBookToLibrary('The Metamorphosis', 'FRanz Kafka', 'Philosophy', 201, 'October 1, 1915', 'Read');
addBookToLibrary('The Picture of Dorian Gray', 'Oscar Wilde', 'Classics', 253, 'June 1, 1890', 'Read');
addBookToLibrary('The Little Prince', 'Antoine de Saint-Exupéry', 'Fantasy', 96, 'April 6, 1943', 'Read');

// Testing
// console.table(myBooks);

// Tests to delete the book on index 0
// const bookIdToDelete = myBooks[0].id;
// deleteBook(bookIdToDelete);

// console.table(myBooks);

//displayBooks();

popup.addEventListener("click", () => {
    modal.style.display = "flex"; // Make it visible
    modal.style.visibility = "visible"; // Make it visible
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Close if clicked outside
    }
});

const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});




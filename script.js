// Books will be stored in this array
const myBooks = [];

// The book constructor
class Book {
    constructor (title, author, genre, pages, year, read) {
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
    myBooks.push(newBook);
}



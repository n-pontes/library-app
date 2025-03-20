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

// Create a new book
const newBook = new Book ('The Count of Monte Cristo', 'Alexandre Dumas', 'Historical Fiction', 1276, 'January 15, 1846', 'Read');

console.table(newBook);

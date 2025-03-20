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
}

addBookToLibrary('The Count of Monte Cristo', 'Alexandre Dumas', 'Historical Fiction', 1276, 'January 15, 1846', 'Read');
console.table(myBooks);


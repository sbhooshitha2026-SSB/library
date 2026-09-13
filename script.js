console.log("Hello!")

const myLibrary = [];

function Book(title, author, chapterNumber) {
    this.title = title;
    this.author = author;
    this.chapterNumber = chapterNumber;
}

let ReverendInsanity = new Book("Reverend Insanity", "Gu Zhen Ren", 2334);
let ShadowSlave = new Book("Shadow Slave", "Guilty3", 3184);

function addBookToLibrary(book1) {
    myLibrary.push(book1);
};

addBookToLibrary(ReverendInsanity);

addBookToLibrary(ShadowSlave);

console.log(myLibrary);
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

const btn1 = document.querySelector(".btn");

btn1.addEventListener("click", function() {
    
})


const container = document.querySelector(".container")

function loop() {
    myLibrary.forEach(function(element, index) {
        const card = document.createElement("div");
        const title1 = document.createElement("div");
        const author1 = document.createElement("div");
        const chNu = document.createElement("div");

        title1.innerText = `title: ${element.title}`;
        author1.innerText = `author: ${element.author}`;
        chNu.innerText = `chapterNumber: ${element.chapterNumber}`;

        card.appendChild(title1);
        card.appendChild(author1);
        card.appendChild(chNu);

        container.appendChild(card);

    })
};

myLibrary.forEach(function(element) {
    console.log(element)
})

loop();



console.log(myLibrary);
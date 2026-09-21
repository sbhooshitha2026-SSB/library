console.log("Hello!")

const container = document.querySelector(".container");
const header = document.querySelector(".interactive");
const form1 = document.querySelector("form");
const body1 = document.querySelector("body");
const submitButton1 = document.querySelector(".submit-button");

const myLibrary = [];

function Book(title_B, author_B, chapterNumber_B, readStatus_B) {
    this.name = title_B.replaceAll(" ", "");
    this.title = title_B;
    this.author = author_B;
    this.chapterNumber = chapterNumber_B;
    this.readStatus = readStatus_B;
}

let ReverendInsanity = new Book("Reverend Insanity", "Gu Zhen Ren", 2334, 'Completed');
let ShadowSlave = new Book("Shadow Slave", "Guilty3", 3184, 'Reading');

function addBookToLibrary(book1) {
    myLibrary.push(book1);
};

addBookToLibrary(ReverendInsanity);

addBookToLibrary(ShadowSlave);

const btn1 = document.querySelector(".btn");

btn1.addEventListener("click", function() {
    form1.style.display = "grid";
    header.style.display = "none";
    container.style.display = "none";

    body1.classList.add("active")
});

form1.addEventListener("submit", function(event) {
    event.preventDefault();

    const titleForm = document.querySelector("#Title").value;
    const authorForm = document.querySelector("#Author").value;
    const chNumForm = document.querySelector("#chNum").value;
    const selected = document.querySelector('input[name="read_status"]:checked');

    const newBook = new Book(titleForm, authorForm, chNumForm, selected.labels[0].textContent);





    addBookToLibrary(newBook);

    loop();
















    form1.style.display = "none";
    header.style.display = "grid";
    container.style.display = "grid";

    body1.classList.remove("active");
});







function loop() {
    container.replaceChildren();

    myLibrary.forEach(function(element, index) {
        const card = document.createElement("div");
        const title1 = document.createElement("div");
        const author1 = document.createElement("div");
        const chNu = document.createElement("div");
        const readStatusL = document.createElement("div");



        title1.innerText = `Title: ${element.title}`;
        author1.innerText = `Author: ${element.author}`;
        chNu.innerText = `Total Chapters: ${element.chapterNumber}`;
        readStatusL.innerText = `${element.readStatus}`;

        card.appendChild(title1);
        card.appendChild(author1);
        card.appendChild(chNu);
        card.appendChild(readStatusL);

        container.appendChild(card);

    })
};

myLibrary.forEach(function(element) {
    console.log(element)
})

loop();



console.log(myLibrary);
console.log("Hello!")

const container = document.querySelector(".container");
const header = document.querySelector(".interactive");
const form1 = document.querySelector("form");
const body1 = document.querySelector("body");
const submitButton1 = document.querySelector(".submit-button");

let myLibrary = [];

function Book(title_B, author_B, chapterNumber_B, readStatus_B) {
    this.name = title_B.replaceAll(" ", "");
    this.title = title_B;
    this.author = author_B;
    this.chapterNumber = chapterNumber_B;
    this.readStatus = readStatus_B;
    this.id = crypto.randomUUID();
};

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

    const newBook = new Book(titleForm, authorForm, chNumForm, selected.labels[0].textContent.trim());





    addBookToLibrary(newBook);

    loop();

    form1.style.display = "none";
    header.style.display = "grid";
    container.style.display = "grid";

    body1.classList.remove("active");

    console.log(JSON.stringify(selected.labels[0].textContent));
});







function loop() {
    container.replaceChildren();

    myLibrary.forEach(function(element, index) {
        const card = document.createElement("div");
        const cardTop = document.createElement("div");
        const cardBottom = document.createElement("div");
        const title1 = document.createElement("div");
        const author1 = document.createElement("div");
        const chNu = document.createElement("div");
        const readStatusL = document.createElement("select");

        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        const option4 = document.createElement("option");

        card.appendChild(cardTop);
        card.appendChild(cardBottom);

        cardTop.classList.add("cardTop");
        cardBottom.classList.add("cardBottom");
        card.classList.add("card");

        option1.innerText = "Completed";
        option2.innerText = "Reading";
        option3.innerText = "Dropped";
        option4.innerText = "Plan to Read";

        readStatusL.appendChild(option1);
        readStatusL.appendChild(option2);
        readStatusL.appendChild(option3);
        readStatusL.appendChild(option4);

        readStatusL.value = element.readStatus;


        title1.innerText = `Title: ${element.title}`;
        author1.innerText = `Author: ${element.author}`;
        chNu.innerText = `Total Chapters: ${element.chapterNumber}`;


        cardTop.appendChild(title1);
        cardTop.appendChild(author1);
        cardTop.appendChild(chNu);


        cardBottom.appendChild(readStatusL);

        readStatusL.addEventListener("change", function() {
            element.readStatus = readStatusL.value;
        });

        container.appendChild(card);


        const buttonD = document.createElement("button");
        buttonD.innerText = "Remove Book";
        buttonD.classList.add("buttonD")
        cardBottom.appendChild(buttonD);

        buttonD.addEventListener("click", function() {
            myLibrary = myLibrary.filter(function(book) {
                return book.id !== element.id;
            });
            loop();
        })




    })

    
};

myLibrary.forEach(function(element) {
    console.log(element)
})

loop();



console.log(myLibrary);







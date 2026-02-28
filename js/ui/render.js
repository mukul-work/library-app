import { myLibrary } from "../data/library.js";

export function renderLibrary() {
    const container = document.getElementById("library");
    container.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.dataset.id = book.id;

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? "Read" : "Not Read"}</p>
            <button class="toggle-btn">Toggle Read</button>
            <button class="remove-btn">Remove</button>
        `;

        container.appendChild(card);
    });
}
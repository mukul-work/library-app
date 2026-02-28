import {library} from "../data/library.js"
import Book from "../models/Book.js"
import { renderLibrary } from "../ui/render.js"

export function initEvents(){
    const dialog = document.getElementById("book-dialog");
    const form = document.getElementById("book-form");

    document.getElementById("new-book-btn")
        .addEventListener("click", () => dialog.showModal());
    
    document.getElementById("close-dialog")
        .addEventListener("click", () => dialog.close());

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("read").checked;

        const newBook = new Book(title, author, pages, read);
        library.push(newBook);

        renderLibrary();
        dialog.close();
        form.reset();
    });

    document.getElementById("library")
        .addEventListener("click", (e) => {
        const card = e.target.closest(".book-card");
        if (!card) return;

        const id = card.dataset.id;
        const book = library.find(b => b.id === id);

        if (e.target.classList.contains("remove-btn")) {
            const index = library.findIndex(b => b.id === id);
            library.splice(index, 1);
            renderLibrary();
        }

        if (e.target.classList.contains("toggle-btn")) {
            book.toggleRead();
            renderLibrary();
        }
    });
}
import { initEvents } from "./handlers/events.js";
import { renderLibrary } from "./ui/render.js";
import { library } from "./data/library.js";
import Book from "./models/Book.js";

library.push(new Book("Atomic Habits", "James Clear", 320, true));
library.push(new Book("Deep Work", "Cal Newport", 280, false));

renderLibrary();
initEvents();

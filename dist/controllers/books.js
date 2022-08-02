"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.getBook = exports.createBook = exports.getBooks = void 0;
const uuid_1 = require("uuid");
let books = [];
const getBooks = (req, res) => {
    res.send(books);
};
exports.getBooks = getBooks;
const createBook = (req, res) => {
    const book = req.body;
    books.push(Object.assign(Object.assign({}, book), { id: (0, uuid_1.v4)() }));
    res.send(`Book with the name ${book.name} that is ${book.age} years old`);
};
exports.createBook = createBook;
const getBook = (req, res) => {
    const { id } = req.params;
    const bookFound = books.find((book) => book.id === id);
    res.send(bookFound);
};
exports.getBook = getBook;
const deleteBook = (req, res) => {
    const { id } = req.params;
    books = books.filter((book) => book.id !== id);
    res.send(`Book with the id ${id} deleted from the database.`);
};
exports.deleteBook = deleteBook;
const updateBook = (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const book = books.find((book) => book.id === id);
    if (book == undefined) {
        res.send(`Book with the id ${id} is missing`);
        return;
    }
    if (name)
        book.name = name;
    if (age)
        book.age = age;
    res.send(`Book with the id ${id} has been updated`);
};
exports.updateBook = updateBook;

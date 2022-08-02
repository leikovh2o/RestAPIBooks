import { v4 as uuidv4 } from 'uuid';
import { IBook } from '../models';


let books: IBook[] = [];


export const getBooks = ( req, res) => {
  res.send(books);
};

export const createBook = (req, res) => {
  const book = req.body;
  books.push({ ...book, id:uuidv4() });
  res.send(`Book with the name ${book.name} that is ${book.age} years old`);
};

export const getBook = (req, res) => {
  const { id } = req.params;

  const bookFound = books.find((book) => book.id === id);

  res.send(bookFound)
};

export const deleteBook = (req, res) => {
  const { id } = req.params;

  books = books.filter((book) => book.id !== id);

  res.send(`Book with the id ${id} deleted from the database.`);
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const book = books.find((book) => book.id === id);

  if(book == undefined){
    res.send(`Book with the id ${id} is missing`);
    return;
  }

  if(name) book.name = name;
  if(age) book.age = age;

  res.send(`Book with the id ${id} has been updated`)

};
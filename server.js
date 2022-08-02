import express from 'express';
import bodyParser from 'body-parser';

import booksRoutes from './routes/books.js';

const app = express();
const PORT = 5004;

app.use(bodyParser.json());

app.use('/books', booksRoutes);

app.get('/', (req, res) => res.send('HELLO!'));

app.listen(PORT , () => console.log(`Server running on port: http://localhost:${PORT}`));
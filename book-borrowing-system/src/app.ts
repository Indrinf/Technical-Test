import express from 'express';
import { borrowBookHandler } from './controllers/bookController';

const app = express();
const PORT = 3000;

app.use(express.json());

// Menambahkan route untuk root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Book Borrowing API');
});

// Route untuk meminjam buku
app.post('/borrow', borrowBookHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

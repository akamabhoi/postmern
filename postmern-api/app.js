const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const books = require('./routes/api/books');

connectDB();

app.get('/ping', (req, res) => { 
    return res.send('OK')
});

// Init Middleware
app.use(express.json({ extended: false }));

app.use(cors({ origin: true, credentials: true }));

app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
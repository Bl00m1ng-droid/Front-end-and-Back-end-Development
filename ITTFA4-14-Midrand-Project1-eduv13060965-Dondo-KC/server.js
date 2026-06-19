const mysql = require('mysql2/promise'); // use promise-based pool
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Create a connection pool instead of a single connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'D0nd0ld0@28409',
  database: 'bookstoredb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Define a route to fetch data from the database
app.get('/api/books', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM book');
    res.json(results);
  } catch (err) {
    console.error('Error fetching data from the database:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch book details by ID
app.get('/api/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const [results] = await pool.query('SELECT * FROM book WHERE bookID = ?', [bookId]);
    if (results.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(results[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// signup route
app.post('/api/signup', async (req, res) => {
  const { username, email, password, type, address } = req.body || {};
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'Password must be 8-16 characters, include at least one uppercase letter and one number.'
    });
  }

  try {
    const [result] = await pool.query('SELECT email FROM users WHERE email = ?', [email]);
    if (result.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (username, password, email, type, address) VALUES (?, ?, ?, ?, ?)',
      [username, hashedPassword, email, type, address]
    );

    res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// signin route
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const [results] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({
      message: 'Login successful',
      username: user.username,
      email: user.email,
      type: user.type,
      address: user.address
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
});

// fetch user details route
app.get('/api/user/:email', async (req, res) => {
  const email = req.params.email;
  try {
    const [results] = await pool.query(
      'SELECT username, email, type, address FROM users WHERE email = ?',
      [email]
    );
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(results[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch related books by category
app.get('/api/books/related/:bookID', async (req, res) => {
  const bookID = req.params.bookID;
  try {
    const [result] = await pool.query('SELECT category FROM book WHERE bookID = ?', [bookID]);
    if (result.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    const category = result[0].category;
    const [relatedBooks] = await pool.query(
      'SELECT * FROM book WHERE category = ? AND bookID != ?',
      [category, bookID]
    );
    res.json(relatedBooks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
});

// admin dashboard
app.get('/api/dashboard', async (req, res) => {
  const stats = {};
  try {
    const [books] = await pool.query('SELECT COUNT(*) AS totalBooks FROM book');
    stats.totalBooks = books[0].totalBooks;

    const [users] = await pool.query('SELECT COUNT(*) AS totalUsers FROM users');
    stats.totalUsers = users[0].totalUsers;

    const [categories] = await pool.query('SELECT category, COUNT(*) AS count FROM book GROUP BY category');
    stats.categories = categories;

    const [lowStock] = await pool.query('SELECT title, stockQuantity FROM book WHERE stockQuantity < 5');
    stats.lowStock = lowStock;

    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'DB error' });
  }
});

// image upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});
const upload = multer({ storage: storage });

// insert-book route
app.post('/api/add-book', upload.single('image'), async (req, res) => {
  const { isbn, author, title, price, stockQuantity, category, description } = req.body;
  const imagePath = `images/${req.file.filename}`;

  try {
    await pool.query(
      'INSERT INTO Book (ISBN, author, title, price, stockQuantity, category, image, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [isbn, author, title, price, stockQuantity, category, imagePath, description]
    );
    res.json({ success: true, message: "Book added successfully!" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Error inserting book" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

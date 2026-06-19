const mysql = require('mysql2');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',                                     
  password: 'D0nd0ld0@28409',
  database: 'bookstoredb'
});
// Connect to the database
connection.connect((err) => {   
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

app.use(express.static(("public"))); // Serve static files from the 'public' directory
// Define a route to fetch data from the database
app.get('/api/books',(req,res) =>{
    const sql = 'SELECT * FROM book';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

// Route to fetch book details by ID
app.get('/api/books/:id', (req, res) => {
    const bookId = req.params.id;

    const sql = 'SELECT * FROM book WHERE bookID = ?';

    connection.query(sql, [bookId], (err, results) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                error: 'Internal Server Error'
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                error: 'Book not found'
            });
        }

        res.json(results[0]);
    });
});
//signup route
app.post('/api/signup', async (req, res) => {
  const { username, email, password, type, address } = req.body || {};

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  //  Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'Password must be 8-16 characters, include at least one uppercase letter and one number.'
    });
  }

  try {
    // check if user exists
    connection.query(
      'SELECT email FROM users WHERE email = ?',
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Database error (select)' });
        }

        if (result && result.length > 0) {
          return res.status(400).json({ message: 'User already exists' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // insert user
        connection.query(
          'INSERT INTO users (username, password, email, type, address) VALUES (?, ?, ?, ?, ?)',
          [username, hashedPassword, email, type, address],
          (err, result) => {
            if (err) {
              return res.status(500).json({ message: 'Database error (insert)' });
            }

            res.json({ message: 'User created successfully' });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//signin route
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      //  Guard against empty results
      if (!results || results.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const user = results[0];

      try {
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
      } catch (compareErr) {
        return res.status(500).json({ message: 'Error checking password' });
      }
    }
  );
});

//fetch user details route
app.get('/api/user/:email', (req, res) => {
    const email = req.params.email;

    const sql = 'SELECT username, email, type ,address FROM users WHERE email = ?';  

    connection.query(sql, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(results[0]);
    });
});

// Route to fetch related books by category
app.get('/api/books/related/:bookID', (req, res) => {

    const bookID = req.params.bookID;

    // 1. Get category of current book
    const categorySQL = 'SELECT category FROM book WHERE bookID = ?';

    connection.query(categorySQL, [bookID], (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const category = result[0].category;

        // 2. Get related books
        const relatedSQL = `
            SELECT * 
            FROM book 
            WHERE category = ? 
            AND bookID != ?
        `;

        connection.query(relatedSQL, [category, bookID], (err, relatedBooks) => {

            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Database error' });
            }

            return res.json(relatedBooks);
        });
    });
});

//admin dashboard
// Dashboard stats
app.get('/api/dashboard', (req, res) => {
  const stats = {};

  // Total books
  connection.query('SELECT COUNT(*) AS totalBooks FROM book', (err, result) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    stats.totalBooks = result[0].totalBooks;

    // Total users
    connection.query('SELECT COUNT(*) AS totalUsers FROM users', (err2, result2) => {
      if (err2) return res.status(500).json({ message: 'DB error' });
      stats.totalUsers = result2[0].totalUsers;

      // Per category
      connection.query('SELECT category, COUNT(*) AS count FROM book GROUP BY category', (err3, result3) => {
        if (err3) return res.status(500).json({ message: 'DB error' });
        stats.categories = result3;

        // Low stock
        connection.query('SELECT title, stockQuantity FROM book WHERE stockQuantity < 5', (err4, result4) => {
          if (err4) return res.status(500).json({ message: 'DB error' });
          stats.lowStock = result4;

          res.json(stats);
        });
      });
    });
  });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

 
//image upload setup
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

//insert-book route
app.post('/api/add-book', upload.single('image'), (req, res) => {

    const {
        isbn,
        author,
        title,
        price,
        stockQuantity,
        category,
        description
    } = req.body;

    const imagePath = `images/${req.file.filename}`;

    const sql = `
        INSERT INTO Book 
        (ISBN, author, title, price, stockQuantity, category, image, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [
        isbn,
        author,
        title,
        price,
        stockQuantity,
        category,
        imagePath,
        description
    ], (err, result) => {
        if (err) {
            console.error(err);
            return res.json({success:false,message:"Error inserting book"});
        }

        res.json({success:true,message:"Book added successfully!"});
    });
});

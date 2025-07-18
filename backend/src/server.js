require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Sports Store Backend!" });
});

// Routes will be added here later
// app.use('/api/products', require('./routes/products'));
// app.use('/api/users', require('./routes/users'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

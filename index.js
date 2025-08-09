require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Gulfhire API running ✅');
});

// Database connect
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/gulfhire-dev';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected ✅'))
  .catch(err => console.error('MongoDB connection error:', err.message));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));

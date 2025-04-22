const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Great Work and setup of Backend !! E-commerce backend is running!');
});
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "Wireless Mouse", price: 29.99 },
    { id: 2, name: "Mechanical Keyboard", price: 79.99 },
    { id: 3, name: "USB-C Cable", price: 9.99 },
    { id: 4, name: "HDMI Cable", price: 14.99 },
    { id: 5, name: "Laptop Stand", price: 49.99 },
    { id: 6, name: "Webcam", price: 89.99 },
    { id: 7, name: "External Hard Drive", price: 129.99 },
    { id: 8, name: "Wireless Charger", price: 39.99 },
    { id: 9, name: "Bluetooth Headphones", price: 59.99 },
    { id: 10, name: "Smartphone Stand", price: 19.99 },
    { id: 11, name: "Portable SSD", price: 99.99 },
    { id: 12, name: "Gaming Mouse Pad", price: 29.99 },
    { id: 13, name: "Laptop Sleeve", price: 24.99 },
    { id: 14, name: "Wireless Earbuds", price: 69.99 },
    { id: 15, name: "Smartwatch", price: 199.99 },
    { id: 16, name: "Fitness Tracker", price: 49.99 },
    { id: 17, name: "Portable Bluetooth Speaker", price: 79.99 },
    { id: 18, name: "VR Headset", price: 299.99 },
    { id: 19, name: "Smart Home Hub", price: 129.99 },
    { id: 20, name: "Streaming Device", price: 49.99 }
  ]);
});
app.use('/api', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecom')
.then(() => {
  app.listen(PORT, () => {
    console.log(`Backend Server running on port ${PORT}`);
  });
}).catch(err => console.error(err));

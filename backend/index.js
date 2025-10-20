const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const conn = require('./db/conn');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: [
    'http://127.0.0.1:5500',
    'http://localhost:5500',  
    'http://localhost:3000'   
  ],
}));

app.use(cors());
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/auth/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/uploads', express.static('uploads'));
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

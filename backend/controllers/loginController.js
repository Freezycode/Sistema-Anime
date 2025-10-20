const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Usuario não encontrado' });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }
      const token = jwt.sign(
        { id: user._id, email: user.email, name: user.name },
        'segredo123',
        { expiresIn: '1d' }
      );
      res.status(200).json({
        message: 'Login realizado com sucesso',
        token,
        userId: user._id, 
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          foto: user.foto
            ? `http://localhost:5000/uploads/${user.foto}`
            : 'http://localhost:5000/uploads/default.png'
        }
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ message: 'Erro ao realizar login.' });
    }
  }
};

module.exports = loginController;

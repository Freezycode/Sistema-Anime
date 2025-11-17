const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerController = {
  async register(req, res) {
    try {
      console.log('Dados recebidos do formulário:', req.body);
      console.log('Arquivo recebido:', req.file);

      const { name, email, password } = req.body;
      const foto = req.file ? req.file.filename : 'default.png';

      if (!name || !email || !password) {
        console.log('Faltando campos obrigatórios');
        return res.status(400).json({ message: 'Preencha todos os campos' });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log('Email já cadastrado:', email);
        return res.status(400).json({ message: 'Email já cadastrado!' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        foto
      });

      await newUser.save();
      console.log('Usuário salvo no MongoDB com sucesso:', name);

      res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });

    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
    }
  }
};

module.exports = registerController;


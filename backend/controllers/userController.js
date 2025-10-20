const User = require('../models/User');

const userController = {
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        foto: user.foto || 'default.png'
      });
    } catch (err) {
      console.error('Erro ao buscar usuário:', err);
      res.status(500).json({ message: 'Erro ao buscar usuário.' });
    }
  }
};

module.exports = userController;

const Review = require('../models/Review');
const User = require('../models/User');

const reviewController = {
  async getReviews(req, res) {
    try {
      const { anime } = req.params;
      const reviews = await Review.find({ anime }).sort({ createdAt: -1 });
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ message: 'Erro ao buscar comentários.' });
    }
  },

  async addReview(req, res) {
    try {
      const { anime, text, userId } = req.body;
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: 'Usuario nao encontrado' });

      const newReview = new Review({
        anime,
        text,
        userId,
        userName: user.name,
        userFoto: user.foto
      });

      await newReview.save();
      res.status(201).json({ message: 'Comentario adicionado!', review: newReview });
    } catch (err) {
      console.error('Erro ao adicionar comentário:', err);
      res.status(500).json({ message: 'Erro ao adicionar comentário.' });
    }
  }
};

module.exports = reviewController;

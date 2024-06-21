const express = require("express");
const router = express.Router();
const users = require("../controllers/users.controller");
const auth = require("../middlewares/auth.middelware");

//Users routes
router.post('/users', users.create);
router.post('/login', users.login);
router.get('/profile', auth.checkAuth, users.profile);
router.get('/users', auth.checkAuth, users.list);
router.get('/users/:id', auth.checkAuth, users.detail);
router.patch('/users/:id', auth.checkAuth, users.update);
router.delete('/users/:id', auth.checkAuth, users.delete);




router.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada'});
});
router.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({ message: 'Error interno del servidor'});
});

module.exports = router;
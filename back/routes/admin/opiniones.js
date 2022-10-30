var express = require('express');
var router = express.Router();

/* GET opiniones page. */
router.get('/', function(req, res, next) {
  res.render('admin/opiniones', {
    layout: 'admin/layout',
    persona: req.session.nombre_usuario
  });
});

module.exports = router;
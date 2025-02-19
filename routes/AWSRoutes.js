const express = require('express');
const router = express.Router();
const AWSController = require('../Controller/AWSController.js');

router.post('/aws', awsController.criarImagem);
router.get('/aws/:id', awsController.pegarImagem);
router.get('/aws/:referencia/:arquivo', awsController.pegarImagemAws);

module.exports = router;


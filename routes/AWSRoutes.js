const express = require('express');
const router = express.Router();
const awsController = require('../Controller/AWSController.js'); 

router.post('/aws', awsController.criarImagem);
router.get('/aws/baixar/:arquivoNome', awsController.pegarImagemAWS);

module.exports = router;



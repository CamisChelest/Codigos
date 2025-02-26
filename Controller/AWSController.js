const { criar, pegarDaAws } = require("../service/AWSService");

const criarImagem = async(req, res) => {
    const {idUsuario} = req.body;
    try{
        await criar(idUsuario);
        res.status(200).json("Imagem adicionada");
    } catch (error){
        res.status(400).json({error: error.message});
    };
};

const pegarImagemAWS = async(req, res) => {
    const { arquivoNome } = req.params;
    console.log(arquivoNome);
    try{
        const imagem = await pegarDaAws( arquivoNome);
        res.status(200).json( arquivoNome);
    } catch (error){
        res.status(400).json({error: error.message});
    };
};

module.exports = { criarImagem, pegarImagemAWS };
const { criar, buscarPorId, pegarDaAws } = require("../service/AWSService");

const criarImagem = async(req, res) => {
    const {idUser} = req.body;
    try{
        await criar(idUser);
        req.status(200).json("Imagem adicionada");
    } catch (error){
        req.status(400).json({error: error.message});
    };
};

const pegarImagem  = async(req, res) => {
    const {id} = req.params;
    try{
        const imagem = await buscarPorId(id);
        req.status(200).json(imagem);
    } catch(error){
        req.status(400).json({error: error.message});
    };
};

const pegarImagemAWS = async(req, res) => {
    const {referencia, arquivoNome} = req.body;
    try{
        const imagem = await pegarDaAws(referencia, arquivoNome);
        req.status(200).json(referencia, arquivoNome);
    } catch (error){
        req.status(400).json({error: error.message});
    };
};

module.exports(criarImagem, pegarImagem, pegarImagemAWS);
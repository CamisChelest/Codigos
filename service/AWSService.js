//camada intermediária, chama o Repository
const { criarImagemNoBanco, pegarNoAws } = require("../repository/AWSRepository");

async function criar(idUser){
    try{
        return await criarImagemNoBanco(idUser);
    } catch(error){
        console.error("Erro ao tentar criar imagem...", error.message);
        throw error;
    };
};

async function pegarDaAws( arquivoNome){
    try{
        return await pegarNoAws(arquivoNome);
    } catch (error){
        console.error("Erro ao tentar abaixar a imagem", error.message);
        throw error;
    };
};

module.exports = { criar, pegarDaAws}
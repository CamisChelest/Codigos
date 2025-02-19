const { criarImagemNoBanco, pegarImagemNoBanco, baixarImagem } = require("../repository/AWSRepository");

async function criar(idUser){
    try{
        return await criarImagemNoBanco(idUser);
    } catch(error){
        console.error("Erro ao tentar criar imagem...", error.message);
        throw error;
    };
};

async function buscarPorId(referencia){
    try{
        return await pegarImagemNoBanco(referencia);
    } catch (error){
        console.error("Erro ao tentar pegar imagem do Banco", error.message);
        throw error;
    };
};

async function pegarDaAws(referencia, arquivoNome){
    try{
        return await baixarImagem(referencia, arquivoNome);
    } catch (error){
        console.error("Erro ao tentar abaixar a imagem", error.message);
        throw error;
    };
};
const {criarImagem, buscarImagemId, listarImagem, editarImagem, removerImagem} = require ('../service/imagemService');

//post
const criar = async (req, res) => {
    const {referencia, data_criacao, titulo} = req.body;
    try{
        await criarImagem(referencia, data_criacao, titulo);
        res.status(200).json("Imagem criada");
    } catch(error){
        res.status(400).json({error: error.message});
    };
};

//get
const listar = async (req, res) => {
    try{
        const lista = await listarImagem();
        res.status(200).json(lista);
    } catch (error){
        res.status(400).json({error: error.message});
    };
};

//get
const obterPorId = async (req, res) => {
    const {id} = req.params;
    try{
        const imagem = await buscarImagemId(id);
        res.status(200).json(id); 
    } catch(error){
        res.status(400).json({error: error.message});
    };
};

//put
const atualizar = async(req, res) => {
    const {id} = req.params;
    const {referencia, data_criacao, titulo} = req.body;
    try{
        await editarImagem(referencia, data_criacao, titulo);
        res.status(200).json("Imagem Atualizada");
    } catch(error){
        res.status(400).json({error: error.message});
    };
};

//delete
const deletar = async (req, res) => {
    const {id} = req.params;
    try{
        await removerImagem(id);
        res.status(200).json("Imagem deletada");
    } catch (error){
        res.status(400).json({error: error.message});
    };
};
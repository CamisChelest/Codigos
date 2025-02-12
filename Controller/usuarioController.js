const { criarUsuario, buscarPorId, listarUsuarios, editarUsuarios, removerUsuarios} = require('../service/usuarioService');

//post
const criar = async (req, res) => {
    const {nome, data_criacao} = req.body;

    try{
        await criarUsuario(nome, data_criacao);
        res.status(200).json("Usuário adicionado");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//get
const listar = async (req, res) => {
    try{
        const lista = await listarUsuarios();
        res.status(200).json(lista);
    } catch (error){
        res.status(400).json({error: error.message});
    };
};

//get
const obterPorId = async (req, res) => {
    const {id} = req.params;
    try{
        const usuario = await buscarPorId(id);
        res.status(200).json(usuario);
    } catch (error){
        res.status(400).json({error: error.message});
    };
};

//put
const atualizar = async (req, res) => {
    const {id} = req.params;
    const {nome, data_criacao} = req.body;
    try{
        await editarUsuarios (id, nome, data_criacao);
        res.status(200).json("Usuário Atualizado");
    } catch(error){
        res.status(400).json({error: error.message});
    };
};

//delete
const deletar = async(req,res) => {
    const {id} = req.params;
    try{
        await removerUsuarios (id);
        res.status(200).json("usuário deletado");
    } catch (error){
        res.status(400).json({error: error.message});
    };
};
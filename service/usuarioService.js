const {adicionarUsuario, buscarUsuarioPorId, listarUsuarioNoBanco, atualizarUsuario, deletarUsuario} = require('../repository/usuarioRepository');
 const Usuario = require('../models/usuarioModel');

async function criarUsuario(nome,data_criacao) {
    let usuario = new Usuario (null, nome, data_criacao);
    try{
        await adicionarUsuario(usuario);
    } catch (error) {
        console.error("Erro ao adicionar usuario ao banco de dados", error.message);
        throw error;
    }
}

async function buscarPorId(id){
    try{
        return await buscarUsuarioPorId(id);
    } catch (error){
        console.error("Erro ao buscar usuario no banco de dados", error.message);
        throw error;
    }
}


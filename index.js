const { conectarBanco } = require('./repository/db');
conectarBanco();


const express = require('express');
const app = express();
const userRoutes = require('./routes/usuarioRoutes');
const imagemRoutes = require('./routes/imagemRoutes');
const awsRoutes = require('./routes/AWSRoutes');

app.use(express.json());
app.use(userRoutes);
app.use(imagemRoutes);
app.use(awsRoutes);


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
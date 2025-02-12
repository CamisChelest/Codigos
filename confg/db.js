const mysql = require('msql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cloud_banco'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de daods:', err);
        return;
    }
    console.log('Conectado com o banco MSQL')
})

module.exports = connection;
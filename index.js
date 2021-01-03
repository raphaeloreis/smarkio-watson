const express = require('./config/customExpress');
const conn = require('./db/connect');
const Tables = require('./db/tables');

conn.connect(erro => {
    if(erro){
        console.log(erro);
    }else{
        Tables.init(conn);
        const app = express();
        app.listen(3000, () => console.log('Servidor rodando! Para acessar utilize a url http://localhost:3000'));
    }
});


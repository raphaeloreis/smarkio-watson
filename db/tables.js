const conn = require("./connect");

class Tables{
    init(conn){
        this.conn = conn;
        this.createComentario();
    }

    createComentario(){
        const sql = 'CREATE TABLE IF NOT EXISTS comentario (id int NOT NULL AUTO_INCREMENT, comentario TEXT NOT NULL, PRIMARY KEY (id));';
        this.conn.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela comentario checada');
            }
        });
    }
}

module.exports = new Tables;
const Comentario = require('../models/comentarios');

module.exports = app => {
    app.get('/comentarios', (req,res) => {
        Comentario.list(res);
    });
    app.post('/comentarios', (req,res) =>{
        const comentario = req.body
        Comentario.create(comentario,res)
    });
    app.get('/', (req,res) => {
        res.render('index.html');
    })
    app.get('/comentarios/ler/:id', (req,res) => {
        const id = parseInt(req.params.id)
        Comentario.read(id,res);
    });
}


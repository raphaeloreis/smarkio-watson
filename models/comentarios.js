const conn = require('../db/connect');

class Comentario{
    create(comentario,res){
        const sql = 'INSERT INTO comentario SET ?';
        conn.query(sql, comentario, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(result);
            }
        });
    }

    list(res){
        const sql = 'SELECT * FROM comentario ORDER BY id DESC';
        conn.query(sql, (erro,results) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(results);
            }
        });
    }

    read(id,res){
        const sql = `SELECT comentario as text FROM comentario WHERE id=${id}`;
        conn.query(sql, (erro, result) => {
            const text = result[0].text;
            if(erro){
                res.status(400).json(erro);
            }else{
                const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
                const wav = require('wav');
                const Speaker = require('speaker');
                const { IamAuthenticator } = require('ibm-watson/auth');

                const textToSpeech = new TextToSpeechV1({
                    authenticator: new IamAuthenticator({ apikey: '4VjeWbdzNIo8GCAK7moM4yN5zbTyCAmagJdWqjRht1mO' }),
                    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com'
                });

                const reader = new wav.Reader();

                // the "format" event gets emitted at the end of the WAVE header
                reader.on('format', function (format) {
                // the WAVE header is stripped from the output of the reader
                reader.pipe(new Speaker(format));
                });

                textToSpeech
                .synthesize({ text: result[0].text, accept: 'audio/wav', voice:'pt-BR_IsabelaV3Voice' })
                .then(response => {
                    response.result.pipe(reader);
                })
                .catch(err => {
                    console.log(err);
                });
                
                
            }
        })
    }
}

module.exports = new Comentario
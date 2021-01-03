function readComment(id){
      var jsonData = {comentario:$('#inputComentario').val()};
        $.ajax({
          url: 'http://localhost:3000/comentarios/ler/'+id,
          type: 'GET',
          dataType: "json",
          data: jsonData,
          beforeSend: function(){
          },
          sucess: function(){
          },
          error: function(err){
            console.log(err);
          }
        }).done(function(){
          console.log('Comentário '+id+' lido!');
        });

}
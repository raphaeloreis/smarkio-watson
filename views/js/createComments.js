$(document).ready(function(){
	$('#submit').on('click',function(){
		var jsonData = {comentario:$('#inputComentario').val()};
		$.ajax({
			url: 'http://localhost:3000/comentarios',
			type: 'POST',
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
			alert('Comentário cadastrado com sucesso!');
			$('#inputComentario').val('');
			loadComments();
		});
	});
});
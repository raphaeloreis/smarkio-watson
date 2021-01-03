$(document).ready(function(){
	loadComments();
});

function loadComments(){
	let divComments =  document.getElementById("divComments");
	$.ajax({
		url: 'http://localhost:3000/comentarios',
		type: 'GET',
		sucess: function(){
		},
		error: function(err){
			console.log(err);
		}
	}).done(function(results){
		divComments.innerHTML = '';
		results.forEach(function (comment){
			divComments.innerHTML = divComments.innerHTML + 
			"<div class='comment text-justify col-12'>"+
				"<p>"+comment.comentario+"</p>"+
				"<div class='form-group'> <button type='button' id='post' onClick=\"readComment('"+comment.id+"')\" class='readComment btn'>Ler</button> </div>"+
			"</div>";
		});
	});
}
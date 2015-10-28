
$(document).ready(function() {
	$.ajax({
		url : 'BlogAnalisisController/getAllBlogUser',
		type : 'get',
		dataType : 'json',
			async: true
	}).done(function(data) {
		//console.log(data);
		$.each(data, function(i, obj) {
			$('#container').append(" <div class='row'>" +
					" <div class='col-sm-10 col-lg-8 col-sm-offset-1 col-lg-offset-2' style='padding:10px 10px 10px 10px; background:#E9E9E9; margin-top :25px; '>" +
						"<div class='row'>" +
								"<div class='col-sm-8 col-md-9 col-lg-10'>" +
										"<p><span >Nombre del cliente: </span><span id='nameCte'><strong>"+obj.name+"</strong></span><br/>" +
											" <span>Alias: </span><span id='nameAlias'><strong>"+obj.username+"</strong></span><br/>" +
											"<span>Cliente &Uacutenico: </span><span id='nameAlias'><strong>"+obj.user_id+"</strong></span></p>" +
												"<p><span><small>viernes 21 de mayo de 2015</small></span><br/></p>" +
												"<textarea class='form-control' rows='3' id='textAlias"+obj.id_blog_user+"'></textarea>" +
												" <br/>" +
												"<div class='col-xs-12 col-sm-4 col-md-3 col-sm-offset-8 col-md-offset-9'>" +
												" <a role='button' href='#' class='btn btn-primary btn-block' id='baja"+obj.id_blog_user+"'>Baja de Alias</a>" +
												" </div>"+
												" </div>" +
                                                              " <br/>"+
                                                               "<hr/>"+
                                                               "<br/>"+
                                               "</div></div><br>");
			 $('#baja'+obj.id_blog_user).click(function(){
					var respaldo =$("#textAlias"+obj.id_blog_user).val();
					deleteUser(obj.contrato,obj.user_id,respaldo);
				 });
		});
	}).fail(function() {
	});
});

function deleteUser(contrato,idusuario,respaldo){
	var respaldo2=encodeURIComponent(respaldo);
	var jsonData = {
			'contrato': contrato,
			'idusuario': idusuario,
			'mensaje': respaldo2
		};
	
	$.ajax({
		url : 'BlogAnalisisController/deleteUser',
		type : 'get',
		dataType : 'json',
		data : jsonData,
	}) .done(function(data){
 	location.reload();
   });
}


$(document).ready(function() {

	var usuarioparametro =$('#usuario',top.document).attr("value");

	var jsonData = {
			'usuario' : usuarioparametro
	
		};
					//var base = dataBack;
					$('#conMensaje').hide();
					$('#sinMensaje').hide();
				
					urlRestWish='WishListController/getMessage';
					
					$.ajax({
						url : urlRestWish,
						type : "GET",
						dataType : "json",
						data : jsonData
					}).done(function(dataMessage) {
					
						if(dataMessage.mensaje==null){
							$("#sinMensaje").show();
							$("#sinMensaje").click(function() {
								redirecionar(dataMessage);
								$("#inMensaje",top.document).val(dataMessage.mensaje);
							});
						}else{
							$("#conMensaje").show();
							$("#conMensaje").click(function() {
								redirecionar(dataMessage);
							});
						}
					}).fail(function() {
						
					});

				});

function redirecionar(dataMessage) {
	$.ajax({
		url : 'WishListController/formWishList',
		dataType : 'html',
		type : 'get'
	}).done(function(data) {
		$(top.document.body).prepend(data);
		$("#inMensaje",top.document).val(dataMessage.mensaje);
	}).fail(function() {
	});

}
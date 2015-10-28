//perfila cambio de pass
$(document).ready(function() {
	$("#cambiarpass").click(function() {
		var oldpass =$("#passwordanterior").val();
		var user =$('#usuario',top.document).attr("value");
		var newpass =$("#passwordnuevo").val();
		var newpass2 =$("#passwordnuevo2").val();
		if((oldpass.length == 0)&&(oldpass=="")){
			alert("Ingrese un valor");
		}else if((newpass.length == 0)&&(newpass=="")){
			alert("Ingrese un valor");
		}else if(newpass!=newpass2){
		alert("los password  no coinciden");
		}else{
			updatePass(user,oldpass,newpass);
		}
	});
});

function updatePass(user,oldpass,newpass){
	var output;
	var oldpass2=encodeURIComponent(oldpass);
		var newpass2=encodeURIComponent(newpass);
	var jsonData = {
			'user': user,
			'oldpass':oldpass2,
			'newpass':newpass2
		};
	
	$.ajax({
		url : 'BlogAnalisisController/updPasswordUser',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		 async: false
	}) .done(function(data){
     //console.log(data);
     if(data.user_id==null){
    		alert("password incorrecto");
     }else{
    	 alert("El password se cambio conexito");
    	 $('.jumbotron').hide();
    	 $(".msgError").val("Enviado..");
     }

   });
   return output;
	
}
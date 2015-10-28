//administrador post solo analista
$(document).ready(function() {
	var fromdebug=false;
	var usuarioparametro;
	var name;
	if(fromdebug==true){
		usuarioparametro="jcolin";
		name="jcolin";
	}else{
		usuarioparametro =$('#usuario',top.document).attr("value");
		name =$('#usuario',top.document).attr("name");
	}
	var USUARIOTEMP;
	var ALIAS;
	estatusBan=0;
	resultados=getStatusAlias(usuarioparametro);
	if(resultados==null){
		showelement="style='display:none;'";
	}else{
		showelement="";
	}
	//obtengo estatus
	getStatusByUser(usuarioparametro);
	//inicio  editor
	$("#txtEditor").Editor();   
	   $('#redactar').click(function(){
		$('#redactar').hide( "slow", function() {
			$(".demo2").empty();
			showFormEdit();
		});
	});
	   //cancelar editor
	 $('#cancelar').click(function(){
		 $("#redactar").show();
		 $("#formEdit").hide();
		 $(".allcontent").show();
	}); 
	 //publicar editor
	 $('#publicar').click(function(){
		 var title=$("#title").val();
		 var content= 	$("#txtEditor").Editor("getText");
		 var imageuser=$("#imguserr").val();
		 setPost(content,title,usuarioparametro);
		 
	});
	var firstVisit=0;
	 $('#miboton').click(function(){
		 var word=$("#inputSearch").val();
		 getPostbyWord(word);
	});
});



function getPostPage(num){
	$(".content2t").empty();
	//alert("estoy en la espcial");
	var jsonData = {
			'page' : num
		};
	var arraybodyPost = new Array();
		$.ajax({
			url : 'BlogAnalisisController/getPostByPage',
			type : 'get',
			dataType : 'json',
			data : jsonData,
			async: true
		}).done(function(data) {
			var counter=1;
			//counter=num;
			var myJsonString = JSON.stringify(data);
			$("#postblog").val(myJsonString);
			$("#postblog").show();
			var idPost;
			var imgAutor;
			var title;
			var bodypost;
			$.each(data, function(i, obj) {
					getComment(obj.idPost);
					getLikePost(obj.idPost);
					getCountComment(obj.idPost);
								arraybodyPost[i]=obj.articulo;
								var num=i;
								num++;
								//console.log(obj);
								var cadena="";
								var datefort=formatDate(obj.datePublic);
								var styleNotification="style='background-color: #5B5B5F;border-radius: 20px;border: 1px solid rgba(100, 100, 100, .4);-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, .45);overflow: visible;position: absolute;top: 30px;margin-left: 470px;width: 20%;z-index: 1000;display: none'";
								idPost=obj.idPost;
								imgAutor=obj.imgAutor;

								if(resultados==null){
									resultados =$('#usuario',top.document).attr("name");
								}
								//console.log("resultado en post"+resultados);
								counterP=counter;
								idPostP=obj.idPost;
								imgAutorP=obj.imgAutor;
								autorP=obj.autor;
								datefortP=datefort;
								tituloP=obj.titulo;
								articuloP=obj.articulo;
								styleNotificationP=styleNotification;
								showelementP=showelement;
								resultadosP=resultados;
								cadenaP=cadena;
								setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP);
								$(function(){
									$("#form"+obj.idPost).ebcaptcha();
								});
								
								//lista de usuarios que dieron like
								$("#likepost"+obj.idPost).click(function(){
								alert(obj.idPost);
									$('.listacont').empty();
									var username;
									  var jsonData = {
												'idPost': obj.idPost
											};
										$.ajax({
											url : 'BlogAnalisisController/getUserLikeIdPost',
											type : 'get',
											dataType : 'json',
											data : jsonData,
											async: false
										}).done(function(data20) {
											$.each(data20, function(i, obj) {
												$('#contentUserlike'+obj.id_post).append("<li ><a name='MyLinks' id='liga"+obj.id_post+"' id='lista'>"+obj.username+"</a></li> <br>");
											});
											
											$("#notificationContainer"+obj.idPost).fadeToggle(300);
											$("#notificationContainer"+obj.idPost).css({
											"textAlign":"center",
											"secondCSSProperty":"value", 
											"content": "' '",
											"display": "block",
											"position": "absolute",
											"color": "transparent",
											"border": "10px solid black",
											"border-color": "transparent ",
											"margin-top": "-20px",
											"margin-left": "80%"});		
							
										}).fail(function() {
										});
										return false;
										});
										//Document Click
										$(document).click(function()
										{
											$("#notificationContainer"+obj.idPost).hide();
										});
										//Popup Click
											$("#notificationContainer"+obj.idPost).click(function()
										{
										return false;
										});
								
										
								//fucionalidad insertar y mostrar like
								$('#megusta'+obj.idPost).click(function(){
									var usuarioparametro =$('#usuario',top.document).attr("value");
									var respaldo =$("#likepost"+obj.idPost).attr("value");
									var user="capa";
									var jsonData = {
											'idPost' : obj.idPost,
											'user' :usuarioparametro
									};
									$.ajax({
										url : 'BlogAnalisisController/setLikePost',
										type : 'get',
										dataType : 'json',
										data : jsonData,
										async: true
									}).done(function(data5) {
										if(data5!=0){
											$("#likepost"+obj.idPost).empty();
											$('#likepost'+obj.idPost).append(data5);
										}else{
										}
									}).fail(function() {
									});
								});
				  //fucioinalidad comentar y modal
				  
						$("#addComment"+obj.idPost).click(function() {
							usuario =$('#usuario',top.document).attr("value");
							var show=0;
							name =$('#usuario',top.document).attr("name");
									  var jsonData = {
												'user': usuario
											};
										$.ajax({
											url : 'BlogAnalisisController/getStatusByUser',
											type : 'get',
											dataType : 'json',
											data : jsonData,
											async: true
										}).done(function(data9) {
										if(data9.username!=null){
										}else{
											$('#containerInputs').hide();
											$('#formmodal').hide();
										
											$('#backModWish').modal('show');
											$('#myForm input').on('change', function() {
												   if($('input[name="inlineRadioOptions"]:checked', '#myForm').val() == "2"){
												        $('#containerInputs').show();
												        $('#formmodal').show();
												        $('#guardarname').toggle()();
												        show=1;
												    }else{
												    	show=2;
												    	$('#formmodal').toggle();
												    	$('#containerInputs').hide();
												    	$('#guardarname').toggle()();
												    }
											});
											$("#formmodal").ebcaptcha();
										}
										
										$("#guardarname").click(function(){
											usuario =$('#usuario',top.document).attr("value");
											show=2;
											name =$('#usuario',top.document).attr("name");
											setAlias(usuario,name,name,show);
										});
										
										$("#saveUsername").click(function(){
											var taliasConfir=$('#confalias').val();
											show=1;
											setAlias(usuario,taliasConfir,name,show);
										});
										}).fail(function() {
									});
						});	
								
						
						//guardar comentario
						$('#enviar'+obj.idPost).click(function(){
							var user =$('#usuario',top.document).attr("value");
					  	var comment= $("#addComment"+obj.idPost).val();
					  	
					  	$(function(){
							$("#form"+obj.idPost).empty();
					    });
					  	
						var jsonData = {
								'idPost' : obj.idPost,
								'comment' :comment,
								'user' :user
							};
						$.ajax({
							url : 'BlogAnalisisController/setComment',
							type : 'get',
							dataType : 'json',
							data : jsonData,
							async: false
						}).done(function(data2) {
							$(".commentstl"+obj.idPost).empty();
							getComment(obj.idPost);
							getCountComment(obj.idPost);
						}).fail(function() {
						alert("error");
						});
				});
					if(counter<=2){
						   cadena="style=''";
						 }else{
							$(".content"+counter).remove();
						}
				  counter=counter+1;
				  
			});//fin de loopoop
		}).fail(function() {
		});
	}



function getCountComment(idPost){
	$('#countComment'+idPost).empty();
	var jsonData = {
			'idPost' : idPost
		};
	$.ajax({
		url : 'BlogAnalisisController/getCountComment',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data4) {
		$('#countComment'+idPost).append("<div class='dataCommnetimg'><div class='dataCommnet'>"+data4+"</div></div>");
	}).fail(function() {
	
	});
	
		
   
}


function setLikePost(idPost,user){
	var jsonData = {
			'idPost' : idPost,
			'user' :user
		};
	$.ajax({
		url : 'BlogAnalisisController/setLikePost',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data5) {
	}).fail(function() {
	
	});

}

function showFormEdit(){
	 $(".allcontent").hide();
	$("#formEdit").show();
}

//obtiene post por fecha
function getPostByDate(date){
	$(".content2t").empty();
	var jsonData = {
			'date' :date
		};
	$.ajax({
		url : 'BlogAnalisisController/getPostByDate',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data6) {
		$.each(data6, function(i, objByDate) {
							getComment(objByDate.idPost);
							getLikePost(objByDate.idPost);
							getCountComment(objByDate.idPost);
											
							setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP);
							$(function(){
								$("#form"+obj.idPost).ebcaptcha();
							});
		
		//lista de usuarios que dieron like
							$("#likepost"+obj.idPost).click(function(){
									$('.listacont').empty();
									var username;
									var jsonData = {
											'idPost': obj.idPost
									};
									$.ajax({
										url : 'BlogAnalisisController/getUserLikeIdPost',
										type : 'get',
										dataType : 'json',
										data : jsonData,
										async: false
									}).done(function(data20) {
											$.each(data20, function(i, obj) {
												$('#contentUserlike'+obj.id_post).append("<li ><a name='MyLinks' id='liga"+obj.id_post+"' id='lista'>"+obj.username+"</a></li> <br>");
											});
										
										$("#notificationContainer"+obj.idPost).fadeToggle(300);
										$("#notificationContainer"+obj.idPost).css({
										"textAlign":"center",
										"secondCSSProperty":"value", 
										"content": "' '",
										"display": "block",
										"position": "absolute",
										"color": "transparent",
										"border": "10px solid black",
										"border-color": "transparent ",
										"margin-top": "-20px",
										"margin-left": "80%"});		
						
										}).fail(function() {
										});
									return false;
								});//fin likepost
									//Document Click by list
								$(document).click(function()
									{
										$("#notificationContainer"+obj.idPost).hide();
									});
									//Popup Click
										$("#notificationContainer"+obj.idPost).click(function()
									{
								return false;
								});
				
		//fucionalidad insertar y mostrar like
								$('#megusta'+obj.idPost).click(function(){
								var usuarioparametro =$('#usuario',top.document).attr("value");
								var respaldo =$("#likepost"+obj.idPost).attr("value");
								var user="capa";
								var jsonData = {
										'idPost' : obj.idPost,
										'user' :usuarioparametro
								};
								$.ajax({
									url : 'BlogAnalisisController/setLikePost',
									type : 'get',
									dataType : 'json',
									data : jsonData,
									async: true
								}).done(function(data5) {
									if(data5!=0){
										$("#likepost"+obj.idPost).empty();
										$('#likepost'+obj.idPost).append(data5);
									}else{
									}
								}).fail(function() {
								});
							});
//fucioinalidad comentar y modal

							$("#addComment"+obj.idPost).click(function() {
								usuario =$('#usuario',top.document).attr("value");
								var show=0;
								name =$('#usuario',top.document).attr("name");
										  var jsonData = {
													'user': usuario
												};
											$.ajax({
												url : 'BlogAnalisisController/getStatusByUser',
												type : 'get',
												dataType : 'json',
												data : jsonData,
												async: true
											}).done(function(data9) {
											if(data9.username!=null){
											}else{
												$('#containerInputs').hide();
												$('#formmodal').hide();
												$('#backModWish').modal('show');
												$('#myForm input').on('change', function() {
													   if($('input[name="inlineRadioOptions"]:checked', '#myForm').val() == "2"){
													        $('#containerInputs').show();
													        $('#formmodal').show();
													        $('#guardarname').toggle()();
													        show=1;
													    }else{
													    	show=2;
													    	$('#formmodal').toggle();
													    	$('#containerInputs').hide();
													    	$('#guardarname').toggle()();
													    }
												});
												$("#formmodal").ebcaptcha();
											}
											
											$("#guardarname").click(function(){
												usuario =$('#usuario',top.document).attr("value");
												show=2;
												name =$('#usuario',top.document).attr("name");
												setAlias(usuario,name,name,show);
											});
											
											$("#saveUsername").click(function(){
												var taliasConfir=$('#confalias').val();
												show=1;
												setAlias(usuario,taliasConfir,name,show);
											});
											}).fail(function() {
										});
							});	
		

//guardar comentario
							$('#enviar'+obj.idPost).click(function(){
								var user =$('#usuario',top.document).attr("value");
								var comment= $("#addComment"+obj.idPost).val();
								$(function(){
									$("#form"+obj.idPost).empty();
								});
								var jsonData = {
										'idPost' : obj.idPost,
										'comment' :comment,
										'user' :user
									};
								$.ajax({
									url : 'BlogAnalisisController/setComment',
									type : 'get',
									dataType : 'json',
									data : jsonData,
									async: false
								}).done(function(data2) {
									$(".commentstl"+obj.idPost).empty();
									getComment(obj.idPost);
									getCountComment(obj.idPost);
								}).fail(function() {
									alert("error");
								});
							});
		if(counter<=2){
				cadena="style=''";
						}else{
						$(".content"+counter).remove();
						}
						counter=counter+1;
						});
					}).fail(function() {
									
				});
}

function getStatusByUser(user){
	var jsonData = {
			'user' :user
		};
	$.ajax({
		url : 'BlogAnalisisController/getStatusByUser',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data8) {
		if(data8.estatus==2){
			if(user==data8.user_id){
				$('#imguser').append("<input type='text' value='"+data8.image+"'/>");
			}
			
			$("#redactar").show();	
	}else{
		$("#redactar").hide();	
	}
	
	
	}).fail(function() {
	});

}

function setAlias(user,name,nameTr,show){
	
	var estatus=1;
	var imguser="usuario_sin_imagen_usuario_generico_estatus_uno";
	var jsonData = {
			'user' :user,
			'alias' :name,
			'estatus': estatus, 
			'name': nameTr,
			'show': show,
			'imguser':imguser
		};
	$.ajax({
		url : 'BlogAnalisisController/setAlias',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data10) {
		location.reload();
	
	}).fail(function() {
	});

}

function formatDate(date){
	
	 var res = date.split("-");
	 var dia = res[0];
	 var mes = res[1];
	 var anio = res[2];
	 var dateIng=anio+"-"+mes+"-"+dia;
	 var day = moment(date, "YYYYY/MM/DD");
	var dia=day.format('dd');
	var dayStr;
	 switch(dia) {
	    case 'Mo':
	    	dayStr="Lunes";
	        break;
	    case 'Tu':
	    	dayStr="Martes";
	        break;
	    case 'We':
	    	dayStr="Miercoles";
	        break;
	    case 'Th':
	    	dayStr="jueves";
	        break;
	    case 'Fr':
	    	dayStr="Viernes";
	        break;
	    case 'Sa':
	    	dayStr="Sabado";
	        break;
	    case 'Su':
	    	dayStr="Domingo";
	        break;
	  
	 }

	var mes=day.format('MM');
	var mesStr;
	 switch(mes) {
	    case '01':
	    	mesStr="Enero";
	        break;
	    case '02':
	    	mesStr="Febrero";
	        break;
	    case '03':
	    	mesStr="Marzo";
	        break;
	    case '04':
	    	mesStr="Abril";
	        break;
	    case '05':
	    	mesStr="Mayo";
	        break;
	    case '06':
	    	mesStr="junio";
	        break;
	    case '07':
	    	mesStr="julio";
	        break;
	    case '08':
	    	mesStr="Agosto";
	        break;
	    case '09':
	    	mesStr="Septiembre";
	        break;
	    case '10':
	    	mesStr="Octubre";
	        break;
	    case '11':
	    	mesStr="Novimebre";
	        break;
	    case '12':
	    	mesStr="Diciembre";
	        break;
	 }
	 
	var dianumero=day.format('DD');
	var anionumero=day.format('YYYY');
	var allString=dayStr+" "+dianumero+" de "+mesStr+ " de "+anionumero;
	return allString;
}
function getPostLastFive(){

	$.ajax({
		url : 'BlogAnalisisController/getPostLastFive',
		type : 'get',
		dataType : 'json',

		async: true
	}).done(function(data11) {
		$.each(data11, function(i, obj) {
			$('#fivepost').append("<li class='listalastfive'><a class='liastafiveaa' name='MyLinks' id='liga"+obj.idPost+"'>"+obj.titulo+"</a></li> ");
			$("#liga"+obj.idPost).click(function(){
				//alert(obj.idPost);
				$('#redactar').hide();
				$("#formEdit").hide();
				getOnlyOnePost(obj.idPost,obj.titulo,obj.autor,obj.imgAutor,obj.articulo,obj.datePublic);
			});
		
		});
	
	}).fail(function() {
	});

}


function getOnlyOnePost(idPost,titulo,autor,imagen,articulo,fecha){
	getComment(idPost);
	getLikePost(idPost);
	getCountComment(idPost);
	$(".content2t").empty();
	$(".demo2").empty();
	
	counterP="";
	idPostP=idPost;
	imgAutorP=imagen;
	autorP=autor;
	datefortP="";
	tituloP=titulo;
	articuloP=articulo;
	styleNotificationP="";
	showelementP="";
	resultadosP=resultados;
	cadenaP="";
	setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP);
	$(function(){
		$("#form"+obj.idPost).ebcaptcha();
	});
	
}//fin funcion

function getPostbyWord(word){
	$(".content2t").empty();
	$(".demo2").empty();
	$("#fivepostword").empty();
	var jsonData = {
			'word' : word
	};
	$.ajax({
		url : 'BlogAnalisisController/getPostByword',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data12) {
		//console.log(data12);
		$.each(data12, function(i, obj) {
			$('#fivepostword').append("<li><a name='MyLinks' id='liga"+obj.idPost+"'>"+obj.titulo+"</a></li> <br>");
			/*$("#liga"+obj.idPost).click(function(){
				//alert(obj.idPost);
				getOnlyOnePost(obj.idPost,obj.titulo,obj.autor,obj.imgAutor,obj.articulo,obj.datePublic);
			});*/
		
		});
		
	}).fail(function() {
	});
	
	
}

function setPost(articulo,title,usuarioid){
	var articulo2=encodeURIComponent(articulo);
	var jsonData = {
			'articulo' : articulo2,
			'title' :title,
			'user' :usuarioid
	};
	$.ajax({
		url : 'BlogAnalisisController/setPostDos',
		type : 'GET',
		dataType : 'html',
		contentType: 'text/html; charset=UTF-8',
		data : jsonData,
		async: true
	}).done(function(data) {
	location.reload();
	}).fail(function() {
	});
	
}


function getStatusAlias(usuario){
	var username;
			  var jsonData = {
						'user': usuario
					};
				$.ajax({
					url : 'BlogAnalisisController/getStatusByUser',
					type : 'get',
					dataType : 'json',
					data : jsonData,
					async: false
				}).done(function(data9) {
					if(data9.show==1){
						username=data9.username;
					}else{
						if(data9.show==2){
						
						username=data9.name;
						}else{
						username=data9.username;
						}
					}
	
				}).fail(function() {
				});
				return username;
	
}
function getUserLikeByIdPost(idPost){
	var username;
			  var jsonData = {
						'user': idPost
					};
				$.ajax({
					url : 'BlogAnalisisController/getUserLikeIdPost',
					type : 'get',
					dataType : 'json',
					data : jsonData,
					async: false
				}).done(function(data20) {
				}).fail(function() {
				});
	
}

function setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP){
	$(".content2t").append("<div class='content"+counterP+"'><br>" +
			"<div  class='allcontent' id='p"+idPostP+"' "+cadenaP+">" +
					"<div>" +
						"<div id='imageL'>" +
							"<img src='"+imgAutorP+"' alt='analista' class='img-responsive' >" +
						"</div>"+
					"<div class='imageR'>" +
						"<div id='titleUserPost'>"+autorP+"</div>" +
						"<div id='dateUserPost'>"+datefortP+"</div>" +
						"<div id='titlePost'>"+tituloP+"</div>" +
					"</div><br>" +
					"<div id='bodyPost'>"+articuloP+"</div></br>" +
					"<div id='footer'>" +
							"<div class='txtMegusta'> " +
									"<label for='likeme' class='liketome' id='megusta"+idPostP+"' "+showelementP+">Me gusta</label>" +
							"</div>" +
							"<li id='notification_li'>"+
									"<div class='likepostimg'><a href='#' id='likepost"+idPostP+"' class='likenum'></a></div>"+
									"<div class='noti' id='notificationContainer"+idPostP+"'"+styleNotificationP+">"+
											"<div id='notificationsBody' class='notifications"+idPostP+"'>" +
												"<ul class='listacont' id='contentUserlike"+idPostP+"'></ul>" +
											"</div>"+
									"</div>"+
							"</li>"+
						"<div id='countComment"+idPostP+"'></div>" +
					"</div>" +
					"<div id='allComents"+idPostP+"'>" +
							"<div class='panel panel-default template' style='background-color: #F9F9F9;'>"+
							"<div class='panel-heading'>" +
								"<h4 class='panel-title'>"+
									"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapse"+idPostP+"'>"+
									"comentarios"+
									"</a>" +
								"</h4>" +
							"</div>"+
							"<div id='collapse"+idPostP+"' class='panel-collapse collapse'>"+
								"<div class='panel-body'>"+
									"<div  id='comment"+idPostP+"' class='commentstl"+idPostP+"'></div>" +
								"</div>"+
"<div id=addComent>"+resultadosP+"<div><input type='text' id='addComment"+idPostP+"' name='blah' class='inputcoment' /></div>" +
"<div id='txtMat'>Por favor responde esta sencilla respuesta matem\u00e1tica.</div>"+
"<br>"+
"<div style='margin-left: 5%'>"+

"<form  id='form"+idPostP+"' class='formulario'><input type='button' id='enviar"+idPostP+"' class='btn btn-primary' ></button></form></div></div>"+
"</div></div>"+
"</div>"+
"</div></div></div></div></p>" +
""
);
	
	
}






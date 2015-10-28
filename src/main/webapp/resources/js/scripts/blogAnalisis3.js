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
	$('#redactar').hide();
	$("#formEdit").hide();
	
	//obtengo los 5 post 
	getPostLastFive();
	//obtengo el alias o nombre
	resultados=getStatusAlias(usuarioparametro);

	//si no tiene alias no le muestra el megusta
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
		// var usarioid =$('#usuario',top.document).attr("value");
		 setPost(content,title,usuarioparametro);
		 
	});
	var firstVisit=0;
	//obtengo los post
	 getPost();
	 //caelnadrio
	 $('#datepicker').datepicker({
		    inline: true,
		    changeMonth : true,
			changeYear : true,
		    dateFormat: 'dd/mm/yy',
		    dayNamesMin: [ "D", "L", "M", "M", "J", "V", "S" ],
		    monthNamesShort: [ "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE","OCTUBRE", "NOVIEMBRE", "DICIEMBRE" ],
		    showOtherMonths: true,
		    selectMultiple:true, 
		    onSelect: function(dateText, inst) {
		        var selectedDate = $(this).datepicker("getDate");
				var date=selectedDate.getDate() +"-"+(selectedDate.getMonth() + 1) + '-' +  selectedDate.getFullYear();
				getPostByDate(date);
		    },
		});
	 //buscador
	 $('#miboton').click(function(){
		 var word=$("#inputSearch").val();
		 console.log("palaba a buscar"+word);
		 getPostbyWord(word);
	});
});

function getPost(){
	var arraybodyPost = new Array();
		$.ajax({
			url : 'BlogAnalisisController/getFolioFront',
			type : 'get',
			dataType : 'json',
				async: true
		}).done(function(data) {
			
			var counter=1;
			//console.log(data);
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
								title;
								bodypost;
								if(resultados==null){
									resultados =$('#usuario',top.document).attr("name");
								}
								//console.log("resultado en post"+resultados);
								$(".content2t").append("<div class='content"+counter+"'><br>" +
															"<div  class='allcontent' id='p"+obj.idPost+"' "+cadena+">" +
																	"<div>" +
																		"<div id='imageL'>" +
																			"<img src='"+obj.imgAutor+"' alt='analista' class='img-responsive' >" +
																		"</div>"+
																	"<div class='imageR'>" +
																		"<div id='titleUserPost'>"+obj.autor+"</div>" +
																		"<div id='dateUserPost'>"+datefort+"</div>" +
																		"<div id='titlePost'>"+obj.titulo+"</div>" +
																	"</div><br>" +
																	"<div id='bodyPost'>"+obj.articulo+"</div></br>" +
																	"<div id='footer'>" +
																			"<div class='txtMegusta'> " +
																					"<label for='likeme' class='liketome' id='megusta"+obj.idPost+"' "+showelement+">Me gusta</label>" +
																			"</div>" +
																				//"<div class='likenum' id='likepost"+obj.idPost+"'></div>" +
																			"<li id='notification_li'>"+
																					"<div class='likepostimg'><a href='#' id='likepost"+obj.idPost+"' class='likenum'></a></div>"+
																					"<div class='noti' id='notificationContainer"+obj.idPost+"'"+styleNotification+">"+
																							"<div id='notificationsBody' class='notifications"+obj.idPost+"'>" +
																								"<ul class='listacont' id='contentUserlike"+obj.idPost+"'></ul>" +
																							"</div>"+
																					"</div>"+
																			"</li>"+
																		"<div id='countComment"+obj.idPost+"'></div>" +
																	"</div>" +
																				/*		"<div id='notificationFooter'><a href='#'>See All</a></div></div></li></ul>"+*/
																	"<div id='allComents"+obj.idPost+"'>" +
																			"<div class='panel panel-default template' style='background-color: #F9F9F9;'>"+
																			"<div class='panel-heading'>" +
																				"<h4 class='panel-title'>"+
																					"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapse"+obj.idPost+"'>"+
																					"comentarios"+
																					"</a>" +
																				"</h4>" +
																			"</div>"+
																			"<div id='collapse"+obj.idPost+"' class='panel-collapse collapse'>"+
																				"<div class='panel-body'>"+
																					"<div  id='comment"+obj.idPost+"' class='commentstl"+obj.idPost+"'></div>" +
																				"</div>"+
										"<div id=addComent>"+resultados+"<div><input type='text' id='addComment"+obj.idPost+"' name='blah' class='inputcoment' /></div>" +
										"<div id='txtMat'>Por favor responde esta sencilla respuesta matem\u00e1tica.</div>"+
										"<br>"+
										"<div style='margin-left: 5%'>"+
  
										"<form  id='form"+obj.idPost+"' class='formulario'><input type='button' id='enviar"+obj.idPost+"' class='btn btn-primary' ></button></form></div></div>"+
										//"<div id='catcha'></div>"+
										"</div></div>"+
										"</div>"+
										"</div></div></div></div></p>" +
										""
									);
								
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
											//"width": "0",
											//"height": "02",
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
									//console.log("click me gusta");
									var usuarioparametro =$('#usuario',top.document).attr("value");
									//usuarioparametro="fferro";
									//console.log(usuarioparametro);
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
										//alert(data4);
										//console.log(data5);
										if(data5!=0){
											$("#likepost"+obj.idPost).empty();
											$('#likepost'+obj.idPost).append(data5);
										}else{
											//$('#likepost'+obj.idPost).append(respaldo);
											//alert("usiario ya le gusta");
										}
									}).fail(function() {
									});
								});
				  //fucioinalidad comentar y modal
				  
						$("#addComment"+obj.idPost).click(function() {
							usuario =$('#usuario',top.document).attr("value");
							var show=0;
							name =$('#usuario',top.document).attr("name");
							//ALIAS="fferro";
							//console.log(ALIAS);
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
											//console.log("*****************");
											//console.log(data9);
										if(data9.username!=null){
											//alert("cuenta con alias");
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
											
										/*	$('#guardarAlias').click(function(){
												var radioValue = $('input[name=inlineRadioOptions]:checked', top.document).val();
												//alert(radioValue);
												
												('#backModWish', top.document).after('<div id="modMail" class="modal-backdrop fade in bodyMap01"></div>');
												var alias=$('#addalias').val();
												
												var aliasConfir=$('#confalias').val();
												if(alias==aliasConfir){
													alert("igual");
													$("#saveUsername").prop( "disabled", false );
												}else{
													alert("no coiciden el alias");
													$("#saveUsername").prop( "disabled", true );
												}
												
											});*/
										}
										
										
										$("#guardarname").click(function(){
											
											usuario =$('#usuario',top.document).attr("value");
											show=2;
											name =$('#usuario',top.document).attr("name");
											setAlias(usuario,name,name,show);
										});
										
										$("#saveUsername").click(function(){
											var taliasConfir=$('#confalias').val();
											//console.log("nuievo alias"+taliasConfir);
											show=1;
											setAlias(usuario,taliasConfir,name,show);
											
										});
											
										}).fail(function() {
									});
						});	
								
						
					
						
						//guardar comentario
						$('#enviar'+obj.idPost).click(function(){
					  	//var user="capistrano";
							var user =$('#usuario',top.document).attr("value");
							//user="NOEXITO";
							//console.log(user);
					  	var comment= $("#addComment"+obj.idPost).val();
					  	
					  	
					  	$(function(){
							$("#form"+obj.idPost).empty();
					    });
					  	
						/*$(function(){
							$("#form"+obj.idPost).ebcaptcha();
					    });
					  	*/
					  	
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
							//console.log(data2);
							
							
							
							
							
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
				  
			});//fin de loop
			
			var numPag=counter/2;
			 $('.demo2').bootpag({
			       total: numPag,
			       page: 1,
			       maxVisible: numPag
			    }).on('page', function(event, num){
			        $(".content2").html("Page " + num);
			        var flotante=parseFloat(num);
			        getPostPage(num);
			    });
		
		}).fail(function() {
		});

	}
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
			//console.log(data);
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
								title;
								bodypost;
								$(".content2t").append("<div class='content"+counter+"'><br>" +
															"<div  class='allcontent' id='p"+obj.idPost+"' "+cadena+">" +
																	"<div>" +
																		"<div id='imageL'>" +
																			"<img src='"+obj.imgAutor+"' alt='analista' class='img-responsive' >" +
																		"</div>"+
																	"<div class='imageR'>" +
																		"<div id='titleUserPost'>"+obj.autor+"</div>" +
																		"<div id='dateUserPost'>"+datefort+"</div>" +
																		"<div id='titlePost'>"+obj.titulo+"</div>" +
																	"</div><br>" +
																	"<div id='bodyPost'>"+obj.articulo+"</div></br>" +
																	"<div id='footer'>" +
																			"<div class='txtMegusta'> " +
																					"<label for='likeme' class='liketome' id='megusta"+obj.idPost+"' "+showelement+">Me gusta</label>" +
																			"</div>" +
																				//"<div class='likenum' id='likepost"+obj.idPost+"'></div>" +
																			"<li id='notification_li'>"+
																					"<div class='likepostimg'><a href='#' id='likepost"+obj.idPost+"' class='likenum'></a></div>"+
																					"<div class='noti' id='notificationContainer"+obj.idPost+"'"+styleNotification+">"+
																							"<div id='notificationsBody' class='notifications"+obj.idPost+"'>" +
																								"<ul class='listacont' id='contentUserlike"+obj.idPost+"'></ul>" +
																							"</div>"+
																					"</div>"+
																			"</li>"+
																		"<div id='countComment"+obj.idPost+"'></div>" +
																	"</div>" +
																				/*		"<div id='notificationFooter'><a href='#'>See All</a></div></div></li></ul>"+*/
																	"<div id='allComents"+obj.idPost+"'>" +
																			"<div class='panel panel-default template' style='background-color: #F9F9F9;'>"+
																			"<div class='panel-heading'>" +
																				"<h4 class='panel-title'>"+
																					"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapse"+obj.idPost+"'>"+
																					"comentarios"+
																					"</a>" +
																				"</h4>" +
																			"</div>"+
																			"<div id='collapse"+obj.idPost+"' class='panel-collapse collapse'>"+
																				"<div class='panel-body'>"+
																					"<div  id='comment"+obj.idPost+"' class='commentstl"+obj.idPost+"'></div>" +
																				"</div>"+
										"<div id=addComent>"+resultados+"<div><input type='text' id='addComment"+obj.idPost+"' name='blah' class='inputcoment' /></div>" +
										"<div id='txtMat'>Por favor responde esta sencilla respuesta matem\u00e1tica.</div>"+
										"<br>"+
										"<div style='margin-left: 5%'>"+
  
										"<form method='post' id='form"+obj.idPost+"' class='formulario'><input type='submit' id='enviar"+obj.idPost+"' class='btn btn-primary' ></button></form></div></div>"+
										"</div></div>"+
										"</div>"+
										"</div></div></div></div></p>" +
										""
									);
								
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
											//"width": "0",
											//"height": "02",
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
									//console.log("click me gusta");
									var usuarioparametro =$('#usuario',top.document).attr("value");
									usuarioparametro="fferro";
									//console.log(usuarioparametro);
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
										//alert(data4);
										//console.log(data5);
										if(data5!=0){
											$("#likepost"+obj.idPost).empty();
											$('#likepost'+obj.idPost).append(data5);
										}else{
											//$('#likepost'+obj.idPost).append(respaldo);
											//alert("usiario ya le gusta");
										}
									}).fail(function() {
									});
								});
				  //fucioinalidad comentar
				  
						$("#addComment"+obj.idPost).click(function() {
							var ALIAS =$('#usuario',top.document).attr("value");
							//ALIAS="fferro";
							//console.log(ALIAS);
									  var jsonData = {
												'user': ALIAS
											};
										$.ajax({
											url : 'BlogAnalisisController/getStatusByUser',
											type : 'get',
											dataType : 'json',
											data : jsonData,
											async: true
										}).done(function(data9) {
										//console.log(data9);
										if(data9.username!=null){
											//alert("cuenta con alias");
										}else{
											$('#containerInputs').hide();
											$('#formmodal').hide();
											$('#backModWish').modal('show');
											$('#myForm input').on('change', function() {
												   if($('input[name="inlineRadioOptions"]:checked', '#myForm').val() == "2"){
												        $('#containerInputs').show();
												        $('#formmodal').show();
												        
												    }else{
												    	$('#containerInputs').hide();
												    }
											});
											
											$("#formmodal").ebcaptcha();
											$('#guardarAlias').click(function(){
												var radioValue = $('input[name=inlineRadioOptions]:checked', top.document).val();
												alert(radioValue);
												
												('#backModWish', top.document).after('<div id="modMail" class="modal-backdrop fade in bodyMap01"></div>');
												var alias=$('#addalias').val();
												
												var aliasConfir=$('#confalias').val();
												if(alias==aliasConfir){
													alert("igual");
												}else{
												}
												
											});
										}
											
										}).fail(function() {
									});
						});	
								
							
						$(function(){
							$("#form"+obj.idPost).ebcaptcha();
					    });
						
						$('#enviar'+obj.idPost).click(function(){
					  	//var user="capistrano";
							var user =$('#usuario',top.document).attr("value");
							//user="NOEXITO";
							//console.log(user);
					  	var comment= $("#addComment"+obj.idPost).val();
					  	
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
							//console.log(data2);
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


function getComment(idPost){
	
/*	$(function(){
		$("#form"+obj.idPost).ebcaptcha();
    });*/
	
	
	
	
	var jsonData = {
			'idPost' : idPost
		};
	$.ajax({
		url : 'BlogAnalisisController/getCommentByPost',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data2) {
		//console.log(data2);
		$.each(data2, function(i, obj) {
		var date = new Date(obj.dateup);
		var datecreate=date.toString("MMM dd"); // "Dec 20"
		$('#comment'+obj.id_post).append("<div class='nomUserCom'>"+obj.nom_user+"</div><br><div class='usercoment'> "+obj.comment+"</div><br><div>"+datecreate+"<div><hr>");
		//$('#catcha').append("<form  id='form"+obj.idPost+"' class='formulario'><input type='button' id='enviar"+obj.idPost+"' class='btn btn-primary' ></button></form></div></div>");
		
		});
	}).fail(function() {
	});

}
function getLikePost(idPost){
	var jsonData = {
			'idPost' : idPost
		};
	$.ajax({
		url : 'BlogAnalisisController/getLikePost',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data3) {
		$('#likepost'+idPost).append(data3);
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
	//alert( "Animation complete." );
	//"#formEdit"
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
		
		//console.log(data6);
		
		$.each(data6, function(i, objByDate) {
			//**consultas de incio
		getComment(objByDate.idPost);
		getLikePost(objByDate.idPost);
		getCountComment(objByDate.idPost);
							//arraybodyPost[i]=obj.articulo;
							//var num=i;
							//num++;
						
							var userlog=$("#userData").val();
							var cadena="";
							$(".content2t").append("<div class='content"+objByDate+"'><br><div  class='allcontent' id='p"+objByDate.idPost+"' "+cadena+"><div><div id='image'><img src='"+objByDate.imgAutor+"' alt='analista' ></div>"+
									"<div id='titleUserPost'>"+objByDate.autor+"</div><div id='titlePost'>"+objByDate.titulo+"</div><br><div id='bodyPost'>"+objByDate.articulo+"</div></br><div class='txtMegusta'> <label for='likeme' id='megusta"+objByDate.idPost+"'>Me gusta</label></div><div class='likenum' id='likepost"+objByDate.idPost+"'></div><div id='countComment"+objByDate.idPost+"'></div></div>" +
									"<div id='allComents"+objByDate.idPost+"'><div class='panel panel-default template'>"+
									"<div class='panel-heading'><h4 class='panel-title'>"+
									"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapse"+objByDate.idPost+"'>"+
									"comentarios"+
									"</a></h4></div>"+
									"<div id='collapse"+objByDate.idPost+"' class='panel-collapse collapse'>"+
									"<div class='panel-body'>"+
									"<div  id='comment"+objByDate.idPost+"' class='commentstl"+objByDate.idPost+"'></div></div>"+
									"<div id=addComent>"+userlog+"<div><input type='text' id='addComment"+objByDate.idPost+"' name='blah' /></div>" +
									"<div>	<button type='button' class='btn btn-default' id='cancelar'>Cancelar</button>" +
									"<button type='button' id='enviar"+objByDate.idPost+"' class='btn btn-default' >Enviar</button></div></div>"+
									"</div></div>"+
									"</div>"+
									"</div></div></div></div></p>"
								);
							
							//fucionalidad insertar y mostrar like
							$('#megusta'+objByDate.idPost).click(function(){
				//var respaldo=$("#likepost"+obj.idPost,top.document).val();
								var respaldo =$("#likepost"+objByDate.idPost).attr("value");
								var user="capa";
								var jsonData = {
										'idPost' : objByDate.idPost,
										'user' :user
								};
								$.ajax({
									url : 'BlogAnalisisController/setLikePost',
									type : 'get',
									dataType : 'json',
									data : jsonData,
									async: true
								}).done(function(data5) {
									//alert(data4);
									//console.log(data5);
									if(data5!=0){
										$("#likepost"+objByDate.idPost).empty();
										$('#likepost'+objByDate.idPost).append(data5);
									}else{
										//$('#likepost'+obj.idPost).append(respaldo);
										//alert("usiario ya le gusta");
									}
								}).fail(function() {
								});
							});
							
							 
			  //fucioinalidad comentar
			  $('#enviar'+objByDate.idPost).click(function(){
				  	var user="capistrano";
				  	var comment= $("#addComment"+objByDate.idPost).val();
				  	//alert(obj.idPost);
				  	//alert(comment);
				  	//alert(user);
				  	$(".commentstl"+objByDate.idPost).empty();
					var jsonData = {
							'idPost' : objByDate.idPost,
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
						//console.log(data2);
						getComment(objByDate.idPost);
						getCountComment(objByDate.idPost);
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
	//console.log(data8);
		
		if(data8.estatus==2){
			if(user==data8.user_id){
				$('#imguser').append("<input type='text' value='"+data8.image+"'/>");
			}
			
			$("#redactar").show();	
	}else{
		$("#redactar").hide();	
	}
		
		/*if(data8.username!=null){
		ALIAS=data8.username;
		}else{
			ALIAS=user;
			
		}*/
		//alert(ALIAS);
		//USUARIOTEMP=data8.username;
		//alert(usuario);
	
	}).fail(function() {
	});

}

function setAlias(user,name,nameTr,show){
	console.log("usuario"+user);
	console.log("alias"+name);
	console.log("nombre"+nameTr);
	console.log("muestra"+show);
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
	//console.log(data8);
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
	//console.log(data8);
		$.each(data11, function(i, obj) {
			$('#fivepost').append("<li><a name='MyLinks' id='liga"+obj.idPost+"'>"+obj.titulo+"</a></li> <br>");
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
	//var datefort=formatDate(fecha);
	$(".content2t").append("<div class='content"+idPost+"'><br><div  class='allcontent' id='p"+idPost+"' ><div><div id='imageL'><img src='"+imagen+"' alt='analista' ></div>"+
			"<div class='imageR'><div id='titleUserPost'>"+autor+"</div><div id='dateUserPost'>"+fecha+"</div><div id='titlePost'>"+titulo+"</div></div><br><div id='bodyPost'>"+articulo+"</div></br><div id='footer'><div class='txtMegusta'> <label for='likeme' id='megusta"+idPost+"'>Me gusta</label></div><div class='likenum' id='likepost"+idPost+"'></div><div id='countComment"+idPost+"'></div></div></div>" +
			"<div id='allComents"+idPost+"'><div class='panel panel-default template'>"+
			"<div class='panel-heading'><h4 class='panel-title'>"+
			"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapse"+idPost+"'>"+
			"comentarios"+
			"</a></h4></div>"+
			"<div id='collapse"+idPost+"' class='panel-collapse collapse'>"+
			"<div class='panel-body'>"+
			"<div  id='comment"+idPost+"' class='commentstl"+idPost+"'></div></div>"+
			"<div id=addComent>"+ALIAS+"<div><input type='text' id='addComment"+idPost+"' name='blah' /></div>" +
			"<div>	<button type='button' class='btn btn-default' id='cancelar'>Cancelar</button>" +
			"<button type='button' id='enviar"+idPost+"' class='btn btn-default' >Enviar</button></div></div>"+
			"</div></div>"+
			"</div>"+
			"</div></div></div></div></p>"
		);
	
	$('#megusta'+idPost).click(function(){
		//var respaldo=$("#likepost"+obj.idPost,top.document).val();
						var respaldo =$("#likepost"+idPost).attr("value");
						var user="capa";
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
							//alert(data4);
							//console.log(data5);
							if(data5!=0){
								$("#likepost"+idPost).empty();
								$('#likepost'+idPost).append(data5);
							}else{
								//$('#likepost'+obj.idPost).append(respaldo);
								//alert("usiario ya le gusta");
							}
						}).fail(function() {
						});
					});
					
					 
	  //fucioinalidad comentar
	  $('#enviar'+idPost).click(function(){
		  	var user="capistrano";
		  	var comment= $("#addComment"+idPost).val();
		  	//alert(obj.idPost);
		  	//alert(comment);
		  	//alert(user);
		  	$(".commentstl"+idPost).empty();
			var jsonData = {
					'idPost' : idPost,
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
				//console.log(data2);
				getComment(idPost);
				getCountComment(idPost);
			}).fail(function() {
			alert("error");
			});
	});
	
	
}
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
	//angular.element('#angularData').scope().AngularFunction(articulo);
	//alert(articulo);

	console.log(usuarioid);
	
	var articulo2=encodeURIComponent(articulo);
	//alert(articulo2);
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
		
		console.log(data);
	//alert("hola");
	location.reload();
	}).fail(function() {
	});
	
	
}

/*function setPost(articulo) {
	var jsonData = {
			'articulo' : articulo
	};
	$.ajax({ 
	    url: "BlogAnalisisController/setPost", 
	    type: 'POST', 
	    dataType: 'html', 
	    data: jsonData, 
	    contentType: 'application/html',
	    mimeType: 'application/html',
	    success: function(data) { 
	        alert(data.id + " " + data.name);
	    },
	    error:function(data,status,er) { 
	        alert("error: "+data+" status: "+status+" er:"+er);
	    }
	});
	}
*/



/*function setPost(articulo){
	var jsonData = {
			'articulo' : articulo
	};
$.ajax({
	  type: "POST",
	  url: 'BlogAnalisisController/setPost',
	  data: jsonData,
	  success: success,
	  dataType: dataType
	});
}*/
/*angular.module('App', []).controller('angularCtrl', ['$scope', '$http',function($scope,$http) {
    $scope.AngularFunction = function(articulo){
    	 
    	var jsonData = {
    			'articulo' : articulo
    	};
    	
    	
    	var request = $http({
             method: "post",
             url: "BlogAnalisisController/setPost",
          
             data: jsonData
         });
              
   }
}
]).directive("disableLink", function() {
   return {
       restrict: "A",
       link: function(scope, elem, attrs) {
           $(elem).click(function() {
               $().JqueryFunction();
           });
       }
   }
});*/
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
					//console.log(data9);
					//console.log("que mostrara"+data9.show);
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
				console.log("loque se tiene que mostrar"+username);
				return username;
	
}
//getUserLikeIdPost
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

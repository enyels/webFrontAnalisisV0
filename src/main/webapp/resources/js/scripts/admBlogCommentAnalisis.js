$(document).ready(function() {
	var usuarioparametro;
	var name;
	usuarioparametro =$('#usuario',top.document).attr("value");
	name =$('#usuario',top.document).attr("name");
	if (typeof name  !== "undefined"){
		estatusBan=0;
		$("#formEdit").hide();
		getPostLastFive();
		resultados=getStatusAlias(usuarioparametro);
			if(resultados==null){
				showelement="style='display:none;'";
			}else{
				showelement="";
			}
			getPost();
			var arreglo=getDates();
			var datesArray=filterDate(arreglo);
			$('#datepicker').datepicker({
				inline: true,
				changeMonth : true,
				changeYear : true,
				yearRange: '2015:2025',
				dateFormat: 'dd/mm/yy',
				dayNamesMin: [ "D", "L", "M", "M", "J", "V", "S" ],
				monthNamesShort: [ "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE","OCTUBRE", "NOVIEMBRE", "DICIEMBRE" ],
				showOtherMonths: true,
				selectMultiple:true, 
				onSelect: function(dateText, inst) {
					$(".demo3").hide();
					document.location.href = "#ancla";
					var selectedDate = $(this).datepicker("getDate");
					var messtr;
					var month=selectedDate.getMonth();
					month=month+1;
					if(month.toString().length==1){
						messtr="0"+month;
					}else{
						messtr=month;
					}
					var daytr;
					var day=selectedDate.getDate();
					if(day.toString().length==1){
						daytr="0"+day;
					}else{
			    	   daytr=day;
			       }
					var date=selectedDate.getFullYear() +"-"+messtr + '-' +  daytr;
					getPostByDate(date);
				},
				beforeShowDay: function (date) {
					var theday = (date.getMonth()+1) +'/'+ date.getDate()+ '/' + date.getFullYear();
					return [true,$.inArray(theday, datesArray) >=0?"specialDate":''];
				}
		});//fin select datapicker
	 //buscador
	 $('#miboton').click(function(){
		 var word=$("#inputSearch").val();
		 $('#fivepostword').show();
		 getPostbyWord(word);
	});
	 //Comentario
	 $("#comentario").click(function(){
		 var usuario=$('#usuario',top.document).attr("value");
		
		 getComentUser(usuario);
	 });	
	 $("#addalias").click(function(){
		 $('#addalias').bind('keypress', function(e) {
			 $("#msgerror").text("");
			});
		 });
	}else{
		$(".content2t").append("SIN SESSION");
	}
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
			var myJsonString = JSON.stringify(data);
			$("#postblog").val(myJsonString);
			$("#postblog").show();
			var counterP;
			var idPostP;
			var imgAutorP;
			var autorP;
			var datefortP;
			var tituloP;
			var articuloP;
			var styleNotificationP;
			var resultadosP;
			$.each(data, function(i, obj) {
					getComment(obj.idPost);
					getLikePost(obj.idPost);
					getCountComment(obj.idPost);
					var usuarioP =$('#usuario',top.document).attr("value");
					var value=getLike(obj.idPost,usuarioP);
					var stylelikeme;
					if(value==1){
						stylelikeme ="style='color:#065CAF;cursor:pointer'";
					}else{
						stylelikeme ="style='color:gray;cursor:pointer'";
					}
					$(function(){
						$("#form"+obj.idPost).ebcaptcha();
					});
								arraybodyPost[i]=obj.articulo;
								var num=i;
								num++;
								var cadena="";
								var datefort=formatDate(obj.datePublic);
								var styleNotification="style='background-color: #5B5B5F;border-radius: 20px;border: 1px solid rgba(100, 100, 100, .4);-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, .45);overflow: visible;position: absolute;top: 30px;margin-left: 470px;width: 20%;z-index: 1000;display: none'";
								idPost=obj.idPost;
								imgAutor=obj.imgAutor;
								if(resultados==null){
									resultados =$('#usuario',top.document).attr("name");
								}else{
									
									resultados =$('#usuario',top.document).attr("name");
								}
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
								setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP,stylelikeme);
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
												$('#contentUserlike'+obj.id_post).append("<li ><a class ='listaUserlike' name='MyLinks' id='liga"+obj.id_post+"' id='lista' >"+obj.username+"</a></li> <br>");
											});
											$("#notificationContainer"+obj.idPost).fadeToggle(300);
											$("#notificationContainer"+obj.idPost).css({
											"textAlign":"center",
											"secondCSSProperty":"value", 
											"content": "' '",
											"display": "block",
											"position": "absolute",
											"color": "transparent",
											"border": "1px solid black",
											"border-color": "#001223 ",
											"margin-top": "-20px",
											"margin-left": "80%",
											"background-color":"rgba(6, 92, 175, 0.5);"
											});		
							
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
										
											$("#likepost"+obj.idPost).empty();
											$('#likepost'+obj.idPost).append(data5);
										
									}).fail(function() {
									}).always(function() {
										var value=getLike(obj.idPost,usuarioparametro);
										if(value==1){
											$('#megusta'+obj.idPost).css("color","#065CAF");
											
											$('#megusta'+idPostP).css("cursor","pointer");
										}else{
											$('#megusta'+obj.idPost).css("color","gray");
											$('#megusta'+idPostP).css("cursor","pointer");
										}
										
									  });
								});
								
								$("#addComment"+obj.idPost).keyup(function() {
								    var $th = $(this);
								   // $th.val($th.val().replace(/(\s{2,})|[^a-zA-Z']/g, ' '));
								    $th.val($th.val().replace(/^\s*/, ''));
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
											//muestro modal
											$('#containerInputs').hide();
											$('#formmodal').hide();
											$('#backModWish').modal('show');
											$('#myForm input').on('change', function() {
												   if($('input[name="inlineRadioOptions"]:checked', '#myForm').val() == "2"){
												        $('#containerInputs').show();
												        $('#formmodal').show();
												        $('#guardarname').hide();
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
													
											if (($.trim($('#addalias',top.document).val()).length == 0)||($.trim($('#confalias',top.document).val()).length == 0)){
									 			$("#msgerror").text("Ingresa un alias");
											}
											else
											{
									 		var talias=$('#addalias').val();
									 		var taliasConfir=$('#confalias').val();
									 		if(talias===taliasConfir){
									 			var taliasConfir=$('#confalias').val();
												show=1;
												setAlias(usuario,taliasConfir,name,show);
									 			
									 		}else{
									 			$("#msgerror").text("Ingresar alias iguales");
									 		}
									 		
									 	}
											
												});
										}).fail(function() {
									});
						});	
						//guardar comentario
						$('#enviar'+obj.idPost).click(function(){
							var user =$('#nomusershow',top.document).attr("value");
									var estatus=2;
								  	var comment= $("#addComment"+obj.idPost).val();
								  	$(function(){
										$("#form"+obj.idPost).empty();
								    });
								  	var comment2=encodeURIComponent(comment);
									var jsonData = {
											'idPost' : obj.idPost,
											'comment' :comment2,
											'user' :user,
											'estatus' :estatus
										};
									$.ajax({
										url : 'BlogAnalisisController/setComment',
										type : 'get',
										dataType : 'json',
										data : jsonData,
										async: false
									}).done(function(data2) {
										$(".inputcoment"+obj.idPost).empty();
										$("#addComment"+obj.idPost).empty();
										$(".commentstl"+obj.idPost).empty();
										
										getComment(obj.idPost);
										getCountComment(obj.idPost);
									}).fail(function() {
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
			       maxVisible: 3,
			       leaps: true,
			       firstLastUse: true,
			       first: '←',
			       last: '→',
			       wrapClass: 'pagination',
			       activeClass: 'active',
			       disabledClass: 'disabled',
			       nextClass: 'next',
			       prevClass: 'prev',
			       lastClass: 'last',
			       firstClass: 'first'
			       
			    }).on('page', function(event, num){
			        $(".content2").html("Page " + num);
			        document.location.href = "#ancla";
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
					var usuarioP =$('#usuario',top.document).attr("value");
					var value=getLike(obj.idPost,usuarioP);
					var stylelikeme;
					if(value==1){
						stylelikeme ="style='color:#065CAF;cursor:pointer'";
					}else{
						stylelikeme ="style='color:gray;cursor:pointer'";
					}
								arraybodyPost[i]=obj.articulo;
								var num=i;
								num++;
								var cadena="";
								var datefort=formatDate(obj.datePublic);
								var styleNotification="style='background-color: #5B5B5F;border-radius: 20px;border: 1px solid rgba(100, 100, 100, .4);-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, .45);overflow: visible;position: absolute;top: 30px;margin-left: 470px;width: 20%;z-index: 1000;display: none'";
								idPost=obj.idPost;
								imgAutor=obj.imgAutor;

								if(resultados==null){
									resultados =$('#usuario',top.document).attr("name");
								}
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
								setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP,stylelikeme);
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
													
														$("#likepost"+obj.idPost).empty();
														$('#likepost'+obj.idPost).append(data5);
													
												}).fail(function() {
												}).always(function() {
													var value=getLike(obj.idPost,usuarioparametro);
													if(value==1){
														$('#megusta'+obj.idPost).css("color","#065CAF");
													}else{
														$('#megusta'+obj.idPost).css("color","gray");
													}
													
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
	var ALIASUSER;
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
		$.each(data2, function(i, obj) {
							var date = new Date(obj.dateup);
							var datefort=formatDateComent(date);
							var username=getUserName(obj.nom_user);
							var estatus=getEstatus(obj.nom_user);
							if(estatus==2||estatus==4){
								estatus="Comentario Analista:  ";
							}else{
								estatus="";
							}
							
							$('#comment'+obj.id_post).append("<div class='nomUserCom' id='nomusershow'>"+estatus+username+"</div><div class='usercoment'> "+obj.comment+"</div><div>"+datefort+"<div><hr>");
				});
				$('#comment2'+idPost).append("<form id='form"+idPost+"'><input type='button' id='enviar"+idPost+"' class='btn btn-primary' value='Guardar'/ ></form>");
				$(function(){
						$("#form"+idPost).ebcaptcha();
				 });
				
				$('#enviar'+idPost).click(function(){
							var user =$('#usuario',top.document).attr("value");
							var jsonData = {
									'user' :user
								};
							$.ajax({
								url : 'BlogAnalisisController/getAlias',
								type : 'get',
								dataType : 'json',
								data : jsonData,
								async: false
							}).done(function(data4) {
								ALIASUSER=user;
								
							}).fail(function() {
						
							}).
							always(function() {
							    var estatus=2;
								$("#addComment"+idPost).empty();
							  	var comment= "";
							  	comment=$("#addComment"+idPost).val();
							  	var comment2=encodeURIComponent(comment);
								var jsonData = {
										'idPost' : idPost,
										'comment' :comment2,
										'user' :ALIASUSER,
										'estatus': estatus
									};
								$.ajax({
									url : 'BlogAnalisisController/setComennetByPostParameterAnalist',
									type : 'get',
									dataType : 'json',
									data : jsonData,
									async: false
								}).done(function(data2) {
									 $(".inputcoment").val("");
									$(".commentstl"+idPost).empty();
									$(function(){
										$("#comment2"+idPost).empty();
								    });
									getComment(idPost);
									getCountComment(idPost);
								}).fail(function() {
								});
							  });	
							
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
	 $(".allcontent").hide();
	$("#formEdit").show();
}

//obtiene post por fecha
function getPostByDate(date){
	
	var counterP;
	var idPostP;
	var imgAutorP;
	var autorP;
	var datefortP;
	var tituloP;
	var articuloP;
	var styleNotificationP;
	var resultadosP;
	var counter=1;
	$(".content2t").empty();
	var jsonData = {
			'date' :date
		};
	$.ajax({
		url : 'BlogAnalisisController/getPostdate',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data6) {
		$(".demo2").empty();
		$('.breadcrumb').html("<li ><a href='' id='blog'>Blog</a/</li><li>Calendario</li>");
		$.each(data6, function(i, obj) {
			//**consultas de incio
							getComment(obj.idPost);
							getLikePost(obj.idPost);
							getCountComment(obj.idPost);
							
							var usuarioP =$('#usuario',top.document).attr("value");
							var value=getLike(obj.idPost,usuarioP);
							var stylelikeme;
							if(value==1){
								stylelikeme ="style='color:#065CAF;cursor:pointer'";
							}else{
								stylelikeme ="style='color:gray;cursor:pointer'";
							}
							var cadena="";
							var styleNotification="style='background-color: #5B5B5F;border-radius: 20px;border: 1px solid rgba(100, 100, 100, .4);-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, .45);overflow: visible;position: absolute;top: 30px;margin-left: 470px;width: 20%;z-index: 1000;display: none'";
							if(resultados==null){
								resultados =$('#usuario',top.document).attr("name");
							}
							counterP=counter;
							idPostP=obj.idPost;
							imgAutorP=obj.imgAutor;
							autorP=obj.autor;
							datefortP="";
							tituloP=obj.titulo;
							articuloP=obj.articulo;
							styleNotificationP=styleNotification;
							showelementP=showelement;
							resultadosP=resultados;
							cadenaP=cadena;
							
							var datefort=formatDate(obj.datePublic);
							setDataPost(counterP,idPostP,imgAutorP,autorP,datefort,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP,stylelikeme);
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
												
													$("#likepost"+obj.idPost).empty();
													$('#likepost'+obj.idPost).append(data5);
												
											}).fail(function() {
											}).always(function() {
												var value=getLike(obj.idPost,usuarioparametro);
												if(value==1){
													$('#megusta'+obj.idPost).css("color","#065CAF");
												}else{
													$('#megusta'+obj.idPost).css("color","gray");
												}
												
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
												//guarda nombre
												usuario =$('#usuario',top.document).attr("value");
												show=2;
												name =$('#usuario',top.document).attr("name");
												setAlias(usuario,name,name,show);
											});
											
											$("#saveUsername").click(function(){
												usuario =$('#usuario',top.document).attr("value");
												
												var taliasConfir=$('#confalias').val();
												show=1;
												setAlias(usuario,taliasConfir,name,show);
											});
											}).fail(function() {
										});
							});	
							
							$('#blog').click(function(){
								location.reload();
							});
//guardar comentario
							$('#enviar'+obj.idPost).click(function(){
								var user =$('#nomusershow',top.document).attr("value");
								var comment= $("#addComment"+obj.idPost).val();
								var comment2=encodeURIComponent(comment);
								$(function(){
									$("#form"+obj.idPost).empty();
									
								});
								var jsonData = {
										'idPost' : obj.idPost,
										'comment' :comment2,
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
									$("#addComment"+obj.idPost).empty();
									getComment(obj.idPost);
									getCountComment(obj.idPost);
								}).fail(function() {
									//alert("error");
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
		 $('.demo3').bootpag({
			  total: numPag,
		       page: 1,
		     
		     
		       page: 2,
		       maxVisible: 3,
		       leaps: true,
		       firstLastUse: true,
		       first: '←',
		       last: '→',
		       wrapClass: 'pagination',
		       activeClass: 'active',
		       disabledClass: 'disabled',
		       nextClass: 'next',
		       prevClass: 'prev',
		       lastClass: 'last',
		       firstClass: 'first'
		    }).on('page', function(event, num){
		        $(".content2").html("Page " + num);
		        var flotante=parseFloat(num);
		        getPostPageDate(date,num);
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
			'estatus':estatus,
			'nombreUsuario': name, 
			'show': show,
			
		};
	$.ajax({
		url : 'BlogAnalisisController/setUserAlias',
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
			$('#fivepost').append("<li class='listalastfive' ><a class='liastafiveaa' name='MyLinks' id='liga"+obj.idPost+"' style='cursor:pointer'>"+obj.titulo+"</a></li> ");
			$("#liga"+obj.idPost).click(function(){
				$('#redactar').hide();
				$("#formEdit").hide();
				$("#fivepostword").empty();
				getOnlyOnePost(obj.idPost,obj.titulo,obj.autor,obj.imgAutor,obj.articulo,obj.datePublic);
				$('.breadcrumb').html("<li ><a href='' id='blog'>Blog</a/</li><li>Posts Recientes</li>");
				
			});
		});
	}).fail(function() {
	});

}


function getOnlyOnePost(idPost,titulo,autor,imagen,articulo,fecha){
	getComment(idPost);
	getLikePost(idPost);
	getCountComment(idPost);
	
	var usuarioP =$('#usuario',top.document).attr("value");
	var value=getLike(idPost,usuarioP);
	var stylelikeme;
	if(value==1){
		stylelikeme ="style='color:#065CAF'";
	}else{
		stylelikeme ="style='color:gray'";
	}
	
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
	var datefort=formatDate(fecha);
	setDataPost(counterP,idPostP,imgAutorP,autorP,datefort,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP,stylelikeme);
	
	//lista de usuarios que dieron like
	$("#likepost"+idPostP).click(function(){
				$('.listacont').empty();
				var username;
				var jsonData = {
					'idPost': idPostP
				};
				$.ajax({
						url : 'BlogAnalisisController/getUserLikeIdPost',
						type : 'get',
						dataType : 'json',
						data : jsonData,
						async: false
				}).done(function(data20) {
						$.each(data20, function(i, obj) {
							$('#contentUserlike'+idPostP).append("<li ><a name='MyLinks' id='liga"+obj.id_post+"' id='lista'>"+obj.username+"</a></li> <br>");
						});
						$("#notificationContainer"+idPostP).fadeToggle(300);
						$("#notificationContainer"+idPostP).css({
						"textAlign":"center",
						"secondCSSProperty":"value", 
						"content": "' '",
						"display": "block",
						"position": "absolute",
						"color": "blue",
						"border": "10px solid black",
						"border-color": "transparent ",
						"margin-top": "-20px",
						"margin-left": "80%"});		

				}).fail(function() {
				});
			return false;
	});
	$('#megusta'+idPostP).click(function(){
		var usuarioparametro =$('#usuario',top.document).attr("value");
		var respaldo =$("#likepost"+idPostP).attr("value");
		var user="capa";
		var jsonData = {
				'idPost' : idPostP,
				'user' :usuarioparametro
		};
		$.ajax({
			url : 'BlogAnalisisController/setLikePost',
			type : 'get',
			dataType : 'json',
			data : jsonData,
			async: true
		}).done(function(data5) {
			
				$("#likepost"+idPostP).empty();
				$('#likepost'+idPostP).append(data5);
			
		}).fail(function() {
		}).always(function() {
			var value=getLike(obj.idPost,usuarioparametro);
			if(value==1){
				$('#megusta'+idPostP).css("color","#065CAF");
				
				
			}else{
				$('#megusta'+idPostP).css("color","gray");
			}
			
		  });
	});
//fucioinalidad comentar y modal

		$("#addComment"+idPostP).click(function() {
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
		});//fin addComment
	

//guardar comentario

		$('#enviar'+idPostP).click(function(){
	
				var user =$('#usuario',top.document).attr("value");
			  	var comment= $("#addComment"+idPostP).val();
			  	var comment2=encodeURIComponent(comment);
			  	
			  	$(function(){
					$("#form"+obj.idPost).empty();
			    });
				var jsonData = {
						'idPost' : idPostP,
						'comment' :comment2,
						'user' :user
					};
				$.ajax({
					url : 'BlogAnalisisController/setComment',
					type : 'get',
					dataType : 'json',
					data : jsonData,
					async: false
				}).done(function(data2) {
					$(".commentstl"+idPostP).empty();
					getComment(idPostP);
					getCountComment(idPostP);
				}).fail(function() {
					//alert("error");
				});
		});//fin enviar
	
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
		
		
		 $('.breadcrumb').html("<li><a href='' id='blog'>Blog</a></li><li>Buscador</li>");
		
		if(data12.length!=0){
		$.each(data12, function(i, obj) {
			
			$('#fivepostword').append("<div class='row'><div class='col-md-12' style='border: 1px solid #E9E9E9; padding:7px 7px 7px 7px;'>"+
		             "<div class='col-sm-4 col-md-3 col-lg-2'>"+
		                             "<center>"+
		                                            "<img src="+obj.imgAutor+" class='img-responsive' />"+
		                             "</center>"+
		             "</div>"+
		             "<div class='col-sm-4 col-md-6 col-lg-8'>"+
		                             "<p>"+obj.titulo+"</p>"+
		                             "<p><span><strong>"+obj.autor+"</strong></span><br/></p>"+
		                             "<p><span><small>"+obj.datePublic+"</small></span><br/></p>"+
		             "</div>"+
		             "<div class='col-md-12'>"+
		                             "<div class='row'>"+
		                                            "<div class='col-sm-4 col-md-3 col-lg-2'>"+
		                                                            "<br/>"+
		                                                            "<a role='button' class='btn btn-primary btn-block' id='liga"+obj.idPost+"'>Ver Post</a>"+
		                                            "</div>"+
		                             "</div>"+
		             "</div>"+
					"</div></div>");
		
			 $('#liga'+obj.idPost).click(function(){
				$(".liga").hide();
				 getOnlyOnePost(obj.idPost,obj.titulo,obj.autor,obj.imgAutor,obj.articulo,obj.datePublic);
				$('#fivepostword').hide();
			 });
			 
			 $('#blog').click(function(){
					location.reload();
				});
			
		});
		}else{
			
			$('#fivepostword').append("<li>Sin Resultados</li> <br>");
		}
		
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
		alert("Se notifico al usuario");
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
				}).always(function() {
				
				    
				  });
				
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

function setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP,stylelikeme){
	
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
						"<div id='countComment"+idPostP+"'></div>" +
					"</div>" +
								/*		"<div id='notificationFooter'><a href='#'>See All</a></div></div></li></ul>"+*/
					"<div id='allComents"+idPostP+"'>" +
							"<div class='panel panel-default template' id='barraColapse'>"+
							"<div class='panel-heading' id='barraComents'>" +
								"<h4 class='panel-title'>"+
									"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapse"+idPostP+"' id='titleColapse'>"+
									" >>Ver Comentarios"+
									"</a>" +
								"</h4>" +
							"</div>"+
							"<div id='collapse"+idPostP+"' class='panel-collapse collapse'>"+
								"<div class='panel-body'>"+
									"<div  id='comment"+idPostP+"' class='commentstl"+idPostP+"'></div>" +
								"</div>"+
								"<div id=addComent>Analista: "+resultadosP+"<div><input type='text' id='addComment"+idPostP+"' name='blah' class='inputcoment' maxlength='600' /></div>" +
								"<div id='txtMat'>Por favor responde esta sencilla respuesta matem\u00e1tica.</div>"+
								"<br>"+
"<div style='margin-left: 5%'>"+

"<div id='comment2"+idPostP+"'></div>"+

"</div></div>"+
"</div></div>"+
"</div>"+
"</div></div></div></div></p>" +
""
);
	
	
}
function filterDate(obj){
	var dates=[];
	var datesArray=[];
	var day;
	var month;
	var year;
	var cero;
	var ceroday;
	for(var propt in obj){
		dates=obj[propt];
	    year= dates.substring(0, 4);
	    month=dates.substring(5, 7);
	    cero= month.substring(0,1);
	    if(cero=="0"){
	    	 month=dates.substring(6, 7);
	    }else{
	    	month=dates.substring(5, 7);
	    }
	    day=dates.substring(8, 10);
	    ceroday=day.substring(0,1);
	    if(ceroday=="0"){
	    	day=dates.substring(9, 10);
	    }else{
	    	day=dates.substring(8, 10);
	    }
	//var dateTodo = new Date(year, month, day);
	var dateNue = month+"/"+day+"/"+year;
	datesArray[propt]=dateNue;
	}
	return datesArray;

}

function getDates(){
	var arraybodyPost = new Array();
	$.ajax({
		url : 'BlogAnalisisController/getFolioFront',
		type : 'get',
		dataType : 'json',
			async: false
	}).done(function(data11) {
	$.each(data11, function(i, obj) {
		arraybodyPost[i]=obj.datePublic;
	});
	
	}).fail(function() {
	});
	return arraybodyPost;
}
function formatDateComent(date){
	var weekday = new Array(7);
	weekday[0]=  "Domingo";
	weekday[1] = "Lunes	";
	weekday[2] = "Martes";
	weekday[3] = "Miercoles";
	weekday[4] = "Jueves";
	weekday[5] = "Viernes";
	weekday[6] = "Sabado";
	var dia = weekday[date.getDay()];
	var month = new Array(7);
	month[0]=  "Enero";
	month[1] = "Febrero	";
	month[2] = "Marzo";
	month[3] = "Abril";
	month[4] = "Mayo";
	month[5] = "Junio";
	month[6] = "Julio";
	month[7] = "Agosto";
	month[8] = "Septiembre";
	month[9] = "Octubre";
	month[10] = "Novimebre";
	month[11] = "Dicimebre";
	var mes = month[date.getMonth()];
	var allString=dia+"  "+date.getDate()+" de "+mes+ " de "+date.getFullYear();
	return allString;
	
}
function getPostbyUserLike(idUser){
	$(".content2t").empty();
	$(".demo2").empty();
	$("#fivepostword").empty();
	

	var jsonData = {
			'idUser' : idUser
	};
	$.ajax({
		url : 'BlogAnalisisController/getPostLikebyUser',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data12) {
		 $('.breadcrumb').html("<li><a href='' id='blog'>Blog</a></li><li>Mis Favoritos</li>");
		if(data12.length!=0){
		$.each(data12, function(i, obj) {
			
			$('#fivepostword').append("<div class='row'><div class='col-md-12' style='border: 1px solid #E9E9E9; padding:7px 7px 7px 7px;'>"+
             "<div class='col-sm-4 col-md-3 col-lg-2'>"+
                             "<center>"+
                                            "<img src="+obj.imgAutor+" class='img-responsive' />"+
                             "</center>"+
             "</div>"+
             "<div class='col-sm-4 col-md-6 col-lg-8'>"+
                             "<p>"+obj.titulo+"</p>"+
                             "<p><span><strong>"+obj.autor+"</strong></span><br/></p>"+
                             "<p><span><small>"+obj.datePublic+"</small></span><br/></p>"+
             "</div>"+
             "<div class='col-md-12'>"+
                             "<div class='row'>"+
                                            "<div class='col-sm-4 col-md-3 col-lg-2'>"+
                                                            "<br/>"+
                                                            "<a role='button' class='btn btn-primary btn-block' id='liga"+obj.idPost+"'>Ver Post</a>"+
                                            "</div>"+
                             "</div>"+
             "</div>"+
			"</div></div>");
			$("#fivepostword").show();
			
			 $('#liga'+obj.idPost).click(function(){
				$(".liga").hide();
				
				
				 getOnlyOnePost(obj.idPost,obj.titulo,obj.autor,obj.imgAutor,obj.articulo,obj.datePublic);
				$('#fivepostword').hide();
			 });
			 $('#blog').click(function(){
					location.reload();
				});
		});
		}else{
			
			$('#fivepostword').append("<li>Sin Resultados</li> <br>");
		}
	}).fail(function() {
	});
	
}
function getComentUser(idUser){
	$(".content2t").empty();
	$(".demo2").empty();
	$("#fivepostword").empty();
	
	var jsonData = {
			'idUser' : idUser,
			'idPost' :idPost,
			'idComent': idComent
	};
	$.ajax({
		url : 'BlogAnalisisController/getValidateuserPost',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data12) {
		 $('.breadcrumb').html("<li><a href='' id='blog'>Blog</a></li><li>Comentarios Analistas</li>");
		if(data12.length!=0){
		$.each(data12, function(i, obj) {
			$('#fivepostword').append("<div class='panel panel-primary'>"+
			  "<div class='panel-heading'>"+
			    "<h3 class='panel-title'>"+obj.titulo+"</h3><li><a class='panel-title' name='MyLinks' id='liga"+obj.idPost+"'>Ver Post</a></li>"+
			  "</div>"+
			  "<div class='panel-body'><p>"+
			  obj.autor+
			  "</p><p>"+obj.fecha+"</p></div>"+
			"</div><br>");
			
			 $('#liga'+obj.idPost).click(function(){
				$(".liga").hide();
				$('#fivepostword').hide();
			 });
			 $('#blog').click(function(){
					location.reload();
				});
		});
		}else{
			
			$('#fivepostword').append("<li>Sin Resultados</li> <br>");
		}

	}).fail(function() {
	
	});
}

function setUserPostComent(){
	var jsonData = {
			'idUser' : idUser,
			'idPost' :idPost,
			'idComent': idComent
	};
	
	
	$.ajax({
		url : 'BlogAnalisisController/setUserPostComent',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data15) {
	

	}).fail(function() {
	
	});
	
	
	
}

function getLike(idPost,user){
	 var output;
	var jsonData = {
			'idPost' : idPost,
			'user' :user
	};
	
	$.ajax({
		url : 'BlogAnalisisController/getLike',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		 async: false
	}) .done(function(data){
      output = data;
    });
    return output;
	
}
function getPostPageDate(date,num){
	$(".content2t").empty();
	myDate= Date.parse(date) - 2592000000;
	newDate = new Date(myDate);
	var m =newDate.getMonth()+1;
	var arr = new Array( "Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	
    var year = newDate.getFullYear();
    var day = newDate.getDate();
    var todo=day+"-"+arr[m]+"-"+year;
	var jsonData = {
			'date' : todo,
			'page' : num
		};
	var arraybodyPost = new Array();
		$.ajax({
			url : 'BlogAnalisisController/getPostByDateLess',
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
					var usuarioP =$('#usuario',top.document).attr("value");
					var value=getLike(obj.idPost,usuarioP);
					var stylelikeme;
					if(value==1){
						stylelikeme ="style='color:#065CAF;cursor:pointer'";
					}else{
						stylelikeme ="style='color:gray;cursor:pointer'";
					}
								arraybodyPost[i]=obj.articulo;
								var num=i;
								num++;
								var cadena="";
								var datefort=formatDate(obj.datePublic);
								var styleNotification="style='background-color: #5B5B5F;border-radius: 20px;border: 1px solid rgba(100, 100, 100, .4);-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, .45);overflow: visible;position: absolute;top: 30px;margin-left: 470px;width: 20%;z-index: 1000;display: none'";
								idPost=obj.idPost;
								imgAutor=obj.imgAutor;

								if(resultados==null){
									resultados =$('#usuario',top.document).attr("name");
								}
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
								setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP,stylelikeme);
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
													
														$("#likepost"+obj.idPost).empty();
														$('#likepost'+obj.idPost).append(data5);
													
												}).fail(function() {
												}).always(function() {
													var value=getLike(obj.idPost,usuarioparametro);
													if(value==1){
														$('#megusta'+obj.idPost).css("color","#065CAF");
													}else{
														$('#megusta'+obj.idPost).css("color","gray");
													}
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

function getUserName(user){
	var output;
	var jsonData = {
			'user': user
		};
	$.ajax({
		url : 'BlogAnalisisController/getStatusByUser',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		 async: false
	}) .done(function(data){
     output = data.nombreUsuario;
   });
   return output;
}

function getEstatus(user){
	var output;
	var jsonData = {
			'user': user
		};
	$.ajax({
		url : 'BlogAnalisisController/getStatusByUser',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		 async: false
	}) .done(function(data){
     output = data.estatus;
   });
   return output;
	
}



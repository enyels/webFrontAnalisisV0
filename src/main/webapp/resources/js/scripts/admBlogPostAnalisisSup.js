//adminstrador post usuario principal
$(document).ready(function() {
	$("#formEdit").hide();
	estatusBan=0;
	var firstVisit=0;
	 getPost();
	   $('#redactar').click(function(){
		   $('#redactar').hide( "slow", function() {
			$(".demo2").empty();
			$('#hrstyle').hide();
			$('.tetxbusqueda').hide();
			$('#datepicker').hide();
			$('#containerButton').hide();
			showFormEdit();
		});
	});

	   $('#cancelar').click(function(){
			$('#redactar').show();
			$(".demo2").show();
		   $("#formEdit").hide();
			 $(".allcontent").show();
		}); 
	   
	   $('#cancelar2').click(function(){
		   $('#redactar').show();
		   $("#formEdit").hide();
			 $(".allcontent").show();
				$('#datepicker').show();
		});
		 //publicar editor
		 $('#publicar').click(function(){
			 var title=$("#title").val();
			 var content= 	$("#txtEditor").val();
			 var imageuser=$("#imguserr").val();
			 var idPostpar =$("#idpost2").attr("name");
			 updatePost(content,title,idPostpar);
		});
		 $('#publicar2').click(function(){
			 var user =$('#usuario',top.document).attr("value");
			 var title=$("#title").val();
			 var content= 	$("#txtEditor").val();
			 var imageuser=$("#imguserr").val();
			 var idPostpar =$("#idpost2").attr("name");
			 setPost(content,title,user);
		});
		 
		 var arreglo=getDates();
		 var datesArray=filterDate(arreglo);
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
					var theday = (date.getMonth()+1) +'/'+ 
								date.getDate()+ '/' + 
								date.getFullYear();
						return [true,$.inArray(theday, datesArray) >=0?"specialDate":''];
					}
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
								showelement="nd";
								resultados="Administracion de usuario";
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
											//fucioinalidad comentar y modal
											
								$("#closePost"+obj.idPost).click(function() {
									modPostByIdPost(obj.idPost);
								});
								$("#edit"+obj.idPost).click(function() {
									var contenido=$("#bodyPost"+obj.idPost).html();
									 $('#redactar').hide();
									$(".demo2").empty();
									$('#hrstyle').hide();
									$('.tetxbusqueda').hide();
									$('#datepicker').hide();
									$("#containerButton2").hide();
									$("#containerButton").show();
									 $(".allcontent").hide();
									$("#formEdit").show();
									var title=$(".titleclass"+obj.idPost).html();
									var user=$(".userclass"+obj.idPost).html();
									var imagen=$("#imagen"+obj.idPost).attr("src");
									$("#idpost2").attr( "name",obj.idPost);
									$("#user").append(user);
									$("#txtEditor").val(contenido);
									$("#title").val(title);
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
			var myJsonString = JSON.stringify(data);
			$("#postblog").val(myJsonString);
			$("#postblog").show();
			var idPost;
			var imgAutor;
			var title;
			var bodypost;
			var showelement="";
			var resultados="";
			$.each(data, function(i, obj) {
					getComment(obj.idPost);
					getLikePost(obj.idPost);
					getCountComment(obj.idPost);
								arraybodyPost[i]=obj.articulo;
								var num=i;
								num++;
								var cadena="";
								var datefort=formatDate(obj.datePublic);
								var styleNotification="style='background-color: #5B5B5F;border-radius: 20px;border: 1px solid rgba(100, 100, 100, .4);-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, .45);overflow: visible;position: absolute;top: 30px;margin-left: 470px;width: 20%;z-index: 1000;display: none'";
								idPost=obj.idPost;
								imgAutor=obj.imgAutor;

								
								showelement="nd";
								resultados="Administracion de usuario";
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
								//alert(obj.idPost);
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
								
										
						
				  //fucioinalidad comentar y modal
								$("#closePost"+obj.idPost).click(function() {
									modPostByIdPost(obj.idPost);
								});
								$("#edit"+obj.idPost).click(function() {
									
									//class='content"+counterP+
									 $(".allcontent").hide();
									$("#formEdit").show();
									//alert(obj.idPost);
									var body=$(".bodypost"+obj.idPost).html();
									var title=$(".titleclass"+obj.idPost).html();
									var user=$(".userclass"+obj.idPost).html();
									var imagen=$("#imagen"+obj.idPost).attr("src");
									var imegenAll="<img src="+imagen+" alt='analista' class='img-responsive' id='imagen'>";
									
									//$("#idpost").append(obj.idPost);
									
									
									$("#idpost2").attr( "name",obj.idPost);
									$("#imguser").append(imegenAll);
									$("#user").append(user);
									$(".Editor-editor").append(body);
									$("#title").val(title);
									
									
								})
						
						//guardar comentario
					
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
		var datecreate=date.toString("MMM dd"); 
		$('#comment'+obj.id_post).append("<div class='nomUserCom'>"+obj.nom_user+"</div><div class='usercoment'> "+obj.comment+"</div><div>"+datecreate+"<div><hr>");
		});
		$('#comment2'+idPost).append("<form id='form"+idPost+"'><input type='button' id='enviar"+idPost+"' class='btn btn-primary' value='Guardar'/ ></form>");
		$(function(){
			$("#form"+idPost).ebcaptcha();
	    });
		$('#enviar'+idPost).click(function(){
				var user =$('#usuario',top.document).attr("value");
		  	var comment= $("#addComment"+idPost).val();
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
				$(".commentstl"+idPost).empty();
				$(function(){
					$("#comment2"+idPost).empty();
			    });
				getComment(idPost);
				getCountComment(idPostt);
			}).fail(function() {
			alert("error");
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
	 $(".txtEditor").hide();
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
		$.each(data6, function(i, obj) {
			//**consultas de incio
							getComment(obj.idPost);
							getLikePost(obj.idPost);
							getCountComment(obj.idPost);
												//arraybodyPost[i]=obj.articulo;
												//var num=i;
							//num++;
							var cadena="";
							//var datefort=formatDate(obj.datePublic);
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
										
										$("#closePost"+obj.idPost).click(function() {
											modPostByIdPost(obj.idPost);
										});
										$("#edit"+obj.idPost).click(function() {
											$("#containerButton2").hide();
											$("#containerButton").show();
											$("#cdemo2").hide();
											 $(".allcontent").hide();
											$("#formEdit").show();
											var body=$(".bodypost"+obj.idPost).html();
											var title=$(".titleclass"+obj.idPost).html();
											var user=$(".userclass"+obj.idPost).html();
											var imagen=$("#imagen"+obj.idPost).attr("src");
											$("#idpost2").attr( "name",obj.idPost);
											$("#imguser").append(imegenAll);
											$("#user").append(user);
											$(".Editor-editor").append(body);
											$("#title").val(title);
											
											
										});
				

//guardar comentario
						
	
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
		$.each(data12, function(i, obj) {
			$('#fivepostword').append("<li><a name='MyLinks' id='liga"+obj.idPost+"'>"+obj.titulo+"</a></li> <br>");
		
		
		});
		
	}).fail(function() {
	});
	
	
}

function setPost(articulo,title,usuarioid){
	articulo=articulo.replace("font-family", "''");
	articulo=articulo.replace("font-size", "''");
	articulo=articulo.replace("font-size", "''");
	var articulo2=encodeURIComponent(articulo);
	var title2=encodeURIComponent(title);
	var jsonData = {
			'articulo' : articulo2,
			'title' :title2,
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
		$( "p" ).css( "font-family", "Source sans Pro" );
		
		$( "span" ).css( "font-size", "200px" );
	location.reload();
	}).fail(function() {
	});
	
	
}


function setDataPost(counterP,idPostP,imgAutorP,autorP,datefortP,tituloP,articuloP,showelementP,styleNotificationP,resultadosP,cadenaP){
	$(".content2t").append("<div class='content"+counterP+"'><br>" +
			"<div  class='allcontent' id='p"+idPostP+"' "+cadenaP+">" +
					"<div>" +
						"<div id='imageL'>" +
							"<img src='"+imgAutorP+"' alt='analista' class='img-responsive' id='imagen"+idPostP+"' >" +
						"</div>"+
					"<div class='imageR'>" +
						"<div id='titleUserPost' class='userclass"+idPostP+"'>"+autorP+"</div>" +
						"<div id='dateUserPost'>"+datefortP+"</div>" +
						"<div id='titlePost'  class='titleclass"+idPostP+"'>"+tituloP+"</div>" +
					"</div>" +
					"<div class='imageRR'><input type='button' id='edit"+idPostP+"'  class='btn btn-primary' value='Editar'><input type='button' id='closePost"+idPostP+"'   class='btn btn-primary' value='Eliminar'></div>"+
					
					"<br>" +
					"<div id='bodyPost"+idPostP+"' class='bodypostF'>"+articuloP+"</div></br>" +

					"<div id='footer'>" +
					"</div>" +
					
					"<div id='allComents"+idPostP+"'>" +
							"<div class='panel panel-default template' style='background-color: #F9F9F9;'>"+
							"<div class='panel-heading'>" +
								"<h4 class='panel-title'>"+
									"<a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion' href='#collapse"+idPostP+"'>"+
									">>Ver Comentarios"+
									"</a>" +
								"</h4>" +
							"</div>"+
							"<div id='collapse"+idPostP+"' class='panel-collapse collapse'>"+
								"<div class='panel-body'>"+
									"<div  id='comment"+idPostP+"' class='commentstl"+idPostP+"'></div>" +
								"</div>"+
"<div id=addComent>"+resultadosP+"<div></div>" +
"<br>"+
"<div style='margin-left: 5%'>"+
"</div></div>"+
"</div></div>"+
"</div>"+
"</div></div></div></div></p>" +
""
);
	
	
}

function modPostByIdPost(idPost){
	var username;
			  var jsonData = {
						'idPost': idPost
					};
				$.ajax({
					url : 'BlogAnalisisController/modPostbyIdpost',
					type : 'get',
					dataType : 'json',
					data : jsonData,
					async: false
				}).done(function(data20) {
					$( "body").fadeOut( function(){
					       location.reload(true); 
					       setTimeout( function(){
					           $(body).fadeIn();
					       }, 50000);
					 });
					
				}).fail(function() {
				});
				
	
}
function updatePost(articulo,title,idPost){
	var title2=encodeURIComponent(title);
	var articulo2=encodeURIComponent(articulo);
	var jsonData = {
			'articulo' : articulo2,
			'title' :title2,
			'idPost' :idPost
	};
	$.ajax({
		url : 'BlogAnalisisController/updatePostbig',
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



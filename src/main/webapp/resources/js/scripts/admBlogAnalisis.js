//adm anlaista alta
$(document).ready(function() {
	$('#content').hide();
	$('#content').load('/cs/groups/public/documents/analisis/yw5h/bglz/~edisp/galeriaimganalistas.hcsp [role="main"]');
	setTimeout(function(){
		$('.least-gallery').least();
		var ulimagenes = Math.floor(($(window).width()- 40) / 140);
		var ulimagenes2 = 0;
		for(var i=ulimagenes; i<14; i++) {
			$('li#' + i).hide();
		}
		tinysort('li.analistas-foto',{attr:'id'});
		$('#flecha-izq').hide();
		$('#content').show();
		$('#flecha-der').click(function(){
			if(ulimagenes < 14){
				$('li#' + ulimagenes).show();
				ulimagenes = ulimagenes + 1;
				$('li#' + ulimagenes2).hide();
				ulimagenes2 = ulimagenes2 + 1;
				$('#flecha-izq').show();
				if(ulimagenes == 14) {
					$(this).hide();
				}
			}
		});
		
		$('#flecha-izq').click(function(){
			if(ulimagenes2 > 0) {
				ulimagenes2 = ulimagenes2 - 1;
				ulimagenes = ulimagenes - 1;
				$('li#' + ulimagenes2).show();
				$('li#' + ulimagenes).hide();
				$('#flecha-der').show();
				if(ulimagenes2 <= 0) {
					$(this).hide();
				}
			}
		});
		
		  $("#guardar-analista").click(function(){
				var user=$("#inputEmail").val();
				var nameTr=$("#inputNombre").val();
				var name="aliasAnalista";
				var show=1;
				var imguser=$("#inputImg").val();
				var imgcodif=encodeURIComponent(imguser);
				//console.log(imgcodif);
				if(user!=""){
				setUser(user,name,nameTr,show,imgcodif);
				}else{
					alert("ingrese dato");
				}
			});  
		  $('#inputEmail').bind('keyup blur', function () { $(this).val($(this).val().replace(/[^A-Za-z]/g, '')) });
		$( window ).resize(function() {
			$('.analistas-foto').hide();
			ulimagenes = ulimagenes2 + Math.floor($('.least-gallery').width() / 140);
			ulimagenes2 = ulimagenes - Math.floor($('.least-gallery').width() / 140);
			//console.log('ulimagenes ' + ulimagenes + ' ulimagenes2 ' + ulimagenes2);
				
				if(ulimagenes < 14) {
					for(var j = ulimagenes2; j < ulimagenes; j++) {
					$('li#' + j).show();
				}
				$('#flecha-der').show();
			} else {
				ulimagenes = 14;
				ulimagenes2 = ulimagenes - Math.floor($('.least-gallery').width() / 140);
				for(var j = ulimagenes2; j < ulimagenes; j++) {
					$('li#' + j).show();
				}
				$('#flecha-der').hide();
			}
		});
		
		$("[role='main']").css('top', $('header').height());
		$( window ).resize(function() {
				$("[role='main']").css('top', $('header').height());
		});
		$('.img-analistas').click(function(){
			$('#inputNombre').val($(this).attr('title'));
			$('#inputImg').val($(this).attr('href'));
			$('.img-analistas').css({opacity: "1"});
			$('.img-analistas img').css({border: "4px solid #000000"});
			$(this).css({opacity: "0.5"});
			$(this).find('img').css({border: "4px solid #fdbd07"});
			$('.img-analistas').parent().find('.check-icon').remove();
			$(this).parent().append('<p class="check-icon" style="color: green; font-size: 25px; margin-top: -25px; z-index: 5; text-align: right;"><i class="fa fa-check"></i></p>');
			$(this).bind('click', function(){
				if ($('#inputImg').val() == '') {
					$('#inputImg').val($(this).attr('href'));
					$('.img-analistas').css({opacity: "1"});
					$('.img-analistas img').css({border: "4px solid #000000"});
					$(this).css({opacity: "0.5"});
					$(this).find('img').css({border: "4px solid #fdbd07"});
					$('.img-analistas').parent().find('.check-icon').remove();
					$(this).parent().append('<p class="check-icon" style="color: green; font-size: 25px; margin-top: -25px; z-index: 5; text-align: right;"><i class="fa fa-check"></i></p>');
				}
				else {
					$('#inputImg').val('');
					$('.img-analistas').css({opacity: "1"});
					$('.img-analistas img').css({border: "4px solid #000000"});
					$('.img-analistas').parent().find('.check-icon').remove();
				}
			});
			$('.img-analistas').not($(this)).bind('click', function(){
				$('#inputImg').val($(this).attr('href'));
				$('.img-analistas').css({opacity: "1"});
				$('.img-analistas img').css({border: "4px solid #000000"});
				$(this).css({opacity: "0.5"});
				$(this).find('img').css({border: "4px solid #fdbd07"});
				$('.img-analistas').parent().find('.check-icon').remove();
				$(this).parent().append('<p class="check-icon" style="color: green; font-size: 25px; margin-top: -25px; z-index: 5; text-align: right;"><i class="fa fa-check"></i></p>');
			});
		});
	},500);
    
});

function setUser(user,name,nameTr,show,imgcodif){
	var nameTr2=encodeURIComponent(nameTr);
var estatus=2;
	var jsonData = {
			'user' :user,
			'alias' :name,
			'estatus': estatus, 
			'nombreUsuario': nameTr2,
			'show': show,
			'imguser':imgcodif
		};
	$.ajax({
		url : 'BlogAnalisisController/setUserAnalist',
		type : 'get',
		dataType : 'json',
		data : jsonData,
		async: true
	}).done(function(data2) {
	if(data2==3){
	alert("Se env\u00edo con exito.");
	}else if(data2==5){
	alert("El usurio ya existe.");	
	}else{
		alert("Error al insertar usuario.");
	}
	location.reload();
	}).fail(function() {
	});

}
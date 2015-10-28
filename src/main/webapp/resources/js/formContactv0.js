$(document).ready(function () {

	var resultFind = $('#usuario', top.document).attr('value');
	if (resultFind === undefined) {
		resultFind = "undefined";
	}
	var jsonData = {
			'valResultFind': resultFind
	};
	$.ajax({
		url: 'CheckSessController/workWithSess',
		data: jsonData,
		type: 'get'
	}).done(function(data) {
		if (data == "true") {
//			console.log("SI visible::formContact::");
		} else {
//			console.log("NO visible::formContact::");
			$('html').empty();
		}
	}).fail(function() {
		alert("Falla al consumir CheckSessController/workWithSess");		
	});	
	
	$('#sendEmail').attr('disabled', true);
	
	$(".soloTexto").bind('keypress', function (event) {		
	    var regex = new RegExp("^[a-zA-Z ]+$");						
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (event.which == 241 || event.which == 209 || event.which == 225 ||
	    		event.which == 233 || event.which == 237 || event.which == 243 ||
	    		event.which == 250 || event.which == 193 || event.which == 201 ||
	    		event.which == 205 || event.which == 211 || event.which == 218 )
	    	return true;
	    else {
		    if (!regex.test(key) && event.charCode!=0 ) {   						
		       event.preventDefault();						
		       return false;						
		    }		
	    }
	});
	
	$(".soloNumeros").bind('keypress', function (event) {						
	    var regex = new RegExp("^[0-9]+$");						
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);						
	    if (!regex.test(key) && event.charCode!=0 ) {   						
	       event.preventDefault();						
	       return false;						
	    }						
	});
	
	$(".textoNumber").bind('keypress', function (event) {		
	    var regex = new RegExp("^[a-zA-Z0-9,. ]+$");						
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (event.which == 241 || event.which == 209 || event.which == 225 ||
	    		event.which == 233 || event.which == 237 || event.which == 243 ||
	    		event.which == 250 || event.which == 193 || event.which == 201 ||
	    		event.which == 205 || event.which == 211 || event.which == 218 )
	    	return true;
	    else {
		    if (!regex.test(key) && event.charCode!=0 ) {   						
		       event.preventDefault();						
		       return false;						
		    }		
	    }
	});
	
	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	$("#sendEmail").click(function(e) {
		e.preventDefault();
		var $sendMail = $(this).button('loading');
		
		var nameId 		= $("#nameId").val().trim();
		var correoId 	= $("#correoId").val().trim();
		var tmpMail		= true;
		var empresaId 	= $("#empresaId").val().trim();
		var ciudadId 	= $("#ciudadId").val().trim();
		var postalId	= $("#postalId").val().trim();
		var paisId		= $("#paisId option:selected").text();
		var tmpPais		= "Seleccione un pais";
		var mensajeId	= $("#mensajeId").val().trim();
		
		$('.commonCl').attr('disabled', true);
		$('#paisId option:not(:selected)').attr('disabled', true);
		
		var exito1 = true;
		if(nameId.length == 0){
			exito1 = false;
		}
		var exito2 = true;
		tmpMail = IsEmail(correoId);
		if(tmpMail == false){
			exito2 = false;
		}
		var exito3 = true;
		if(empresaId.length == 0){
			exito3 = false;
		}
		var exito4 = true;
		if(ciudadId.length == 0){
			exito4 = false;
		}
		var exito5 = true;
		if(postalId.length == 0){
			exito5 = false;
		}
		var exito6 = true;
		if(paisId == tmpPais){
			exito6 = false;
		}
		var exito7 = true;
		if(mensajeId.length == 0){
			exito7 = false;
		}
		
		var arrTmp = ['uno','dos','tres','cuatro'];
		var elemSel = "";
		for (var x = 0; x < arrTmp.length; x++) {
			var checkCl = $('#'+arrTmp[x].toString()).hasClass('seleccionado');
			if (checkCl) {
				elemSel = arrTmp[x].toString();
			}
		}
		var iconSel = $('#'+elemSel).children().attr('class');
		var iconOpc = $('#opcion').children().attr('class');
		var attrStyle = $('#opcion').attr('style');
		if(attrStyle == undefined){
			attrStyle = 'undefined';
		}		
		var posAttr = attrStyle.indexOf('1');
		var exito8 = true;
		if (iconSel != iconOpc || posAttr != 9) {
			exito8 = false;
		}
		
		if(exito1){
			if(exito2){
				if (exito3) {
					if (exito4) {
						if (exito5) {
							if (exito6) {
								if (exito7) {
									if (exito8) {
										var jsonData = {
												'nameId': nameId,
												'correoId': correoId,
												'empresaId': empresaId,
												'ciudadId': ciudadId,
												'postalId': postalId,
												'paisId': paisId,
												'mensajeId': mensajeId,
												'emailDestino': 'icabrera@actinver.com.mx'
										};
										$.ajax({
											url: 'InteractiveStaController/actionMailContact',
											type: 'post',
											dataType: 'text',
											contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
											data: jsonData
										}).done(function(data) {
											$sendMail.button('reset');
											$('.commonCl').attr('disabled', false);
											$('#paisId option:not(:selected)').attr('disabled', false);
											$('.commonCl').val('');
											$("#opcion").removeAttr("style");
											$('#paisId option[value=""]').attr('selected', 'selected');
											if (data.indexOf("Exito") == 0) {
												$('.msgOk').text(data);
											} else {
												$('.msgFail').text(data);
											}
											setTimeout(function() {
												$('.msgFail').text('');
												$('.msgOk').text('');
												$('#sendEmail').attr("disabled", true);
											}, 2000);
										}).fail(function(data) {
											$sendMail.button('reset');
											$('.commonCl').attr('disabled', false);
											$('#paisId option:not(:selected)').attr('disabled', false);
											$('.msgFail').text(data);
											setTimeout(function() {
												$('.msgFail').text('');
											}, 2000);
										});
									} else {
										$sendMail.button('reset');
										$('.commonCl').attr('disabled', false);
										$('#paisId option:not(:selected)').attr('disabled', false);
										$('.msgFail').text('Resuelva el Captcha');
										setTimeout(function() {
											$('.msgFail').text('');
										}, 2000);
									}
								} else {
									$sendMail.button('reset');
									$('.commonCl').attr('disabled', false);
									$('#paisId option:not(:selected)').attr('disabled', false);
									$('.msgFail').text('Ingrese su mensaje');
									setTimeout(function() {
										$('.msgFail').text('');
									}, 2000);
								}
							} else {
								$sendMail.button('reset');
								$('.commonCl').attr('disabled', false);
								$('#paisId option:not(:selected)').attr('disabled', false);
								$('.msgFail').text('Seleccione su pais');
								setTimeout(function() {
									$('.msgFail').text('');
								}, 2000);
							}
						} else {
							$sendMail.button('reset');
							$('.commonCl').attr('disabled', false);
							$('#paisId option:not(:selected)').attr('disabled', false);
							$('.msgFail').text('Ingrese un codigo postal');
							setTimeout(function() {
								$('.msgFail').text('');
							}, 2000);
						}
					} else {
						$sendMail.button('reset');
						$('.commonCl').attr('disabled', false);
						$('#paisId option:not(:selected)').attr('disabled', false);
						$('.msgFail').text('Ingrese una ciudad');
						setTimeout(function() {
							$('.msgFail').text('');
						}, 2000);	
					}
				} else {
					$sendMail.button('reset');
					$('.commonCl').attr('disabled', false);
					$('#paisId option:not(:selected)').attr('disabled', false);
					$('.msgFail').text('Ingrese una empresa');
					setTimeout(function() {
						$('.msgFail').text('');
					}, 2000);	
				}
			} else {
				$sendMail.button('reset');
				$('.commonCl').attr('disabled', false);
				$('#paisId option:not(:selected)').attr('disabled', false);
				$('.msgFail').text('Ingrese un correo valido');
				setTimeout(function() {
					$('.msgFail').text('');
				}, 2000);				
			}
		} else {
			$sendMail.button('reset');
			$('.commonCl').attr('disabled', false);
			$('#paisId option:not(:selected)').attr('disabled', false);
			$('.msgFail').text('Ingrese un nombre');
			setTimeout(function() {
				$('.msgFail').text('');
			}, 2000);
		}
		
	});

});
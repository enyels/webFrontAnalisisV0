$(document).ready(function(){
	
	var numcnt;
	var myName;
	var myEmail;
	var myMovil;
	
	$('.soloNumeros', top.document).bind('keypress', function (event) {
	    var regex = new RegExp("^[0-9]+$");						
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);						
	    if (!regex.test(key) && event.charCode!=0 ) {   						
	       event.preventDefault();						
	       return false;						
	    }						
	});
	
	$('#accesNumberC', top.document).bind("click", function(e){
		e.preventDefault();
		//var numcnt = $('#numberContract', top.document).val();
		numcnt = $('#numberContract', top.document).val();
		var exito1 = true;
		if(numcnt.length == 0){
			exito1 = false;
		}
		if(exito1){
			var $accesNumberC = $(this).button('loading');
			$('#numberContract', top.document).attr('disabled', 'disabled');
			var jsonData = {
					'numCont': numcnt
			};
			$.ajax({
				url:'InteractiveStaController/actionSendContract',
				type: 'GET',
				dataType: 'text',
				data: jsonData
			}).done(function(data) {
				var myObjJsonRes = jQuery.parseJSON(data);
				var myRes;
				//var myName;
				//var myEmail;
				//var myMovil;
				var myCode;
				$.each( myObjJsonRes, function( key, value ) {
					if(key == "response"){
						myRes = value;
					}
				});
				
				if(myRes == null){
					//console.log("Response es null::"+myRes);
					$.each( myObjJsonRes, function( key, value ) {
						if(key == "nombre"){
							myName = value;
						} else if(key == "mail"){
							myEmail = value;
						} else if(key == "telefono"){
							myMovil = value;
						}
					});
					//console.log("When NULL::"+myName+"::"+myEmail+"::"+myMovil);
					var exitoLg1 = true;
					if(myName == null || myEmail == null || myMovil == null){
						exitoLg1 = false;
						$('.msgWar', top.document).text('Sus datos para generar una cuenta son incompletos, consulte a su ejecutivo.');
						setTimeout(function() {
							$('.msgWar', top.document).text('');
							top.location.reload();
						}, 4000);
					}
					//console.log(exitoLg1);
					if(exitoLg1){
						$('#songPeople', top.document).hide();
						$('#albumPeople', top.document).css('display','inline-block');
						//$('#lgName', top.document).val(myName);
						//$('#lgCorr', top.document).val(myEmail);
						//$('#lgMov', top.document).val(myMovil);
					}
					
				} else {
					//console.log("Response diff null::"+myRes);
					$accesNumberC.button('reset');
					$('#numberContract', top.document).removeAttr('disabled');
					$.each( myObjJsonRes.response.messages.item[0], function( key, value ) {
						if(key == "code"){
							myCode = value;
							if(myCode == "BEADM0000003"){
								$('.msgWar', top.document).text("Tenemos una inconsistencia en tu mail o tu número de celular. Por favor, Contáctanos.");
								setTimeout(function() {
									$('.msgWar', top.document).text('');
									$("#opcion", top.document).removeAttr("style");
									$.getScript("/resources/js/jquery/Ofcaptcha.js", function () {});
									$("#accesNumberC", top.document).attr('disabled','disabled');
								}, 2000);
							} else {
//								console.info("Codigo Desconocido	::	[FormExterLog]	::	"+myCode);
								top.location.reload();
							}
						}
					});
				}

			}).fail(function(event) {
//				console.info("Click Evnt :: [FormExterLog] :: Fail Call Ajax :: [actionSendContract]");
				$accesNumberC.button('reset');
				$('#numberContract', top.document).removeAttr('disabled');
				$('.msgWar', top.document).text('Intente Nuevamente');
				setTimeout(function() {
					$('.msgWar', top.document).text('');
					$("#opcion", top.document).removeAttr("style");
					$.getScript("/resources/js/jquery/Ofcaptcha.js", function () {});
					$("#accesNumberC", top.document).attr('disabled','disabled');
				}, 2000);
			});	
			
		} else {
			$("#opcion", top.document).removeAttr("style");
			$.getScript("/resources/js/jquery/Ofcaptcha.js", function () {});
			$("#accesNumberC", top.document).attr("disabled", true);
			$('.msgWar', top.document).text('Ingrese numero de contrato');
			setTimeout(function() {
				$('.msgWar', top.document).text('');
			}, 2000);
		}
	}); //Fin Click Validar Contracto
	
	$('#noAcc', top.document).on('click',function(){
		top.location.reload();
	});
	
	$('#siAcc', top.document).on('click',function(){
		var $siAcc = $(this).button('loading');
		var jsonDataCon = {
				'numCont': numcnt,
				'tuName' : myName,
				'tuEmail' : myEmail,
				'tuMovil' : myMovil
		};
		$.ajax({
			url:'InteractiveStaController/actionConfNewCount',
			type: 'GET',
			dataType: 'text',
			data: jsonDataCon
		}).done(function(data) {
			//console.log("responseNewCount::"+data);
			
			$('#albumPeople', top.document).hide();
			$('#concertPeople', top.document).css('display','inline-block');
			//$('#nomEstim', top.document).text(jsonDataCon.tuName);
			if(data == "EXITO") {
				$('#msgSky', top.document).show();
				setTimeout(function() {
					top.location.reload();
				}, 15000);
			} else if(data == "ERROR") { 
				$('#msgHell', top.document).show();
				setTimeout(function() {
					top.location.reload();
				}, 8000);
			} else {
//				console.info("Click Evnt :: [FormExterLog] :: Respuesta Inespareda :: [actionConfNewCount]\n"+data);
				setTimeout(function() {
					top.location.reload();
				}, 2000);
			}	
			
		}).fail(function(event){
//			console.info("Click Evnt :: [FormExterLog] :: Fail Call Ajax :: [actionConfNewCount]");
			$siAcc.button('reset');
		});
	}); //fin si acc
	
});

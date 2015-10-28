$(document).ready(function(){

	var myParam1 = $('#backModMail').attr('data-param1');
	
	var checkRadBtn = $("input[name='inlineRadioOptionsSM']", top.document).is(':checked')
	if( !checkRadBtn){
		$('.msgDee', top.document).text('Selecciona un destinatario');
	}
	$("input[name='inlineRadioOptionsSM']", top.document).click(function(){
		$('.msgDee', top.document).text('');
	});
	
	if (myParam1 !== null || myParam1 !== undefined || myParam1 !== "") {
		$('#backModMail', top.document).modal('show');
		$('#backModMail', top.document).after('<div id="modMail" class="modal-backdrop fade in bodyMap01"></div>');
		$('#sendEmail', top.document).attr('disabled', true);
	}
	
	$('.textoNumber', top.document).bind('keypress', function (event) {		
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
	
	$('#fnCloseModal', top.document).click(function(e){
		e.preventDefault();
		$('.headMap01', top.document).remove();
		$('.headMap02', top.document).remove();
		$('.headMap03', top.document).remove();
		$('.headMap04', top.document).remove();
		
		$('.bodyMap01', top.document).remove();
		
		$('.footMap01', top.document).remove();
		$('.footMap02', top.document).remove();
		$('.footMap03', top.document).remove();
		$('.footMap04', top.document).remove();
		$('.footMap05', top.document).remove();
		$('.footMap06', top.document).remove();
	});
	 
	$('#sendEmail', top.document).click(function(e) {
		e.preventDefault();
		
		$('#fnCloseModal', top.document).attr('disabled', true);
		var $sendMail = $(this).button('loading');
//		var emOrigen = 'analisis@actinver.com.mx';
		var emOrigen = 'portalanalisis@actinver.com.mx';
		var emDestino = $('input[name=inlineRadioOptionsSM]:checked', top.document).val();
		var emAsunto = $('#inAsunto', top.document).val();
		var emMensaje = $('#inMensaje', top.document).val();
		var exito1 = true;
		var exito2 = true;
		var exito3 = true;
		var exito4 = true;
		
		$('.grpMail', top.document).attr('disabled', 'disabled');
		
		if(emOrigen == ''){
			exito1 = false;
		}
		if(emDestino == '' || emDestino === undefined){
			exito2 = false;
		}
		if(emAsunto == ''){
			exito3 = false;
		}
		if(emMensaje == ''){
			exito4 = false;
		}
		
		if (exito1) {
			if (exito2) {
				if (exito3) {
					if (exito4) {
						
						emMensaje = localStorage.getItem('userName')+":\n\n"+emMensaje;
						var jsonData = {
								'valOrigen': emOrigen,
								'valDestino': emDestino,
								'valAsunto': emAsunto,
								'valMensaje': emMensaje
						};
						$.ajax({
							url:'InteractiveStaController/actionSendMail',
							type: 'post',
							dataType: 'text',
							contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
							data: jsonData
						}).done(function(data) {
							$('.msgDee', top.document).css('display','none');
							$('.messageOk', top.document).css('display','inline-block');
							$('.msgHig', top.document).text(data);
							localStorage.removeItem('userName');
							setTimeout(function() {
								$sendMail.button('reset');
								$('.headMap01', top.document).remove();
								$('.headMap02', top.document).remove();
								$('.headMap03', top.document).remove();
								$('.headMap04', top.document).remove();
								
								$('.bodyMap01', top.document).remove();
								
								$('.footMap01', top.document).remove();
								$('.footMap02', top.document).remove();
								$('.footMap03', top.document).remove();
								$('.footMap04', top.document).remove();
								$('.footMap05', top.document).remove();
								$('.footMap06', top.document).remove();
								top.location.reload();
							}, 4000);
						}).fail(function() {
							$("#fnCloseModal", top.document).attr('disabled', false);
							$('.grpMail', top.document).removeAttr('disabled');
//							console.info("Click Evnt :: [FormSendMail] :: Fail Call Ajax :: [ActionSendMail]");
						});
						
					}else{
						$sendMail.button('reset');
						$('#fnCloseModal', top.document).attr('disabled', false);
						$('.grpMail', top.document).removeAttr('disabled');
						$('.msgDee', top.document).text('Ingresa el mensaje');
						setTimeout(function() {
							$('.msgDee', top.document).text('');
						}, 2000);
					}
				}else {
					$sendMail.button('reset');
					$('#fnCloseModal', top.document).attr('disabled', false);
					$('.grpMail', top.document).removeAttr('disabled');
					$('.msgDee', top.document).text('Ingresa un asunto');
					setTimeout(function() {
						$('.msgDee', top.document).text('');
					}, 2000);
				}
			}else {
				$sendMail.button('reset');
				$('#fnCloseModal', top.document).attr('disabled', false);
				$('.grpMail', top.document).removeAttr('disabled');
				$('.msgDee', top.document).text('Selecciona un destinatario');
//				setTimeout(function() {
//					$('.msgDee', top.document).text('');
//				}, 2000);
			}
		}else{
//			console.info("Click Evnt :: [FormSendMail] :: Fail Sender Empty :: [Validation]");
			$sendMail.button('reset');
			$('#fnCloseModal', top.document).attr('disabled', false);
			$('.grpMail', top.document).removeAttr('disabled');
		}
		
	}); //::end::btnClick
	
}); //::end::Jquery
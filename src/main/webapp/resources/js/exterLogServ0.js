$(document).ready(function(){
		
	$('#openModLg').click(function(e) {
		e.preventDefault();
		$('#modal-loginc', top.document).empty();
		$('#seccionMod2', top.document).hide();
		$.ajax({
			url: 'InteractiveStaController/formExterLog',
			dataType: 'html',
			type: 'get'
		}).done(function(data) {
			$('#modal-loginc', top.document).append(data);
		}).fail(function() {
//			console.info("Click Evnt :: [BtnSndEmail] :: Fail Call Ajax :: [FormSendMail]");
		});
	});
	
});
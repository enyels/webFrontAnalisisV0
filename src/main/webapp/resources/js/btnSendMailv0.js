$(document).ready(function() {
	
	var resultFind2 = $('#usuario', top.document).text();
	localStorage.setItem('userName', resultFind2);

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
//			console.log("SI visible::btnSendMail::");
			$('.botonEmail').css('display','inline-block');
		} else {
//			console.log("NO visible::btnSendMail::");
			$('html').empty();
		}
	}).fail(function() {
//		console.info("Boot Js :: [BtnSndEmail] :: Fail Call Ajax :: [WorkWithSess]");		
	});	
	
	$('#openModSM').click(function(e) {
		e.preventDefault();
		$.ajax({
			url: 'InteractiveStaController/formSendMail',
			dataType: 'html',
			type: 'get'
		}).done(function(data) {
			$(top.document.body).prepend(data);
		}).fail(function() {
//			console.info("Click Evnt :: [BtnSndEmail] :: Fail Call Ajax :: [FormSendMail]");
		});
	});
});
$(document).ready(function() {
	
	 $("#emDefault a").click(function(e) {
		e.preventDefault();
 		var emDefaultAtr = $(this).attr('id');
 		$('#emDefault #'+emDefaultAtr).removeClass("mostrarEm");
 		$('#emDefault #'+emDefaultAtr).addClass("ocultarEm");
 		$('#emDefault #'+emDefaultAtr).attr('data-clase', 'ocultarEm');
 		
 		$('#emSelected #'+emDefaultAtr).removeClass("ocultarEm");
 		$('#emSelected #'+emDefaultAtr).addClass("mostrarEm");
 		$('#emSelected #'+emDefaultAtr).attr('data-clase', 'mostrarEm');
	 });

	$("#emSelected a").click(function(e) {
		e.preventDefault();
		var emDefaultAtr = $(this).attr('id');
 		$('#emSelected #'+emDefaultAtr).removeClass("mostrarEm");
 		$('#emSelected #'+emDefaultAtr).addClass("ocultarEm");
 		$('#emSelected #'+emDefaultAtr).attr('data-clase', 'ocultarEm');
 		
 		$('#emDefault #'+emDefaultAtr).removeClass("ocultarEm");
 		$('#emDefault #'+emDefaultAtr).addClass("mostrarEm");
 		$('#emDefault #'+emDefaultAtr).attr('data-clase', 'mostrarEm');
	});
	
	$('#actSaveEm').click(function(e) {
		e.preventDefault();
		var $actSaveEm = $(this).button('loading');

		var objDefault = {};
		$('#emDefault a').each(function() {
			objDefault[$(this).attr('id')] = $(this).attr('data-clase');
		});
		var objSelected = {};
		var arrSelected = [];
		$('#emSelected a').each(function() {
			objSelected[$(this).attr('id')] = $(this).attr('data-clase');
			if($(this).attr('data-clase') == "mostrarEm"){
				arrSelected.push($(this).attr('id'));
				arrSelected.push($(this).attr('data-clase'));
			}
		});
		
		var tamArrSelected = arrSelected.length;
		var validTamArr = true;
		if(tamArrSelected < 24){
			validTamArr = false;
		}
		
//	    for ( var myKey in objDefault) {
//	        var val = objDefault[myKey];
//	        console.log("objDefault::myKey::"+myKey+"::val::"+val);
//	    }
		
		if(validTamArr == true){
			$.ajax({
				url: 'InteractiveAdmController/setEmisorasDef',
				data: objDefault,
				type: 'get'
			}).done(function(data) {
				var responseDef = data;
				if (responseDef == "Exito.Default") {
	//				console.log("Operation::Sel::Ok::"+data);
	//			    for ( var myKey in objSelected) {
	//			        var val = objSelected[myKey];
	//			        console.log("objSelected::myKey::"+myKey+"::val::"+val);
	//			    }		
					$.ajax({
						url: 'InteractiveAdmController/setEmisorasSel',
						data: objSelected,
						type: 'get'
					}).done(function(data) {
						$actSaveEm.button('reset');
	//					console.log("Operation::Sel::"+data);
					}).fail(function(data) {
						$actSaveEm.button('reset');
						console.info("Click Heredado :: [AdmTicker] :: Fail Call Ajax :: [SetEmisorasSel]");		
					});
				} else {
					$actSaveEm.button('reset');
					console.info("Response Ajax :: [AdmTicker] :: Validation Response :: [SetEmisorasDef]");		
				}
			}).fail(function(data) {
				$actSaveEm.button('reset');
				console.info("Click Evnt :: [AdmTicker] :: Fail Call Ajax :: [SetEmisorasDef]");		
			});
		} else {
			$actSaveEm.button('reset');
			alert("Almenos 12 Emisoras deben ser visibles.");
		}
	});

	$('#buscarEmSel').on('click', function(e) {
		e.preventDefault();
		var miText = $('#textSel').val().toUpperCase();
		var $emFound = $("#emSelected a:contains("+miText+")");
		var myId = $emFound.attr('id');
		$("#emSelected a[id=" + myId + "]").focus();
	});
	
	$('#buscarEmDef').on('click', function(e) {
		e.preventDefault();
		var miText2 = $('#textDef').val().toUpperCase();
		var $emFound2 = $("#emDefault a:contains("+miText2+")");
		var myId2 = $emFound2.attr('id');
		$("#emDefault a[id=" + myId2 + "]").focus();
	});
	 
});

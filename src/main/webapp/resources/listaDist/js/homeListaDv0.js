$(document).ready(function(){
	var cadContracts = $('#usuario', top.document).attr('data-contratos');
	if(cadContracts.length == 0){
		$('#wrapMainLoad').hide();
		$('#wrapMainDone').hide();
		$('#wrapMainFail').show();
		$('#msgFailCont').text("");
		$('#msgFailCont').text("No se han encontrado contratos relacionados a su Cliente Unico.");
	} else {
		$('#wrapMainFail').hide();
		$('#wrapMainDone').show();
		var contracts1 = [];
		var ctoAndValue = [];
		contracts1 = cadContracts.split(',');
		for (var count1 = 0; count1 < contracts1.length; count1++) {
			var numCto = contracts1[count1];
			var objWrap1 = {
				'numCliente': numCto,
				'tipoBusqueda': '1'
			}
			$.ajax({
				url: 'InteractiveListaDistController/actionObtainOneCto',
				data: objWrap1,
				dataType: 'JSON'
			}).done(function(data) {
				ctoAndValue.push([data.idPerfilVenta, data.numCliente, data.origenEmail, data.registrado, data.nombre, data.idEstado, data.idIdioma, data.isCliente, data.contenidoAcceso.split(',').join('-'), data.idContenido, data.email, data.numContrato, data.idPerfilVenta]);
				if(ctoAndValue.length == contracts1.length){
					ctoAndValue.sort( function(a, b) {
						var tmpA1 = a.toString().split(',');
					    var tmpB1 = b.toString().split(',');
					    return  parseFloat(tmpA1[0]) - parseFloat(tmpB1[0]);
					});
					ctoAndValue.reverse();
					for (var i = 0; i < ctoAndValue.length; i++) {
						console.log('ctoAndValue['+i+']::'+ctoAndValue[i]);
					}
					var fullProfile = ctoAndValue[0];
					var bestProfCad = fullProfile.toString().split(',');
					console.log('===Mejor Perfil===\n'+fullProfile+'\n===Mejor Perfil===');
					if(bestProfCad[bestProfCad.length-10] == 1){
						console.log("Opc1::"+ctoAndValue.length);
						mainOper(bestProfCad);
					} else if(ctoAndValue.length > 1) {
						console.log("opc2::[N]::Hacer algo con N::"+ctoAndValue.length);
						mainOper(bestProfCad);
					} else if(ctoAndValue.length == 1) {
						console.log("Opc3::[1]::"+ctoAndValue.length)
						mainOper(bestProfCad);
					}
				} // end If contratos = que perfiles
			}).fail(function(e) {
				$('#wrapMainLoad').hide();
				$('#wrapMainDone').hide();
				$('#wrapMainFail').show();
				$('#msgFailCont').text("");
				$('#msgFailCont').text("No fue posible obtener la informacion relacionada a sus contratos, intente nuevamente recargando la pagina.");
			});
		}
	} //map::else
});


function mainOper(bestProfCad){
	var objBestProf = {
			'bestNumCliente': bestProfCad[bestProfCad.length-12],
			'bestOrigenEmail': bestProfCad[bestProfCad.length-11],
			'bestRegistrado': bestProfCad[bestProfCad.length-10],
			'bestNombre': bestProfCad[bestProfCad.length-9],
			'bestIdEstado': bestProfCad[bestProfCad.length-8],
			'bestIdIdioma': bestProfCad[bestProfCad.length-7],
			'bestIsCliente': bestProfCad[bestProfCad.length-6],
			'bestContenidoAcceso': bestProfCad[bestProfCad.length-5],
			'bestIdContenido': bestProfCad[bestProfCad.length-4],
			'bestEmail': bestProfCad[bestProfCad.length-3],
			'bestNumCto': bestProfCad[bestProfCad.length-2],
			'bestPerfil': bestProfCad[bestProfCad.length-1]
	}
	var tmpContenidoAcceso = String(objBestProf.bestContenidoAcceso);
	if (objBestProf.bestNumCto == "None" || objBestProf.bestPerfil == "None") {
		$('#wrapMainLoad').hide();
		$('#wrapMainDone').hide();
		$('#wrapMainFail').show();
		$('#msgFailCont').text("");
		$('#msgFailCont').text("Al menos uno de sus contratos es invalido, verifique la consistencia de su informacion.");
	} else if (objBestProf.bestNumCto != "None" || objBestProf.bestPerfil != "None") {
		$.ajax({
			url: 'InteractiveListaDistController/actionFormBestProf',
			data: objBestProf,
			dataType: 'html'
		}).done(function(data){
			localStorage.setItem("bestNumCliente", objBestProf.bestNumCliente);
			localStorage.setItem("bestOrigenEmail", objBestProf.bestOrigenEmail);
			localStorage.setItem("bestRegistrado", objBestProf.bestRegistrado);
			localStorage.setItem("bestNombre", objBestProf.bestNombre);
			localStorage.setItem("bestIdEstado", objBestProf.bestIdEstado);
			localStorage.setItem("bestIdIdioma", objBestProf.bestIdIdioma);
			localStorage.setItem("bestIsCliente", objBestProf.bestIsCliente);
			localStorage.setItem("bestPerfil", objBestProf.bestPerfil);
			localStorage.setItem("bestNumCto", objBestProf.bestNumCto);
			localStorage.setItem("bestEmail", objBestProf.bestEmail);
			localStorage.setItem("bestIdContenido", objBestProf.bestIdContenido);
			localStorage.setItem("bestContenidoAcceso", tmpContenidoAcceso.split('-').join(','));
			
			$('#wrapMainLoad').hide();
			$('#wrapMainFail').hide();
			
			$('#wrapMainDone').show();						
			$('#wrapMainDone').append(data);
			$('#profEmail').val(objBestProf.bestEmail);
		}).fail(function(e){
			console.log(e.status);
		});
	}
} // end mainOper
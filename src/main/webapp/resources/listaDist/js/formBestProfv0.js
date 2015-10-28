$(document).ready(function(){

	$('#linkToTerminos').click(function(e){
		e.preventDefault();
		window.open('https://www.retoactinverimagen.com/minisitio/reglamento/ReglamentoOficial.html');
		return false;
	});
	
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	$('.realTimeEm').keyup(function(e) {
		e.preventDefault();
		var miId = $(this).attr('id');
		var miEm = $('#'+miId).val().trim();
		var responseEm = isEmail(miEm);
		if (responseEm) {
			$('.checkingEm').removeClass('inCorrectEm').addClass('correctEm');
		} else {
			$('.checkingEm').removeClass('correctEm').addClass('inCorrectEm');
		}
	});
	
	var myBestObj = {
			'bestNumCliente': localStorage.getItem('bestNumCliente'),
			'bestOrigenEmail': localStorage.getItem('bestOrigenEmail'),
			'bestRegistrado': localStorage.getItem('bestRegistrado'),
			'bestNombre': localStorage.getItem('bestNombre'),
			'bestIdEstado': localStorage.getItem('bestIdEstado'),
			'bestIdIdioma': localStorage.getItem('bestIdIdioma'),
			'bestIsCliente': localStorage.getItem('bestIsCliente'),
			'bestPerfil': localStorage.getItem('bestPerfil'),
			'bestNumCto': localStorage.getItem('bestNumCto'),
			'bestEmail': localStorage.getItem('bestEmail'),
			'bestIdContenido': localStorage.getItem('bestIdContenido'),
			'bestContenidoAcceso': localStorage.getItem('bestContenidoAcceso')
	};
	
	console.log("===Mejor Perfil Default===");
	for(var key1 in myBestObj){
		var val1 = myBestObj[key1];
		console.log(key1+"::"+val1);
	}
	console.log("===Mejor Perfil Default===");
	
	$.ajax({
		url: 'InteractiveListaDistController/actionObtainTheTree',
		beforeSend : function(xhr) {
            xhr.setRequestHeader('Accept', "text/html; charset=utf-8");
        },
		data: myBestObj,
		dataType: 'json'
	}).done(function(contenidos){
		localStorage.removeItem('bestNumCliente'),
		localStorage.removeItem('bestOrigenEmail'),
		localStorage.removeItem('bestRegistrado'),
		localStorage.removeItem('bestNombre'),
		localStorage.removeItem('bestIdEstado'),
		localStorage.removeItem('bestIdIdioma'),
		localStorage.removeItem('bestIsCliente'),
		localStorage.removeItem('bestPerfil');
		localStorage.removeItem('bestNumCto');
		localStorage.removeItem('bestEmail');
		localStorage.removeItem('bestIdContenido');
		localStorage.removeItem('bestContenidoAcceso');
		
		if(contenidos.length != 0){
			var spcBr = 0;
			var indexM = 0;
			$.each(contenidos, function(index0, value0) {
				var hasRootNombre = value0.hasOwnProperty('nombre');
				var hasRootId = value0.id;
				if(hasRootNombre && hasRootId == '6'){ //TODOS
	               $('#ulMainTree').append(
	                       '<li class="list-group-item stlLiTre isClParent" id="grp-'+indexM+'-'+value0.id+'-'+index0+'">'+
	                          '<a id="lnk-'+indexM+'-'+value0.id+'-'+index0+'" href="#" class="stlLnkTre"><i id="imgi-'+value0.id+'-'+index0+'" class="fa fa-plus" style="margin-left: '+spcBr+'px;"></i></a>&nbsp;'+
	                          '<label>'+
	                             '<input type="checkbox" class="allOrSelGrp" name="chkGrpAS-'+value0.id+'-'+index0+'" data-AllMain="'+value0.nombre+'">'+
	                             '<span></span>&nbsp;'+
	                                value0.nombre+
	                          '</label>'+
	                       '</li>'  
	                 );
	               $('input:checkbox[name="chkGrpAS-'+value0.id+'-'+index0+'"]').prop('checked', value0.checked);
					deployTree(indexM, value0.boletines, value0.id, index0, spcBr);
				} else { // SIN TODOS
					$.each(value0.boletines, function(index1, value1){
						var hasBoletines0 = value1.contenido.hasOwnProperty('boletines');
						if(hasBoletines0){
							$('#ulMainTree').append(
							      '<li class="list-group-item stlLiTre isClParent" id="grp-'+indexM+'-'+value1.contenido.id+'-'+value1.id_lista_dist+'">'+
							         '<a id="lnk-'+indexM+'-'+value1.contenido.id+'-'+value1.id_lista_dist+'" href="#" class="stlLnkTre2"><i style="margin-left: '+spcBr+'px;" class="fa fa-plus"></i></a>&nbsp;'+
							         '<label>'+
							            '<input type="checkbox" class="allOrSelGrp" name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'" id="selSub-'+value1.contenido.id+'-'+value1.id_lista_dist+'">'+
							            '<span></span>&nbsp;'+
							               value1.descripcion+
							         '</label>'+
							      '</li>'  
							);
							$('input:checkbox[name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'"]').prop('checked', value1.checked);
							deployTree(indexM, value1.contenido.boletines, value1.contenido.id, value1.id_lista_dist, spcBr);
						} else {
							$('#ulMainTree').append(
							      '<li class="list-group-item stlLiTre isClParent" id="grp-'+indexM+'-'+value1.contenido.id+'-'+value1.id_lista_dist+'">'+
							         '<i style="color: #FFFFFF; margin-left: '+spcBr+'px;" class="fa fa-square"></i>&nbsp;'+
							         '<label>'+
							            '<input type="checkbox" class="allOrSelGrp" name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'" data-AllMain="'+value1.descripcion+'">'+
							            '<span></span>&nbsp;'+
							               value1.descripcion+
							         '</label>'+
							      '</li>'
							);
							$('input:checkbox[name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'"]').prop('checked', value1.checked);
						}
					});
				} //end:: no nodo todos
				indexM++;
			}); //end::foreach contenidos
			
			$('.stlLnkTre').click(function(e){
				e.preventDefault();
				var idFullSub = $(this).attr('id');
				var splitIdFull = idFullSub.split('-');
				var idxHijo = splitIdFull[splitIdFull.length-3];
				idxHijo++;
				if ( $('#'+idFullSub+' > i').hasClass('fa-plus') ) {
					$('#'+idFullSub+' > i').removeClass('fa-plus')
					$('#'+idFullSub+' > i').addClass('fa-minus')
					$('[id^=grp-'+idxHijo+'-'+splitIdFull[splitIdFull.length-2]+'-]').show();
				} else {
					$('#'+idFullSub+' > i').removeClass('fa-minus')
					$('#'+idFullSub+' > i').addClass('fa-plus')
					$('[id^=grp-'+idxHijo+'-'+splitIdFull[splitIdFull.length-2]+'-]').hide();
				}
			});
			$('.stlLnkTre2').click(function(e){
				e.preventDefault();
				var idFullSub = $(this).attr('id');
				var splitIdFull = idFullSub.split('-');
				var idxHijo = splitIdFull[splitIdFull.length-3];
				idxHijo++;
				if ( $('#'+idFullSub+' > i').hasClass('fa-plus') ) {
					$('#'+idFullSub+' > i').removeClass('fa-plus')
					$('#'+idFullSub+' > i').addClass('fa-minus')
					$('[id^=grp-'+idxHijo+'-'+splitIdFull[splitIdFull.length-1]+'-]').show();
				} else {
					$('#'+idFullSub+' > i').removeClass('fa-minus')
					$('#'+idFullSub+' > i').addClass('fa-plus')
					$('[id^=grp-'+idxHijo+'-'+splitIdFull[splitIdFull.length-1]+'-]').hide();
				}
			});
			$('.allOrSelGrp').change(function(){
				var idLiParent = $(this).parent().parent().attr('id');
				var nameChkGrp = $(this).attr('name');
				var isChkdGrp = $('input[name='+nameChkGrp+']').is(':checked');
//				console.info('isChkdGrp::'+isChkdGrp);
				findClParentLi(idLiParent);
				$('input:checkbox[name="'+nameChkGrp+'"]').prop('checked', isChkdGrp);
				if(isChkdGrp){
					$('#'+idLiParent).find('input').each(function( index ) {
						$(this).siblings().addClass('backInSel1');
						$(this).prop('checked', false).prop('disabled', true);
					});					
					$('input:checkbox[name="'+nameChkGrp+'"]').siblings().removeClass('backInSel1');
					$('input:checkbox[name="'+nameChkGrp+'"]').prop('checked', true).prop('disabled', false);
				} else {
					$('#'+idLiParent).find('input').each(function( index ) {
						$(this).siblings().removeClass('backInSel1');
						$(this).prop('checked', false).prop('disabled', false);
					});					
				}
			});
		} //end if:: contenido != 0
		
		$('#ulMainTree input:checked').each(function(index, value) {
			var idLiParent11 = $(this).parent().parent().attr('id');
//			console.log( 'name::input::'+$(this).attr('name') );
			$('#'+idLiParent11+' input:checkbox').each(function(index, value) {
				var nameChkGrpDes = $(this).attr('name');
				$('input:checkbox[name="'+nameChkGrpDes+'"]').siblings().addClass('backInSel1');
				$('input:checkbox[name="'+nameChkGrpDes+'"]').prop('disabled', true);
			});
			var nameChkGrpSel = $(this).attr('name');
			$('input:checkbox[name="'+nameChkGrpSel+'"]').siblings().removeClass('backInSel1');
			$('input:checkbox[name="'+nameChkGrpSel+'"]').prop('checked', true).prop('disabled', false);
		});
		
	}).fail(function(e){
		console.info('status error::'+e.status);
	});
	
	$('#profTermAndCond').change(function() {
		var isTermCheck = $(this).is(':checked');
		if (isTermCheck) {
			$('#btnSaveTreMod').prop('disabled', false);
			$('#backColorInTerm2').removeClass('dangerInMap');
			$('#backColorInTerm2').addClass('succesInMap');

			$('#backColorInTerm1').removeClass('dangerInMap');
			$('#backColorInTerm1').addClass('succesInMap');
		} else {
			$('#btnSaveTreMod').prop('disabled', true);
			$('#backColorInTerm2').removeClass('succesInMap');
			$('#backColorInTerm2').addClass('dangerInMap');

			$('#backColorInTerm1').removeClass('succesInMap');
			$('#backColorInTerm1').addClass('dangerInMap');
		}
	});
	
	$('#btnSaveTreMod').click(function(e){
		e.preventDefault();
		var ex0=true, ex1=true, ex2=true;
		var miEm = $('#profEmail').val().trim();
		var responseEm = isEmail(miEm);
		var isTermCheck = $('#profTermAndCond').is(':checked');
		if (responseEm == false) {
			ex0 = false;
			$('#profEmail').focus();
		}
		if (isTermCheck == false) {
			ex1 = false;
			$('#profTermAndCond').focus();
		}
		var contenidoAccesoTmp = "";
		var numInCheck = $('#ulMainTree input:checked').length;
		if (numInCheck == 0) {
			contenidoAccesoTmp = "";
			ex2 = false;
		} else {
			$('#ulMainTree input:checked').each(function(index, value) {
				var nameChkdTmp = $(this).attr('name');
				var chkdNameArr =  nameChkdTmp.split('-');
				if(chkdNameArr[chkdNameArr.length-1] == '0'){
					contenidoAccesoTmp = contenidoAccesoTmp+','+chkdNameArr[chkdNameArr.length-2];
				} else {
					contenidoAccesoTmp = contenidoAccesoTmp+','+chkdNameArr[chkdNameArr.length-1];
				}
			});
		}
		var contenidoAcceso = contenidoAccesoTmp.replace(',','');
		myBestObj.bestContenidoAcceso = contenidoAcceso;
		if(miEm == myBestObj.bestEmail){
			myBestObj.bestNuevoEmail = null;		
		} else {
			myBestObj.bestNuevoEmail = miEm;
		}
		myBestObj.bestTerminos = isTermCheck;
		myBestObj.bestOrigenMod = 'Analisis';
		console.log("===Mejor Perfil Modificado===");
		for(var key2 in myBestObj){
			var val2 = myBestObj[key2];
			console.log(key2+"::"+val2);
		}
		console.log("===Mejor Perfil Modificado===");
		if (ex0) {
			if (ex1) {
				if (ex2) {
					
					//ini::call ws
					var urlRegOrUp = '';
					if(myBestObj.bestRegistrado == 1){
						urlRegOrUp = 'InteractiveListaDistController/actionUpdateContacto';
						registrarCntctClient(urlRegOrUp, myBestObj);
					} else if (myBestObj.bestRegistrado == 0){
						urlRegOrUp = 'InteractiveListaDistController/actionInsertContacto';
						registrarCntctClient(urlRegOrUp, myBestObj);
					}
					//end::call ws

				} else {
					$('#wrapErLstsSend').show();
					$('#textErr1').text('Seleccione al menos un elemento de la lista.');
					setTimeout(function() {
						$('#textErr1').text('');
						$('#wrapErLstsSend').hide();
					}, 5000);
				} //ex2
			} else {
				$('#wrapErLstsSend').show();
				$('#textErr1').text('Es necesario aceptar los terminos y condiciones.');
				setTimeout(function() {
					$('#textErr1').text('');
					$('#wrapErLstsSend').hide();
				}, 5000);
			} //ex1
		} //ex0
	});
	
});

function registrarCntctClient(urlRegOrUp, myBestObj){
	$.ajax({
		url: urlRegOrUp,
		beforeSend : function(xhr) {
            xhr.setRequestHeader('Accept', "text/html; charset=utf-8");
        },
		data: myBestObj,
		dataType: 'json'
	}).done(function(data) {
		if(data == false){
			$('#wrapErLstsSend').show();
			$('#textErr1').text('No fue posible guardar la lista de envios, intente nuevamente.');
			setTimeout(function() {
				$('#textErr1').text('');
				$('#wrapErLstsSend').hide();
			}, 5000);
		} else {
			$('#wrapMainDone').empty();
			$('#wrapMainDone').append('<div class="alert alert-success-map" role="alert"><strong>Su lista de envíos ha sido guardada con éxito.<br>Esta secci&oacute;n se recargara en:</strong><br><br><div class="stlsProgres" id="wrapProgres1"></div></div>');
		    var circle = new ProgressBar.Circle('#wrapProgres1', {
		        color: '#3c763d',
		        strokeWidth: 8,
		        duration: 10000,
		        text: {
		        	value: '10',
			        style: {
			            'font-size': '24px'
			        }
		        },
		        step: function(state, bar){
		        	var valUno = (bar.value() * 9).toFixed(0);
		        	var dySec = 10 - valUno;
		        	bar.setText(dySec);
		        }
		    });
		    circle.animate(1, function () {
		    	location.reload();
			});
		    
		}
	}).fail(function(e) {
		$('#wrapErLstsSend').show();
		$('#textErr1').text('No fue posible guardar la lista de envios, intente nuevamente.');
		setTimeout(function() {
			$('#textErr1').text('');
			$('#wrapErLstsSend').hide();
		}, 5000);
	});
}

function deployTree(indexM, boletines, id0, index0, spcBr){
	var indexN = indexM;
	indexN++;
	$.each(boletines, function(index1, value1){
		var spcBr1 = (spcBr+25);
		var hasBoletines = value1.contenido.hasOwnProperty('boletines');
		if(hasBoletines){
			$('#grp-'+indexM+'-'+id0+'-'+index0).append(
			      '<li style="display: none;" class="list-group-item stlLiTre" id="grp-'+indexN+'-'+value1.contenido.id+'-'+value1.id_lista_dist+'">'+
			         '<a id="lnk-'+indexN+'-'+value1.contenido.id+'-'+value1.id_lista_dist+'" href="#" class="stlLnkTre2"><i style="margin-left: '+spcBr1+'px;" class="fa fa-plus"></i></a>&nbsp;'+
			         '<label>'+
			            '<input type="checkbox" class="allOrSelGrp" name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'" id="selSub-'+value1.contenido.id+'-'+value1.id_lista_dist+'">'+
			            '<span></span>&nbsp;'+
			               value1.descripcion+
			         '</label>'+
			      '</li>'  
			);
			$('input:checkbox[name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'"]').prop('checked', value1.checked);
			deployTree(indexN, value1.contenido.boletines, value1.contenido.id, value1.id_lista_dist, spcBr1);
		} else {
			$('#grp-'+indexM+'-'+id0+'-'+index0).append(
			      '<li style="display: none;" class="list-group-item stlLiTre" id="grp-'+indexN+'-'+value1.contenido.id+'-'+value1.id_lista_dist+'">'+
			         '<i style="color: #FFFFFF; margin-left: '+spcBr1+'px;" class="fa fa-square"></i>&nbsp;'+
			         '<label>'+
			            '<input type="checkbox" class="allOrSelGrp" name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'" data-AllMain="'+value1.descripcion+'">'+
			            '<span></span>&nbsp;'+
			               value1.descripcion+
			         '</label>'+
			      '</li>'  
			);
			$('input:checkbox[name="chkGrpAS-'+value1.contenido.id+'-'+value1.id_lista_dist+'"]').prop('checked', value1.checked);
		}
	});					
}

function findClParentLi(idLiParent){
	if(idLiParent.indexOf('grp-') >= 0){
		var arrIdLiPad = idLiParent.split('-');
		var nameInCheck = 'chkGrpAS-'+arrIdLiPad[arrIdLiPad.length-2]+'-'+arrIdLiPad[arrIdLiPad.length-1];
		var isInchecked = $('input[name='+nameInCheck+']').is(':checked');
		if(isInchecked){
//			console.info('SI::'+nameInCheck+'::'+isInchecked);
			$('input:checkbox[name='+nameInCheck+']').prop('checked', false);			
			var idLiParent1 = $('#'+idLiParent).parent().attr('id');
			findClParentLi(idLiParent1);
		} else {
//			console.info('NO::'+nameInCheck+'::'+isInchecked);
			var idLiParent1 = $('#'+idLiParent).parent().attr('id');
			findClParentLi(idLiParent1);
		}
	}
}
$(document).ready(function(){
	
	var objSmart = {};
	var objDiabl = {};
	var objSkyBl = {};
	var clSelec = "";
	var idSelec = "";
	var fechas="";
	$.ajax({
		url: 'InteractivePortalController/actionAllActivNet',
		type: 'GET',
		dataType: 'JSON'
	}).done(function(dataAct){
		$.each(dataAct, function(key, value) {
	           		
			if(value.emisora == "SMARTRC 14"){
				objSmart.emisora = value.emisora;
				objSmart.fecha = value.fecha;
				objSmart.valor = value.valor;
				var fech=value.fecha;
				var day = fech.substring(0,2);
				var mounth = fech.substring(3,5);
				var year = fech.substring(6,10);

					switch (mounth) {
					    case '01':
					    	mounth = "Enero";
					        break;
					    case '02':
					    	mounth = "Febrero";
					        break;
					    case '03':
					    	mounth = "Marzo";
					        break;
					    case '04':
					    	mounth = "Abril";
					        break;
					    case '05':
					    	mounth = "Mayo";
					        break;
					    case '06':
					    	mounth = "Junio";
					        break;
					    case '07':
					    	mounth = "Julio";
					        break;
					    case '08':
					    	mounth = "Agosto";
					        break;
					    case '09':
					    	mounth = "Septiembre";
					        break;
					    case '10':
					    	mounth = "Octubre";
					        break;
					    case '11':
					    	mounth = "Noviembre";
					        break;
					    case '12':
					    	mounth = "Diciembre";
					        break;
					}	
					fechas = 'al ' + day +' de '+ mounth + ' de ' + year;					
					$('#dateofc').text(fechas);
			} else if(value.emisora == "DIABLOI 10"){
				objDiabl.emisora = value.emisora;
				objDiabl.fecha = value.fecha;
				objDiabl.valor = value.valor;				
			} else if(value.emisora == "ANGEL 10"){
				objSkyBl.emisora = value.emisora;
				objSkyBl.fecha = value.fecha;
				objSkyBl.valor = value.valor;
			}
			
		});
	}).fail(function(event) {
		console.info(":: [ActivoNetov0] :: Fail Call Ajax :: [actionAllActivNet]");
	});
	
	setTimeout(function() {
		$('#menu-tracs li', top.document).each(function(index){
			clSelec = $(this, top.document).attr('class');
			idSelec = $(this, top.document).attr('id');
			if(index == 1 && clSelec == "true" && idSelec == "true"){
				$('#loadActNet').hide();
				$('.tableActivNet').show();
				$('#titleActiv').text('Activos Netos');
				$('#priceActiv').text(objSmart.valor);
				$('#dateActiv').text("al "+objSmart.fecha);								
			} else if(index == 2 && clSelec == "true" && idSelec == "true"){
				$('#loadActNet').hide();
				$('.tableActivNet').show();
				$('#titleActiv').text('Activos Netos');
				$('#priceActiv').text(objSkyBl.valor);
				$('#dateActiv').text("al "+objSkyBl.fecha);
			} else if(index == 3 && clSelec == "true" && idSelec == "true"){
				$('#loadActNet').hide();
				$('.tableActivNet').show();
				$('#titleActiv').text('Activos Netos');
				$('#priceActiv').text(objDiabl.valor);
				$('#dateActiv').text("al "+objDiabl.fecha);
			}
		});
	}, 4000);
	
});
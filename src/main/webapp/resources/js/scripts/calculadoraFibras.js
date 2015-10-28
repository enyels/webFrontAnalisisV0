var emisoraG;
var serieG;
var dataBack;
var stompClient = null;
var HORA;
var MINUTOS;
$(document).ready(function() {
	$("#emisorabtn").hide();
	jQuery(window).resize(function() {
		var width = jQuery(window).width();
		var height = jQuery(window).height();
	
		if ($(window).width() > 320) {
			$('.token-input-list').width(300);
		} else {
			 $('.token-input-list').width(150);
		}
	});
	

	getTime();
$.ajax({
        url: 'AdmCalendarController/getFrontCalendario',
        type : 'get',
		dataType : 'text',
		async: false,
        success: function (resp) {
        	dataBack = resp;
        },
        error: function () {
        	}
    });
	getCompanyName();
	var dataIntraDay = {averagePrice : "",priceVar : "",closingPrice : "",minPrice : "",minDate : "", quantityCounting:"", quantityBuySell: ""
					};
				dataDay();
				$(document).keypress(function(e) {
				    if(e.which == 13) {
				        $("#miboton").click();
				    }
				});
					$("#miboton").click(function() {
						$('.delspace').remove();
						if(stompClient!=null){
							stompClient.disconnect();
						}
						var valor=$("#demo-input-local").val();
						if((valor.length == 0)&&(valor=="")){
							$('.msgError', top.document).text('Ingrese otra emisora');
							setTimeout(function() {
								$('.msgError', top.document).text('');
							}, 2000);
						}
						if(valor!=""){
						$("#demo-input-local").val("");
				
						var base=dataBack;	
						var names = [];
										$("#demo-input-local").siblings("ul").find('li p').each(function() {
											names.push($(this).html());
										});
										$("#emisora").html("<b>" + names.join() + "</br>");
										var todo = String(names.join());
										$("#title").html(todo);
										var emisora="";
										emisora=todo.substr(0,todo.indexOf(' ')); 
										var serie="";
										if((emisora=="LIVEPOL")||(emisora=="GSANBOR")||(emisora=="MFRISCO")){
											serie=todo.substr(emisora.length,todo.indexOf('-')-emisora.length); 
											serie=serie+"-1";
										}else{
											serie=todo.substr(emisora.length,todo.indexOf('-')-emisora.length);  
										}
										emisoraG=emisora;
										$("#emisorabtn").show();
										
										$("#emisorabtn").html("OPINI\u00d3N "+emisoraG);
										
										$("#emisorabtn").attr( "name", emisoraG);
										
										$("#emisorabtn").click(function() {
						
										});
										
										var res = emisora.replace("&amp;", "%26");
										emisora=res;
										serie=serie.trim();
										serieG=serie;
										getInfPeriodic(emisora,serie);
										
										
										getEmisorasFromServ(dataBack,emisora,serie);
						}
					});//fin del click
				});

function dataDay(){
	$("#listaTabla")
	.html(
			"<table><tr><td class='tituloCol' >Precio($)</td><td class='resulBold' id='precio'>"
					+ "</td></tr>"
					+ "<tr><td  class='tituloCol' >Cambio(%)</td><td class='resulBold' id='cambio'>"
					+ "</td></tr>"
					+ "<tr><td  class='tituloCol' >Cierre anterior($)</td><td class='resulBold' id='cierre'>"
					+ "</td></tr>"
					+ "<tr><td  class='tituloCol' >Volumen*</td><td class='resulBold' id='volumen'></td></tr>"
					+ "<tr><td  class='tituloCol' >Apertura($)</td><td class='resulBold' id='apertura'>"
					+ "</td></tr>"
					+ "<tr><td  class='tituloCol' >Maximo($)</td><td class='resulBold' id='maximo'>"
					+ "</td></tr>"
					+ "<tr><td  class='tituloCol' >Minimo($)</td><td class='resulBold' id='minimo'>"
					+ "</td></tr>"
					+ "<tr><td  class='tituloCol' >Importe Operado**</td><td class='resulBold' id='importe'>"
					+ "</td></tr>"
					+"<tr><td></td> </tr>"
					+ "</table>");
}
/*
 * WS Emisora
 */
function getEmisorasFromServ(base,emisora,serie){
	var res = emisora.replace("%26", "&");
	emisora=res;
	var precioFormatR="";
	var precioFormat="";
	var precioCierre="";
	var precioCierreF="";
	var volumen="";
	var resp="";
	var volumenFormat="";
	var precioFormatR="";
	var cambioFromart="";
	var cambioFormatR="";
	var aparturaF="";
	var aperturaF="";
	var maximo="";
	var minimo="";
	var importe="";
	var importeS="";
	emisora = emisora.trim();
	//base="http://mxl43935lm.actinver.com.mx:9085/";
	var urltodo = base+"appsBackAnalisis/jaxrs/MarketInfoRest/bpc01wew/12121/1/5/"
			+ emisora
			+ "/"
			+ serie
			+ "/1?language=SPA";
	//console.log(urltodo);
	$.ajax({
		type : "GET",
		url : urltodo,
		dataType : "json",
	     async: false
		
	}).done(function(resp) {
		
		volumen=parseFloat(resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].quantityCounting);
		var badera=0;	
		volumen=volumen/1000000;
			volumenFormat = volumen.toFixed(3);
			var horaminutos=HORA+MINUTOS;
			if((horaminutos<1530)&&(horaminutos>828)){
				//antes 
				precioFormat = resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].lastPrice;
				precioFormatR=precioFormat.toFixed(2);
				
				cambioFromart=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].priceVar;
				cambioFormatR=parseFloat(cambioFromart.toFixed(2));
				precioCierre=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].closingPrice;
				aperturaF=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].closingPrice;
				aperturaF=aperturaF.toFixed(2);
				maximo=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].maxPrice;
				maximo=maximo.toFixed(2);
				minimo=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].minPrice;
				minimo=minimo.toFixed(2);
				var importe="";
				precioCierreF=precioCierre.toFixed(2);
				importeS=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].quantityBuySell;
				importeS=importeS/1000000;
				importeS=importeS.toFixed(3);
				
				if(precioFormatR==0){
					precioFormatR=precioCierreF;
				}
				$("#listaTabla").hide();
				$("#listaTablaHistoricos").html("<table><tr><td class='tituloCol'>Precio($)</td><td class='resulBold' id='precio'>"
										+ precioFormatR
										+ "</td></tr>"
										+ "<tr><td class='tituloCol'  >%Cambio</td><td class='resulBold' id='cambioF'>"
										+ cambioFormatR
										+ "</td></tr>"
										+ "<tr><td class='tituloCol'>Cierre anterior($)</td><td class='resulBold'>"
										+ precioCierreF
										+ "</td></tr>"
										+ "<tr><td class='tituloCol'>Volumen*</td><td class='resulBold' id='volumen'>" +
										+ volumenFormat
										+"</td></tr>"
										+ "<tr><td class='tituloCol'>Apertura($)</td><td class='resulBold' id='apertura'>"
										+ aperturaF
										+ "</td></tr>"
										+ "<tr><td class='tituloCol'>Maximo($)</td><td class='resulBold'  id='maximo'>"
										+ maximo
										+ "</td></tr>"
										+ "<tr><td class='tituloCol'>Minimo($)</td><td class='resulBold' id='minimo'>"
										+ minimo
										+ "</td></tr>"
										+ "<tr><td class='tituloCol'>**Importe Operado</td><td class='resulBold' id='importe'>"
										+ comasFormat(importeS)
										+ "</td></tr>"
										+"<tr><td></td> </tr>"
										+ "</table>");
				
				$("#listaTablaHistoricos").show();
				if(cambioFormatR<0){
					$('#cambioF').html("<span style=color:#FF0000>"+cambioFormatR.toFixed(2));
				}else{
					$('#cambioF').html("<span style=color:#00A900>"+cambioFormatR.toFixed(2));
				}
					var utilidad1=$("#utnete1").val();
				getOperatividad(emisora,serie,precioFormatR);	
				
				getInfoFinanciera(emisora,serie,precioFormatR);
				
				
				onConnect(base,emisora,serie,precioFormatR);
				$(".contenedor").show();
				
			}else{
				var dataEmna = null;
				var filaEmna = [];
				var blockFilaEmna = [];
				aloneIssuerSerieNac = [];
				var emNaSelec = [];
//				$.post('/resources/textFiles/CopyEmisora_Nacional.txt').success(function(dataEmna) {
				$.post('/resources/textFiles/Emisora_Nacional.txt').success(function(dataEmna) {
//				$.post('emna.jsp').success(function(dataEmna) {
//				$.post('emna2.jsp').success(function(dataEmna) {
						filaEmna = [];
						filaEmna = dataEmna.split(/\n/);
						var tamFilaEmna = filaEmna.length-1;
						var singleRow = [];
					    for(var i=0; i<=tamFilaEmna; i++){
						    singleRow = [];
						    singleRow = filaEmna[i].split('=');
						    aloneIssuerSerieNac.push(singleRow[0]);
						    aloneIssuerSerieNac.push(singleRow[1]);
						    aloneIssuerSerieNac.push(singleRow[2]);
						    aloneIssuerSerieNac.push(singleRow[3]);
						    var allStringEmisora=emisora+" "+serie;
						    if(allStringEmisora==singleRow[0]){
						    	var registroEncontrado=singleRow[0]+"-"+singleRow[1]+"-"+singleRow[2]+"-"+singleRow[3];
						    	 if(singleRow[4]==null){
						    		 	precioFormatR=singleRow[1].toString();
								    	cambioFormatR=singleRow[2].toString();
								    	precioCierre=singleRow[3].toString();
								    	importeS=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].quantityBuySell;
										importeS=importeS/1000000;
										importeS=importeS.toFixed(3);
										var cambioFormatF=parseFloat(cambioFormatR).toFixed(2);
										var precioCierreFS=parseFloat(precioCierre).toFixed(2);
										var aperturaFN="";
										var maximoN=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].maxPrice;
										maximoN=maximoN.toFixed(2);
										var minimoN=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].minPrice;
										minimoN=minimoN.toFixed(2);
										aparturaF=precioCierre;
										var volumenFormatoTRO=parseFloat(singleRow[4]);
								    	
								    	volumenFormatoTRO=volumenFormatoTRO.toFixed(3);
								    }else{
								    	precioFormatR=singleRow[1].toString();
								    	cambioFormatR=singleRow[2].toString();
								    	precioCierre=singleRow[3].toString();
								    	var volumenFormatoTRO=parseFloat(singleRow[4]);
								    	
								    	volumenFormatoTRO=volumenFormatoTRO.toFixed(3);
								    	var aparturaR=parseFloat(singleRow[5]);
								    	aparturaF=aparturaR.toFixed(2);
								    	//precioCierreFS=aparturaF;
								    	maximoN=parseFloat(singleRow[6]);
								    	maximoN=maximoN.toFixed(2);
								    	minimoN=parseFloat(singleRow[7]);
								    	minimoN=minimoN.toFixed(2);
								    	importeS=parseFloat(singleRow[8]);
								    	importeS=importeS/1000000;
										importeS=importeS.toFixed(3);
								    	var cambioFormatF=parseFloat(cambioFormatR).toFixed(2);
										var precioCierreFS=parseFloat(precioCierre).toFixed(2);
								    	
								    }
								
								$("#listaTabla").hide();
								$("#listaTablaHistoricos")
										.html(
												"<table><tr><td class='tituloCol'>Precio($)</td><td class='resulBold' id='precio'>"
														+ precioFormatR
														+ "</td></tr>"
														+ "<tr><td class='tituloCol'  >%Cambio</td><td class='resulBold' id='cambioF'>"
														+ cambioFormatF
														+ "</td></tr>"
														+ "<tr><td class='tituloCol'>Cierre anterior($)</td><td class='resulBold' id='cierreAnterior'>"
														+ precioCierreFS
														+ "</td></tr>"
														+ "<tr><td class='tituloCol'>Volumen*</td><td class='resulBold' id='volumne'>" +
														+ volumenFormatoTRO
														+"</td></tr>"
														+ "<tr><td class='tituloCol'>Apertura($)</td><td class='resulBold' id='apertura'>"
														+ aparturaF
														+ "</td></tr>"
														+ "<tr><td class='tituloCol'>Maximo($)</td><td class='resulBold' id='maximo'>"
														+ maximoN
														+ "</td></tr>"
														+ "<tr><td class='tituloCol'>Minimo($)</td><td class='resulBold' id='minimo'>"
														+ minimoN
														+ "</td></tr>"
														+ "<tr><td class='tituloCol'>**Importe Operado</td><td class='resulBold' id='importe'>"
														+ comasFormat(importeS)
														+ "</td></tr>"
														+"<tr><td></td> </tr>"
														+ "</table>");
								
								if(cambioFormatF<0){
									$('#cambioF').html("<span style=color:#FF0000>"+cambioFormatF);
								}else{
									$('#cambioF').html("<span style=color:#00A900>"+cambioFormatF);
								}
									var utilidad1=$("#utnete1").val();
									getOperatividad(emisora,serie,precioFormatR);
									getInfoFinanciera(emisora,serie,precioFormatR);
									//printCalculDataService(precioFormatR);
								//onConnect(base,emisora,serie,precioFormatR);
								$(".contenedor").show();
						    	
						    	
						    }else{
						    }
					    }
				
				}).error(function(e){
			    	
			    });
				
			}
			
		
	}).fail(function() {
		 angular.element('#angularData').scope().AngularFunction();
	});
	}

/*
 * ****************SOCKET
 */
function onConnect(base,emisora, serie, precioHistorico) {
	var dataBody="";
	var importe="";
	var importeformat="";
	var volumen="";
	var volumneformat="";
	var cambio="";
	var precio="";
	var data = null;
	var precioCierreFsoc="";
	var maximoSoc="";
	var minimoSoc="";
	var closingPrice;
	var socket = new SockJS(base+'appsBackAnalisis/webSocket/analisis');
	stompClient = Stomp.over(socket);
	stompClient.debug = null;
	stompClient.connect({},function(frame) {
						
						stompClient.subscribe('/topic/capitales/bmvAll',function(data) {
							dataBody = $.parseJSON(data.body);
							if ((emisora == dataBody.issuer.issuerName)&& (serie == dataBody.issuer.serie)) {
								precioFormatR="";
								importe=dataBody.quantityBuySell;
												importe =importe/1000000;
												importeformat = importe.toFixed(3);
												volumen=dataBody.quantityCounting;
												volumen=volumen/1000000;
												volumneformat=volumen.toFixed(3);
												cambio =dataBody.priceVar;
												precio=dataBody.lastPrice;
												closingPrice=dataBody.closingPrice;
												precioCierreFsoc=closingPrice.toFixed(2);
												maximoSoc=dataBody.maxPrice;
												maximoSoc=maximoSoc.toFixed(2);
												minimoSoc=dataBody.minPrice;
												minimoSoc=minimoSoc.toFixed(2);
												$("#listaTabla").show();
												$("#listaTablaHistoricos").hide();
												$("#listaTabla")
														.html(
																"<table><tr><td class='tituloCol'>Precio($)</td><td class='resulBold' id='precio'>"
																		+ precio.toFixed(2)
																		+ "</td></tr>"
																		+ "<tr><td class='tituloCol'>Cambio(%)</td><td class='resulBold' id='cambioF'>"
																		+ cambio.toFixed(2)
																		+ "</td></tr>"
																		+ "<tr><td class='tituloCol'>Cierre anterior($)</td><td class='resulBold'  id='cierreAnterior'>"
																		+ precioCierreFsoc
																		+ "</td></tr>"
																		+ "<tr><td class='tituloCol'>Volumen*</td><td class='resulBold' id='volumen'>" 
																		+ volumneformat
																		+"</td></tr>"
																		+ "<tr><td class='tituloCol'>Apertura($)</td><td class='resulBold' id='apertura'>"
																		+ precioCierreFsoc
																		+ "</td></tr>"
																		+ "<tr><td class='tituloCol'>Maximo($)</td><td class='resulBold'  id='maximo'>"
																		+ maximoSoc
																		+ "</td></tr>"
																		+ "<tr><td class='tituloCol'>Minimo($)</td><td class='resulBold' id='minimo'>"
																		+ minimoSoc
																		+ "</td></tr>"
																		+ "<tr><td class='tituloCol'>**Importe Operado</td><td class='resulBold' id='importe'>"
																		+ importeformat
																		+ "</td></tr>"
																		+ "</table>");
												
												if(cambio<0){
													$('#cambioF').html("<span style=color:#FF0000>"+cambio.toFixed(2));
												}else{
													$('#cambioF').html("<span style=color:#00A900>"+cambio.toFixed(2));
												}
												getOperatividad(emisora,serie,precio);
												getInfoFinanciera(emisora,serie,precio);
										
											}
										});
					});
}

function getInfPeriodic(emisora,serie) {
	
	var res = emisora.replace("%26", "&");

	emisora=res;
	var jsonData = {
		'emisora' : emisora,
		'serie' : serie
	};

	$.ajax({
		url : 'CalculadoraController/getVariationsCalcuFib',
		type : 'get',
		dataType : 'text',
		data : jsonData
	}).done(function(data) {
	var obj = jQuery.parseJSON(data);
	var fechaMax12mes=obj.fechaMaxDoce;
	var fechaMin=obj.fechaMin;
	var dia=fechaMax12mes.substring(3, 5);
	var mes =fechaMax12mes.substring(0, 2);
	var anio=fechaMax12mes.substring(8, 10);
	var diaM=fechaMin.substring(3, 5);
	var mesM=fechaMin.substring(0, 2);
	var anioM=fechaMin.substring(8, 10);
	var fechaMaxDoceFormat=dia+"/"+mes+"/"+anio;
	var fechaMinFormat=diaM+"/"+mesM+"/"+anioM;
	var cambioMaximo="";
	var camvioVsMin="";
	var redimiento ="";
	var redimientoY ="";
		obj.rend12M.toFixed(2);
	$('#precioMax52').html(obj.maxDoceM.toFixed(2));
	$('#fechaMax12mes').html(fechaMaxDoceFormat);
	
	cambioMaximo=obj.varMax;
	camvioVsMin=obj.varMin.toFixed(2);
	redimiento =obj.rend12M.toFixed(2);
	redimientoY=obj.rendYTD.toFixed(2);
	if(cambioMaximo<0){
		$('#cambioMax').html("<span style=color:#FF0000>"+cambioMaximo);
		
	}else{
		$('#cambioMax').html("<span style=color:#00A900>"+cambioMaximo);
	}
	
	$('#min12meses').html(obj.minDoceM.toFixed(2));
	$('#fechaMin12').html(fechaMinFormat);
	if(camvioVsMin<0){
		$('#cambioMinimo').html("<span style=color:#FF0000>"+camvioVsMin);
	}else{
		$('#cambioMinimo').html("<span style=color:#00A900>"+camvioVsMin);
	}
	if(redimiento<0){
		$('#redDoceMeses').html("<span style=color:#FF0000>"+redimiento);
	}else{
		$('#redDoceMeses').html("<span style=color:#00A900>"+redimiento);
	}
	if(redimientoY<0){
		$('#redYTD').html("<span style=color:#FF0000>"+redimientoY);
	}else{
		$('#redYTD').html("<span style=color:#00A900>"+redimientoY);
	}
	
	}).fail(function() {
	});
}

function getCompanyName() {
	$.ajax({
		url : 'CalculadoraController/getCompanyNameCalcuFib',
		type : 'get',
		dataType : 'json'
	}).done(function(data) {
		$("#demo-input-local").tokenInput(data,{tokenLimit: 1});
	}).fail(function() {
	});
}

function getOperatividad(emisora,serie,precioFormatR) {
	serie=serie.trim();
	var res = emisora.replace("%26", "&");
	emisora=res;
	var jsonData = {
		'emisora' : emisora,
		'serie' : serie
	};
	$.ajax({
		url : 'CalculadoraController/getOperatividadCalcuFib',
		type : 'get',
		dataType : 'text',
		data : jsonData
	}).done(function(data) {
		var obj = jQuery.parseJSON(data);
		var flotante=obj.flotante;
		flotante=flotante*100;
		var precioObj=obj.p_objetivo;
		var accCir=obj.acciones;
		var volProm90df=obj.volProm90d;
		var impProm90df=obj.impProm90d;
		
		
		
		volProm90df=volProm90df/1000000;
		impProm90df=impProm90df/1000000;
		var flotanteFormat = flotante.toFixed(0);
		
		$('#titlePrecioObj').html("Precio Obj. "+obj.anio);
		$('#bursativilidad').html(obj.bursativilidad);
		
		//precioObj
		$('#PrecioObj').html(precioObj.toFixed(2));
		//Volprom90d =calculo
		var calculo1=rendimineto(precioObj,precioFormatR);
		//Rend (E)%
		$('#rend').html(calculo1.toFixed(2));
		//formula
		var calculo2=capModo(precioFormatR,accCir);
		//Cap. Mcdo
		
		$('#capmcdo').html(comasFormat(calculo2.toFixed(0)));
		//AccCir
		$('#acccirc').html(comasFormat(accCir.toFixed(0)));
		$('#volprom90d').html(volProm90df.toFixed(3));
		$('#Impprom90d').html(impProm90df.toFixed(3));
		$('#flotante').html(flotanteFormat);
		}).fail(function() {
		});
}

function getInfoFinanciera(emisora,serie,precio) {
	//console.log(emisora);
	//console.log(precio);
	var res = emisora.replace("%26", "&");
	emisora=res;
	var jsonData = {
		'emisora' : emisora,
		'serie' : serie
	};
	$.ajax({
		url : 'CalculadoraController/getInfofinancieraFib',
		type : 'get',
		dataType : 'text',
		data : jsonData,
		async: false,
	}).done(function(data) {
		var obj = jQuery.parseJSON(data);
	    
		var ingTrimF=comasFormat(obj.ingTrim.toFixed(0));
		
	    $('#ingTrim').html(comasFormat(formatResult3(obj.ingTrim,emisora)));
		
	    $('#ingVarTrim').html(comasFormat(formatResult(obj.ingVarTrim,emisora)));
	    
	    $('#ingVarAa').html(comasFormat(formatResult(obj.ingVarAa,emisora)));
	    
	    $('#ingE1').html(comasFormat(formatResult3(obj.ingE1,emisora)));	
	    
	    $('#ingE2').html(comasFormat(formatResult3(obj.ingE2,emisora)));	
	    
	    $('#ingE3').html(comasFormat(formatResult3(obj.ingE3,emisora)));
	    
	    
	    $('#noiTrim').html(comasFormat(formatResult3(obj.noiTrim,emisora)));
	    
	    $('#noiVarTrim').html(comasFormat(formatResult(obj.noiVarTrim,emisora)));
	    
	    $('#noiVarAa').html(comasFormat(formatResult(obj.noiVarAa),emisora));
	    
	    $('#noiE1').html(comasFormat(formatResult3(obj.noiE1,emisora)));	
	    
	    $('#noiE2').html(comasFormat(formatResult3(obj.noiE2,emisora)));	
	    
	    $('#noiE3').html(comasFormat(formatResult3(obj.noiE3,emisora)));
	    
	  
	    
	    $('#ebitTrim').html(comasFormat(formatResult3(obj.ebitTrim,emisora)));
	    
	    $('#ebitVarTrim').html(formatResult(obj.ebitVarTrim,emisora));
	    
	    $('#ebitVarAa').html(formatResult(obj.ebitVarAa,emisora));
	    
	    $('#ebitE1').html(comasFormat(formatResult3(obj.ebitE1,emisora)));	
	    
	    $('#ebitE2').html(comasFormat(formatResult3(obj.ebitE2,emisora)));	
	    
	    $('#ebitE3').html(comasFormat(formatResult3(obj.ebitE3,emisora)));
	    
	    
		
	    $('#ffoTrim').html(comasFormat(formatResult3(obj.ffoTrim,emisora)));
	    
	    $('#ffoVarTrim').html(formatResult(obj.ffoVarTrim,emisora));
	    
	    $('#ffoVarAa').html(formatResult(obj.ffoVarAa,emisora));
	    
	    $('#ffoE1').html(comasFormat(formatResult3(obj.ffoE1,emisora)));	
	    
	    $('#ffoE2').html(comasFormat(formatResult3(obj.ffoE2,emisora)));	
	    
	    $('#ffoE3').html(comasFormat(formatResult3(obj.ffoE3,emisora)));	
	    
	 
	    
	    $('#dnetTrim').html(comasFormat(formatResult3(obj.dnetTrim,emisora)));
	    
	    $('#dnetE1').html(comasFormat(formatResult3(obj.dnetE1,emisora)));	
	    
	    $('#dnetE2').html(comasFormat(formatResult3(obj.dnetE2,emisora)));	
	    
	    $('#dnetE3').html(comasFormat(formatResult3(obj.dnetE3,emisora)));
	    
	    
	    
	    
	 
	    
	    $('#divTrim').html(comasFormat(formatResult4(obj.divTrim,emisora)));
	    
	    $('#divVarTrim').html(formatResult(obj.divVarTrim,emisora));
	    
	    $('#divVarAa').html(formatResult(obj.divVarAa,emisora));
	    
	    $('#divE1').html(comasFormat(formatResult4(obj.divE1,emisora)));	
	    
	    $('#divE2').html(comasFormat(formatResult4(obj.divE2,emisora)));	
	    
	    $('#divE3').html(comasFormat(formatResult4(obj.divE3,emisora)));
	    
	    var newtitle=titlebyissues(emisora);
	    
	    $('#titleEmi').html(newtitle);
	    //titleEmi
	    
	    var periodod=obj.periodo;
	    
	    if(periodod!=null){
	  	  var aniop;
	  	  aniop=periodod.substring(0,4);
	  	  var trimestre=periodod.substring(5,6);
	  	  var headerP=trimestre+"T-"+aniop;
	  	  var titleinf=trimestre+"T-"+aniop;
	  	  var anioAcc=aniop+" ac.";
	  	  aniop=parseInt(aniop);
	  	  var siganiop=aniop+1;
	  	  var sisiganio=aniop+2;
	    }
	    
	    $('#headerP').html(headerP);
	    $('#anioAcc').html(headerP);
	    $('#panel_info').html("Información periódica+ &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; Reporte al "+titleinf);

	    var resMarketCap1=marketCap(obj.cbiE1,precio);
	    var resMarketCap2=marketCap(obj.cbiE2,precio);
	    var resMarketCap3=marketCap(obj.cbiE3,precio);
	    
	    var resFirmValue1=firmValue(obj.dnetE1,resMarketCap1);
	    var resFirmValue2=firmValue(obj.dnetE2,resMarketCap2);
	    var resFirmValue3=firmValue(obj.dnetE3,resMarketCap3);
	    
	    var resE1=NoiCapRate(resFirmValue1,obj.noiE1,emisora);
	    var resE2=NoiCapRate(resFirmValue2,obj.noiE2,emisora);
	    var resE3=NoiCapRate(resFirmValue3,obj.noiE3,emisora);
	    
	    formatResult(resE1);

	    $('#noiCapRateE1').html(formatResult(resE1,emisora));
	    $('#noiCapRateE2').html(formatResult(resE2,emisora));
	    $('#noiCapRateE3').html(formatResult(resE3,emisora));
	    
	    var resAdjCapRate1=adjCapRate(resFirmValue1,obj.ebitE1,emisora);
	    var resAdjCapRate2=adjCapRate(resFirmValue2,obj.ebitE2,emisora);
	    var resAdjCapRate3=adjCapRate(resFirmValue3,obj.ebitE3,emisora);
	
	    
	    
	    $('#adjCapRateE1').html(formatResult(resAdjCapRate1,emisora));
	    $('#adjCapRateE2').html(formatResult(resAdjCapRate2,emisora));
	    $('#adjCapRateE3').html(formatResult(resAdjCapRate3,emisora));
	    
	    var resFfoYield1=ffoYield(resMarketCap1,obj.ffoE1,emisora);
	    var resFfoYield2=ffoYield(resMarketCap2,obj.ffoE2,emisora);
	    var resFfoYield3=ffoYield(resMarketCap3,obj.ffoE3,emisora);
	   
	    		
	    $('#ffoYieldE1').html(formatResult(resFfoYield1,emisora));
	    $('#ffoYieldE2').html(formatResult(resFfoYield2,emisora));
	    $('#ffoYieldE3').html(formatResult(resFfoYield3,emisora));
	    
	    
	   var resDivYield1= divYield(obj.divE1,resMarketCap1,obj.cbiE1,emisora);
	    var resDivYield2= divYield(obj.divE2,resMarketCap2,obj.cbiE2,emisora);
	    var resDivYield3= divYield(obj.divE3,resMarketCap3,obj.cbiE3,emisora);
	    
	  
	    
	    $('#divYeldE1').html(formatResult(resDivYield1,emisora));
	    $('#divYeldE2').html(formatResult(resDivYield2,emisora));
	    $('#divYeldE3').html(formatResult(resDivYield3,emisora));
	    
	 
	   $('#divyE1').html(formatResult(obj.divyE1,emisora));
	   $('#divyE2').html(formatResult(obj.divyE2,emisora));
	   $('#divyE3').html(formatResult(obj.divyE3,emisora));
	   
	   
	   
	   var resSpreedVscons1=spreedVscons(resDivYield1,obj.divyE1,emisora);
	   var resSpreedVscons2=spreedVscons(resDivYield2,obj.divyE2,emisora);
	   var resSpreedVscons3=spreedVscons(resDivYield3,obj.divyE3,emisora);
	  
	    $('#spreadConsE1').html(formatResult2(resSpreedVscons1,emisora));
	    $('#spreadConsE2').html(formatResult2(resSpreedVscons2,emisora));
	    $('#spreadConsE3').html(formatResult2(resSpreedVscons3,emisora));
	    
	  
	    
	    $('#benchE1').html(formatResult(obj.benchE1,emisora));
	    $('#benchE2').html(formatResult(obj.benchE2,emisora));
	    $('#benchE3').html(formatResult(obj.benchE3,emisora));
	    
	    var resSpreadVsBrench1=spreadVsBrench(resDivYield1,obj.benchE1,emisora);
	    var resSpreadVsBrench2=spreadVsBrench(resDivYield2,obj.benchE2,emisora);
	    var resSpreadVsBrench3=spreadVsBrench(resDivYield3,obj.benchE3,emisora);
	   
	   
	    $('#spreadVsBrench1').html(formatResult2(resSpreadVsBrench1,emisora));
	    $('#spreadVsBrench2').html(formatResult2(resSpreadVsBrench2,emisora));
	    $('#spreadVsBrench3').html(formatResult2(resSpreadVsBrench3,emisora));
		
	}).fail(function() {
	});
	
	
}


function cleanInter(){
	$('#precio').html("");
	$('#cambio').html("");
	$('#cierre').html("");
	$('#volumen').html("");
	$('#apertura').html("");
	$('#maximo').html("");
	$('#minimo').html("");
	$('#importe').html("");
}


function cleanPeriodic(){
	$('#precioMax52').html("");
	$('#fechaMax12mes').html("");
	$('#cambioMax').html("");
	$('#min12meses').html("");
	$('#fechaMin12').html("");
	$('#cambioMinimo').html("");
	$('#redDoceMeses').html("");
	$('#redYTD').html("");
}

function cleanOperatividad(){
	$('#bursativilidad').html("");
	$('#Volprom180d').html("");
	$('#Volprom90d').html("");
	$('#Volprom30d').html("");
	$('#Impprom180d').html("");
	$('#Impprom90d').html("");
	$('#Impprom30d').html("");
	$('#flotante').html("");
}

function getDayIntra(base,emisora,serie) {
	emisora = emisora.trim();
	var urltodo = base+"appsBackAnalisis/jaxrs/MarketInfoRest/bpc01wew/12121/2322/111/"
			+ emisora
			+ "/"
			+ serie
			+ "/1?language=SPA";
	var jsonData = {
		'emisora' : emisora,
		'serie' : serie
	};
	$.ajax({
		url : 'CalculadoraController/getVariationsCalcuFin',
		type : 'get',
		dataType : 'text',
		data : jsonData
	}).done(function(data) {
	var obj = jQuery.parseJSON(data);
	$('#precioMax52').html(obj.maxDoceM);
	$('#fechaMax12mes').html(obj.fechaMaxDoce);
	$('#cambio').html(obj.varMax);
	$('#min12meses').html(obj.minDoceM);
	$('#fechaMin12').html(obj.fechaMin);
	$('#cambioMinimo').html(obj.varMin.toFixed(2));
	$('#redDoceMeses').html(obj.rend12M.toFixed(2));
	$('#redYTD').html(obj.rendYTD.toFixed(2));
	}).fail(function() {
	});

}

function multiplosAct(precio,accion,utilidad){
	var resultado=(precio*accion)/utilidad;
	return resultado;
}


function comasFormat(x) {
  return x.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function cleanInfoFinanciera(){
		$('#ventas12m').html("");
		$('#ventasac').html("");
		$('#varacuventas').html("");
		$('#ventast').html("");
		$('#varvtast').html("");  
		$('#vtase1').html("");
		$('#vtase2').html("");
		$('#vtase3').html("");
	                                                        
		$('#ebitda12m').html("");
		$('#ebitdaac').html("");
		$('#varacuebitda').html("");
		$('#ebitdat').html("");
		$('#varebitdat').html("");
		$('#ebitdae1').html("");
		$('#ebitdae2').html("");
		$('#ebitdae3').html("");
	                                                                        
		$('#utneta12m').html("");
		$('#utnetaac').html("");
		$('#varacuutneta').html("");
		$('#utnetat').html("");
		$('#varutnett').html("");
		$('#utnete1').html("");
		$('#utnete2').html("");
		$('#utnete3').html("");
                                 
		$('#deudaneta12m').html("");
		$('#deudanetaac').html("");
		$('#varaccapmay').html("");
		$('#deudanetat').html("");
		$('#vardeudanetat').html("");
		$('#deunete1').html("");
		$('#deunete2').html("");
		$('#deunete3').html("");
	                                                                       
		$('#capmay12m').html("");
		$('#capitalmayac').html("");
		$('#vardeudaneta').html("");
		$('#capitalmayt').html("");
		$('#varcapmayt').html("");
		$('#capmaye1').html("");
		$('#capmaye2').html("");
		$('#capmaye3').html("");
	                                                                        
		$('#upa12m').html("");
		$('#upaacu').html("");
		$('#varacuupa').html("");
		$('#upat').html("");
		$('#varupat').html("");
		$('#upae1').html("");
		$('#upae2').html("");
		$('#upae3').html("");
	                                                                 
		$('#vl12m').html("");
		$('#vlacu').html("");
		$('#varacvl').html("");
		$('#vlt').html("");
		$('#varvlt').html("");
		$('#vle1').html("");
		$('#vle2').html("");
		$('#vle3').html("");
		
		$('#actualyearPU').html("");
		$('#nextyearPU').html("");
		$('#nextmorePU').html("");
		$('#actualyearVE').html("");
		$('#nextyearVE').html("");
		$('#nextmoreVE').html("");
		$('#actualyearVL').html("");
		$('#nextyearVL').html("");
		$('#nextmoreVL').html("");
		$('#upacon1').html("");
		$('#upacon2').html("");
		$('#upacon3').html("");
		$('#ebitacccon1').html("");
		$('#ebitacccon2').html("");
		$('#ebitacccon3').html("");
		$('#vlcon1').html("");
		$('#vlcon2').html("");
		$('#vlcon3').html("");
		$('#despu1').html("");
		$('#despu2').html("");
		$('#despu3').html("");
		$('#desve1').html("");
		$('#desve2').html("");
		$('#desve3').html("");
		$('#desvl1').html("");
		$('#desvl2').html("");
		$('#desvl3').html("");
	
}


function getTestServ(base){
	var urltodo = base+"appsBackAnalisis/jaxrs/MarketInfoRest/bpc01wew/12121/2322/111/AMX/L/1?language=SPA";
	$.ajax({
		type : "GET",
		url : urltodo,
		dataType : "json",
	     async: false,
		
	}).done(function(resp) {
	}).fail(function() {
	});
	}

angular.module('App', []).controller('angularCtrl', ['$scope', '$http',function($scope,$http) {
                                                      $scope.AngularFunction = function(){
                                                    	 var url = dataBack+"appsBackAnalisis/jaxrs/MarketInfoRest/bpc01wew/12121/2322/111/"
                                                    	+emisoraG
                                                    	+"/"
                                                    	+serieG
                                                    	+"/1?language=SPA";
                                                    	
                                                        $http.get(url).success(function (data) {
                                                             	var volumen=data.outClientIssuersMarketInfoQuery.marketDataTuple[0].quantityCounting;
                                                				volumen=volumen/1000000;
                                                				var volumenFormat = volumen.toFixed(3);
                                                				var precioFormat = data.outClientIssuersMarketInfoQuery.marketDataTuple[0].averagePrice;
                                                				var precioFormatR=precioFormat.toFixed(2);
                                                				var cambioFromart=data.outClientIssuersMarketInfoQuery.marketDataTuple[0].priceVar;
                                                				var cambioFormatR=cambioFromart.toFixed(2);
                                                				var importeS=data.outClientIssuersMarketInfoQuery.marketDataTuple[0].quantityBuySell;
                                                				importeS=importeS/1000000;
                                                				importeS=importeS.toFixed(3);
                                                     			$('#precio').html(precioFormatR);
                                                    			$('#cambio').html(cambioFormatR);
                                                    			$('#cierre').html(data.outClientIssuersMarketInfoQuery.marketDataTuple[0].closingPrice);
                                                    			$('#volumen').html(volumenFormat);
                                                    			$('#apertura').html(data.outClientIssuersMarketInfoQuery.marketDataTuple[0].closingPrice);
                                                    			$('#maximo').html(data.outClientIssuersMarketInfoQuery.marketDataTuple[0].maxPrice);
                                                    			$('#minimo').html(data.outClientIssuersMarketInfoQuery.marketDataTuple[0].minPrice);
                                                    			$('#importe').html(importeS);
                                                    			printCalculDataService(precioFormatR);
                                                    			onConnect(dataBack,emisoraG,serieG,data.outClientIssuersMarketInfoQuery.marketDataTuple[0].averagePrice);
                                                                })
                                                                .error(function () {
                                                                    $scope.showMessage('Error callBPC06', false);
                                                                });
                                                      }
                                                     }
                                                 ]).directive("disableLink", function() {
                                                     return {
                                                         restrict: "A",
                                                         link: function(scope, elem, attrs) {
                                                             $(elem).click(function() {
                                                                 $().JqueryFunction();
                                                             });
                                                         }
                                                     }
                                                 });





function getTime(){
	var myPar1 = "";
	var myPar2 = "";
	var horaMinutos="";
	$.ajax({
		url: 'InteractiveStaController/actionCheckTime',
		dataType: 'json',
		type: 'get',
			async: false,
	}).done(function(data) {
		HORA=data.hora;
		MINUTOS=data.minuto;
	
		horaMinutos=data.hora+":"+data.minuto
		$.each(data, function( key, value ) {
			myPar1 = data.hora;
			myPar2 = data.minuto;
		});
	}).fail(function(e) {
	});
	
}

function rendimineto(precioObjetivo,precioIntra){
	var resultDiv=precioObjetivo/precioIntra;
	var resuldif=resultDiv-1;
	var resultado=resuldif*100;
	return resultado;
	
}
function capModo(precioIntra,AccCir){
	var resultado=precioIntra*AccCir;
	return resultado;
}

//*******************************
function marketCap(cbieN,precio){
	var markCap;
	
	if(cbieN==0){
		return markCap=0;
	}else{
	markCap=cbieN*precio;
	
	return markCap.toFixed(2);
	}
}
function firmValue(deudaNetaEN,markCap){
	var firmaV;
	if((deudaNetaEN==0)||(markCap==0)){
		return firmaV =0;
	}else{
		parseFloat(deudaNetaEN)+parseFloat(markCap);
		firmaV=parseFloat(deudaNetaEN)+parseFloat(markCap);;
		return firmaV;
}
}
function NoiCapRate(firmvalue,noiEI,emisora){
	var resNoiCap;
	//console.log(firmvalue);
	if((firmvalue==0)||(noiEI==0)){
		if(emisora=="FUNO"){
			return resNoiCap="E.R.";
		}else{
			return resNoiCap="N.A.";
		}
	
	}else{
	resNoiCap=noiEI/firmvalue;

	return resNoiCap;
	}
}

function adjCapRate(firmvalue,ebtidaEN,emisora){
	var resAdjCapR;
	if((firmvalue==0)||(ebtidaEN==0)){
		if(emisora=="FUNO"){
			return resAdjCapR="E.R.";
		}else{
			return resAdjCapR="N.A.";
		}
	}else{
		resAdjCapR=ebtidaEN/firmvalue;
	return resAdjCapR;
	}
}


function ffoYield(marketcap,ffoEN,emisora){
	var resFfoYieldUn;
	if((marketcap==0)||(ffoEN==0)){
		if(emisora=="FUNO"){
			return resFfoYieldUno="E.R.";
		}else{
			return resFfoYieldUno="N.A.";
		}
	}else{
		resFfoYieldUno=ffoEN/marketcap;

	return resFfoYieldUno;
	}
}



function divYield(diven,marketcap,cbien,emisora){
	var resDivYieldDos;
	if((diven==0)||(marketcap==0)||(cbien==0)){
		if(emisora=="FUNO"){
			return resDivYieldDos="E.R.";
		}else{
			return resDivYieldDos="N.A.";
		}
}else{
	var resDivYieldUno=diven/marketcap;
	resDivYieldDos=resDivYieldUno*cbien;
	return resDivYieldDos;
}
	
}

function spreedVscons(divYieldEN,divYieldConsEn,emisora){
	var resSpreedvsCons;
	if((divYieldEN==0)||(divYieldConsEn==0)){
		if(emisora=="FUNO"){
			return resSpreedvsCons="E.R.";
		}else{
			return resSpreedvsCons="N.A.";
		}
	}else{
		resSpreedvsCons=divYieldEN-divYieldConsEn;
		return resSpreedvsCons;
	}
	
	
}
function spreadVsBrench(divYieldEN,brenchEN,emisora){
	var resSpreadVsBrench;
	if((divYieldEN==0)||(brenchEN==0)){
		if(emisora=="FUNO"){
			return resSpreadVsBrench="E.R.";
		}else{
			return resSpreadVsBrench="N.A.";
		}
	}else{
		resSpreadVsBrench=divYieldEN-brenchEN;
		return resSpreadVsBrench;
	}
	
	
}



function formatResult(resul,emisora){
	var resResult=resul;
	var nonum=isNaN(resResult);
	if(resResult==0 || nonum==true){
		if(emisora=="FUNO"){
			return resResult="E.R.";
		}else{
			return resResult="N.A.";
		}
	}else{
		resResult=(resResult*100).toFixed(1)+"%";
	}
	return resResult;
}


function formatResult2(resul,emisora){
	var resResult=resul;
	var nonum=isNaN(resResult);
	if(resResult==0||nonum==true){
		if(emisora=="FUNO"){
			return resResult="E.R.";
		}else{
			return resResult="N.A.";
		}
	}else{
		resResult=(resResult*10000).toFixed(0);
	}
	return resResult;
}


function formatResult3(resul,emisora){
	var resResult=resul;
	var nonum=isNaN(resResult);
	if(resResult==0||nonum==true){
		if(emisora=="FUNO"){
			return resResult="E.R.";
		}else{
			return resResult="N.A.";
		}
	}else{
		resResult=(resResult*1).toFixed(0);
	}
	return resResult;
}

function formatResult4(resul,emisora){
	var resResult=resul;
	var nonum=isNaN(resResult);
	if(resResult==0||nonum==true){
		if(emisora=="FUNO"){
			return resResult="E.R.";
		}else{
			return resResult="N.A.";
		}
	}else{
		resResult=(resResult*1).toFixed(2);
	}
	return resResult;
}

function titlebyissues(emisora){
	var title;
	switch (emisora)
	{
	case "FUNO":
	title="Bench. UDIBONO";
	break;
	case "FSHOP":
		title="Bench. UDIBONO";
	break;
	case "FIBRHD":
		title="Bench. UDIBONO";
	break;
	case "FINN":
		title="Bench. TIIE";
	break;
	case "FMTY":
		title="Bench. TBOND10Y";
		break;
	case "FIBRAPL":
		title="Bench. TBOND10Y";
		break;
	default:

	}
	return title;
	
}


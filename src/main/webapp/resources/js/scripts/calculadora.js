//calculadora v:2.0
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
	var UpaE1G,UpaE2G,UpaE3G,EbitAcc1G,EbitAcc2G,EbitAcc3G,DeuMin1,DeuMin2,DeuMin3,Vle1,Vle2,Vle3,VLCon1G,VLCon2G,VLCon3G,UpaCon1G;
	var UpaCon2G;
	var UpaCon3G;
	var EbitAccCon1G;
	var EbitAccCon2G;
	var EbitAccCon3G;
	var periodo;
	var DeuMin1Con;
	var DeuMin2Con;
	var DeuMin3Con;
	var Valida1;
	var Valida2;
	var Valida3;
	var Valcon1;
	var Valcon2;
	var Valcon3;
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
										var n = todo.search("desarrollo");
										var covertura=0;
										if(n!=-1){
											covertura=1;
										}else{
											covertura=2;
										}
										$("#title").html(todo);
										var emisora="";
										emisora=todo.substr(0,todo.indexOf(' ')); 
										var serie="";
										if((emisora=="LIVEPOL")||(emisora=="GSANBOR")||(emisora=="MFRISCO")||(emisora=="IDEAL")){
											serie=todo.substr(emisora.length,todo.indexOf('-')-emisora.length); 
											serie=serie+"-1";
										}else{
											serie=todo.substr(emisora.length,todo.indexOf('-')-emisora.length);  
										}
										emisoraG=emisora;
										$("#emisorabtn").show();
										$("#emisorabtn").html("OPINI\u00d3N "+emisoraG);
										//$("#emisorabtn").attr( "value", "OPINIÓN"+emisoraG);
										$("#emisorabtn").attr( "name", emisoraG);
										$("#emisorabtn").click(function() {
											//redirecionar();
										});
										
										
										var res = emisora.replace("&amp;", "%26");
										emisora=res;
										serie=serie.trim();
										serieG=serie;
										getInfPeriodic(emisora,serie);
										getInfoFinanciera(emisora,serie);
										getEmisorasFromServ(dataBack,emisora,serie,covertura);
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
function getEmisorasFromServ(base,emisora,serie,covertura){
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
	//base ="http://localhost:9080/";
	var urltodo = base+"appsBackAnalisis/jaxrs/MarketInfoRest/bpc01wew/12121/2322/111/"
			+ emisora
			+ "/"
			+ serie
			+ "/1?language=SPA";
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
				if(precioFormatR==0.00||precioFormatR==0)
				{
					
					precioFormatR=precioCierreF;
				}else{
					//console.log("nd");
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
					printCalculDataService(precioFormatR,covertura);
				getOperatividad(emisora,serie,precioFormatR);	
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
	//			$.post('emna.jsp').success(function(dataEmna) {
	//			$.post('emna2.jsp').success(function(dataEmna) {
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
										var volumenFormatoTRO=volumenFormat;
								    	
								    	//volumenFormatoTRO=volumenFormatoTRO.toFixed(3);
								    }else{
								    	precioFormatR=singleRow[1].toString();
								    	cambioFormatR=singleRow[2].toString();
								    	precioCierre=singleRow[3].toString();
								    	var volumenFormatoTRO=parseFloat(singleRow[4]);
								    	
								    	var volumenFormatoTRO=volumenFormatoTRO.toFixed(3);
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
									printCalculDataService(precioFormatR,covertura);
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
												printCalculDataService(precio.toFixed(2));	
										
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
		url : 'CalculadoraController/getVariationsCalcu',
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
		url : 'CalculadoraController/getCompanyNameCalcu',
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
		url : 'CalculadoraController/getOperatividadCalcu',
		type : 'get',
		dataType : 'text',
		data : jsonData
	}).done(function(data) {

	var obj = jQuery.parseJSON(data);
	var flotante=obj.flotante;
	flotante=flotante*100;
	//var volumenProm180d=obj.volProm180d;
	var precioObj="";
	if(obj.volProm180d==0||obj.volProm180d==0.00){
		precioObj="N.A";
	}else{
		precioObj=obj.volProm180d;
		precioObj.toFixed(2);
	}
	
	var volumenProm90d=obj.volProm90d;
	var volumenProm30d=obj.volProm30d;
	var accCir=obj.impProm180d;
	var importeProm90d=obj.impProm90d;
	var importeProm30d=obj.impProm30d;
	//volumenProm180d=volumenProm180d/1000000;
	volumenProm90d=volumenProm90d/1000000;
	volumenProm30d=volumenProm30d/1000000;
	importeProm90d=importeProm90d/1000000;
	importeProm30d=importeProm30d/1000000;
	var flotanteFormat = flotante.toFixed(0);
	
	$('#bursativilidad').html(obj.bursativilidad);
	//precioObj
	$('#Volprom180d').html(precioObj);
	//Volprom90d =calculo
	var calculo1=rendimineto(precioObj,precioFormatR);
	//Rend (E)%
	var resultadoCalculo1;
	if(obj.volProm180d==0||obj.volProm180d==0.00){
		resultadoCalculo1="N.A"
	}else{
		resultadoCalculo1=calculo1;
		resultadoCalculo1=resultadoCalculo1.toFixed(2);
	};
	
	
	$('#Volprom90d').html(resultadoCalculo1);
	//formula
	var calculo2=capModo(precioFormatR,accCir);
	//Cap. Mcdo
	
	$('#Volprom30d').html(comasFormat(calculo2.toFixed(0)));
	//AccCir
	$('#Impprom180d').html(comasFormat(accCir.toFixed(0)));
	$('#Impprom90d').html(importeProm90d.toFixed(3));
	$('#Impprom30d').html(importeProm30d.toFixed(3));
	$('#flotante').html(flotanteFormat);
	}).fail(function() {
	});
}

function getInfoFinanciera(emisora,serie) {
	var res = emisora.replace("%26", "&");
	emisora=res;
	var jsonData = {
		'emisora' : emisora,
		'serie' : serie
	};
	$.ajax({
		url : 'CalculadoraController/getInfoFinancieraCalcu',
		type : 'get',
		dataType : 'text',
		data : jsonData,
		async: false,
	}).done(function(data) {

	var obj = jQuery.parseJSON(data);
	
	/*var ventas12m =obj.ventas12m;
	if(ventas12m==0){
		ventas12m="N.A.";
	}else{
		ventas12m=comasFormat(ventas12m.toFixed(0));
	}
	*/
	
	
    $('#ventas12m').html(objCeroComas(obj.ventas12m)); 
    $('#ventasac').html(objCeroComas(obj.ventasac)); 
    $('#varacuventas').html(objSinComasUnoPorc(obj.varacuventas));
    $('#ventast').html(objCeroComas(obj.ventast));
    $('#varvtast').html(objSinComasUnoPorc(obj.varvtast));
    $('#ebitda12m').html(objCeroComas(obj.ebitda12m));
    $('#ebitdaac').html(objCeroComas(obj.ebitdaac));
    $('#varacuebitda').html(objSinComasUnoPorc(obj.varacuebitda));  
    $('#ebitdat').html(objCeroComas(obj.ebitdat)); 
    $('#varebitdat').html(objSinComasUnoPorc(obj.varebitdat));
    $('#utneta12m').html(objCeroComas(obj.utneta12m)); 
    $('#utnetaac').html(objCeroComas(obj.utnetaac)); 
    $('#varacuutneta').html(objSinComasUnoPorc(obj.varacuutneta));  
    $('#utnetat').html(objCeroComas(obj.utnetat)); 
    $('#varutnett').html(objSinComasUnoPorc(obj.varutnett)); 
    $('#deudaneta12m').html(objCeroComas(obj.deudaneta12m)); 
    $('#deudanetaac').html(objCeroComas(obj.deudanetaac)); 
    $('#varaccapmay').html(objSinComasUnoPorc(obj.varaccapmay));   
    $('#deudanetat').html(objCeroComas(obj.deudanetat)); 
    $('#vardeudanetat').html(objSinComasUnoPorc(obj.vardeudanetat));  
    $('#capmay12m').html(objCeroComas(obj.capmay12m)); 
    $('#capitalmayac').html(objCeroComas(obj.capitalmayac)); 
    $('#vardeudaneta').html(objSinComasUnoPorc(obj.vardeudaneta));   
    $('#capitalmayt').html(objCeroComas(obj.capitalmayt));    
    $('#varcapmayt').html(objSinComasUnoPorc(obj.varcapmayt)); 
    $('#upa12m').html(objSinComasDos(obj.upa12m));
    $('#upaacu').html(objSinComasDos(obj.upaacu));
    $('#varacuupa').html(objSinComasUnoPorc(obj.varacuupa));  
    $('#upat').html(objSinComasDos(obj.upat));  
    $('#varupat').html(objSinComasUnoPorc(obj.varupat)); 

    $('#vl12m').html(objSinComasDos(obj.vl12m)); 
    $('#vlacu').html(objSinComasDos(obj.vlacu));   
    $('#varacvl').html(objSinComasUnoPorc(obj.varacvl));  	
    $('#vlt').html(objSinComasDos(obj.vlt));    
    $('#varvlt').html(objSinComasUnoPorc(obj.varvlt)); 	
  
    $('#upaE1').html(objSinComasNd(obj.upaE1));
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
  $('#anioAcc').html(anioAcc);
  $('#actualY').html(aniop+" (e)");
  $('#nextY').html(siganiop+" (e)");
 $('#moraY').html(sisiganio+" (e)");
    //multiplos  historicos
  $('#panel_info').html("Información periódica+ &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; Reporte al "+titleinf);
    var precioUtilidad3anos=objSinComasDos(obj.puprom3);
    var precioUtilidad12mese =objSinComasDos(obj.pu12m);
    var veEbitda3anos=objSinComasDos(obj.veebitdaprom3);
    var veEbitda12mese=objSinComasDos(obj.veebitda12m);
    var pVl3anos=objSinComasDos(obj.pvlprom3);
    var pVl12meses=	objSinComasDos(obj.pvl12m);
    $('#puprom3').html(precioUtilidad3anos);
    $('#pu12m').html(precioUtilidad12mese);
    $('#veebitdaprom3').html(veEbitda3anos);
    $('#veebitda12m').html(veEbitda12mese);
    $('#pvlprom3').html(pVl3anos);  
    $('#pvl12m').html(pVl12meses);
    //Analisis
    $('#vtase1').html(objCeroComas(obj.vtase1));   
    $('#vtase2').html(objCeroComas(obj.vtase2));   
    $('#vtase3').html(objCeroComas(obj.vtase3));  
 
    $('#ebitdae1').html(objCeroComas(obj.ebitdae1));   
    $('#ebitdae2').html(objCeroComas(obj.ebitdae2));   
    $('#ebitdae3').html(objCeroComas(obj.ebitdae3));  
 
    
    
    // Si la Utilidad Neta Estimada de cada uno de los años es 0 el P/U y el P/VL es “N.A”
    
    $('#utnete1').html(objCeroComas(obj.utnete1));   
    $('#utnete2').html(objCeroComas(obj.utnee2));   
    $('#utnete3').html(objCeroComas(obj.utnete3)); 
    
   // console.log(obj.utnete1);
  // console.log(obj.utnee2);
    //console.log(obj.utnete3);
    
    if(obj.utnete1==0){
    	Valcon1=0;
    }else{
    	Valcon1=1;
    }
    if(obj.utnee2==0){
    	Valcon2=0;
    }else{
    	Valcon2=1;
    }
    if(obj.utnete3==0){
    	Valcon3=0;
    }else{
    	Valcon3=1;
    }
    
 
    //Si la Deuda Neta  de cada uno de los años es 0 el VE/Ebitda es “N.A.”
    
    $('#deunete1').html(objCeroComas(obj.deunete1));   
    $('#deunete2').html(objCeroComas(obj.deunete2));   
    $('#deunete3').html(objCeroComas(obj.deunete3)); 
    
    if(obj.deunete1==0){
    	Valida1=0;
    }else{
    	Valida1=1;
    }
    if(obj.deunete2==0){
    	Valida2=0;
    }else{
    	Valida2=1;
    }
    
    if(obj.deunete3==0){
    	Valida3=0;
    }else{
    	Valida3=1;
    }
    
    
    $('#capmaye1').html(objCeroComas(obj.capmaye1));   
    $('#capmaye2').html(objCeroComas(obj.capmaye2));   
    $('#capmaye3').html(objCeroComas(obj.capmaye3));  
    
    $('#upae1').html(objSinComasDos(obj.upae1));   
    UpaE1G= obj.upae1;
    $('#upae2').html(objSinComasDos(obj.upae2));  
    UpaE2G=obj.upae2;
    $('#upae3').html(objSinComasDos(obj.upae3)); 
    UpaE3G=obj.upae3;
    $('#vle1').html(objSinComasDos(obj.vle1));   
    $('#vle2').html(objSinComasDos(obj.vle2));   
    $('#vle3').html(objSinComasDos(obj.vle3)); 
   
    EbitAcc1G=obj.ebitAcc1;
   	EbitAcc2G=obj.ebitAcc2;
   	EbitAcc3G=obj.ebitAcc3;
	
	DeuMin1=obj.deuMin1;
	DeuMin2=obj.deuMin2;
	DeuMin3=obj.deuMin3;
	
	Vle1=obj.vle1;
	Vle2=obj.vle2;
	Vle3=obj.vle3;
	
	VLCon1G=obj.vLCon1;
	VLCon2G=obj.vLCon2;
	VLCon3G=obj.vLCon3;
	
	UpaCon1G=obj.upaCon1;
	UpaCon2G=obj.upaCon2;
	UpaCon3G=obj.upaCon3;

	EbitAccCon1G=obj.ebitAccCon1;
	EbitAccCon2G=obj.ebitAccCon2;
	EbitAccCon3G=obj.ebitAccCon3;
	
	DeuMin1Con=obj.deuMinCon1;
	DeuMin2Con=obj.deuMinCon2;
	DeuMin3Con=obj.deuMinCon3;
	
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
		url : 'CalculadoraController/getVariationsCalcu',
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

function multiplosActinverPUActinverE1(precio){
	var resultPUActE1=precio/UpaE1G;
	if (resultPUActE1== Number.POSITIVE_INFINITY || resultPUActE1 == Number.NEGATIVE_INFINITY)
	{
		resultPUActE1="N.A.";
	}else{
		resultPUActE1=resultPUActE1.toFixed(2);
	}
	return resultPUActE1;
	
}
function multiplosActinverPUActinverE2(precio){
	var resultPUActE2=precio/UpaE2G;
	if (resultPUActE2 == Number.POSITIVE_INFINITY || resultPUActE2 == Number.NEGATIVE_INFINITY)
	{
		resultPUActE2="N.A.";
	}else{
		resultPUActE2=resultPUActE2.toFixed(2);
		
	}
	return resultPUActE2;
	
}
function multiplosActinverPUActinverE3(precio){
	var resultPUActE3=precio/UpaE3G;
	if (resultPUActE3 == Number.POSITIVE_INFINITY || resultPUActE3 == Number.NEGATIVE_INFINITY)
	{
		resultPUActE3="N.A.";
	}else{
		resultPUActE3=resultPUActE3.toFixed(2);
	}
	return resultPUActE3;
	
}


function multiplosActinverVEebtidactinverTdodo(precio,deuMin1par,ebitAcc1Gpar){
	if(ebitAcc1Gpar!=0.00){
		//console.log("no");
		var cponverPrecioP=parseFloat(precio);
		var deuMin1parFloat=parseFloat(deuMin1par);
		var ebitAcc1GparFloat=parseFloat(ebitAcc1Gpar);
		var resultVEebtidaE1Div=cponverPrecioP+deuMin1parFloat;
		var resultVEebtidaE1= resultVEebtidaE1Div/ebitAcc1GparFloat;
		if (resultVEebtidaE1 == Number.POSITIVE_INFINITY || resultVEebtidaE1 == Number.NEGATIVE_INFINITY)
		{
			resultVEebtidaE1="N.A.";
		}else{
			resultVEebtidaE1=resultVEebtidaE1.toFixed(2);
		}
		return resultVEebtidaE1;
	}else{
		//console.log("dis");
		return resultVEebtidaE1="N.A.";
	}
}


function concensoActinverVEebtidactinverTodo1(precio,deuMin1Conpar,ebitAcc1GConpar){
	
	//console.log("concensoActinverVEebtidactinverTodo");
	//console.log("value"+ebitAcc1GConpar);
	if(Valida1!=0){
		var cponverPrecioP=parseFloat(precio);
		var deuMin1parFloat=parseFloat(deuMin1Conpar);
		var ebitAcc1GparFloat=parseFloat(ebitAcc1GConpar);
		var resultVEebtidaE1Div=cponverPrecioP+deuMin1parFloat;
		var resultVEebtidaE1= resultVEebtidaE1Div/ebitAcc1GparFloat;
		if (resultVEebtidaE1 == Number.POSITIVE_INFINITY || resultVEebtidaE1 == Number.NEGATIVE_INFINITY)
			{
			resultVEebtidaE1="N.A.";
			}else{
				resultVEebtidaE1=resultVEebtidaE1.toFixed(2);
			}
		return resultVEebtidaE1;
	}else{
		return resultVEebtidaE1="N.A.";
	}
}

function concensoActinverVEebtidactinverTodo2(precio,deuMin1Conpar,ebitAcc1GConpar){
	
	//console.log("concensoActinverVEebtidactinverTodo");
	//console.log("value"+ebitAcc1GConpar);
	if(Valida2!=0){
		var cponverPrecioP=parseFloat(precio);
		var deuMin1parFloat=parseFloat(deuMin1Conpar);
		var ebitAcc1GparFloat=parseFloat(ebitAcc1GConpar);
		var resultVEebtidaE1Div=cponverPrecioP+deuMin1parFloat;
		var resultVEebtidaE1= resultVEebtidaE1Div/ebitAcc1GparFloat;
		if (resultVEebtidaE1 == Number.POSITIVE_INFINITY || resultVEebtidaE1 == Number.NEGATIVE_INFINITY)
			{
			resultVEebtidaE1="N.A.";
			}else{
				resultVEebtidaE1=resultVEebtidaE1.toFixed(2);
			}
		return resultVEebtidaE1;
	}else{
		return resultVEebtidaE1="N.A.";
	}
}

function concensoActinverVEebtidactinverTodo3(precio,deuMin1Conpar,ebitAcc1GConpar){
	
	//console.log("concensoActinverVEebtidactinverTodo");
	//console.log("value"+ebitAcc1GConpar);
	if(Valida3!=0){
		var cponverPrecioP=parseFloat(precio);
		var deuMin1parFloat=parseFloat(deuMin1Conpar);
		var ebitAcc1GparFloat=parseFloat(ebitAcc1GConpar);
		var resultVEebtidaE1Div=cponverPrecioP+deuMin1parFloat;
		var resultVEebtidaE1= resultVEebtidaE1Div/ebitAcc1GparFloat;
		if (resultVEebtidaE1 == Number.POSITIVE_INFINITY || resultVEebtidaE1 == Number.NEGATIVE_INFINITY)
			{
			resultVEebtidaE1="N.A.";
			}else{
				resultVEebtidaE1=resultVEebtidaE1.toFixed(2);
			}
		return resultVEebtidaE1;
	}else{
		return resultVEebtidaE1="N.A.";
	}
}




function multiplosActinverVEebtidactinverE2(precio){
	var cponverPrecioP=parseInt(precio);
	var resultVEebtidaE2=(cponverPrecioP+DeuMin2)/EbitAcc2G;
	if (resultVEebtidaE2 == Number.POSITIVE_INFINITY || resultVEebtidaE2 == Number.NEGATIVE_INFINITY)
	{
		resultVEebtidaE2="N.A.";
	}else{
		resultVEebtidaE2=resultVEebtidaE2.toFixed(2);
	}
	return resultVEebtidaE2;
}
function multiplosActinverVEebtidactinverE3(precio){
	var cponverPrecioP=parseInt(precio);
	var resultVEebtidaE3=(cponverPrecioP+DeuMin3)/EbitAcc3G;
	if (resultVEebtidaE3 == Number.POSITIVE_INFINITY || resultVEebtidaE3 == Number.NEGATIVE_INFINITY)
	{
		resultVEebtidaE3="N.A.";
	}else{
		resultVEebtidaE3=resultVEebtidaE3.toFixed(2);
	}
	return resultVEebtidaE3;
}

function multiplosActinverPVlE1(precio){
	var resultVlE1=precio/Vle1;
	if (resultVlE1 == Number.POSITIVE_INFINITY || resultVlE1 == Number.NEGATIVE_INFINITY)
	{
		resultVlE1="N.A.";
	}else{
		resultVlE1=resultVlE1.toFixed(2);
	}
	return resultVlE1;
}
function multiplosActinverPVlE2(precio){
	var resultVlE2=precio/Vle2;
	if (resultVlE2 == Number.POSITIVE_INFINITY || resultVlE2 == Number.NEGATIVE_INFINITY)
	{
		resultVlE2="N.A.";
	}else{
		resultVlE2=resultVlE2.toFixed(2);
	}
	return resultVlE2;
}
function multiplosActinverPVlE3(precio){
	var resultVlE3=precio/Vle3;
	if (resultVlE3 == Number.POSITIVE_INFINITY || resultVlE3 == Number.NEGATIVE_INFINITY)
	{
		resultVlE3="N.A.";
	}else{
		resultVlE3=resultVlE3.toFixed(2);
	}
	return resultVlE3;
}

function multiplosConsensoPUE1(precio){

	if(Valcon1!=0){
		var resultPUconE1=precio/UpaCon1G;
		if (resultPUconE1 == Number.POSITIVE_INFINITY || resultPUconE1 == Number.NEGATIVE_INFINITY)
		{
			resultPUconE1="N.A.";
		}else{
			resultPUconE1=resultPUconE1.toFixed(2);
		}
		return resultPUconE1;
	}else{
		return resultPUconE1="N.A.";
	}
}
function multiplosConsensoPUE2(precio){
	if(Valcon2!=0){
		var resultPUconE2=precio/UpaCon2G;
		if (resultPUconE2 == Number.POSITIVE_INFINITY || resultPUconE2 == Number.NEGATIVE_INFINITY)
		{
			resultPUconE2="N.A.";
		}else{
			resultPUconE2=resultPUconE2.toFixed(2);
		}
		return resultPUconE2;
	}else{
		return resultPUconE2="N.A.";
	}
}


function multiplosConsensoPUE3(precio){
	if(Valcon3!=0){
		var resultPUconE3=precio/UpaCon3G;
		if (resultPUconE3 == Number.POSITIVE_INFINITY || resultPUconE3 == Number.NEGATIVE_INFINITY)
		{
			resultPUconE3="N.A.";
		}else{
			resultPUconE3=resultPUconE3.toFixed(2);
		}
		return resultPUconE3;
	}else{
		return resultPUconE3="N.A.";
	}
}


function multiplosConsensoVLE1(precio){
	if(Valcon1!=0){
	var resultMultiplosConsensoVlE1=precio/VLCon1G;
	
	if (resultMultiplosConsensoVlE1 == Number.POSITIVE_INFINITY || resultMultiplosConsensoVlE1 == Number.NEGATIVE_INFINITY)
	{
		resultMultiplosConsensoVlE1="N.A.";
	}else{
		resultMultiplosConsensoVlE1=resultMultiplosConsensoVlE1.toFixed(2);
	}
	return resultMultiplosConsensoVlE1;
	}else{
		return resultMultiplosConsensoVlE1="N.A.";
	}
}
function multiplosConsensoVLE2(precio){
	if(Valcon2!=0){
	var resultMultiplosConsensoVlE2=precio/VLCon2G;
	
	if (resultMultiplosConsensoVlE2 == Number.POSITIVE_INFINITY || resultMultiplosConsensoVlE2 == Number.NEGATIVE_INFINITY)
	{
		resultMultiplosConsensoVlE2="N.A.";
	}else{
		resultMultiplosConsensoVlE2=resultMultiplosConsensoVlE2.toFixed(2);
	}
	return resultMultiplosConsensoVlE2;
	}else{
		return resultMultiplosConsensoVlE2="N.A.";
	}
}

function multiplosConsensoVLE3(precio){
	if(Valcon3!=0){
	var resultMultiplosConsensoVlE3=precio/VLCon3G;
	if (resultMultiplosConsensoVlE3 == Number.POSITIVE_INFINITY || resultMultiplosConsensoVlE3 == Number.NEGATIVE_INFINITY)
	{
		resultMultiplosConsensoVlE3="N.A.";
	}else{
		resultMultiplosConsensoVlE3=resultMultiplosConsensoVlE3.toFixed(2);
	}
	return resultMultiplosConsensoVlE3;
	}else{
		return resultMultiplosConsensoVlE3="N.A.";
	}
}


function descuentoActinPuE1(actin,consenso){
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
		
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
		
	}
	
	
	return resulDesActPuE1ResultFloat;
}

function descuentoActinEbtida(actin,consenso){
	
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
	
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
	}
	return resulDesActPuE1ResultFloat;
}


function descuentoActinPuE2(actin,consenso){
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
	} else{
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
	}
	return resulDesActPuE1ResultFloat;
}



function descuentoActinPuE3(actin,consenso){
	
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
	
		var resulDesActPuE1=(actin/consenso);
		resulDesActPuE1=resulDesActPuE1.toFixed(6);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
		
	}
	return resulDesActPuE1ResultFloat;
}




function descuentoActinVeEbtidaE1(actin,consenso){

	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
		var actin=actin.toFixed(6);
		var consenso=consenso.toFixed(6);
		var resulDesActPuE1=(actin/consenso);
		resulDesActPuE1=resulDesActPuE1.toFixed(6);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
		
	}
	return resulDesActPuE1ResultFloat;
}





/*function descuentoActinVeEbtidaE2(actin,consenso){
	var resulDesActVeEbtidaE2=(actin/consenso)-1;
	resulDesActVeEbtidaE2=getNum(resulDesActVeEbtidaE2);
	return resulDesActVeEbtidaE2;
}*/

function descuentoActinVeEbtidaE2(actin,consenso){
	
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
	}
	return resulDesActPuE1ResultFloat;
}




/*function descuentoActinVeEbtidaE3(actin,consenso){
	var resulDesActVeEbtidaE3div=(actin/consenso)-1;
	resulDesActVeEbtidaE3div=resulDesActVeEbtidaE3div-1;
	resulDesActVeEbtidaE3div=resulDesActVeEbtidaE3div*100;
	return resulDesActVeEbtidaE3div;
}
*/
function descuentoActinVeEbtidaE3(actin,consenso){
	
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
	}
	return resulDesActPuE1ResultFloat;
}

/*function descuentoActinVLE1(actin,consenso){
	var resulDesActVLE1=(actin/consenso)-1;
	return resulDesActVLE1;
}
*/

function descuentoActinVLE1(actin,consenso){
	
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
	}
	return resulDesActPuE1ResultFloat;
}
/*function descuentoActinVLE2(actin,consenso){
	var resulDesActVLE2=(actin/consenso)-1;
	return resulDesActVLE2;
}
*/
function descuentoActinVLE2(actin,consenso){
	
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
	}
	return resulDesActPuE1ResultFloat;
}
/*function descuentoActinVLE3(actin,consenso){
	var resulDesActVLE3=(actin/consenso)-1;
	return resulDesActVLE3;
}*/
function descuentoActinVLE3(actin,consenso){
	
	var resulDesActPuE1ResultFloat;
	if (isNaN(actin)||isNaN(consenso)){
		resulDesActPuE1ResultFloat="N.A.";
		
	} else{
		var resulDesActPuE1=(actin/consenso);
		var resulDesActPuE1Result=resulDesActPuE1-1;
		resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
		resulDesActPuE1ResultFloat=getNum(resulDesActPuE1ResultFloat);
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat*100;
		resulDesActPuE1ResultFloat=resulDesActPuE1ResultFloat.toFixed(2);
		resulDesActPuE1ResultFloat+"%";
	}
	return resulDesActPuE1ResultFloat;
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


function printCalculDataService(preciopar,covertura){
	//****multiplos actinver
	var resultmultiplosActinver1S=multiplosActinverPUActinverE1(preciopar);
	var resultmultiplosActinver2S=multiplosActinverPUActinverE2(preciopar);
	var resultmultiplosActinver3S=multiplosActinverPUActinverE3(preciopar);
	
	
	var deuMin1F=DeuMin1.toFixed(2);
	var ebitAcc1GF=EbitAcc1G.toFixed(2);
	var deuMin2F=DeuMin2.toFixed(2);
	var ebitAcc2GF=EbitAcc2G.toFixed(2);
	var deuMin3F=DeuMin3.toFixed(2);
	var ebitAcc3GF=EbitAcc3G.toFixed(2);
	var parDeuMinF1=deuMin1F;
	var parEbitAccF1=ebitAcc1GF;
	var resultmultiplosActinver4S=multiplosActinverVEebtidactinverTdodo(preciopar,parDeuMinF1,parEbitAccF1);
	var parDeuMinF2=deuMin2F;
	var parEbitAccF2=ebitAcc2GF;
	var resultmultiplosActinver5S=multiplosActinverVEebtidactinverTdodo(preciopar,parDeuMinF2,parEbitAccF2);
	var parDeuMinF3=deuMin3F;
	var parEbitAccF3=ebitAcc3GF;
	var resultmultiplosActinver6S=multiplosActinverVEebtidactinverTdodo(preciopar,parDeuMinF3,parEbitAccF3);
	
	var resultmultiplosActinver7S=multiplosActinverPVlE1(preciopar);
	var resultmultiplosActinver8S=multiplosActinverPVlE2(preciopar);
	var resultmultiplosActinver9S=multiplosActinverPVlE3(preciopar);
	
	//***Fin****multiplos actinver
	//multiplos concenso
	
	var resultMultiplosConcenso1S=multiplosConsensoPUE1(preciopar);
	var resultMultiplosConcenso2S=multiplosConsensoPUE2(preciopar);
	var resultMultiplosConcenso3S=multiplosConsensoPUE3(preciopar);
	var ebitAccCon1GF=EbitAccCon1G.toFixed(2);
	var ebitAccCon2GF=EbitAccCon2G.toFixed(2);
	var ebitAccCon3GF=EbitAccCon3G.toFixed(2);
	
	var deuMin1ConF=DeuMin1Con.toFixed(2);
	var deuMin2ConF=DeuMin2Con.toFixed(2);
	var deuMin3ConF=DeuMin3Con.toFixed(2);
	
	var parebitAccCon1GF=ebitAccCon1GF;
	var pardeuMin1ConF=deuMin1ConF;
	var resultMultiplosConcenso4S=concensoActinverVEebtidactinverTodo1(preciopar,pardeuMin1ConF,parebitAccCon1GF);
	
	var parebitAccCon2GF=ebitAccCon2GF;
	var pardeuMin2ConF=deuMin2ConF;
	var resultMultiplosConcenso5S=concensoActinverVEebtidactinverTodo2(preciopar,pardeuMin2ConF,parebitAccCon2GF);
	
	var parebitAccCon3GF=ebitAccCon3GF;
	var pardeuMin3ConF=deuMin3ConF;
	var resultMultiplosConcenso6S=concensoActinverVEebtidactinverTodo3(preciopar,pardeuMin3ConF,parebitAccCon3GF);
	
	var resultMultiplosConcenso7S=multiplosConsensoVLE1(preciopar);
	var resultMultiplosConcenso8S=multiplosConsensoVLE2(preciopar);
	var resultMultiplosConcenso9S=multiplosConsensoVLE3(preciopar);
	
	//* fin  multiplos concenso
	//Descuento actinver
	
	var parResultmultiplosActinver=resultmultiplosActinver1S;
	var parResultMultiplosConcenso=resultMultiplosConcenso1S;
	
	var resultDescPuE1S=descuentoActinPuE1(parResultmultiplosActinver,parResultMultiplosConcenso);
	parResultmultiplosActinver=resultmultiplosActinver2S;
	parResultMultiplosConcenso=resultMultiplosConcenso2S;
	var resultDescPuE2S=descuentoActinPuE1(parResultmultiplosActinver,parResultMultiplosConcenso);
	
	parResultmultiplosActinver=resultmultiplosActinver3S;
	parResultMultiplosConcenso=resultMultiplosConcenso3S;
	
	var resultDescPuE3S=descuentoActinPuE1(parResultmultiplosActinver,parResultMultiplosConcenso);
	
	parResultmultiplosActinver=resultmultiplosActinver4S;
	parResultMultiplosConcenso=resultMultiplosConcenso4S;
	
	var resultDescVeEbtidaE1S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	
	parResultmultiplosActinver=resultmultiplosActinver5S;
	parResultMultiplosConcenso=resultMultiplosConcenso5S;
	
	var resultDescVeEbtidaE2S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	
	parResultmultiplosActinver=resultmultiplosActinver6S;
	parResultMultiplosConcenso=resultMultiplosConcenso6S;
	
	var resultDescVeEbtidaE3S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	/*resultDescVeEbtidaE3S=resultDescVeEbtidaE3S*100;
	resultDescVeEbtidaE3S=resultDescVeEbtidaE3S.toFixed(2);*/
	
	parResultmultiplosActinver=resultmultiplosActinver7S;
	parResultMultiplosConcenso=resultMultiplosConcenso7S;
	
	var resultDescVLE1S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	/*resultDescVLE1S=resultDescVLE1S*100;
	resultDescVLE1S=resultDescVLE1S.toFixed(2);*/
	
	parResultmultiplosActinver=resultmultiplosActinver8S;
	parResultMultiplosConcenso=resultMultiplosConcenso8S;
	
	var resultDescVLE2S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	/*resultDescVLE2S=resultDescVLE2S*100;
	resultDescVLE2S=resultDescVLE2S.toFixed(2);*/

	parResultmultiplosActinver=resultmultiplosActinver9S;
	parResultMultiplosConcenso=resultMultiplosConcenso9S;
	
	var resultDescVLE3S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	/*resultDescVLE3S=resultDescVLE3S*100;
	resultDescVLE3S=resultDescVLE3S.toFixed(2);*/
	//********multiplos actinver
	
	if(covertura==1){
		$('#actualyearPU').html("N.A");
		$('#nextyearPU').html("N.A");
		$('#nextmorePU').html("N.A");
		
		$('#actualyearVE').html("N.A");
		$('#nextyearVE').html("N.A");
		$('#nextmoreVE').html("N.A");
		
		$('#actualyearVL').html("N.A");
		$('#nextyearVL').html("N.A");
		$('#nextmoreVL').html("N.A");
	}
	else{
		$('#actualyearPU').html(resultmultiplosActinver1S);
		$('#nextyearPU').html(resultmultiplosActinver2S);
		$('#nextmorePU').html(resultmultiplosActinver3S);
		
		$('#actualyearVE').html(resultmultiplosActinver4S);
		$('#nextyearVE').html(resultmultiplosActinver5S);
		$('#nextmoreVE').html(resultmultiplosActinver6S);
		
		$('#actualyearVL').html(resultmultiplosActinver7S);
		$('#nextyearVL').html(resultmultiplosActinver8S);
		$('#nextmoreVL').html(resultmultiplosActinver9S);
	}
	//******************fin
	$('#upacon1').html(resultMultiplosConcenso1S);
	$('#upacon2').html(resultMultiplosConcenso2S);
	$('#upacon3').html(resultMultiplosConcenso3S);
	//console.log(resultMultiplosConcenso4S);
	$('#ebitacccon1').html(resultMultiplosConcenso4S);
	$('#ebitacccon2').html(resultMultiplosConcenso5S);
	$('#ebitacccon3').html(resultMultiplosConcenso6S);
	$('#vlcon1').html(resultMultiplosConcenso7S);
	$('#vlcon2').html(resultMultiplosConcenso8S);
	$('#vlcon3').html(resultMultiplosConcenso9S);
	
	//remio/Descuento Actinver Vs Consenso}
	if(covertura==1){
		$('#despu1').html("N.A");
		$('#despu2').html("N.A");
		$('#despu3').html("N.A");
		$('#desve1').html("N.A");
		$('#desve2').html("N.A");
		$('#desve3').html("N.A");
		$('#desvl1').html("N.A");
		$('#desvl2').html("N.A");
		$('#desvl3').html("N.A");
	}else{
		$('#despu1').html(resultDescPuE1S);
		$('#despu2').html(resultDescPuE2S);
		$('#despu3').html(resultDescPuE3S);
		$('#desve1').html(resultDescVeEbtidaE1S);
		$('#desve2').html(resultDescVeEbtidaE2S);
		$('#desve3').html(resultDescVeEbtidaE3S);
		$('#desvl1').html(resultDescVLE1S)
		$('#desvl2').html(resultDescVLE2S);
		$('#desvl3').html(resultDescVLE3S);
	}
	
}



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
function redirecionar() {
	var valuebutton=$("#emisorabtn").html();
	$.ajax({
		url : 'CalculadoraController/formCalculadora',
		dataType : 'html',
		type : 'get'
	}).done(function(data) {
		
		
		
		$(top.document.body).prepend(data);
		//$("#inMensaje",top.document).val(dataMessage.mensaje);
		$("#titlemod").html(valuebutton);
	
	}).fail(function() {
	});

}

function getNum(val)
{
   if (isNaN(val)) 
     return "N.A.";
   else
     return val;
}
function objCeroComas(obj){
	var resulta =obj;
	if(resulta==0){
		resulta="N.A.";
	}else{
		resulta=comasFormat(resulta.toFixed(0));
	}
	return resulta;
	
}

function objSinComasUnoPorc(obj){
	var resulta =obj;
	if(resulta==0){
		resulta="N.A.";
	}else{
		resulta=resulta.toFixed(1)+"%";
	}
	return resulta;
	
}
function objSinComasDos(obj){
	var resulta =obj;
	if(resulta==0){
		resulta="N.A.";
	}else{
		resulta=resulta.toFixed(2);
	}
	return resulta;
	
}
function objSinComasNd(obj){
	var resulta =obj;
	if(resulta==0){
		resulta="N.A.";
	}else{
		resulta;
	}
	return resulta;
	
}

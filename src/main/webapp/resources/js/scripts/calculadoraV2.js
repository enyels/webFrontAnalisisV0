var emisoraG;
var serieG;
var dataBack;
var stompClient = null;
var HORA;
var MINUTOS;
//*********************
var captionPrice="uno";
var captionChange="dos";
var captionClosePrice="tres";
var captionVolumen="cuatro";
var captionInitPrice="cinco";
var captionMax="seis";
var captionMin="siete";
var captionImp="ocho";

var precioP=0;
var changeP=0;
var closePriceP=0;
var volumenP=0;
var initPriceP=0;
var maxP=0;
var minP=0;
var impP=0;


$(document).ready(function() {
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
	getTime();
	printDataIntraDay(precioP,captionPrice,changeP,captionChange,closePriceP,captionClosePrice,volumenP,captionVolumen,initPriceP,captionInitPrice,maxP,captionMax,minP,captionMin,impP,captionImp);
	
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
			
					$("#miboton").click(function() {
						$('.delspace').remove();
						if(stompClient!=null){
							stompClient.disconnect();
						}
						var valor=$("#demo-input-local").val();
						
						if((valor.length == 0)&&(valor=="")){
							$('.msgError', top.document).text('Ingrese una emisora valida');
							setTimeout(function() {
								$('.msgError', top.document).text('');
							}, 2000);
						}
						
						if(valor!=""){
							cleanPeriodic();
							cleanOperatividad();
							cleanInfoFinanciera();
							cleanInter();
							
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
										serie=serie.trim();
										serieG=serie;
										getInfPeriodic(emisora,serie);
										getOperatividad(emisora,serie);
										getInfoFinanciera(emisora,serie);
										getEmisorasFromServ(dataBack,emisora,serie);
						}else{
							cleanPeriodic();
							cleanOperatividad();
							cleanInfoFinanciera();
							cleanInter();
							}
					});//fin del click
				});




/*
 * WS Emisora
 */
function getEmisorasFromServ(base,emisora,serie){
	var precioR="";
	var cambioR="";
	var precioCierreR="";
	var volumenR="";
	var aperturaR="";
	var maximoR="";
	var minimoR="";
	var importeR="";
	
	var precioFormat;
	var cambioFormat;
	var precioCierreFormat;
	var volumenFormat;
	var aperturaFormat;
	var maximoFormat;
	var minimoFormat;
	var importeFormat;
	
	emisora = emisora.trim();
	base="http://mxl43935lm.actinver.com.mx:9085/";
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
			if((HORA<15)){
				//antes de las 3
				precioR = resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].lastPrice;
				precioFormat=precioR.toFixed(2);
				
				cambioR=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].priceVar;
				cambioFormat=parseFloat(cambioR.toFixed(2));
				
				precioCierreR=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].closingPrice;
				precioCierreFormat=precioCierreR.toFixed(2);
				
				volumenR=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].quantityCounting;
				volumenR=volumenR/1000000;
				volumenFormat=volumenR.toFixed(3);
				
				aperturaR=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].closingPrice;
				aperturaFormat=aperturaR.toFixed(2);
				
				maximoR=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].maxPrice;
				maximoFormat=maximoR.toFixed(2);
				
				minimoR=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].minPrice;
				minimoFormat=minimoR.toFixed(2);
			
				importeR=resp.outClientIssuersMarketInfoQuery.marketDataTuple[0].quantityBuySell;
				importeR=importeR/1000000;
				importeFormat=importeR.toFixed(3);
		
				printCalculDataService(precioFormat);
				onConnect(base,emisora,serie,precioFormat);
				$(".contenedor").show();
				
				
				
				
			}else{
				//readFileloadPriceOfClose(emisora,serie);
				var dataEmna = null;
				var filaEmna = [];
				var blockFilaEmna = [];
				aloneIssuerSerieNac = [];
				var emNaSelec = [];
//				$.post('/resources/textFiles/CopyEmisora_Nacional.txt').success(function(dataEmna) {
				$.post('/resources/textFiles/Emisora_Nacional.txt').success(function(dataEmna) {
//				$.post('emna.jsp').success(function(dataEmna) {
						filaEmna = [];
						filaEmna = dataEmna.split(/\n/);
						var tamFilaEmna = filaEmna.length-1;
						var singleRow = [];
					    for(var i=0; i<=tamFilaEmna; i++){
						    singleRow = [];
						    singleRow = filaEmna[i].split('=');
						    aloneIssuerSerieNac.push(singleRow[0]);
						    //console.log(singleRow[0]);
						    aloneIssuerSerieNac.push(singleRow[1]);
						    aloneIssuerSerieNac.push(singleRow[2]);
						    aloneIssuerSerieNac.push(singleRow[3]);
						    
						    var allStringEmisora=emisora+" "+serie;
						    //console.log(allStringEmisora);
						    if(allStringEmisora==singleRow[0]){
						    	var registroEncontrado=singleRow[0]+"-"+singleRow[1]+"-"+singleRow[2]+"-"+singleRow[3];
						    	//console.log(emisora);
							    //console.log(serie);
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
							
								
								$("#listaTabla").hide();
							
								
								printDataIntraDay(precioFormatR,captionPrice,formatChange,captionChange,formatClosePrice,captionClosePrice,formatVolumen,captionVolumen,formatInitPrice,captionInitPrice,formatMax,captionMax,formatMin,captionMin,formatImp,captionImp)

								
								
								if(cambioFormatF<0){
									$('#cambioF').html("<span style=color:#FF0000>"+cambioFormatF);
								}else{
									$('#cambioF').html("<span style=color:#00A900>"+cambioFormatF);
								}
									var utilidad1=$("#utnete1").val();
									printCalculDataService(precioFormatR);
								//onConnect(base,emisora,serie,precioFormatR);
								$(".contenedor").show();
						    	
						    	
						    }else{
						     	//console.log("no");
						    }
					    }
				
				}).error(function(e){
			    	alert('File Emisora_Nacional.txt Not Found');
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
	var data = null;

	precioP=0;
	changeP=0;
	closePriceP=0;
	volumenP=0;
	initPriceP=0;
	maxP=0;
	minP=0;
	impP=0;
	
	var precioFormatSoc;
	var formatChangeFormatSoc;
	var formatClosePriceFormatSoc;
	var formatVolumenFormatSoc;
	var formatInitPriceFormatSoc;
	var formatMaxFormatSoc;
	var formatMinFormatSoc;
	var formatImpFormatSoc;
	
	//base="https://www.actinver.com/";
	//base="http://mxl43935lm.actinver.com.mx:9085/";
	base="http://10.10.115.7:9083/";

	var socket = new SockJS(base+'appsBackAnalisis/webSocket/analisis');
	stompClient = Stomp.over(socket);
	stompClient.debug = null;
	stompClient.connect({},function(frame) {
						
						stompClient.subscribe('/topic/capitales/bmvAll',function(data) {
							dataBody = $.parseJSON(data.body);
					console.log(dataBody);
							if ((emisora == dataBody.issuer.issuerName)&& (serie == dataBody.issuer.serie)) {
								precioP=dataBody.lastPrice;
								precioFormatSoc=precioP.toFixed(2);
								
								changeP=dataBody.priceVar;
								formatChangeFormatSoc=changeP.toFixed(2);
								
								closePriceP=dataBody.closingPrice;
								formatClosePriceFormatSoc=closePriceP.toFixed(2);
								
								volumenP=dataBody.quantityCounting;
								volumenP=volumenP/1000000;
								formatVolumenFormatSoc=volumenP.toFixed(3);
								
								initPriceP=dataBody.closingPrice;
								formatInitPriceFormatSoc=initPriceP.toFixed(2);
								
								maxP=dataBody.maxPrice;
								formatMaxFormatSoc=maxP.toFixed(2);
								
								
								minimoSoc=dataBody.minPrice;
								minimoSoc=minimoSoc.toFixed(2);
								
								impP=dataBody.quantityBuySell;
								impP =impP/1000000;
								formatImpFormatSoc = impP.toFixed(3);
								
							
						
					
								$("#listaTabla").show();
								$("#listaTablaHistoricos").hide();
								printDataIntraDay(precioFormatSoc,captionPrice,formatChangeFormatSoc,captionChange,formatClosePriceFormatSoc,captionClosePrice,formatVolumenFormatSoc,captionVolumen,formatInitPriceFormatSoc,captionInitPrice,formatMaxFormatSoc,captionMax,formatMinFormatSoc,captionMin,formatImpFormatSoc,captionImp);
								printCalculDataService(precioFormatSoc);	
								
										
											}
										});
					});
}

function getInfPeriodic(emisora,serie) {
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
	$('#precioMax52').html(obj.maxDoceM);
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
	
	
	$('#min12meses').html(obj.minDoceM);
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

function getOperatividad(emisora,serie) {
	serie=serie.trim();
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

	var volumenProm180d=obj.volProm180d;
	var volumenProm90d=obj.volProm90d;
	var volumenProm30d=obj.volProm30d;
	var importeProm180d=obj.impProm180d;
	var importeProm90d=obj.impProm90d;
	var importeProm30d=obj.impProm30d;
	volumenProm180d=volumenProm180d/1000000;
	volumenProm90d=volumenProm90d/1000000;
	volumenProm30d=volumenProm30d/1000000;
	importeProm180d=importeProm180d/1000000;
	importeProm90d=importeProm90d/1000000;
	importeProm30d=importeProm30d/1000000;
	var flotanteFormat = flotante.toFixed(0);
	$('#bursativilidad').html(obj.bursativilidad);
	$('#Volprom180d').html(volumenProm180d.toFixed(3));
	$('#Volprom90d').html(volumenProm90d.toFixed(3));
	$('#Volprom30d').html(volumenProm30d.toFixed(3));
	$('#Impprom180d').html(importeProm180d.toFixed(3));
	$('#Impprom90d').html(importeProm90d.toFixed(3));
	$('#Impprom30d').html(importeProm30d.toFixed(3));
	$('#flotante').html(flotanteFormat);
	}).fail(function() {
	});
}

function getInfoFinanciera(emisora,serie) {
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
    $('#ventas12m').html(comasFormat(obj.ventas12m.toFixed(0))); 
    $('#ventasac').html(comasFormat(obj.ventasac.toFixed(0))); 
    $('#varacuventas').html(obj.varacuventas.toFixed(1)+"%");
    $('#ventast').html(comasFormat(obj.ventast.toFixed(0)));
    $('#varvtast').html(obj.varvtast.toFixed(1)+"%");
    
    $('#ebitda12m').html(comasFormat(obj.ebitda12m.toFixed(0)));
    $('#ebitdaac').html(comasFormat(obj.ebitdaac.toFixed(0)));
    $('#varacuebitda').html(obj.varacuebitda.toFixed(1)+"%");  
    $('#ebitdat').html(comasFormat(obj.ebitdat.toFixed(0)));  
    $('#varebitdat').html(obj.varebitdat.toFixed(1)+"%");
    
    $('#utneta12m').html(comasFormat(obj.utneta12m.toFixed(0))); 
    $('#utnetaac').html(comasFormat(obj.utnetaac.toFixed(0))); 
    $('#varacuutneta').html(obj.varacuutneta.toFixed(1)+"%");     
    $('#utnetat').html(comasFormat(obj.utnetat.toFixed(0))); 
    
    $('#varutnett').html(obj.varutnett.toFixed(1)+"%");  
    $('#deudaneta12m').html(comasFormat(obj.deudaneta12m.toFixed(0))); 
    $('#deudanetaac').html(comasFormat(obj.deudanetaac.toFixed(0))); 
    $('#varaccapmay').html(obj.varaccapmay.toFixed(1)+"%");   
    $('#deudanetat').html(comasFormat(obj.deudanetat.toFixed(0))); 
    $('#vardeudanetat').html(obj.vardeudanetat.toFixed(1)+"%");  
    
    $('#capmay12m').html(comasFormat(obj.capmay12m.toFixed(0))); 
    $('#capitalmayac').html(comasFormat(obj.capitalmayac.toFixed(0))); 
    $('#vardeudaneta').html(obj.vardeudaneta.toFixed(1)+"%");   
    $('#capitalmayt').html(comasFormat(obj.capitalmayt.toFixed(0)));    
    $('#varcapmayt').html(obj.varcapmayt.toFixed(1)+"%"); 
    
    $('#upa12m').html(obj.upa12m.toFixed(2));
    $('#upaacu').html(obj.upaacu.toFixed(2));
    $('#varacuupa').html(obj.varacuupa.toFixed(1)+"%");  
    $('#upat').html(obj.upat.toFixed(2));  
    $('#varupat').html(obj.varupat.toFixed(1)+"%"); 

    $('#vl12m').html(obj.vl12m.toFixed(2)); 
    $('#vlacu').html(obj.vlacu.toFixed(2));   
    $('#varacvl').html(obj.varacvl.toFixed(1)+"%");  	
    $('#vlt').html(obj.vlt.toFixed(2));    
    $('#varvlt').html(obj.varvlt.toFixed(1)+"%"); 	
  $('#upaE1').html(obj.upaE1);
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
    var precioUtilidad3anos=obj.puprom3.toFixed(1);
    var precioUtilidad12mese =obj.pu12m.toFixed(1);
    var veEbitda3anos=obj.veebitdaprom3.toFixed(1);
    var veEbitda12mese=obj.veebitda12m.toFixed(1);
    var pVl3anos=obj.pvlprom3.toFixed(1);
    var pVl12meses=	obj.pvl12m.toFixed(1);
    $('#puprom3').html(precioUtilidad3anos);
    $('#pu12m').html(precioUtilidad12mese);
    $('#veebitdaprom3').html(veEbitda3anos);
    $('#veebitda12m').html(veEbitda12mese);
    $('#pvlprom3').html(pVl3anos);  
    $('#pvl12m').html(pVl12meses);
    //Analisis
    $('#vtase1').html(comasFormat(obj.vtase1.toFixed(0)));   
    $('#vtase2').html(comasFormat(obj.vtase2.toFixed(0)));   
    $('#vtase3').html(comasFormat(obj.vtase3.toFixed(0)));  
 
    $('#ebitdae1').html(comasFormat(obj.ebitdae1.toFixed(0)));   
    $('#ebitdae2').html(comasFormat(obj.ebitdae2.toFixed(0)));   
    $('#ebitdae3').html(comasFormat(obj.ebitdae3.toFixed(0)));  
 
    $('#utnete1').html(comasFormat(obj.utnete1.toFixed(0)));   
    $('#utnete2').html(comasFormat(obj.utnee2.toFixed(0)));   
    $('#utnete3').html(comasFormat(obj.utnete3.toFixed(0))); 
    
    $('#deunete1').html(comasFormat(obj.deunete1.toFixed(0)));   
    $('#deunete2').html(comasFormat(obj.deunete2.toFixed(0)));   
    $('#deunete3').html(comasFormat(obj.deunete3.toFixed(0))); 
    
    $('#capmaye1').html(comasFormat(obj.capmaye1.toFixed(0)));   
    $('#capmaye2').html(comasFormat(obj.capmaye2.toFixed(0)));   
    $('#capmaye3').html(comasFormat(obj.capmaye3.toFixed(0)));  
    
    $('#upae1').html(obj.upae1.toFixed(2));   
    UpaE1G= obj.upae1;
    $('#upae2').html(obj.upae2.toFixed(2));  
    UpaE2G=obj.upae2;
    $('#upae3').html(obj.upae3.toFixed(2)); 
    UpaE3G=obj.upae3;
    $('#vle1').html(obj.vle1.toFixed(2));   
    $('#vle2').html(obj.vle2.toFixed(2));   
    $('#vle3').html(obj.vle3.toFixed(2)); 
    
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
	return resultPUActE1;
	
}
function multiplosActinverPUActinverE2(precio){
	var resultPUActE2=precio/UpaE2G;
	return resultPUActE2;
	
}
function multiplosActinverPUActinverE3(precio){
	var resultPUActE3=precio/UpaE3G;
	return resultPUActE3;
	
}


function multiplosActinverVEebtidactinverTdodo(precio,deuMin1par,ebitAcc1Gpar){
	var cponverPrecioP=parseFloat(precio);
	var deuMin1parFloat=parseFloat(deuMin1par);
	var ebitAcc1GparFloat=parseFloat(ebitAcc1Gpar);
	var resultVEebtidaE1Div=cponverPrecioP+deuMin1parFloat;
	var resultVEebtidaE1= resultVEebtidaE1Div/ebitAcc1GparFloat;
	return resultVEebtidaE1;
}


function concensoActinverVEebtidactinverTodo(precio,deuMin1Conpar,ebitAcc1GConpar){
	var cponverPrecioP=parseFloat(precio);
	var deuMin1parFloat=parseFloat(deuMin1Conpar);
	var ebitAcc1GparFloat=parseFloat(ebitAcc1GConpar);
	var resultVEebtidaE1Div=cponverPrecioP+deuMin1parFloat;
	var resultVEebtidaE1= resultVEebtidaE1Div/ebitAcc1GparFloat;
	return resultVEebtidaE1;
}





function multiplosActinverPVlE1(precio){
	var resultVlE1=precio/Vle1;
	return resultVlE1;
}
function multiplosActinverPVlE2(precio){
	var resultVlE2=precio/Vle2;
	return resultVlE2;
}
function multiplosActinverPVlE3(precio){
	var resultVlE3=precio/Vle3;
	return resultVlE3;
}

function multiplosConsensoPUE1(precio){
	var resultPUconE1=precio/UpaCon1G;
	return resultPUconE1;
	
}
function multiplosConsensoPUE2(precio){
	var resultPUconE2=precio/UpaCon2G;
	return resultPUconE2;
}
function multiplosConsensoPUE3(precio){
	var resultPUconE3=precio/UpaCon3G;
	return resultPUconE3;
}


function multiplosConsensoVLE1(precio){
	
	var resultMultiplosConsensoVlE1=precio/VLCon1G;
	return resultMultiplosConsensoVlE1;
}
function multiplosConsensoVLE2(precio){

	var resultMultiplosConsensoVlE2=precio/VLCon2G;
	return resultMultiplosConsensoVlE2;
}

function multiplosConsensoVLE3(precio){
	
	var resultMultiplosConsensoVlE3=precio/VLCon3G;
	return resultMultiplosConsensoVlE3;
}


function descuentoActinPuE1(actin,consenso){
	var resulDesActPuE1=(actin/consenso);
	var resulDesActPuE1Result=resulDesActPuE1-1;
	var  resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
	return resulDesActPuE1ResultFloat;
}

function descuentoActinEbtida(actin,consenso){
	var actin=actin.toFixed(6);
	var consenso=consenso.toFixed(6);
	var resulDesActPuE1=(actin/consenso);
	resulDesActPuE1=resulDesActPuE1.toFixed(6);
	var resulDesActPuE1Result=resulDesActPuE1-1;
	var  resulDesActPuE1ResultFloat=parseFloat(resulDesActPuE1Result);
	return resulDesActPuE1ResultFloat;
}




function descuentoActinPuE2(actin,consenso){
	var resulDesActPuE2=(actin/consenso)-1;
	return resulDesActPuE2;
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
                                                    	// alert(url);
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


function printCalculDataService(preciopar){
	//console.log("precio que recivo"+preciopar);
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
	var resultMultiplosConcenso4S=concensoActinverVEebtidactinverTodo(preciopar,pardeuMin1ConF,parebitAccCon1GF);
	
	
	var parebitAccCon2GF=ebitAccCon2GF;
	var pardeuMin2ConF=deuMin2ConF;
	var resultMultiplosConcenso5S=concensoActinverVEebtidactinverTodo(preciopar,pardeuMin2ConF,parebitAccCon2GF);
	
	var parebitAccCon3GF=ebitAccCon3GF;
	var pardeuMin3ConF=deuMin3ConF;
	var resultMultiplosConcenso6S=concensoActinverVEebtidactinverTodo(preciopar,pardeuMin3ConF,parebitAccCon3GF);
	
	var resultMultiplosConcenso7S=multiplosConsensoVLE1(preciopar);
	var resultMultiplosConcenso8S=multiplosConsensoVLE2(preciopar);
	var resultMultiplosConcenso9S=multiplosConsensoVLE3(preciopar);
	
	var parResultmultiplosActinver=resultmultiplosActinver1S;
	var parResultMultiplosConcenso=resultMultiplosConcenso1S;
	
	var resultDescPuE1S=descuentoActinPuE1(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescPuE1S=resultDescPuE1S*100;
	resultDescPuE1S=resultDescPuE1S.toFixed(2);
	
	parResultmultiplosActinver=resultmultiplosActinver2S;
	parResultMultiplosConcenso=resultMultiplosConcenso2S;
	
	var resultDescPuE2S=descuentoActinPuE1(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescPuE2S=resultDescPuE2S*100;
	resultDescPuE2S=resultDescPuE2S.toFixed(2);
	
	parResultmultiplosActinver=resultmultiplosActinver3S;
	parResultMultiplosConcenso=resultMultiplosConcenso3S;
	
	var resultDescPuE3S=descuentoActinPuE1(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescPuE3S=resultDescPuE3S*100;
	resultDescPuE3S=resultDescPuE3S.toFixed(2);
	
	parResultmultiplosActinver=resultmultiplosActinver4S;
	parResultMultiplosConcenso=resultMultiplosConcenso4S;
	
	var resultDescVeEbtidaE1S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	
	resultDescVeEbtidaE1S=resultDescVeEbtidaE1S*100;
	resultDescVeEbtidaE1S=resultDescVeEbtidaE1S.toFixed(2);
	
	parResultmultiplosActinver=resultmultiplosActinver5S;
	parResultMultiplosConcenso=resultMultiplosConcenso5S;
	
	var resultDescVeEbtidaE2S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescVeEbtidaE2S=resultDescVeEbtidaE2S*100;
	resultDescVeEbtidaE2S=resultDescVeEbtidaE2S.toFixed(2);
	
	parResultmultiplosActinver=resultmultiplosActinver6S;
	parResultMultiplosConcenso=resultMultiplosConcenso6S;
	
	var resultDescVeEbtidaE3S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescVeEbtidaE3S=resultDescVeEbtidaE3S*100;
	resultDescVeEbtidaE3S=resultDescVeEbtidaE3S.toFixed(2);
	
	parResultmultiplosActinver=resultmultiplosActinver7S;
	parResultMultiplosConcenso=resultMultiplosConcenso7S;
	
	var resultDescVLE1S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescVLE1S=resultDescVLE1S*100;
	resultDescVLE1S=resultDescVLE1S.toFixed(2);
	
	parResultmultiplosActinver=resultmultiplosActinver8S;
	parResultMultiplosConcenso=resultMultiplosConcenso8S;
	
	var resultDescVLE2S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescVLE2S=resultDescVLE2S*100;
	resultDescVLE2S=resultDescVLE2S.toFixed(2);

	parResultmultiplosActinver=resultmultiplosActinver9S;
	parResultMultiplosConcenso=resultMultiplosConcenso9S;
	
	var resultDescVLE3S=descuentoActinEbtida(parResultmultiplosActinver,parResultMultiplosConcenso);
	resultDescVLE3S=resultDescVLE3S*100;
	resultDescVLE3S=resultDescVLE3S.toFixed(2);
	
	$('#actualyearPU').html(resultmultiplosActinver1S.toFixed(1));
	$('#nextyearPU').html(resultmultiplosActinver2S.toFixed(1));
	$('#nextmorePU').html(resultmultiplosActinver3S.toFixed(1));
	$('#actualyearVE').html(resultmultiplosActinver4S.toFixed(1));
	$('#nextyearVE').html(resultmultiplosActinver5S.toFixed(1));
	$('#nextmoreVE').html(resultmultiplosActinver6S.toFixed(1));
	$('#actualyearVL').html(resultmultiplosActinver7S.toFixed(1));
	$('#nextyearVL').html(resultmultiplosActinver8S.toFixed(1));
	$('#nextmoreVL').html(resultmultiplosActinver9S.toFixed(1));
	$('#upacon1').html(resultMultiplosConcenso1S.toFixed(1));
	$('#upacon2').html(resultMultiplosConcenso2S.toFixed(1));
	$('#upacon3').html(resultMultiplosConcenso3S.toFixed(1));
	$('#ebitacccon1').html(resultMultiplosConcenso4S.toFixed(1));
	$('#ebitacccon2').html(resultMultiplosConcenso5S.toFixed(1));
	$('#ebitacccon3').html(resultMultiplosConcenso6S.toFixed(1));
	$('#vlcon1').html(resultMultiplosConcenso7S.toFixed(1));
	$('#vlcon2').html(resultMultiplosConcenso8S.toFixed(1));
	$('#vlcon3').html(resultMultiplosConcenso9S.toFixed(1));
	
	$('#despu1').html(resultDescPuE1S+"%");
	$('#despu2').html(resultDescPuE2S+"%");
	$('#despu3').html(resultDescPuE3S+"%");
	$('#desve1').html(resultDescVeEbtidaE1S+"%");
	$('#desve2').html(resultDescVeEbtidaE2S+"%");
	$('#desve3').html(resultDescVeEbtidaE3S+"%");
	$('#desvl1').html(resultDescVLE1S+"%");
	$('#desvl2').html(resultDescVLE2S+"%");
	$('#desvl3').html(resultDescVLE3S+"%");
	
}



function getTime(){
	var myPar1 = "";
	var myPar2 = "";
	var horaMinutos="";
	$.ajax({
		url: 'InteractiveStaController/actionCheckTime',
		dataType: 'json',
		type: 'get'
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

function printDataIntraDay(formatPrice,captionPrice,formatChange,captionChange,formatClosePrice,captionClosePrice,formatVolumen,captionVolumen,formatInitPrice,captionInitPrice,formatMax,captionMax,formatMin,captionMin,formatImp,captionImp){
	$('#captionPrice').html(captionPrice);
	$('#precio').html(formatPrice);
	
	$('#captionChange').html(captionChange);
	$('#cambio').html(formatChange);
	
	$('#captionClosePrice').html(captionClosePrice);
	$('#cierre').html(formatClosePrice);
	
	$('#captionVolumen').html(captionVolumen);
	$('#volumen').html(formatVolumen);
	
	$('#captionInitPrice').html(captionInitPrice);
	$('#apertura').html(formatInitPrice);
	
	$('#captionMax').html(captionMax);
	$('#maximo').html(formatMax);
	
	$('#captionMin').html(captionMin);
	$('#minimo').html(formatMin);
	
	$('#captionImp').html(captionImp);
	$('#importe').html(formatImp);
}
	
	
	





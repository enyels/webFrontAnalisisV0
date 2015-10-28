var mach="";
var bridge="";
var topMas = [];
var topMenos = [];
/*ini::onConnect realtime*/
function onConnect() {
    var stompClient = null;
    var socket = new SockJS('https://www.actinver.com/appsBackAnalisis/webSocket/analisis');
//    var socket = new SockJS('http://10.10.106.7:9083'+bridge+'/appsBackAnalisis/webSocket/analisis');
//    var socket = new SockJS('http://'+mach+':'+bridge+'/appsBackAnalisis/webSocket/analisis');
    stompClient = Stomp.over(socket);
    stompClient.debug = null;
  	stompClient.connect({},function(frame){
  		var data = null;
		stompClient.subscribe('/topic/capitales/bmvAll', function(data){
			var dataBody = null;
			var priceVar = null;
			dataBody = $.parseJSON(data.body);
			priceVar = dataBody.priceVar.toString();
			if(priceVar.indexOf("-") == -1){
				if(topMas.indexOf(dataBody.issuer.issuerSerie) == -1 && topMenos.indexOf(dataBody.issuer.issuerSerie) == -1){
					topMas.push(dataBody.issuer.issuerSerie);
					topMas.push(dataBody.averagePrice);
					topMas.push(dataBody.priceVar);
			  		topMas.shift();
			  		topMas.shift();
			  		topMas.shift();
				}
			} else {
				if(topMenos.indexOf(dataBody.issuer.issuerSerie) == -1 && topMas.indexOf(dataBody.issuer.issuerSerie) == -1){
					topMenos.push(dataBody.issuer.issuerSerie);
					topMenos.push(dataBody.averagePrice);
					topMenos.push(dataBody.priceVar);
			  		topMenos.shift();
			  		topMenos.shift();
			  		topMenos.shift();
				}
			}
		});
  	});    
}
/*fin::onConnect realtime*/
/*ini::onConnectDel delay*/
function onConnectDel() {
    var stompClient = null;
    var socket = new SockJS('https://www.actinver.com/appsBackAnalisis/webSocket/analisis');
//    var socket = new SockJS('http://'+mach+':'+bridge+'/appsBackAnalisis/webSocket/analisis');
    stompClient = Stomp.over(socket);
    stompClient.debug = null;
  	stompClient.connect({},function(frame){
  		var data = null;
		stompClient.subscribe('/topic/capitales/bmvAllDelay', function(data){
			var dataBody = null;
			var priceVar = null;
			dataBody = $.parseJSON(data.body);
			priceVar = dataBody.priceVar.toString();
			
			var priceAver = dataBody.averagePrice.toString();
			if (priceAver != "0.00") {
				if(priceVar.indexOf("-") == -1){
					if(topMas.indexOf(dataBody.issuer.issuerSerie) == -1 && topMenos.indexOf(dataBody.issuer.issuerSerie) == -1){
						topMas.push(dataBody.issuer.issuerSerie);
						topMas.push(dataBody.averagePrice);
						topMas.push(dataBody.priceVar);
				  		topMas.shift();
				  		topMas.shift();
				  		topMas.shift();
					}
				} else {
					if(topMenos.indexOf(dataBody.issuer.issuerSerie) == -1 && topMas.indexOf(dataBody.issuer.issuerSerie) == -1){
						topMenos.push(dataBody.issuer.issuerSerie);
						topMenos.push(dataBody.averagePrice);
						topMenos.push(dataBody.priceVar);
				  		topMenos.shift();
				  		topMenos.shift();
				  		topMenos.shift();
					}
				}	
			}
		});
  	});    
}
/*fin::onConnectDel delay*/
//ini::loadTopEm
var aloneIssuerSerieNac = [];
function loadTopEm(){
	var dataEmna = null;
	var filaEmna = [];
	var blockFilaEmna = [];
	aloneIssuerSerieNac = [];
	topMas = [];
	topMenos = [];
//	$.get('emna.jsp').success(function(dataEmna) {
	$.post('/resources/textFiles/Emisora_Nacional.txt').success(function(dataEmna) {
//	$.post('/resources/textFiles/CopyEmisora_Nacional.txt').success(function(dataEmna) {
		filaEmna = [];
		filaEmna = dataEmna.split(/\n/);
		var tamFilaEmna = filaEmna.length-1;
		var singleRow = [];
	    for(var i=0; i<=tamFilaEmna-2; i++){
		    singleRow = [];
		    singleRow = filaEmna[i].split('=');
		    
		    var myTempVal = parseFloat(singleRow[1].trim()).toFixed(2);
		    if(myTempVal.toString() != "0.00"){
			    aloneIssuerSerieNac.push(singleRow[0].trim());
			    aloneIssuerSerieNac.push(singleRow[1].trim());
			    aloneIssuerSerieNac.push(singleRow[2].trim());
		    }
		    
	    }
	    var tamAis = aloneIssuerSerieNac.length-1;
		for (var i = 0; i<=tamAis; i=i+3) {
			var tmpVal = aloneIssuerSerieNac[i+2].toString();
			if(tmpVal.indexOf('-') == -1){	/*Es verde*/
				topMas.push(aloneIssuerSerieNac[i]);
				topMas.push(aloneIssuerSerieNac[i+1]);
				topMas.push(aloneIssuerSerieNac[i+2]);
			}else{	/*Es rojo*/
				topMenos.push(aloneIssuerSerieNac[i]);
				topMenos.push(aloneIssuerSerieNac[i+1]);
				topMenos.push(aloneIssuerSerieNac[i+2]);
			}
		}
	}).error(function(e){
//		console.info("loadTopEm :: [TopMm] :: Fail Call Post :: [EmisoraNacionalFile]");
    });
}
//fin::loadTopEm

$(document).ready( function() {
	
	$.ajax({
		url: 'InteractiveStaController/actionGetMachine',
		dataType: 'json',
		type: 'get'		
	}).done(function(data) {
		$.each(data, function( key, value ) {
			mach = data.machine;
			bridge = data.bridge;
		});
	}).fail(function() {
//		console.info("Boot Js :: [TopMm] :: Fail Call Ajax :: [ActionGetMachine]");
	});
	
	var resultFind = $('#usuario', top.document).attr('value');
	if (resultFind === undefined) {
		resultFind = "undefined";
	}
	var jsonData = {
			'valResultFind': resultFind
	};
	$.ajax({
		url: 'CheckSessController/workWithPaga',
		data: jsonData,
		type: 'get'
	}).done(function(data) {
		if (data == "true") {
//			console.log("SI De paga::topMm");
			loadInfoFile();					
			onConnect();
			updateFromArray();
		} else {
//			console.log("NO De paga::topMm");
			loadInfoFile();
			onConnectDel();
			updateFromArray();
		}
	}).fail(function() {
//		console.info("Boot Js :: [TopMm] :: Fail Call Ajax :: [WorkWithPaga]");
	});
	
	function loadInfoFile() {
		loadTopEm();
		setTimeout(function() { 
			var tamTrTopMas = null;
			var tamTrTopMenos = null;
			tamTrTopMas = $('#topMasTab tr').length;
			tamTrTopMenos = $('#topMenosTab tr').length;
			if(tamTrTopMas == 1 && tamTrTopMenos == 1){
				for (var y = 0; y < 15; y = y+3) {
//					$("#topMasTab").append("<tr><td class='regEstilo'>"+topMas[y]+"</td><td><div class='imageUp' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#00A900'>"+topMas[y+1]+"</td><td class='regEstiloSpec' style='color:#00A900'>"+topMas[y+2]+" %</td></tr>");
//					$("#topMenosTab").append("<tr><td class='regEstilo'>"+topMenos[y]+"</td><td><div class='imageDown' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#FF0000'>"+topMenos[y+1]+"</td><td class='regEstiloSpec' style='color:#FF0000'>"+topMenos[y+2]+" %</td></tr>");
					$("#topMasTab").append("<tr><td class='regEstilo'>"+topMas[y]+"</td><td><div class='sinImg' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#00A900'>"+parseFloat(topMas[y+1]).toFixed(2)+"</td><td class='regEstiloSpec' style='color:#00A900'>"+parseFloat(topMas[y+2]).toFixed(2)+" %</td></tr>");
					$("#topMenosTab").append("<tr><td class='regEstilo'>"+topMenos[y]+"</td><td><div class='sinImg' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#FF0000'>"+parseFloat(topMenos[y+1]).toFixed(2)+"</td><td class='regEstiloSpec' style='color:#FF0000'>"+parseFloat(topMenos[y+2]).toFixed(2)+" %</td></tr>");
				}
			}
		},1000);
	}	//Fin loadInfoFile
	
	function updateFromArray() {
		setInterval(function() {
			var tamTrTopMas = null;
			var tamTrTopMenos = null;
			tamTrTopMas = $('#topMasTab tr').length;
			tamTrTopMenos = $('#topMenosTab tr').length;
			if(tamTrTopMas == 6 && tamTrTopMenos == 6){
				if(topMas.length > 15){
					topMas.shift();
					topMas.shift();
					topMas.shift();
				}
				$('#topMasTab tbody').empty();
				if(topMenos.length > 15){
					topMenos.shift();
					topMenos.shift();
					topMenos.shift();
				}
				$('#topMenosTab tbody').empty();
				for (var x = 0; x < 15; x = x+3) {
//					$("#topMasTab").append("<tr><td class='regEstilo'>"+topMas[x]+"</td><td><div class='imageUp' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#00A900'>"+topMas[x+1]+"</td><td class='regEstiloSpec' style='color:#00A900'>"+topMas[x+2]+" %</td></tr>");
//					$("#topMenosTab").append("<tr><td class='regEstilo'>"+topMenos[x]+"</td><td><div class='imageDown' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#FF0000'>"+topMenos[x+1]+"</td><td class='regEstiloSpec' style='color:#FF0000'>"+topMenos[x+2]+" %</td></tr>");
					$("#topMasTab").append("<tr><td class='regEstilo'>"+topMas[x]+"</td><td><div class='sinImg' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#00A900'>"+parseFloat(topMas[x+1]).toFixed(2)+"</td><td class='regEstiloSpec' style='color:#00A900'>"+parseFloat(topMas[x+2]).toFixed(2)+" %</td></tr>");
					$("#topMenosTab").append("<tr><td class='regEstilo'>"+topMenos[x]+"</td><td><div class='sinImg' style='width:17px; height:23px;'></div></td><td class='regEstiloSpec' style='color:#FF0000'>"+parseFloat(topMenos[x+1]).toFixed(2)+"</td><td class='regEstiloSpec' style='color:#FF0000'>"+parseFloat(topMenos[x+2]).toFixed(2)+" %</td></tr>");
				}	
			}
		},9000);
	} //Fin updateFromArray
	
}); // Fin JQUERY
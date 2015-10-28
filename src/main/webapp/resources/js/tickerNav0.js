var aloneIssuerSerieNac = [];
var emNaSelec = [];

//ini::loadPriceOfCloseNacWs ==============================NAC WS==============================
function loadPriceOfCloseNacWs(){
	var dataEmna = null;
	var blockFilaEmna = [];
	aloneIssuerSerieNac = [];
	//ini::Call Rest Service with all EMNA
	$.ajax({
//		url:'https://www.actinver.com/appsBackAnalisis/jaxrs/MarketInfoRest/upDateMk011212/00/00/00/00/true?language=SPA',
		url: 'InteractivePortalController/actionAllEmNaOptDel',
		dataType: 'json',
		type: 'get'
	}).done(function(dataEmna) {
		$.ajax({
			url: 'InteractiveStaController/actionGetEmnaSel',
			dataType: 'json',
			type: 'get'
		}).done(function(data) {
			$.each( data.selListEmNa, function( key, value ) {
				if(data.selListEmNa[key].emEstatus == "mostrarEm"){
					emNaSelec.push(data.selListEmNa[key].emNombre);
					emNaSelec.push(data.selListEmNa[key].emEstatus);
				}
			});
			
			var arrTmp1 = [];
			var singleCell = [];
			$.each(dataEmna.outMarketInfoQuery.marketDataTuple,function(key, value){
			    arrTmp1.push([value.issuer.issuerName+" "+value.issuer.serie, value.lastPrice, value.priceVar]);
			});
			arrTmp1.sort();
			var tamArrTmp1 = arrTmp1.length;
			for (var i = 0; i < tamArrTmp1; i++) {
				singleCell = arrTmp1[i].toString().split(',');
			    aloneIssuerSerieNac.push(singleCell[0]);
			    aloneIssuerSerieNac.push(singleCell[1]);
			    aloneIssuerSerieNac.push(singleCell[2]);
			};
			
		    var tamAis = aloneIssuerSerieNac.length-1;
			for (var i = 0; i<=tamAis; i=i+3) {
				var tmpVal = parseFloat(aloneIssuerSerieNac[i+2]).toFixed(2); //round
				tmpVal.toString(); //round
				var posEmNaSelec = emNaSelec.indexOf(aloneIssuerSerieNac[i]);
				if (posEmNaSelec != -1) {
					if( parseFloat(aloneIssuerSerieNac[i+1]).toFixed(2) != "NaN"){
						if(emNaSelec[posEmNaSelec+1].toString() == "mostrarEm" && parseFloat(aloneIssuerSerieNac[i+1]).toFixed(2) != "0.00"){
							if(tmpVal.indexOf('-') == -1){
								$('.listaNac').append('<li data-update="'+aloneIssuerSerieNac[i]+'" class="forText '+emNaSelec[posEmNaSelec+1]+'">'+aloneIssuerSerieNac[i]+' '+parseFloat(aloneIssuerSerieNac[i+1]).toFixed(2)+' <span style=color:#00A900>'+parseFloat(aloneIssuerSerieNac[i+2]).toFixed(2)+'%</span></li>'); //round
							}else{
								$('.listaNac').append('<li data-update="'+aloneIssuerSerieNac[i]+'" class="forText '+emNaSelec[posEmNaSelec+1]+'">'+aloneIssuerSerieNac[i]+' '+parseFloat(aloneIssuerSerieNac[i+1]).toFixed(2)+' <span style=color:#FF0000>'+parseFloat(aloneIssuerSerieNac[i+2]).toFixed(2)+'%</span></li>'); //round
							}
						}
					} //end::if NaN
				} else {
					//console.info("[Equals] :: La Emisora Nacional del Archivo no esta seleccionado por el usuario.");
				}
			}
		    $('#webtickerNac').webTicker({speed: 95});
		}).fail(function(data) {
			//console.info("Seleccion EmNa :: [TickerNa] :: Fail Call Ajax :: [ActionGetEmnaSel]");
		});
	}).fail(function(e){
		console.log('e::'+e.status);
	});
	//end::Call Rest Service with all EMNA
}
//fin::loadPriceOfCloseNacWs	==============================NAC WS==============================

//INI::onConnectNacDel delay
var oneNacDel = [];
function onConnectNacDel() {
	var stompClient = null;
	var socket = new SockJS('https://www.actinver.com/appsBackAnalisis/webSocket/analisis');
	stompClient = Stomp.over(socket);
	stompClient.debug = null;
	stompClient.connect({},function(frame){
		var data = null;
		stompClient.subscribe('/topic/capitales/bmvAllDelay', function(data){
			var dataBody = null;
			dataBody = $.parseJSON(data.body);
			oneNacDel = [];
			var posEmNaSelec = emNaSelec.indexOf(dataBody.issuer.issuerSerie.toString());
			var priceAver = dataBody.lastPrice.toString();
			if (priceAver != "0.00" && posEmNaSelec != -1) {
				oneNacDel.push(dataBody.issuer.issuerSerie);
				oneNacDel.push(dataBody.lastPrice);
				oneNacDel.push(dataBody.priceVar);
			}
		});
	});
}
//FIN::onConnectNacDel delay

//ini::loadPriceOfCloseNacFile ==============================NAC FILE==============================
function loadPriceOfCloseNacFile(){
	var dataEmna = null;
	var filaEmna = [];
	var blockFilaEmna = [];
	aloneIssuerSerieNac = [];
	$.post('/resources/textFiles/Emisora_Nacional.txt').success(function(dataEmna) {
		$.ajax({
			url: 'InteractiveStaController/actionGetEmnaSel',
			dataType: 'json',
			type: 'get'
		}).done(function(data) {
			$.each( data.selListEmNa, function( key, value ) {
				if(data.selListEmNa[key].emEstatus == "mostrarEm"){
					emNaSelec.push(data.selListEmNa[key].emNombre);
					emNaSelec.push(data.selListEmNa[key].emEstatus);
				}
			});
			filaEmna = [];
			filaEmna = dataEmna.split(/\n/);
			var tamFilaEmna = filaEmna.length-1;
			var singleRow = [];
		    for(var i=0; i<=tamFilaEmna-1; i++){
			    singleRow = [];
			    singleRow = filaEmna[i].split('=');
			    aloneIssuerSerieNac.push(singleRow[0].trim());
			    aloneIssuerSerieNac.push(singleRow[1].trim());
			    aloneIssuerSerieNac.push(singleRow[2].trim());
		    }
		    var tamAis = aloneIssuerSerieNac.length-1;
			for (var i = 0; i<=tamAis; i=i+3) {
				var tmpVal = parseFloat(aloneIssuerSerieNac[i+2]).toFixed(2); //round
				tmpVal.toString(); //round
				var posEmNaSelec = emNaSelec.indexOf(aloneIssuerSerieNac[i]);
				if (posEmNaSelec != -1) {
					if(emNaSelec[posEmNaSelec+1].toString() == "mostrarEm" && parseFloat(aloneIssuerSerieNac[i+1]).toFixed(2) != "0.00"){
						if(tmpVal.indexOf('-') == -1){
							$('.listaNac').append('<li data-update="'+aloneIssuerSerieNac[i]+'" class="forText '+emNaSelec[posEmNaSelec+1]+'">'+aloneIssuerSerieNac[i]+' '+parseFloat(aloneIssuerSerieNac[i+1]).toFixed(2)+' <span style=color:#00A900>'+parseFloat(aloneIssuerSerieNac[i+2]).toFixed(2)+'%</span></li>'); //round
						}else{
							$('.listaNac').append('<li data-update="'+aloneIssuerSerieNac[i]+'" class="forText '+emNaSelec[posEmNaSelec+1]+'">'+aloneIssuerSerieNac[i]+' '+parseFloat(aloneIssuerSerieNac[i+1]).toFixed(2)+' <span style=color:#FF0000>'+parseFloat(aloneIssuerSerieNac[i+2]).toFixed(2)+'%</span></li>'); //round
						}
					}
				} else {
					//console.info("[Equals] :: La Emisora Nacional del Archivo no esta seleccionado por el usuario.");
				}
			}
		    $('#webtickerNac').webTicker({speed: 95});
		}).fail(function(data) {
			//console.info("Seleccion EmNa :: [TickerNa] :: Fail Call Ajax :: [ActionGetEmnaSel]");
		});
	}).error(function(e){
		//console.info("LoadPriceOfCloseNac :: [TickerNa] :: Fail Call Post :: [EmisoraNacionalFile]");
    });
}
//end::loadPriceOfCloseNacFile ==============================NAC FILE==============================

$(document).ready( function() {
	//ini :: get hour
	var myPar1 = "";
	var myPar2 = "";
	var myParam3 = "";
	var tmpParam = "15:30:00";
	$.ajax({
		url: 'InteractiveStaController/actionCheckTime',
		dataType: 'json',
		type: 'get'
	}).done(function(data) {
		$.each(data, function( key, value ) {
			myPar1 = data.hora;
			myPar2 = data.minuto;
		});
	}).fail(function(e) {
		console.info("Checking Time :: [tickerNav0] :: Fail Call Ajax :: [actionCheckTime]");
	});
	//end :: get hour
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
		if (data != "true") { // ini:: If No Paga
			console.log("NO De paga::ticker::");
			$('.msgTicker').show();
			myParam3 = myPar1+":"+myPar2+":00";
			  if (myParam3 < tmpParam) { /* Antes de 15:30:00 */ //console.log("/* Antes de 15:30:00 */");
				  loadPriceOfCloseNacWs(); //1.-Load Ws with Delay
				  onConnectNacDel(); //2.-Load Sock
				  setInterval(function() { //3.-Update Ticker With Socket
					  if (aloneIssuerSerieNac.indexOf(oneNacDel[0]) == -1) {
					  } else {
						  var tmpVal = parseFloat(oneNacDel[2]).toFixed(2); //round
						  tmpVal.toString(); //round
						  var posEmNaSelec = emNaSelec.indexOf(oneNacDel[0]);
						  if (posEmNaSelec != -1) {
							  if(tmpVal.indexOf('-') == -1){
								  $('#webtickerNac').webTicker('update','<li data-update="'+oneNacDel[0]+'" class="forText">'+oneNacDel[0]+' '+parseFloat(oneNacDel[1]).toFixed(2)+' <span style=color:#00A900>'+parseFloat(oneNacDel[2]).toFixed(2)+'%</span></li>','swap',true,false); //round
							  }else{
								  $('#webtickerNac').webTicker('update','<li data-update="'+oneNacDel[0]+'" class="forText">'+oneNacDel[0]+' '+parseFloat(oneNacDel[1]).toFixed(2)+' <span style=color:#FF0000>'+parseFloat(oneNacDel[2]).toFixed(2)+'%</span></li>','swap',true,false); //round
							  }
						  }
					  }
				  },1000);			
	  		  } else { /* ini:: Despues de 15:30:00 */ //console.log("/* Despues de 15:30:00 */");
	  			loadPriceOfCloseNacFile();
				  if (aloneIssuerSerieNac.indexOf(oneNacDel[0]) == -1) {
				  } else {
					  var tmpVal = parseFloat(oneNacDel[2]).toFixed(2); //round
					  tmpVal.toString(); //round
					  var posEmNaSelec = emNaSelec.indexOf(oneNacDel[0]);
					  if (posEmNaSelec != -1) {
						  if(tmpVal.indexOf('-') == -1){
							  $('#webtickerNac').webTicker('update','<li data-update="'+oneNacDel[0]+'" class="forText">'+oneNacDel[0]+' '+parseFloat(oneNacDel[1]).toFixed(2)+' <span style=color:#00A900>'+parseFloat(oneNacDel[2]).toFixed(2)+'%</span></li>','swap',true,false); //round
						  }else{
							  $('#webtickerNac').webTicker('update','<li data-update="'+oneNacDel[0]+'" class="forText">'+oneNacDel[0]+' '+parseFloat(oneNacDel[1]).toFixed(2)+' <span style=color:#FF0000>'+parseFloat(oneNacDel[2]).toFixed(2)+'%</span></li>','swap',true,false); //round
						  }
					  }
				  }
	  		  }	/* end:: Despues de 15:30:00 */
		} // end:: If No Paga
	}).fail(function() {
		console.info("Boot Js :: [TickerNav0] :: Fail Call Ajax :: [WorkWithPaga]");		
	});
}); //fin jquery


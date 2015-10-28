//ini::loadPriceOfCloseNac	==============================NAC==============================
var aloneIssuerSerieNac = [];
function loadPriceOfCloseNac(){
	var dataEmna = null;
	var filaEmna = [];
	var blockFilaEmna = [];
	aloneIssuerSerieNac = [];
	var emNaSelec = [];
//	$.post('/resources/textFiles/CopyEmisora_Nacional.txt').success(function(dataEmna) {
//	$.post('/resources/textFiles/Emisora_Nacional.txt').success(function(dataEmna) {
	$.post('emna.jsp').success(function(dataEmna) {
		$.ajax({
			url: 'InteractiveStaController/actionGetEmnaSel',
			dataType: 'json',
			type: 'get'
		}).done(function(data) {
			
			$.each( data.selListEmNa, function( key, value ) {
//				console.log("1::"+data.selListEmNa[key].emNombre+"::2::"+data.selListEmNa[key].emEstatus);
				emNaSelec.push(data.selListEmNa[key].emNombre);
				emNaSelec.push(data.selListEmNa[key].emEstatus);
			});
			
			filaEmna = [];
			filaEmna = dataEmna.split(/\n/);
			var tamFilaEmna = filaEmna.length-1;
			var singleRow = [];
		    for(var i=0; i<=tamFilaEmna; i++){
			    singleRow = [];
			    singleRow = filaEmna[i].split('=');
			    aloneIssuerSerieNac.push(singleRow[0].trim());
			    aloneIssuerSerieNac.push(singleRow[1].trim());
			    aloneIssuerSerieNac.push(singleRow[2].trim());
		    }
		    var tamAis = aloneIssuerSerieNac.length-1;
			for (var i = 0; i<=tamAis; i=i+3) {
				var tmpVal = aloneIssuerSerieNac[i+2].toString();
				var posEmNaSelec = emNaSelec.indexOf(aloneIssuerSerieNac[i]);
				if (posEmNaSelec != -1) {
//					console.log("Arr::Existe::"+emNaSelec[posEmNaSelec]+"::"+emNaSelec[posEmNaSelec+1]);
					if(tmpVal.indexOf('-') == -1){
						$('.listaNac').append('<li data-update="'+aloneIssuerSerieNac[i]+'" class="forText '+emNaSelec[posEmNaSelec+1]+'">'+aloneIssuerSerieNac[i]+' '+aloneIssuerSerieNac[i+1]+' <span style=color:#00A900>'+aloneIssuerSerieNac[i+2]+'%</span></li>');
					}else{
						$('.listaNac').append('<li data-update="'+aloneIssuerSerieNac[i]+'" class="forText '+emNaSelec[posEmNaSelec+1]+'">'+aloneIssuerSerieNac[i]+' '+aloneIssuerSerieNac[i+1]+' <span style=color:#FF0000>'+aloneIssuerSerieNac[i+2]+'%</span></li>');
					}
				} else {
					alert("Arr::NO Existe::");
				}
			}
		    $('#webtickerNac').webTicker({speed: 95});
		}).fail(function(data) {
			alert("getEmnaSelected::Services::"+data);
		});
	}).error(function(e){
    	alert('File Emisora_Nacional.txt Not Found');
    });
}
//fin::loadPriceOfCloseNac	==============================NAC==============================
//INI::onConnectNac
var oneNac = [];
function onConnectNac() {
	var stompClient = null;
	var socket = new SockJS('http://10.10.115.7:9083/appsBackAnalisis/webSocket/analisis');
//	var socket = new SockJS('http://mxl43935l8.actinver.com.mx:9081/appsBackAnalisis/webSocket/analisis');
	stompClient = Stomp.over(socket);
	stompClient.debug = null;
	stompClient.connect({},function(frame){
		var data = null;
		stompClient.subscribe('/topic/capitales/bmvAll', function(data){
			var dataBody = null;
			dataBody = $.parseJSON(data.body);
			oneNac = [];
			oneNac.push(dataBody.issuer.issuerSerie);
			oneNac.push(dataBody.averagePrice);
			oneNac.push(dataBody.priceVar);
//			console.log("::WS_Ticker_Nac::"+dataBody.issuer.issuerSerie+"::"+dataBody.averagePrice+"::"+dataBody.priceVar);
		});
	});
}
//FIN::onConnectNac
//ini::loadPriceOfCloseInd	==============================IND==============================
var aloneIssuerSerieInd = [];
function loadPriceOfCloseInd(){
	var dataEmna = null;
	var filaEmna = [];
	var blockFilaEmna = [];
	aloneIssuerSerieInd = [];
	$.post('inin.jsp').success(function(dataEmna) {
		filaEmna = [];
		filaEmna = dataEmna.split(/\n/);
		var tamFilaEmna = filaEmna.length-1;
		var singleRow = [];
	    for(var i=0; i<=tamFilaEmna; i++){
		    singleRow = [];
		    singleRow = filaEmna[i].split('=');
		    aloneIssuerSerieInd.push(singleRow[0].trim());
		    aloneIssuerSerieInd.push(singleRow[1].trim());
		    aloneIssuerSerieInd.push(singleRow[2].trim());
	    }
	    var tamAis = aloneIssuerSerieInd.length-1;
		for (var i = 0; i<=tamAis; i=i+3) {
			var tmpVal = aloneIssuerSerieInd[i+2].toString();
			if(tmpVal.indexOf('-') == -1){
				$('.listaInter').append('<li data-update="'+aloneIssuerSerieInd[i]+'" class="forText">'+aloneIssuerSerieInd[i]+' '+aloneIssuerSerieInd[i+1]+' <span style=color:#00A900>'+aloneIssuerSerieInd[i+2]+'%</span></li>');
			}else{
				$('.listaInter').append('<li data-update="'+aloneIssuerSerieInd[i]+'" class="forText">'+aloneIssuerSerieInd[i]+' '+aloneIssuerSerieInd[i+1]+' <span style=color:#FF0000>'+aloneIssuerSerieInd[i+2]+'%</span></li>');
			}
		}
		$('#webtickerInter').webTicker({speed: 45});
	}).error(function(e){
  	alert('File inin.jsp or ininCopy.jsp Not Found');
  });
}
//fin::loadPriceOfCloseInd
//INI::onConnectInd
var oneInd = [];
function onConnectInd() {
	var stompClient = null;
	var socket = new SockJS('http://10.10.115.7:9083/appsBackAnalisis/webSocket/analisis');
//	var socket = new SockJS('http://mxl43935l8.actinver.com.mx:9081/appsBackAnalisis/webSocket/analisis');
	stompClient = Stomp.over(socket);
	stompClient.debug = null;
	stompClient.connect({},function(frame){
		var data = null;
		stompClient.subscribe('/topic/capitales/bmvInterTrack', function(data){
			var dataBody = null;
			dataBody = $.parseJSON(data.body);
			oneInd = [];
			oneInd.push(dataBody.issuer.issuerSerie);
			oneInd.push(dataBody.averagePrice);
			oneInd.push(dataBody.priceVar);
//			console.log("::onConnectInd::"+dataBody.issuer.issuerSerie+"::"+dataBody.averagePrice+"::"+dataBody.priceVar);
		});
	});
}
//FIN::onConnectInd		==============================IND==============================

$(document).ready( function() {
	/*ini::For EMNA*/
	loadPriceOfCloseNac();			/*Exec One Time*/
	onConnectNac();			
	setInterval(function() {		/*Update Ticker Each Second*/
		if (aloneIssuerSerieNac.indexOf(oneNac[0]) == -1) {
		} else {
			var tmpVal = oneNac[2].toString();
			if(tmpVal.indexOf('-') == -1){
				$('#webtickerNac').webTicker('update','<li data-update="'+oneNac[0]+'" class="forText">'+oneNac[0]+' '+oneNac[1]+' <span style=color:#00A900>'+oneNac[2]+'%</span></li>','swap',true,false);
			}else{
				$('#webtickerNac').webTicker('update','<li data-update="'+oneNac[0]+'" class="forText">'+oneNac[0]+' '+oneNac[1]+' <span style=color:#FF0000>'+oneNac[2]+'%</span></li>','swap',true,false);
			}			
		}
	},1000);
	/*fin::For EMNA*/
	
//	/*ini::For ININ*/
//	/*Exec One Time*/
	loadPriceOfCloseInd();
//	onConnectInd();
//	/*Update Ticker Each Second*/
//	setInterval(function() {
//		if (aloneIssuerSerieInd.indexOf(oneInd[0]) == -1) {
//		} else {
//			var tmpVal = oneInd[2].toString();
//			if(tmpVal.indexOf('-') == -1){
//				$('#webtickerInter').webTicker('update','<li data-update="'+oneInd[0]+'" class="forText">'+oneInd[0]+' '+oneInd[1]+' <span style=color:#00A900>'+oneInd[2]+'%</span></li>','swap',true,false);
//			}else{
//				$('#webtickerInter').webTicker('update','<li data-update="'+oneInd[0]+'" class="forText">'+oneInd[0]+' '+oneInd[1]+' <span style=color:#FF0000>'+oneInd[2]+'%</span></li>','swap',true,false);
//			}			
//		}
//	},1000);
//	/*fin::For ININ*/
	
});
$(document).ready(function () {
	
	fnDollarInt();
	setInterval(function() {	
		fnDollarInt();
	},90000);
	function fnDollarInt() {
		$.ajax({
	//		url : 'http://www.finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerDolarInterbancarioLast',
			url : 'https://finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerDolarInterbancarioLast',
			type : 'GET',
	        dataType: 'JSON'
		}).done(function(dataDolar) {
			$.each( dataDolar, function( key, value ) {
				if(value.Instrumento == "DOLAR INTERBANCARIO"){
					$('#pcDol').text(value.Compra);
					$('#pvDol').text(value.Venta);
				}
			});
			$('.formatD').currency();
		}).fail(function(e){
//			console.info("Boot Js :: [DivMetv0] :: Fail Call Ajax :: [ObtenerDolarInterbancarioLast]");
		});
	}
	
	fnDivsInt();
	setInterval(function() {	
		fnDivsInt();
	},90000);
	function fnDivsInt() {
		$.ajax({
	//		url : 'http://www.finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerDivisasInternacionalesLast',
			url : 'https://finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerDivisasInternacionalesLast',
			type : 'GET',
	        dataType: 'JSON'
		}).done(function(dataDivInter) {
			$.each( dataDivInter, function( key, value ) {
				if(value.Descripcion == "EURO-PesoMex"){
					$('#pcEur').text(value.Compra);
					$('#pvEur').text(value.Venta);
				} else if(value.Descripcion == "LIBRA-PesoMex"){
					$('#pcPla').text(value.Compra);
					$('#pvPla').text(value.Venta);
				}
			});
			$('.formatD').currency();
		}).fail(function(e){
//			console.info("Boot Js :: [DivMetv0] :: Fail Call Ajax :: [ObtenerDivisasInternacionalesLast]");
		});
	}
	
//	fnObtrMets();
//	setInterval(function() {	
//		fnObtrMets();
//	},10000);
//	function fnObtrMets() {
//		$.ajax({
//	//		url : 'http://www.finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerMetalesLast',
//			url : 'https://finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerMetalesLast',
//			type : 'GET',
//	        dataType: 'JSON'
//		}).done(function(dataMethal) {
//			$.each( dataMethal, function( key, value ) {
//				if(value.Descripcion == "ORO CENTENARIO"){
//					$('#pcCen').text(value.Valor);
//					$('#pvCen').text(value.ValorCierre);
//				}
//			});
//			$('.formatD').currency();
//		}).fail(function(e){
////			console.info("Boot Js :: [DivMetv0] :: Fail Call Ajax :: [ObtenerMetalesLast]");
//		});
//	}
	
	fnObtrIndics();
	setInterval(function() {
		fnObtrIndics();
	},90000);
	function fnObtrIndics() {
		$.ajax({
	//		url : 'http://www.finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerIndicesLast',
			url : 'https://finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerIndicesLast',
			type : 'GET',
	        dataType: 'JSON'
		}).done(function(dataCot) {
			$('.clRemDiv').remove();
			$.each( dataCot, function( key, value ) {
				var tempPor = "";
				if(value.Descripcion == "IPC"){
					$('#priCotName').text(value.Descripcion);
					$('.valPri').text(formatTh(value.Valor));
					tempPor = value.VariacionPorcentualCierre.toString();
					if(tempPor.indexOf("-") == -1){ //verde
						$('.app1').after('<td class="backCotUp clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#00A900"><span class="varPor1 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					} else { //rojo
						$('.app1').after('<td class="backCotDown clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#FF0000"><span class="varPor1 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					}
				} else if (value.Descripcion == "DOW JONES") {
					$('#segCotName').text(value.Descripcion);
					$('.valSeg').text(formatTh(value.Valor));
					tempPor = value.VariacionPorcentualCierre.toString();
					if(tempPor.indexOf("-") == -1){ //verde
						$('.app2').after('<td class="backCotUp clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#00A900"><span class="varPor2 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					} else { //rojo
						$('.app2').after('<td class="backCotDown clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#FF0000"><span class="varPor2 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					}
				} else if (value.Descripcion == "NASDAQ") {
					$('#terCotName').text(value.Descripcion);
					$('.valTer').text(formatTh(value.Valor));
					tempPor = value.VariacionPorcentualCierre.toString();
					if(tempPor.indexOf("-") == -1){ //verde
						$('.app3').after('<td class="backCotUp clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#00A900"><span class="varPor3 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					} else { //rojo
						$('.app3').after('<td class="backCotDown clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#FF0000"><span class="varPor3 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					}
				} else if (value.Descripcion == "S&P 500") {
					$('#cuaCotName').text(value.Descripcion);
					$('.valCua').text(formatTh(value.Valor));
					tempPor = value.VariacionPorcentualCierre.toString();
					if(tempPor.indexOf("-") == -1){ //verde
						$('.app4').after('<td class="backCotUp clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#00A900"><span class="varPor4 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					} else { //rojo
						$('.app4').after('<td class="backCotDown clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#FF0000"><span class="varPor4 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					}
				} else if (value.Descripcion == "EuroStoxx") {
					$('#quiCotName').text(value.Descripcion);
					$('.valQui').text(formatTh(value.Valor));
					tempPor = value.VariacionPorcentualCierre.toString();
					if(tempPor.indexOf("-") == -1){ //verde
						$('.app5').after('<td class="backCotUp clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#00A900"><span class="varPor5 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					} else { //rojo
						$('.app5').after('<td class="backCotDown clRemDiv"></td><td class="regEstilo clRemDiv" style="color:#FF0000"><span class="varPor5 clRemDiv">'+value.VariacionPorcentualCierre+'</span>%</td>');
					}
				}
			});
			$('#cotTab').tablesorter({ sortList: [[3,0]]});
		}).fail(function(e){
//			console.info("Boot Js :: [TickerIn2] :: Fail Call Ajax :: [ObtenerIndicesLast]");
		});
	}
	
	function formatTh(number){
			var numberFxStr =  number.toFixed(2).toString();
			var numberForm = numberFxStr.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		return numberForm;
	}
	
});
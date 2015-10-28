$(document).ready(function(){

	var emNaSelec = [];
	var myPar1 = "";
	var myPar2 = "";
	var myParam3 = "";
	var tmpParam = "15:30:00";
	
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
	}).fail(function() {
//		console.info("Boot Js :: [TickerNaWs] :: Fail Call Ajax :: [actionGetEmnaSel]");
	});
	
	//ini :: get hour
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
//		console.info("Checking Time :: [IntradiaIpc] :: Fail Call Ajax :: [ActionCheckTime]");
	});
	//end :: get hour
	
	setTimeout(function() {
		myParam3 = myPar1+":"+myPar2+":00";
		  if (myParam3 < tmpParam) {
  			  /* Antes de 15:30:00 */
				obtainMaxMin();
				setInterval(function() {
					obtainMaxMin();
				}, 10000);
  		  }else{
  			  /* Despues de 15:30:00 */
			  readFileAfterTree();
  		  }
	}, 2000);
	
	function obtainMaxMin() { // ini::Leer Servicio Web
		$.ajax({
//			url: 'InteractiveStaController/actionGetAllEmNa',
			url: 'InteractivePortalController/actionAllEmNaOptDel',
			dataType: 'json',
			type: 'get'		
		}).done(function(data) {
			var emNaVec = [];
			var topMas = [];
			var topMenos = [];
			var singleCellPlus = [];
			var singleCellLess = [];
			$.each(data.outMarketInfoQuery.marketDataTuple, function( key, value ) {
				if( parseFloat(value.averagePrice).toString() != "NaN"){
					if(parseFloat(value.lastPrice.toFixed(2)) != "0.00"){
						var tmpVal = value.priceVar.toFixed(2);
						var nameAppend = value.issuer.issuerName+" "+value.issuer.serie;
						var checkEmi = emNaSelec.indexOf(nameAppend);
						if(checkEmi != -1){
							if(tmpVal.indexOf('-') == -1){
								topMas.push([Math.abs(value.priceVar.toFixed(2)), nameAppend, value.lastPrice.toFixed(2),value.priceVar.toFixed(2)]);
							} else {
								topMenos.push([Math.abs(value.priceVar.toFixed(2)), nameAppend, value.lastPrice.toFixed(2), value.priceVar.toFixed(2)]);
							}
						}
						
					 }
				}
			});
			topMas.sort(function(a,b) {
			    var tmpA1 = a.toString().split(',');
			    var tmpB1 = b.toString().split(',');
			    return  parseFloat(tmpA1[0]) - parseFloat(tmpB1[0]);
			  });
//			for (var y = 0; y < topMas.length-1; y++) {
//				console.log(y+"::posWs::"+topMas[y]);
//			};
			topMas.reverse();
			
			topMenos.sort(function(a,b) {
			    var tmpA1 = a.toString().split(',');
			    var tmpB1 = b.toString().split(',');
			    return  parseFloat(tmpA1[0]) - parseFloat(tmpB1[0]);
			  });
//			for (var y = 0; y < topMenos.length-1; y++) {
//				console.log(y+"::negWs::"+topMenos[y]);
//			};
			topMenos.reverse();
			var tamMas = topMas.length;
			var tamMenos = topMenos.length;
			for (var i = 0; i < 5; i++) {
				singleCellPlus = topMas[i].toString().split(',');
				$('.emNamePlus0'+i).text(singleCellPlus[1]);
				$('.emAverPlus0'+i).text(singleCellPlus[2]);
				$('.emVarPlus0'+i).text(singleCellPlus[3]+"%");						
			};
			for (var x = 0; x < 5; x++) {
				singleCellLess = topMenos[x].toString().split(',');
				$('.emNameLess0'+x).text(singleCellLess[1]);
				$('.emAverLess0'+x).text(singleCellLess[2]);
				$('.emVarLess0'+x).text(singleCellLess[3]+"%");
			};
		}).fail(function() {
//			console.info("Boot Js :: [TopMm] :: Fail Call Ajax :: [bpc01wew]");
		});
	} // end::Leer Servicio Web
	
	function readFileAfterTree(){
		var fourValPos = [];
		var fourValNeg = [];
		var dataEmna = null;
		var filaEmna = [];
		var topMasFile = [];
		var topMenosFile = [];
		var singleCellPlus2 = [];
		var singleCellLess2 = [];
		$.post('/resources/textFiles/Emisora_Nacional.txt').success(function(dataEmna) {
			filaEmna = [];
			filaEmna = dataEmna.split(/\n/);
			var tamFilaEmna = filaEmna.length-1;
			var singleRow = [];
		    for(var i=0; i<=tamFilaEmna-1; i++){
			    singleRow = [];
			    singleRow = filaEmna[i].split('=');
			    if( parseFloat(singleRow[1]).toFixed(2) != "0.00"){
			    	var checkEmi2 = emNaSelec.indexOf(singleRow[0]);
			    	if(checkEmi2 != -1){
			    		var tmpVal2 = parseFloat(singleRow[2]).toFixed(2);
			    		if(tmpVal2.indexOf('-') == -1){
			    			topMasFile.push([Math.abs(parseFloat(singleRow[2]).toFixed(2)), singleRow[0], parseFloat(singleRow[1]).toFixed(2), parseFloat(singleRow[2]).toFixed(2)])
			    		} else {
			    			topMenosFile.push([Math.abs(parseFloat(singleRow[2]).toFixed(2)), singleRow[0], parseFloat(singleRow[1]).toFixed(2), parseFloat(singleRow[2]).toFixed(2)])
			    		}
			    	}
			    }
		    }
		    
			topMasFile.sort(function(a,b) {
			    var tmpA1 = a.toString().split(',');
			    var tmpB1 = b.toString().split(',');
			    return  parseFloat(tmpA1[0]) - parseFloat(tmpB1[0]);
			  });
//			for (var y = 0; y < topMasFile.length-1; y++) {
//				console.log(y+"::pos::"+topMasFile[y]);
//			};
			topMasFile.reverse();
			
			topMenosFile.sort(function(a,b) {
			    var tmpA1 = a.toString().split(',');
			    var tmpB1 = b.toString().split(',');
			    return  parseFloat(tmpA1[0]) - parseFloat(tmpB1[0]);
			  });
//			for (var y = 0; y < topMenosFile.length-1; y++) {
//				console.log(y+"::neg::"+topMenosFile[y]);
//			};
			topMenosFile.reverse();
			
			var tamMasFile = topMasFile.length;
			var tamMenosFile = topMenosFile.length;
			for (var i = 0; i < 5; i++) {
				singleCellPlus2 = topMasFile[i].toString().split(',');
				$('.emNamePlus0'+i).text(singleCellPlus2[1]);
				$('.emAverPlus0'+i).text(singleCellPlus2[2]);
				$('.emVarPlus0'+i).text(singleCellPlus2[3]+"%");		
			};
			for (var x = 0; x < 5; x++) {
				singleCellLess2 = topMenosFile[x].toString().split(',');
				$('.emNameLess0'+x).text(singleCellLess2[1]);
				$('.emAverLess0'+x).text(singleCellLess2[2]);
				$('.emVarLess0'+x).text(singleCellLess2[3]+"%");
			};
		}).error(function(e){
//			console.log("ReadFileAfterTree :: [TickerNaWs] :: Fail Call Post");
	    });
	}

});
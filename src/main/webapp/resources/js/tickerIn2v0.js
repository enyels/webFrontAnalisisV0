$(document).ready(function(){
	
	var indiSelec = [];
	
	var myObjJson3 = {
			infoIndices: [
			              {
			            	    "Descripcion": "NASDAQ",
			            	    "Valor": 4993.573,
			            	    "VariacionUnitaria": -9.9759999999999991,
			            	    "VariacionPorcentualCierre": -0.20
			            	  },
			            	  {
			            	    "Descripcion": "DAX",
			            	    "Valor": 11673.35,
			            	    "VariacionUnitaria": -36.38,
			            	    "VariacionPorcentualCierre": -0.31
			            	  },
			            	  {
			            	    "Descripcion": "DOW JONES",
			            	    "Valor": 18105.17,
			            	    "VariacionUnitaria": -85.939,
			            	    "VariacionPorcentualCierre": -0.47
			            	  },
			            	  {
			            	    "Descripcion": "EuroStoxx",
			            	    "Valor": 3624.41,
			            	    "VariacionUnitaria": -25.07,
			            	    "VariacionPorcentualCierre": -0.69
			            	  },
			            	  {
			            	    "Descripcion": "FTSE",
			            	    "Valor": 7029.85,
			            	    "VariacionUnitaria": -16.97,
			            	    "VariacionPorcentualCierre": -0.24
			            	  },
			            	  {
			            	    "Descripcion": "Africa del Sur",
			            	    "Valor": 54161.05,
			            	    "VariacionUnitaria": 370.48,
			            	    "VariacionPorcentualCierre": 0.69
			            	  },
			            	  {
			            	    "Descripcion": "HANG SENG",
			            	    "Valor": 27718.2,
			            	    "VariacionUnitaria": 140.86,
			            	    "VariacionPorcentualCierre": 0.51
			            	  },
			            	  {
			            	    "Descripcion": "IBEX35",
			            	    "Valor": 11445.8,
			            	    "VariacionUnitaria": 21.1,
			            	    "VariacionPorcentualCierre": 0.18
			            	  },
			            	  {
			            	    "Descripcion": "BOVESPA",
			            	    "Valor": 57197.102,
			            	    "VariacionUnitaria": 47.773,
			            	    "VariacionPorcentualCierre": 0.08
			            	  },
			            	  {
			            	    "Descripcion": "S&P 500",
			            	    "Valor": 2105.33,
			            	    "VariacionUnitaria": -10.77,
			            	    "VariacionPorcentualCierre": -0.51
			            	  },
			            	  {
			            	    "Descripcion": "IPC",
			            	    "Valor": 45179.969,
			            	    "VariacionUnitaria": 54.02,
			            	    "VariacionPorcentualCierre": 0.12
			            	  },
			            	  {
			            	    "Descripcion": "KOSPI",
			            	    "Valor": 2097.38,
			            	    "VariacionUnitaria": 11.86,
			            	    "VariacionPorcentualCierre": 0.57
			            	  },
			            	  {
			            	    "Descripcion": "MERVAL",
			            	    "Valor": 12105.76,
			            	    "VariacionUnitaria": -99.33,
			            	    "VariacionPorcentualCierre": -0.81
			            	  },
			            	  {
			            	    "Descripcion": "NIKKEI 225",
			            	    "Valor": 19620.91,
			            	    "VariacionUnitaria": 241.72,
			            	    "VariacionPorcentualCierre": 1.25
			            	  },
			            	  {
			            	    "Descripcion": "Singapur",
			            	    "Valor": 3470.8,
			            	    "VariacionUnitaria": 18.79,
			            	    "VariacionPorcentualCierre": 0.54
			            	  }
			            	]
	};
	
	$.each( myObjJson3.infoIndices, function( key, value ) {
		indiSelec.push(value.Descripcion);
		var tmpVal = value.VariacionPorcentualCierre.toString();
		if(tmpVal.indexOf('-') == -1){
			$('.listaInter').append('<li data-update="'+value.Descripcion+'" class="forText">'+value.Descripcion+' '+value.Valor+' <span style=color:#00A900>'+value.VariacionPorcentualCierre+'%</span></li>');
		}else{
			$('.listaInter').append('<li data-update="'+value.Descripcion+'" class="forText">'+value.Descripcion+' '+value.Valor+' <span style=color:#FF0000>'+value.VariacionPorcentualCierre+'%</span></li>');
		}
	});
	
	$('#webtickerInter').webTicker({speed: 45});
	
	setTimeout(function() {
		$.ajax({
			//url : 'http://www.finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerIndicesLast',
			url : 'https://finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerIndicesLast',
			type : 'GET',
	        dataType: 'JSON'
		}).done(function(dataInd) {
			
			$.each( dataInd, function( key, value ) {
				
				if (indiSelec.indexOf(value.Descripcion) == -1) {
				} else {
					var tmpVal = value.VariacionPorcentualCierre.toString();
					if(tmpVal.indexOf('-') == -1){
						$('#webtickerInter').webTicker('update','<li data-update="'+value.Descripcion+'" class="forText">'+value.Descripcion+' '+value.Valor+' <span style=color:#00A900>'+value.VariacionPorcentualCierre+'%</span></li>','swap',true,false);
					}else{
						$('#webtickerInter').webTicker('update','<li data-update="'+value.Descripcion+'" class="forText">'+value.Descripcion+' '+value.Valor+' <span style=color:#FF0000>'+value.VariacionPorcentualCierre+'%</span></li>','swap',true,false);
					}			
				}
			});
			
		}).fail(function(e){
//			console.info("Boot Js :: [TickerIn2] :: Fail Call Ajax :: [ObtenerIndicesLast]");
		});
	},5000);
	//ini::impl rest
	setInterval(function() {
		$.ajax({
			//url : 'http://www.finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerIndicesLast',
			url : 'https://finanzasenlinea.infosel.com/actinverfeed/feed.asmx/ObtenerIndicesLast',
			type : 'GET',
	        dataType: 'JSON'
		}).done(function(dataInd) {
			
			$.each( dataInd, function( key, value ) {
				
				if (indiSelec.indexOf(value.Descripcion) == -1) {
				} else {
					var tmpVal = value.VariacionPorcentualCierre.toString();
					if(tmpVal.indexOf('-') == -1){
						$('#webtickerInter').webTicker('update','<li data-update="'+value.Descripcion+'" class="forText">'+value.Descripcion+' '+value.Valor+' <span style=color:#00A900>'+value.VariacionPorcentualCierre+'%</span></li>','swap',true,false);
					}else{
						$('#webtickerInter').webTicker('update','<li data-update="'+value.Descripcion+'" class="forText">'+value.Descripcion+' '+value.Valor+' <span style=color:#FF0000>'+value.VariacionPorcentualCierre+'%</span></li>','swap',true,false);
					}			
				}
			});
			
		}).fail(function(e){
//			console.info("Boot Js :: [TickerIn2] :: Fail Call Ajax :: [ObtenerIndicesLast]");
		});
	},90000);
	//ini::impl rest 
	
});
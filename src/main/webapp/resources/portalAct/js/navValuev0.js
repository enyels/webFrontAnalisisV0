$(document).ready(function() {
	
	navValueDyn();
	setInterval(function () {
		navValueDyn();
	}, 10000);
	
	
	function navValueDyn() {
		var objNavSmart = {};
		var objNavDiabl = {};
		var objNavSkyBl = {};
		var arrNavDate = [];
		var clSelec = "";
		var idSelec = "";
		$.ajax({
			url: 'InteractivePortalController/actionAllEmNaOptDel',
			dataType: 'json',
			type: 'get'
		}).done(function(data) {
	
			var valDate = new Date(data.outCommonHeader.date);
			arrNavDate[0] = valDate.getDate();
			arrNavDate[1] = valDate.getMonth()+1;
			arrNavDate[2] = valDate.getFullYear();
			
			arrNavDate[0] = (arrNavDate[0].toString().length == 1) ? ("0"+arrNavDate[0]) : (arrNavDate[0]);
			arrNavDate[1] = (arrNavDate[1].toString().length == 1) ? ("0"+arrNavDate[1]) : (arrNavDate[1]);
	
			$.each(data.outMarketInfoQuery.marketDataTuple, function(index, value) {
				if(value.issuer.issuerName == "SMARTRC"){
					objNavSmart.nombre = value.issuer.issuerName;
					objNavSmart.lastPrice = value.closingPrice;
					
					if (value.lastPrice == 0) {
						objNavSmart.closingPrice = value.closingPrice;
						objNavSmart.changeMon = 0;
						objNavSmart.changePer = 0;						
					} else {
						objNavSmart.closingPrice = value.lastPrice;
						objNavSmart.changeMon = (value.lastPrice - value.closingPrice);
						objNavSmart.changePer = ((value.lastPrice / value.closingPrice)-1) * 100;						
					}
					
					objNavSmart.dateRq = arrNavDate[0]+"/"+arrNavDate[1]+"/"+arrNavDate[2];
				} else if(value.issuer.issuerName == "DIABLOI"){
					objNavDiabl.nombre = value.issuer.issuerName;
					objNavDiabl.lastPrice = value.closingPrice;
					
					if (value.lastPrice == 0) {
						objNavDiabl.closingPrice = value.closingPrice;
						objNavDiabl.changeMon = 0;
						objNavDiabl.changePer = 0;						
					} else {
						objNavDiabl.closingPrice = value.lastPrice;
						objNavDiabl.changeMon = (value.lastPrice - value.closingPrice);
						objNavDiabl.changePer = ((value.lastPrice / value.closingPrice)-1) * 100;
					}
					
					objNavDiabl.dateRq = arrNavDate[0]+"/"+arrNavDate[1]+"/"+arrNavDate[2];
				} else if(value.issuer.issuerName == "ANGELD"){
					objNavSkyBl.nombre = value.issuer.issuerName;
					objNavSkyBl.lastPrice = value.closingPrice;
					
					if (value.lastPrice == 0) {
						objNavSkyBl.closingPrice = value.closingPrice;
						objNavSkyBl.changeMon = 0;
						objNavSkyBl.changePer = 0;						
					} else {
						objNavSkyBl.closingPrice = value.lastPrice;
						objNavSkyBl.changeMon = (value.lastPrice - value.closingPrice);
						objNavSkyBl.changePer = ((value.lastPrice / value.closingPrice)-1) * 100;
					}
					
					objNavSkyBl.dateRq = arrNavDate[0]+"/"+arrNavDate[1]+"/"+arrNavDate[2];
				}
			});
			
			$('#menu-tracs li', top.document).each(function(index){
				clSelec = $(this, top.document).attr('class');
				idSelec = $(this, top.document).attr('id');
				if(index == 1 && clSelec == "true" && idSelec == "true"){
					$('#loadNavValue').hide();
					$('.tableNavVal').show();
					$('.msgTicker2').show();
					$("#lastPrice").text(objNavSmart.lastPrice);
					$("#closingPrice").text(objNavSmart.closingPrice);
					$("#changeMon").text(objNavSmart.changeMon.toFixed(2));
					$("#changePer").text(objNavSmart.changePer.toFixed(2));
					$("#dateRq").text(objNavSmart.dateRq);
				} else if(index == 2 && clSelec == "true" && idSelec == "true"){
					$('#loadNavValue').hide();
					$('.tableNavVal').show();
					$('.msgTicker2').show();
					$("#lastPrice").text(objNavSkyBl.lastPrice);
					$("#closingPrice").text(objNavSkyBl.closingPrice);
					$("#changeMon").text(objNavSkyBl.changeMon.toFixed(2));
					$("#changePer").text(objNavSkyBl.changePer.toFixed(2));
					$("#dateRq").text(objNavSkyBl.dateRq);
				} else if(index == 3 && clSelec == "true" && idSelec == "true"){
					$('#loadNavValue').hide();
					$('.tableNavVal').show();
					$('.msgTicker2').show();
					$("#lastPrice").text(objNavDiabl.lastPrice);
					$("#closingPrice").text(objNavDiabl.closingPrice);
					$("#changeMon").text(objNavDiabl.changeMon.toFixed(2));
					$("#changePer").text(objNavDiabl.changePer.toFixed(2));
					$("#dateRq").text(objNavDiabl.dateRq);
				}
			});
			
		}).fail(function(e) {
			console.info(":: [NavValuev0] :: Fail Call Ajax :: [actionAllEmNaOptDel]");
		});
	}
	
});
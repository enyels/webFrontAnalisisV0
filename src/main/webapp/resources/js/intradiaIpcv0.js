$(document).ready(function(){ //Inicio Jquery
	
	var array0 = [];
	var array1 = [];
	var array2 = [];
	var array3 = [];
	var myPar1 = "";
	var myPar2 = "";
	
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
	
	//ini::Validate data for information
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
//		console.log("Retraso en Grafica IPC::"+data);
		execCallCtrl(data);
		setInterval(function(){
			execCallCtrl(data);
		},80000); //Cada 80"
	}).fail(function() {
//		console.info("Boot Js :: [IntradiaIpc] :: Fail Call Ajax :: [WorkWithPaga]");
	});
	//ini::Validate data for information
	
	//ini::setTimeOut
	setTimeout(function () {
		$('#container').highcharts({
		  colors: ["#115eac"],
	      chart: {
	          zoomType:'x',
	          renderTo: 'chartContainer',
	          plotBorderWidth: 1,
	          //plotBorderColor: '#000000',
	          type:'spline',
              events:{
                  load:function(){
                      var ticks = $.map(this.axes[0].ticks, function(t){return t;});
                      ticks[ticks.length-2].render(0);
                  }
              }
	      },
	      credits: {
	          enabled: false
	      },
	      exporting: { 
	    	  enabled: false 
	      },
	      title: {
	          text: ''
	      },
	      xAxis: {
	    	  //lineColor: "#000000",
	    	  lineWidth: 1,
	          type:'datetime',
	          labels: {
//	        	  step: 30,
		          rotation: 45,
		            style: {
		              fontSize: '9px'
		            }
	          },	    	  
	    	  tickLength: 0,
	    	  gridLineWidth: 1,
	    	  gridLineColor: '#E6E6E6',
	    	  tickInterval:30,
	    	  categories: array0
	      },
	      yAxis: {
	          title: {
	              text: ''
	          },
	          gridLineWidth: 1,
	          gridLineColor: '#E6E6E6',
	          //minorTickInterval: 'auto',
	          //tickInterval:50,
	          opposite: true
	      },
	      tooltip: {
	          crosshairs: true,
//	          valueDecimals: 2
              shared: false,
              formatter: function() {
                  var text = '';
                  if(this.series.name == 'CIERRE') {
                      text = '<strong>'+this.series.name+': '+this.y+'</strong>';
                  } else {
                	  text = '<strong>'+this.series.name+': '+this.y+'</strong><br>'+this.x;
                  }
                  return text;
              }
	      },
	      plotOptions: {
	          spline: {
	              marker: {
	                  radius: 4,
	                  lineColor: '#666666',
	                  lineWidth: 1
	              }
	          }
	      },
	      series: 
	      [ {
	    	  lineWidth: 1.4,
	    	  type: 'areaspline',
	    	  threshold: null,
              fillColor: 'rgba(92, 92, 92, 0.15)',
              fillOpacity: 0.5,
	          yAxis: 0,
	          name: 'IPC',
	          showInLegend: false,
	          data: array2
	      	},
	      	{
	      	  color: '#FDD10A',
	          name: 'CIERRE',
	          showInLegend: false,
	          data: array3
	      	}
	      ]
	  });
		var chartContainer = $('#container').highcharts();
		setInterval(function () { // Inicio setInterval arrays
			chartContainer.xAxis[0].setCategories(array0, true);    
			chartContainer.series[0].update({
				data: array2
			}, true);
			//console.log("js:: 5 ::  setInterval "+new Date());
		}, 85000);  // fin setInterval arrays
	//console.log("js:: Inicio(2) ::  setTimeout "+new Date());
	}, 2000);
	//fin::setTimeOut

  //ini::execCallCtrl
  function execCallCtrl(data){
	  
//	  checkTimeSrvr();
	  
	  var multiplesArrays = [];
	  var multiplesRows = [];
	  var singleRow = [];
	  var categoriesHours = [];
	  var serieUnoData = [];
	  var serieDosData = [];
	  var serieTresData = [];
	  var dateNow = new Date(); //For date categories
	  var contentCsvFull = null;
		$.ajax({
			url: 'InteractiveStaController/actionReadFile',
//			url: 'https://www.actinver.com/cab/graficas/AMLINE/bigipc.csv',
//			url: 'http://www.sefbursanet.com/archivos/bigipc.csv',
			dataType: 'text',
			type: 'get'
		}).done(function(contentCsvFull) {
//			console.log("::contentCsvFull::"+contentCsvFull);
		      multiplesRows = [];
		      multiplesRows = contentCsvFull.split(/\n/);
		      multiplesRows.shift(); //temporal para quitar primera fila::map (fila en blanco)
		      multiplesRows.shift(); //temporal para quitar segunda fila::map (precio de ayer 3:30)
		      categoriesHours = [];
		      serieUnoData = [];
		      serieDosData = [];
		      serieTresData = [];
		      
//		      console.log("new tam0::"+multiplesRows.length);
		      if(data == "false"){
		    	  if (multiplesRows.length >= 20) {
		    		  var tmpParam = "15:27:00";
		    		  var myParam3 = myPar1+":"+myPar2+":00";
		    		  if (myParam3 < tmpParam) {
//						console.log(tmpParam+"::"+myParam3+"::Si descontare");
						multiplesRows.splice(multiplesRows.length-20, multiplesRows.length);
		    		  }else{
//		    			  console.log(tmpParam+"::"+myParam3+"::No Descontare");
		    		  }
		    	  } else {
//		    		  console.log("Menor que 20::Vaciar::"+multiplesRows.length);
		    		  multiplesRows = [];
				}
		      }
		      
		      var tamMA = multiplesRows.length-1;
		      for(var i=0; i<=tamMA; i++){
		        singleRow = [];
//		        console.log("multiplesRows::"+multiplesRows[i]);
		        singleRow = multiplesRows[i].split(';');
//		        console.log("::singleRow[]::");
//		        console.log(singleRow[0]+"::"+singleRow[1]+"::"+singleRow[2]+"::"+singleRow[3]);
		        // Ini For date categories
		          var arrOneHour = singleRow[0].split(':');
		          dateNow.setHours(arrOneHour[0]);
		          dateNow.setMinutes(arrOneHour[1]);
		          dateNow.setUTCHours(dateNow.getHours(),dateNow.getMinutes());
		          categoriesHours.push(Highcharts.dateFormat('%H:%M', dateNow));
		        // Fin For date categories
//		        categoriesHours.push(singleRow[0]); //Alternativo sino usas Date
		        var tmpVal = isNaN(parseInt(singleRow[1])) ? 0 : parseInt(singleRow[1]);
		        serieUnoData.push(tmpVal);
		        serieDosData.push(parseFloat(singleRow[2]));
		        serieTresData.push(parseFloat(singleRow[3]));
		      }
//		      categoriesHours.pop();
//		      serieUnoData.pop();
//		      serieDosData.pop();
//		      serieTresData.pop();
		      multiplesArrays.push(categoriesHours);
		      multiplesArrays.push(serieUnoData);
		      multiplesArrays.push(serieDosData);
		      multiplesArrays.push(serieTresData);
		      array0 = multiplesArrays[0];
		      array1 = multiplesArrays[1];
		      array2 = multiplesArrays[2];
		      array3 = multiplesArrays[3];
		}).fail(function(e) {
//			console.info("Call File IPC :: [IntradiaIpc] :: Fail Call Ajax :: [ActionReadFile]");
		});

	}
  	//fin::execCallCtrl
  
//  	function checkTimeSrvr() {
//		$.ajax({
//			url: 'InteractiveStaController/actionCheckTime',
//			dataType: 'json',
//			type: 'get'
//		}).done(function(data) {
//			$.each(data, function( key, value ) {
//    			myPar1 = data.hora;
//    			myPar2 = data.minuto;
//			});
//		}).fail(function(e) {
//			console.info("Checking Time :: [IntradiaIpc] :: Fail Call Ajax :: [ActionCheckTime]");
//		});
//	}
  
}); //Fin Jquery

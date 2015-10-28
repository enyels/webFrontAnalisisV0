$(document).ready(function(){
	
	var dataGrapTrac = [];
	var dataGrapTracfec = [];
	var dataGrapTracfecFull = [];
	var dataGrapTracx2 = [];
	var dataGrapTracipc = [];
	$.ajax({
		url : "InteractivePortalController/actionReadExcelDataGrpA",
		type : "GET",
		dataType : "json"
	}).done(function(data) {
		$.each(data, function(key, value) {

			var miArr = [];
			var miStr = value.fecha;
			miArr = miStr.toString().split("/");
			dataGrapTracfec.push(miArr[2]);
			
			dataGrapTracfecFull.push([value.fecha]);
			dataGrapTrac.push([key, value.valTrac]);
			dataGrapTracipc.push([key, value.valor]);
			dataGrapTracx2.push([key,value.valorX2]);
		});
		chartSmartTrac(dataGrapTrac,dataGrapTracfec,dataGrapTracx2,dataGrapTracipc,dataGrapTracfecFull);
	}).fail(function(event) {
		console.info(":: [SmartTracv0] :: Fail Call Ajax :: [actionAllActivNet]");
	});

});

function chartSmartTrac(dataGrapTrac,dataGrapTracfec,dataGrapTracx2,dataGrapTracipc,dataGrapTracfecFull) {
    $('#chartAngelDiablo').highcharts({
        chart: {        	
        	type: 'line',
            zoomType: 'x'
        },
        title: {
            text: 'Rendimientos diarios <br> al ' + dataGrapTracfecFull[dataGrapTracfecFull.length-1]
        },
        credits: {
	        enabled: false
	    },
        subtitle: {
            text: ''
        },

        xAxis: {
            categories: dataGrapTracfecFull,
            type: 'datetime',
            dateTimeLabelFormats: {
                year: '%Y'
            },
            tickInterval:200,
            labels: {
                autoRotation: [-10, -20, -30, -40, -50, -60, -70, -80, -90]
            }           
            
        },     
        tooltip: {
            xDateFormat: '%Y-%m-%d',
            shared: true
        },
        plotOptions: {
            series: {
                pointStart: Date.UTC(dataGrapTracfecFull, 0, 1),
                pointInterval: 24 * 3600 * 1000
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            
        },                

        plotOptions: {        	
        	line: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 45,                
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        
        },
        series: [
			{
			    type: 'line',
			    lineWidth: 2,
			    yAxis: 0,
			    name: 'DDBOL',
			    pointIntervalUnit: 'year',
			    data: dataGrapTrac,
			    color: '#4A7EBB'
			},
        	{
            type: 'line',
            lineWidth: 2,
            yAxis: 0,
            name: ' ANGELD',
            pointIntervalUnit: 'year',
            data: dataGrapTracx2,
            color: '#E46C0A'
        }],
    });    
	
}
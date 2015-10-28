$(document).ready(function(){
	
	var dataGrapTrac = [];
	var dataGrapTracfec = [];
	var dataGrapTracfecFull = [];
	var dataGrapTracx2 = [];
	var number = [];
	var numberS = [];
	$.ajax({
		url : "InteractivePortalController/actionReadExcelDataGrp",
		type : "GET",
		dataType : "json"
	}).done(function(data) {
		$.each(data, function(key, value) {
			
			var miArr = [];
			var miStr = value.fecha;
			miArr = miStr.toString().split("/");
			dataGrapTracfec.push(miArr[2]);
			
			dataGrapTrac.push([key, value.valor]);
			dataGrapTracfecFull.push([value.fecha]);
			dataGrapTracx2.push([key,value.valorX2]);
			number.push([value.valor]);
			numberS.push([value.valorX2]);
		});
		chartSmartTrac(dataGrapTrac,dataGrapTracfec,dataGrapTracx2,number,numberS,dataGrapTracfecFull);
	}).fail(function(event) {
		console.info(":: [SmartTracv0] :: Fail Call Ajax :: [actionAllActivNet]");
	});
	
});

function chartSmartTrac(dataGrapTrac,dataGrapTracfec,dataGrapTracx2,number,numberS,dataGrapTracfecFull) {
    $('#chartSmartTrac').highcharts({
        chart: {
        	backgroundColor: '#DBEEF4',
        	type: 'line',
            zoomType: 'x'
        },
        title: {
            text: 'Rendimiento Acumulado Comparado SMARTRAC vs. BURSA OPTIMO ®'
        },
        credits: {
	        enabled: false
	    },
        subtitle: {
            text: dataGrapTracfecFull[0] + " - " + dataGrapTracfecFull[dataGrapTracfecFull.length-1]
        },

        xAxis: {
            categories: dataGrapTracfecFull,
            type: 'datetime',
            tickInterval:45,
            labels: {
                autoRotation: [-10, -20, -30, -40, -50, -60, -70, -80, -90]
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
        series: [{

            type: 'line',
            lineWidth: 4,
            yAxis: 0,
            name: 'SMARTRC14 - ' + ((numberS[numberS.length-1]/numberS[0]-1)*100).toFixed(2)+"% ",
            pointIntervalUnit: 'year',
            data: dataGrapTracx2,
            color: '#17375E'
        },
        	{
            type: 'line',
            lineWidth: 4,
            yAxis: 0,
            name: 'BURSA OPTIMO ® - ' + ((number[number.length-1]/number[0]-1)*100).toFixed(2)+"% ",
            pointIntervalUnit: 'year',
            data: dataGrapTrac,
            color: '#E46C0A'
        }],
    });    
	
}
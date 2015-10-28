$(document).ready(function(){
	
	var dataGrapTrac = [];
	$.ajax({
		url : "InteractivePortalController/actionReadExcelData",
		type : "GET",
		dataType : "json"
	}).done(function(data) {
		$.each(data, function(key, value) {
			dataGrapTrac.push([key, value]);
		});
		chartSmartTrac(dataGrapTrac);
	}).fail(function(event) {
		console.info(":: [SmartTracv0] :: Fail Call Ajax :: [actionAllActivNet]");
	});
	
});

function chartSmartTrac(dataGrapTrac) {
    $('#chartSmartTrac').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        credits: {
	        enabled: false
	    },
	    exporting: { 
	    	enabled: false 
	    },
        legend: {
            align: 'left',
            verticalAlign: 'middle',
            layout: 'vertical',
            itemMarginTop: 4,
            itemMarginBottom: 4,
//            x: 0,
//            y: 80,
//            title: {
//                style: {"fontWeight":"bold"},
//                text: "Desglose por sectores"
//            },
//            itemWidth: 100,
//            borderWidth: 1,
            itemStyle:{
            	width: '110px'
            }
        },
        title: {
            text: ''
        },
        tooltip: {
    		//pointFormat: '{series.name}: <br> <b>{point.name} {point.percentage:.2f}%</b>'
            formatter:function(){
                return 'Sector <br><b>'+this.key+': '+ this.y.toFixed(2)+'%</b>';
            }
        },
        plotOptions: {
            pie: {
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
            type: 'pie',
            name: 'Desglose por sectores',
            data: dataGrapTrac
        }]
    });
    
//	var chartContainer = $('#chartSmartTrac').highcharts();
//	$(window).resize(function() {
//		var valWin = $( window ).width();
//		if (valWin < 400) {
//			chartContainer.legend.destroy();
//			chartContainer.legend.display = false;
//			chartContainer.isDirtyBox = true;
//			chartContainer.redraw();
//		}
//	});
	
}
$(document).ready(function() {
	var data;
	$.ajax({
        url: 'AdmCalendarController/getFrontCalendario',
        type : 'get',
		dataType : 'text',
		async: false,
        success: function (resp) {
            data = resp;
        },
        error: function () {
        	}
    }); 
	var dateActual = new Date();
	titleDate(dateActual);

var width2 = jQuery(window).width();
	var height2 = jQuery(window).height();
	if ($(window).width() > 960) {
		$(".contenedor").show();
		$("#scheduleHoy").hide();
	} else {
		$(".contenedor").hide();
		$("#scheduleHoy").show();
	}

jQuery(window).resize(function() {
	var width = jQuery(window).width();
	var height = jQuery(window).height();
	if ($(window).width() > 950) {
		$(".contenedor").show();
		$("#scheduleHoy").hide();
	} else {
		$(".contenedor").hide();
		$("#scheduleHoy").show();
	}
});
var baseEvent=data;
//baseEvent="http://localhost:8080/";
$("#calendar").fullCalendar({
        // .....
    							header : {
											left : 'none',
											center : 'none',
											right : 'none'
										},
										columnFormat : {
									             month: 'ddd',
									             week: 'ddd d-MMMM',
									             day: 'dddd d/M'
									       },
									       
									    axisFormat: 'HH:mm',	   
									    allDayText : 'todo el día',
									   	lang : 'es',
										defaultView : 'agendaWeek',
										editable : false,
										selectable : true,
										dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
										monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
										events : baseEvent+"appsFrontAnalisis/event",
										minTime : '06:00:00',
										maxTime : '23:00:00',
										eventClick : function(calEvent,jsEvent, view) {
											idEvent = calEvent.id;
											event = calEvent.title;
											endtime = $.fullCalendar.formatDate(calEvent.end,'h:mm tt');
											starttime = $.fullCalendar.formatDate(calEvent.start,'dd, MMM yyyy, h:mm tt');
											var event = $('#createEventModal #patientName').val();
											var mywhen = starttime + ' - '+ endtime;
											if(calEvent.title==null || calEvent.title==""){
												//$('#modificarButton').hide();
											}else{
												//$('#modificarButton').show();
												//$('#submitButton').hide();
											}
											$('#createEventModal #apptStartTime').val(starttime);
											$('#createEventModal #apptEndTime').val(endtime);
											$('#createEventModal #patientName').val(calEvent.title);
											//$('#patientName').val(calEvent.title);
											
											$('#createEventModal #when').text(mywhen);
											$('#createEventModal').modal('show');
										},
										

    });
var arrayDataPicker=Get_dataCalendarMobil();
var datesArray=filterDate(arrayDataPicker);
    $('#datepicker').datepicker({
        inline: true,
        changeMonth : true,
		changeYear : true,
        dateFormat: 'dd/mm/yy',
        dayNamesMin: [ "D", "L", "M", "M", "J", "V", "S" ],
        monthNamesShort: [ "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE","OCTUBRE", "NOVIEMBRE", "DICIEMBRE" ],
        showOtherMonths: true,
        selectMultiple:true, 
        onSelect: function(dateText, inst) {
            var selectedDate = $(this).datepicker("getDate");
			dateSelect = selectedDate.toString();
			dateSelect = (selectedDate.getMonth() + 1)+ "/"+ selectedDate.getDate()+ "/"+ selectedDate.getFullYear().toString().substr(2, 2);
            $('#calendar').fullCalendar('gotoDate', selectedDate);
            var selectedDate2 = $(this).datepicker("getDate");
            titleDate(selectedDate2);
        },
  
    beforeShowDay: function (date) {
		var theday = (date.getMonth()+1) +'/'+ 
					date.getDate()+ '/' + 
					date.getFullYear();
			return [true,$.inArray(theday, datesArray) >=0?"specialDate":''];
		}
    }); 
    
	var arrayData = new Array();
	arrayData=Get_dataCalendarMobil();
	printdata(arrayData);
	calendarSet();
	calendarScale();
	$(document).on('click','.calendarMobil-day.have-events',activateDay);
	$(document).on('click','.specific-day',activatecalendar);
	$(document).on('click','.calendarMobil-month-view-arrow',offsetcalendar);
	$(window).resize(calendarScale);
  }); 

function Get_dataCalendarMobil () {
	var dataBack;
	$.ajax({
        url: 'AdmCalendarController/getFrontCalendario',
        type : 'get',
		dataType : 'text',
		async: false,
        success: function (resp) {
         	dataBack = resp;
        },
        error: function () {
        	}
    }); 
	//dataBack="http://mxl43935lm.actinver.com.mx:9085/";
	base=dataBack;
	var eventarray3 =new Array();	
	var eventLocal;	
	var obj={};
		var urlRestConfig = base+"appsBackAnalisis/jaxrs/ActividadInfoRest/actividad?language=SPA";
		var events = [];
		$.ajax({ 
			async: false,
			url:urlRestConfig,
	        type: 'GET', 
	        data: { }, 
	        success: function (doc) { 
	      eventarray3=dataFilter(doc);
			} 
	    }); 
		
		return eventarray3; 
	}
	function dataFilter(dataArray){
	var year;
	var resA;
	var month;
	var resB;
	var day;
	var resC;
	var montr;
	var fdate;
	var hour;
	var resD;
	var resE;
	var arrayDate=new Array();
	var oibjr;
	var otromio={ };
	var objC ={ };
	$.each(dataArray, function(index,value) {
		
		 var starDate=value.start;
		 var titulo=value.title;
		 var endDate=value.end;
		
		 year=starDate;
		 month=starDate;
		 day=starDate;
		 hour=starDate;
		 hourF=endDate;
		 resA = year.substring(0, 4);
		 resB = month.substring(5, 7);
		 var monthInt = parseInt(resB);
		 var monthS=monthInt.toString();
		 resC = day.substring(8, 10);
		 resD=hour.substring(11, 16);
		 resE=hourF.substring(11, 16);
		 fdate=resA+monthS+resC;
		var resultInt = parseInt(fdate);
		objC=createObject(resultInt,titulo,resD,resE);
		arrayDate.push(objC);
	});

	return arrayDate;

}
function printdata(arrayData3){
	var data;
	  for(var i=0;i<arrayData3.length;i++){
		data=data+"<div data-role='day' data-day='"+arrayData3[i].date+"'><div data-role='event'data-name='"+arrayData3[i].ev+"'data-start='"+arrayData3[i].start+"' data-end='"+arrayData3[i].end+"' data-location=' '></div></div>";
	  	}
	  $("#datamobilmol").prepend(data);
}   
    
function createObject(date,evento,inicio,fin){
	var obj={ };
	obj={
			date: date,
			ev: evento,
			start: inicio,
			end: fin
	}
	return obj;
	
} 

function titleDate(dateSelect){
var curr = new Date; 
curr=dateSelect;
var first = curr.getDate() - curr.getDay(); 
var last = first + 6; 

var firstday = new Date(curr.setDate(first)).toUTCString();
var lastday = new Date(curr.setDate(last)).toUTCString();
var dayMoment = moment(firstday, "DD/MM/YYYY");
var dayDate = new Date(dayMoment);
var initDayWeek = dayDate.getDate();

var dayMomentfin = moment(lastday, "DD/MM/YYYY");
var dayDateLast = new Date(dayMomentfin);
var dayDateLast = dayDateLast.getDate();
var convertDateInit = new Date(firstday);

var initMonthNumber = convertDateInit.getMonth();
var convertDateEnd = new Date(lastday);

var endMonthNumber = convertDateEnd.getMonth();
var endDayNumber=convertDateEnd.getDay();
var month = new Array();
							month[0] = "Enero";
							month[1] = "Febrero";
							month[2] = "Marzo";
							month[3] = "Abril";
							month[4] = "Mayo";
							month[5] = "Junio";
							month[6] = "Julio";
							month[7] = "Agosto";
							month[8] = "Septiembre";
							month[9] = "Octubre";
							month[10] = "Novimebre";
							month[11] = "Diciembre";

							var montEsp = month[initMonthNumber];
							var monthEnd = new Array();
							monthEnd[0] = "Enero";
							monthEnd[1] = "Febrero";
							monthEnd[2] = "Marzo";
							monthEnd[3] = "Abril";
							monthEnd[4] = "Mayo";
							monthEnd[5] = "Junio";
							monthEnd[6] = "Julio";
							monthEnd[7] = "Agosto";
							monthEnd[8] = "Septiembre";
							monthEnd[9] = "Octubre";
							monthEnd[10] = "Novimebre";
							monthEnd[11] = "Diciembre";
							var montEspfin = monthEnd[endMonthNumber];

							var allWeekConvert = "Semana del " + initDayWeek
									+ " de " + montEsp + " al " + dayDateLast
									+ " de " + montEspfin;
								
							document.getElementById("titleWeek").innerHTML = allWeekConvert;

}

function filterDate(obj){
	var dates=[];
	var datesArray=[];
	var Sdates;
	var day;
	var month;
	var year;

	for(var propt in obj){
	    dates=obj[propt].date;
	    Sdates=obj[propt].date.toString();
	    year= Sdates.substring(0, 4);
	    if(Sdates.length==8){
	    	month= Sdates.substring(4, 6);
	    	//console.log(month);
	    }else
	    	{
	    	month= Sdates.substring(4, 5);
	    	//console.log(month);
	    	}

	   if(Sdates.length==8){
	    	day= Sdates.substring(6, 8);
	    }else
	    	{
	    	day= Sdates.substring(5, 7);
	    	}
	
	  if(day.substring(0,1)=="0"){
		  day=day.substring(1,2);
	  }
	//
	/*console.log(day.length);  
	if(day.length==1){
		day="0"+day;
	}*/
	  
	var dateTodo = new Date(year, month, day);
	var dateNue = month+"/"+day+"/"+year;

	datesArray[propt]=dateNue;
	}
	return datesArray;

}



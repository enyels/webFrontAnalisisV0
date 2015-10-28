$(document).ready(function() {
			var data;
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
	
			var base=dataBack;
			var baseEvent =dataBack;
					var idEvent=0;
					var event;
					var calendar = $('#calendar').fullCalendar(
									{
										header : {
											left : 'prev,next',
											center : 'title',
											right : 'agendaWeek'
										},
									   	columnFormat : {
								             month: 'ddd',
								             week: 'ddd d-MMMM',
								             day: 'dddd d/M'
								       },
								       axisFormat: 'HH:mm',	   
								      allDayText : 'todo el dia',
								   		lang : 'es',
										defaultView : 'agendaWeek',
										editable : false,
										selectable : true,
										dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mier', 'jue', 'Vie', 'Sab'],
										select : function(start, end, allDay) {
											endtime = $.fullCalendar.formatDate(end, 'h:mm tt');
											starttime = $.fullCalendar.formatDate(start,'ddd, MMM d, h:mm tt');
											var mywhen = starttime + ' - '+ endtime;
											$('#eliminarButton').hide();
											$('#modificarButton').hide();
											$('#submitButton').show();
											$('#createEventModal #patientName').val("");
											$('#createEventModal #apptStartTime').val(start);
											$('#createEventModal #apptEndTime').val(end);
											$('#createEventModal #apptAllDay').val(allDay);
											$('#createEventModal #when').text(mywhen);
											$('#createEventModal').modal('show');
										},
										eventClick : function(calEvent,jsEvent, view) {
											idEvent = calEvent.id;
											event = calEvent.title;
											endtime = $.fullCalendar.formatDate(calEvent.end,'h:mm tt');
											starttime = $.fullCalendar.formatDate(calEvent.start,'ddd, MMM d, h:mm tt');
											var event = $('#createEventModal #patientName').val();
											var mywhen = starttime + ' - '+ endtime;
											$('#eliminarButton').show();
											if(calEvent.title==null || calEvent.title==""){
												$('#submitButton').show();
												$('#modificarButton').hide();
											}else{
												$('#modificarButton').show();
												$('#submitButton').hide();
											}
											$('#createEventModal #apptStartTime').val(starttime);
											$('#createEventModal #apptEndTime').val(endtime);
											$('#createEventModal #patientName').val(calEvent.title);
											$('#createEventModal #when').text(mywhen);
											$('#createEventModal').modal('show');
										},
										events : baseEvent+ "appsFrontAnalisis/event",
										minTime : '06:00:00',
										maxTime : '23:00:00',
									});
					$('#submitButton').on('click', function(e) {
						e.preventDefault();
						doSubmit(base);
					});
					$('#eliminarButton').on('click', function(e) {
						deleteData(idEvent);
					});
					$('#modificarButton').on('click', function(e) {
						var event2;
					
						event2=$('#createEventModal #patientName').val();
					
						updateData(idEvent,event2);
					});

					function doSubmit(base) {
						saveData(base);
						$("#createEventModal").modal('hide');
						$("#calendar").fullCalendar('renderEvent', {
							title : $('#patientName').val(),
							start : new Date($('#apptStartTime').val()),
							end : new Date($('#apptEndTime').val()),
							allDay : ($('#apptAllDay').val() == "true"),
						}, true);
					}
				});

function saveData(base) {
	var title = $('#patientName').val();
	var start = new Date($('#apptStartTime').val());
	var end = new Date($('#apptEndTime').val());
	var endtime2 = $.fullCalendar.formatDate(end, "yyyy-MM-dd'T'HH:mm:ss");
	var starttime2 = $.fullCalendar.formatDate(start, "yyyy-MM-dd'T'HH:mm:ss");
	var jsonData = {
		"title" : title,
		"start" : starttime2,
		"end" : endtime2
	};
	
	var urlRestConfig = base+ "appsBackAnalisis/jaxrs/ActividadInfoRest/saveConfigCalendario";
	$.ajax({
		url : urlRestConfig,
		type : 'GET',
		dataType : "json",
		data : jsonData
	
	}).done(function(data) {
		location.reload();
	}).fail(function() {
	});

}
function deleteData(idEvent) {
	var jsonData = {
		'idEvent' : idEvent
	};
	$.ajax({
		url : 'AdmCalendarController/deleteAdmCalendario',
		type : 'get',
		dataType : 'text',
		data : jsonData
	}).done(function(data) {
		$("#createEventModal").modal('hide');
		$('#calendar').fullCalendar('removeEvents', idEvent);
	}).fail(function() {
	});

}
function updateData(idEvent,event) {
	var jsonData = {
		'idEvent' : idEvent,
		'event':event
	};
	$.ajax({
		url : 'AdmCalendarController/updateAdmCalendario',
		type : 'get',
		dataType : 'text',
		data : jsonData
	}).done(function(data) {
		$("#createEventModal").modal('hide');
		location.reload();
	}).fail(function() {
	});

}














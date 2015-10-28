<!DOCTYPE html>
<html lang="es">
<!-- Opcionalmente <html ng-app> -->
<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>Grupo financiero Actinver</title>
<!-- 
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700' rel='stylesheet' type='text/css'> -->

 <link href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">




<%-- <link href='<%=request.getContextPath()%>/resources/css/styles/plugins/fullcalendar.css' rel='stylesheet' />
<link href='<%=request.getContextPath()%>/resources/css/styles/plugins/fullcalendar.print.css' rel='stylesheet' media='print' />
<link href='<%=request.getContextPath()%>/resources/css/styles/calendar.min.css' rel='stylesheet' />
<link href='<%=request.getContextPath()%>/resources/css/styles/calendario.css' rel='stylesheet' />
<link href='<%=request.getContextPath()%>/resources/css/styles/datapicker.css' rel='stylesheet' />

	<script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.min.js'></script>
	<script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery-ui.custom.min.js'></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery-1.7.2.min.js"></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery-ui-1.8.21.custom.min.js"></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/bootstrap-modal.js"></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.cookie.js"></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.chosen.min.js"></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.uniform.min.js"></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.history.js"></script>
	<script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/fullcalendar.min.js'></script>
	<script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/calendar.mino.js' charset="UTF-8"></script>
	<script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/moment.min.js'></script>
<script src='<%=request.getContextPath()%>/resources/js/scripts/calendario.js'></script>
<link rel="stylesheet"href="<%=request.getContextPath()%>/resources/css/styles/admCal/bootstrap.css"type="text/css" /> --%>

<link href='/resources/css/styles/plugins/fullcalendar.css' rel='stylesheet' />
<link href='/resources/css/styles/plugins/fullcalendar.print.css' rel='stylesheet' media='print' />
<link href='/resources/css/styles/calendar.min.css' rel='stylesheet' />
<link href='/resources/css/styles/calendario.css' rel='stylesheet' />
<link href='/resources/css/styles/datapicker.css' rel='stylesheet' />

	<script src='/resources/js/scripts/plug-ins/jquery.min.js'></script>
	<script src='/resources/js/scripts/plug-ins/jquery-ui.custom.min.js'></script>
	<script src="/resources/js/scripts/plug-ins/jquery-1.7.2.min.js"></script>
	<script src="/resources/js/scripts/plug-ins/jquery-ui-1.8.21.custom.min.js"></script>
	<script src="/resources/js/scripts/plug-ins/bootstrap-modal.js"></script>
	<script src="/resources/js/scripts/plug-ins/jquery.cookie.js"></script>
	<script src="/resources/js/scripts/plug-ins/jquery.chosen.min.js"></script>
	<script src="/resources/js/scripts/plug-ins/jquery.uniform.min.js"></script>
	<script src="/resources/js/scripts/plug-ins/jquery.history.js"></script>
	<script src='/resources/js/scripts/plug-ins/fullcalendar.min.js'></script>
	<script src='/resources/js/scripts/plug-ins/calendar.mino.js' charset="UTF-8"></script>
	<script src='/resources/js/scripts/plug-ins/moment.min.js'></script>
<script src='/resources/js/scripts/calendario.js'></script>
<link rel="stylesheet"href="/resources/css/styles/admCal/bootstrap.css"type="text/css" />
</head>
<body>
	<div class="contenedor">
		<div class="banner_lefth">
			<div id="datepicker"></div>
		</div>
		<div class="banner_right">
			<div id="wrapptitle">
				<div id="titleWeek"></div>
			</div>
			<br></br>
			<div id='calendar'></div>
		</div>
	</div>
	<div id="scheduleHoy">
		<div class="calendarMobil" data-color="normal" id="datamobilmol">
		<!-- 	<div data-role="day" data-day="201524">
				<div data-role="event"
					data-name="Soy un evento que siempre saldr&eacute; ma&ntilde;ana"
					data-start="9.00" data-end="9.30" data-location="martiniglesias.eu">
				</div>
			</div> -->
			
		</div>
	</div>
		<div id="createEventModal" class="modal hide" tabindex="-1"
			role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">x</button>
				<!-- <h3 id="myModalLabel1">Evento</h3> -->
			</div>
			<div class="modal-body">
			<!-- 	<label class="control-label" for="inputPatient">Descripción del evento:</label> -->
				<form id="createAppointmentForm" class="form-horizontal">
					<div class="control-group">
					<textarea rows="4" cols="50"  readonly id="patientName">
								</textarea>
					
					
						<!-- <div class="controls"> -->
						<!-- 	<input type="textarea" name="patientName" id="patientName" maxlength="100"style= "margin: auto;" data-provide="typeahead" data-items="20"
								data-source="[&quot;Value 1&quot;,&quot;Value 2&quot;,&quot;Value 3&quot;]"> -->
								
								
							
				<!-- 			<input type="hidden" id="apptStartTime" /> <input type="hidden"
								id="apptEndTime" /> <input type="hidden" id="apptAllDay" /> -->
						<!-- </div> -->
					</div>
					<div class="control-group">
						<!-- <label class="control-label" for="when">Fecha:</label> -->
						<!-- <div class="controls controls-row" id="when" style="margin-top: 5px;"></div> -->
					</div>
				</form>
			</div>
			<div class="modal-footer">
				
			</div>
		</div>
</body>

<script>


	var yy;
	var calendarArray =[];
	var monthOffset = [6,7,8,9,10,11,0,1,2,3,4,5];
	var monthArray = [["ENE","enero"],["FEB","Febrero"],["MAR","Marzo"],["ABR","Abril"],["MAY","Mayo"],["JUN","Junio"],["JUL","Julio"],["AGO","Agosto"],["SEP","Septiembre"],["OCT","Octubre"],["NOV","Noviembre"],["DIC","Diciembre"]];
	var letrasArray = ["L","M","X","J","V","S","D"];
	var dayArray = ["7","1","2","3","4","5","6"];
	$(document).ready(function() {
	
	
		});
	</script>
 
  <style>
	#patientName{
	 height: 80%;
    width: 100%;
  background-color: white;
  border-color: white;
}
    
	}
	
.modal-content{
    -webkit-box-shadow: 0 5px 15px rgba(0,0,0,0);
    -moz-box-shadow: 0 5px 15px rgba(0,0,0,0);
    -o-box-shadow: 0 5px 15px rgba(0,0,0,0);
    box-shadow: 0 5px 15px rgba(0,0,0,0);
}
.modal-backdrop {

  background-color: transparent;
}
.modal-header{

    padding-top: 0px;
    padding-bottom: 0px;
    border-top-width: 10px;

}

	</style>
</html>

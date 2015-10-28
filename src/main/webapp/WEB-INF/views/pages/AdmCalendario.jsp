<!DOCTYPE html>
<html lang="es">
<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
<!--[if IE]>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
                  <![endif]-->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>Grupo financiero Actinver</title>

<%-- <link rel="stylesheet"href="<%=request.getContextPath()%>/resources/css/styles/plugins/fullcalendar.css"type="text/css" />
<link rel="stylesheet"href="<%=request.getContextPath()%>/resources/css/styles/plugins/fullcalendar.print.css"type="text/css" />
<link rel="stylesheet"href="<%=request.getContextPath()%>/resources/css/styles/admcalendario.css"type="text/css" />
<link rel="stylesheet"href="<%=request.getContextPath()%>/resources/css/styles/admCal/bootstrap.css"type="text/css" />


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
	<script src="<%=request.getContextPath()%>/resources/js/scripts/admCalendario.js"></script>
	<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/lang/es.js" charset="UTF-8"></script> --%>
	
	
	
<link rel="stylesheet"href="/resources/css/styles/plugins/fullcalendar.css"type="text/css" />
<link rel="stylesheet"href="/resources/css/styles/plugins/fullcalendar.print.css"type="text/css" />
<link rel="stylesheet"href="/resources/css/styles/admcalendario.css"type="text/css" />
<link rel="stylesheet"href="/resources/css/styles/admCal/bootstrap.css"type="text/css" />


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
	<script src="/resources/js/scripts/admCalendario.js"></script>
	<script src="/resources/js/scripts/plug-ins/lang/es.js" charset="UTF-8"></script>


</head>
<body>
	<!-- topbar starts -->
	<div id='calendar'></div>
	<div class="container-fluid">
		<div id="createEventModal" class="modal hide" tabindex="-1"
			role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">x</button>
				<h3 id="myModalLabel1">Crear Evento</h3>
			</div>
			<div class="modal-body">
				<form id="createAppointmentForm" class="form-horizontal">
					<div class="control-group">
						<label class="control-label" for="inputPatient">Descripcion
							del evento:</label>
						<div class="controls">
							<input type="text" name="patientName" id="patientName" maxlength="100"style= "margin: auto;" data-provide="typeahead" data-items="4"
								data-source="[&quot;Value 1&quot;,&quot;Value 2&quot;,&quot;Value 3&quot;]">
							<input type="hidden" id="apptStartTime" /> <input type="hidden"
								id="apptEndTime" /> <input type="hidden" id="apptAllDay" />
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="when">Fecha:</label>
						<div class="controls controls-row" id="when"
							style="margin-top: 5px;"></div>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button class="btn" data-dismiss="modal" aria-hidden="true">Cancelar</button>
				<button type="submit" class="btn btn-primary" id="submitButton">Guardar</button>
				<button type="submit" class="btn btn-primary" id="eliminarButton">Eliminar</button>
				<button type="submit" class="btn btn-primary" id="modificarButton">Modificar</button>
			</div>
		</div>
</body>

<style>
#calendar{
	margin-left: 20%;
    margin-right: auto;
	width: 70%;
	hight:80%;
}
.fc-button-prev{
	width: 50%;
	hight:50%;
	border: 5px;
}
.fc-button-next{
	width: 50%;
	hight:50%;
	border: 5px;
}
.fc-button-agendaWeek
{
	 visibility: hidden;
}
</style>
</html>
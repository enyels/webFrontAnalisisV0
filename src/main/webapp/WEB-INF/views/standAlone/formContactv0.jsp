<!DOCTYPE html>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="es">
  	<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>
		<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
	    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
	    
	    <link href="/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/>
		<link href="/resources/css/estilosApps.css" rel="stylesheet" type="text/css"/>
<%-- 	    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/> --%>
<%-- 		<link href="<%=request.getContextPath()%>/resources/css/estilosApps.css" rel="stylesheet" type="text/css"/> --%>
	</head>
	<body>

	<div class="modal-dialog preview-box forText">
		<div class="form-group">
			<label>Nombre:</label>
			<div class="input-group">
		      	<div class="input-group-addon">
		      		<i class="fa fa-user quitMarg"></i>
		      	</div>
				<input type="text" class="form-control soloTexto commonCl" id="nameId" placeholder="Ingresar Nombre" maxlength="50">
		    </div>
		</div>
		<div class="form-group">
			<label>Correo Electronico:</label>
			<div class="input-group">
		      	<div class="input-group-addon">
		      		<i class="fa fa-at quitMarg"></i>
		      	</div>
				<input type="email" class="form-control commonCl" id="correoId" placeholder="Ingresa Correo Electronico" maxlength="50">
		    </div>
		</div>
		<div class="form-group">
			<label>Empresa:</label> 
			<div class="input-group">
		      	<div class="input-group-addon">
		      		<i class="fa fa-building quitMarg"></i>
		      	</div>
				<input type="text" class="form-control soloTexto commonCl" id="empresaId" placeholder="Ingresa Empresa" maxlength="50">
		    </div>
		</div>
		<div class="form-group">
			<label>Ciudad:</label> 
			<div class="input-group">
		      	<div class="input-group-addon">
		      		<i class="fa fa-map-marker quitMarg"></i>
		      	</div>
				<input type="text" class="form-control soloTexto commonCl" id="ciudadId" placeholder="Ingresa Una Ciudad" maxlength="30">
		    </div>
		</div>
		<div class="form-group">
			<label>Codigo Postal:</label> 
			<div class="input-group">
		      	<div class="input-group-addon">
		      		<i class="fa fa-street-view quitMarg"></i>
		      	</div>
				<input type="text" class="form-control soloNumeros commonCl" id="postalId" placeholder="Ingresa Codigo Postal" maxlength="10">
		    </div>
		</div>
		<div class="form-group">
			<label>Pais:</label> 
			<div class="input-group">
		      	<div class="input-group-addon">
		      		<i class="fa fa-globe quitMarg"></i>
		      	</div>
				<select id="paisId" class="form-control" value="Seleccione un Pais">
				<option selected value="" >Seleccione un pais</option>
				  	<c:forEach var="resEmDef" items="${listPaises}">
						<option value="${resEmDef.countryCodeNumber}">${resEmDef.countryName}</option>
					</c:forEach>
				</select>
		    </div>
		</div>
		<div class="form-group">
			<label>Mensaje:</label> 
			<div class="input-group">
		      	<div class="input-group-addon">
		      		<i class="fa fa-pencil-square quitMarg"></i>
		      	</div>
				<textarea class="form-control textoNumber commonCl" id="mensajeId" rows="5" placeholder="Ingresa el mensaje" maxlength="300"></textarea>
		    </div>
		</div>
		<div class="form-group">
			<p class="textCapt"> Por favor arrastre la <strong>"imagen"</strong> correspondiente al recuadro de la derecha.</p>
		    <br>
			<div id="captcha">
				<div class="row">
					<div class="col-xs-12 log-btn cntrCptchMap">
						<div id="contenedor" class="positionMap2" style="margin: 0 auto">
							<ul id="seleccionable">
								<li style="display: none;">cero</li>
								<li id="uno" class="seleccionables"><i></i></li>
								<li id="dos" class="seleccionables"><i></i></li>
								<li id="tres" class="seleccionables"><i></i></li>
								<li id="cuatro" class="seleccionables"><i></i></li>
							</ul>
							<div id="opcion" class="positionMap2">
								<i></i>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</div>
		<div class="form-group">
			<button type="button" id="sendEmail" class="btn btn-primary" data-loading-text="Enviando Email..." autocomplete="off">
				<i class="fa fa-paper-plane quitMarg"></i>&nbsp; Enviar Email
			</button>
			<label class="messageFail"><small class="msgFail"></small></label>
			<label class="messageOk"><small class="msgOk"></small></label>
		</div>
	</div>

		<script src="/resources/js/jquery/jquery.min.js"></script>
		<script src="/resources/js/jquery/bootstrap.min.js"></script>
		<script src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script>
		<script src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script>
		<script src="/resources/js/jquery/jquery.ui.touch-punch.js"></script>
		<script src="/resources/js/jquery/captcha.js"></script>
		<script src="/resources/js/formContactv0.js"></script>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.ui.touch-punch.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/captcha.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/formContactv0.js"></script> --%>
	</body>
</html>
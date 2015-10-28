	<link class="headMap01" rel="stylesheet" href="/resources/css/bootstrap.css">
	<link class="headMap02" rel="stylesheet" href="/resources/css/estilosApps.css">
	<link class="headMap03" rel="stylesheet" href="/cs/Actinver/css/font-awesome-4.1.0/font-awesome-4.1.0/css/font-awesome.min.css" />
	<link class="headMap04" rel="stylesheet" href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" />
	
<%-- 	<link class="headMap01" rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/bootstrap.css"> --%>
<%-- 	<link class="headMap02" rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/estilosApps.css"> --%>
<!--     <link class="headMap03" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" /> -->
<%-- 	<link class="headMap04" href="<%=request.getContextPath()%>/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" /> --%>
	
	<div id="songPeople" style="display: inline-block;">
		<br>
		<label style="line-height: 20px; color: #ffffff"><i class="fa fa-file-text-o"></i>&nbsp;</label>
		<label class="formatLabelModLg">Por favor ingresa tu n&uacute;mero de contrato:</label>
		<br>
		<br>
		<div class="input-group">
		    <span class="input-group-addon"><i class="fa fa-file-text-o"></i></span>
			<input id="numberContract" type="text" class="form-control soloNumeros" placeholder="Numero de contrato" maxlength="30">
		</div>
		<div style="margin: 15px 0 10px 11px;">
			<label class="formatLabelModLg">
				Se te enviar&aacute; al correo que tienes registrado en tu contrato un mail con tu usuario para acceder al portal.
				<br>
				La contrase&ntilde;a se te har&aacute; llegar v&iacute;a mensaje SMS al n&uacute;mero celular registrado en tu contrato.
				<br>
				Por el momento la contrase&ntilde;a que se te enviar&aacute; ser&aacute; la &uacute;nica con la que podr&aacute;s acceder al portal. Te recomendamos la conserves.
			</label>
		</div>
		<label class="messageWarnLg"><span class="msgWar"></span></label>
		<br>
		<br>
        <label style="line-height: 20px; color: #ffffff"><i class="fa fa-picture-o"></i>&nbsp;</label>
        <p class="textCapt formatLabelModLg">Por favor arrastra la <strong>"imagen"</strong> correspondiente al recuadro de la derecha:</p>
        <br>
        <br>
		<div id="captcha">
			<div class="comClass" style="width: 100%;">
				<div class="col-xs-12 log-btn cntrCptchMap">
					<div id="contenedor" class="positionMap2" style="margin: 0 auto; background: #001223;">
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
			<div class="comClass" style="width: 100%;">
				<div class="wrapBtnEm">
	                   <button type="button" id="accesNumberC" class="btn btn-warning" disabled="disabled" data-loading-text="Validando contrato..." autocomplete="off">
	                   <i class="fa fa-check-circle-o" style="margin-left: 0px"></i>&nbsp; Validar Contrato
	                   </button>
				</div>
			</div>
		</div>
	</div><!--Fin::songPeople-->
	
	<div id="albumPeople" style="display: none;">
		<br>
		<label class="formatLabelModLg"><i class="fa fa-list-alt"></i>&nbsp;&nbsp; N&uacute;mero de contrato correcto.</label>
		<label class="formatLabelModLg"><i class="fa fa-question-circle"></i>&nbsp;&nbsp; ¿Deseas obtener tu usuario del Portal de An&aacute;lisis por medio de tu contrato?, son 3 f&aacute;ciles pasos.</label>
		<br>
		<br>
		<div class="comClass" style="width: 90%;">
			<div class="wrapBtnEmLg">
			       <button type="button" id="siAcc" class="btn btn-warning" data-loading-text="Creando cuenta..." autocomplete="off">
                   		<i class="fa fa-check-circle-o" style="margin-left: 0px;"></i>&nbsp; S&iacute;
                   </button>
			</div>
			<div class="wrapBtnEmLg">
			       <button type="button" id="noAcc" class="btn btn-warning" data-loading-text="Cerrando..." autocomplete="off">
                   		<i class="fa fa-times-circle-o" style="margin-left: 0px;"></i>&nbsp; No
                   </button>
			</div>
		</div>
	</div><!--Fin::albumPeople-->
	
	<div id="concertPeople" style="display: none;">
		<br>
<!-- 		<label class="formatLabelModLg">Estimado(a): <span id="nomEstim"></span></label> -->
		<label class="formatLabelModLg"><i class="fa fa-user"></i>&nbsp;&nbsp; Estimado(a) usuario(a):</label>
		<br>
		<br>
<!-- 		<label id="msgSky" class="formatLabelModLg" style="display: none;"><i class="fa fa-check fa-lg"></i>&nbsp; Su cuenta ha sido creada, la informaci&oacute;n de acceso le ser&aacute; enviada en un momento, revise su <strong>bandeja de entrada</strong> y <strong>mensajes de texto</strong>.</label> -->
		<label id="msgSky" class="formatLabelModLg" style="display: none;"><i class="fa fa-check fa-lg"></i>&nbsp; Tu usuario ha sido enviado al correo electr&oacute;nico registrado en tu contrato y tu contrase&ntilde;a enviada a traves de un mensaje SMS al n&uacute;mero celular ligado a tu contrato.</label>
		<label id="msgHell" class="formatLabelModLg" style="display: none;"><i class="fa fa-times fa-lg"></i>&nbsp; Por alg&uacute;n motivo  tu correo electr&oacute;nico o n&uacute;mero de celular no son correctos. Para actualizar tus datos, por favor comun&iacute;cate al Centro de Atenci&oacute;n Tel.: 1103 6699 y del interior al 01 800 705 5555 (desde M&eacute;xico). Lunes a viernes de 8 a.m. a 8 p.m.</label>
		<br>
	</div><!--Fin::concertPeople-->
	
	<script class="footMap01" src="/resources/js/jquery/bootstrap.min.js"></script>
	<script class="footMap02" src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script>
	<script class="footMap03" src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script>
	<script class="footMap04" src="/resources/js/jquery/jquery.ui.touch-punch.js"></script>
	<script class="footMap05" src="/resources/js/jquery/Ofcaptcha.js"></script>
	<script class="footMap06" src="/resources/js/formExterLogM1.js"></script>
	
<%-- 	<script class="footMap01" src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 	<script class="footMap02" src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script> --%>
<%-- 	<script class="footMap03" src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script> --%>
<%-- 	<script class="footMap04" src="<%=request.getContextPath()%>/resources/js/jquery/jquery.ui.touch-punch.js"></script> --%>
<%-- 	<script class="footMap05" src="<%=request.getContextPath()%>/resources/js/jquery/Ofcaptcha.js"></script> --%>
<%-- 	<script class="footMap06" src="<%=request.getContextPath()%>/resources/js/formExterLogM1.js"></script> --%>
	
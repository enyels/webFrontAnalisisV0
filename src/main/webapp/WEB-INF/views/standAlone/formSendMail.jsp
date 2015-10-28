	<link class="headMap01" rel="stylesheet" href="/resources/css/bootstrap.css" />
	<link class="headMap02" rel="stylesheet" href="/resources/css/estilosApps.css" />
	<link class="headMap03" rel="stylesheet" href="/cs/Actinver/css/font-awesome-4.1.0/font-awesome-4.1.0/css/font-awesome.min.css" />

<%-- 	<link class="headMap01" rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/bootstrap.css"> --%>
<%-- 	<link class="headMap02" rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/estilosApps.css"> --%>
<!--     <link class="headMap03" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" /> -->
	
<!-- 	<link class="headMap04" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css" /> -->
	<link class="headMap04" href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" />

	<% String param1 = (String) session.getAttribute("param1"); %>
<!--     <div id="backModMail" class="modal fade insMap04" data-backdrop="static" data-keyboard="false"> -->
    <div id="backModMail" class="modal fade bodyMap01" data-backdrop="static" data-keyboard="false" data-param1="<%= param1 %>">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header map-header">
                    <button id="fnCloseModal" aria-hidden="true" data-dismiss="modal" class="close map-close" type="button">&times;</button>
                    <h4 class="modal-title forSubTitles2"><i class="fa fa-envelope-o"></i>&nbsp; Enviar e-mail a tu asesor</h4>
                </div>
<!--                 <div class="modal-body forText" style="background-color: #001223;" id="modal-loginc"> -->
                <div class="modal-body forText">
					<label style="line-height: 20px;"><i class="img-usuar"></i>&nbsp; Para:</label>
<!-- 					<label style="line-height: 20px;"><i class="fa fa-user"></i>&nbsp; Para:</label> -->
					<br>
					<div class="wrapRadios">
						<label class="radio-inline spaceLabel" style="margin-left: 10px;"> 
							<input type="radio" name="inlineRadioOptionsSM" class="grpMail" id="inlineRadio1" value="gogestionoperativa@actinver.com.mx">Banco Actinver
						</label> 
						<label class="radio-inline spaceLabel"> 
							<input type="radio" name="inlineRadioOptionsSM" class="grpMail" id="inlineRadio2" value="rrojas@actinver.com.mx">Casa de Bolsa
						</label>
						<label class="radio-inline spaceLabel"> 
							<input type="radio"	name="inlineRadioOptionsSM" class="grpMail" id="inlineRadio3" value="bursanet@actinver.com.mx">Bursanet
						</label>
					</div>
					<p class="clImgAct2"></p>
					<br>
					<br> 
					<label style="line-height: 20px;"><i class="img-asun"></i>&nbsp; Asunto:</label>
<!-- 					<label style="line-height: 20px;"><i class="fa fa-pencil"></i>&nbsp; Asunto:</label> -->
	                <input type="text" class="form-control grpMail textoNumber" id="inAsunto" placeholder="Ingresa el asunto" maxlength="30">
	                <br>
	                <label style="line-height: 20px;"><i class="img-messg"></i>&nbsp; Mensaje:</label>
<!-- 	                <label style="line-height: 20px;"><i class="fa fa-pencil-square"></i>&nbsp; Mensaje:</label> -->
	                <textarea class="form-control grpMail textoNumber" id="inMensaje" rows="4" placeholder="Ingresa el mensaje" maxlength="300"></textarea>
	                
	                <br>
	                <label style="line-height: 20px;"><i class="fa fa-picture-o"></i>&nbsp;</label>
	                <p class="textCapt"> Por favor arrastre la <strong>"imagen"</strong> correspondiente al recuadro de la derecha.</p>
	                <br>
					<div id="captcha">
						<div class="comClass">
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
						<div class="comClass">
							<div class="wrapBtnEm">
			                    <button type="button" id="sendEmail" class="btn btn-primary" data-loading-text="Enviando e-mail..." autocomplete="off">
			                    	Enviar e-mail
			                    </button>
							</div>
						</div>
					</div>
					<div class="wrapImgAct">
						<div class="agrupImgTxt">
<!-- 							<label class="messageWarn"><small class="msgWar"></small></label> -->
							<label class="messageOk" style="display: none;"><small class="msgHig"></small></label>
							<label class="messageFail"><small class="msgDee"></small></label>
						</div>
						<div class="agrupImgTxt">
							<div class="clImgAct">
<!-- 								<p class="clImgAct2"></p> -->
							</div>
						</div>
					</div>
                </div>
<!--                 Para Pruebas -->
<!--                 <iframe id="seccionMod2" src="http://172.16.4.231:8080/appsFrontAnalisis/exterLogServ0" width="100%" height="35px" style="background: yellow; float: left; position: relative;"> -->
<!-- 				</iframe> -->
<!--                 Para Pruebas -->
                <div class="modal-footer forText map-footer">
                </div>
            </div>
        </div>
    </div>

	<script class="footMap01" src="/resources/js/jquery/bootstrap.min.js"></script>
	<script class="footMap02" src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script>
	<script class="footMap03" src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script>
	<script class="footMap04" src="/resources/js/jquery/jquery.ui.touch-punch.js"></script>
	<script class="footMap05" src="/resources/js/jquery/Ofcaptcha.js"></script>
	<script class="footMap06" src="/resources/js/formSendMailv0.js"></script>
	
<%-- 	<script class="footMap01" src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 	<script class="footMap02" src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script> --%>
<%-- 	<script class="footMap03" src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script> --%>
<%-- 	<script class="footMap04" src="<%=request.getContextPath()%>/resources/js/jquery/jquery.ui.touch-punch.js"></script> --%>
<%-- 	<script class="footMap05" src="<%=request.getContextPath()%>/resources/js/jquery/Ofcaptcha.js"></script> --%>
<%-- 	<script class="footMap06" src="<%=request.getContextPath()%>/resources/js/formSendMailv0.js"></script>	 --%>
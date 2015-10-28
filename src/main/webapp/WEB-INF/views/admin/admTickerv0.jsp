<!DOCTYPE html>
<%@page contentType="text/html;charset=UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="es">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>
	    
		<link href="/cs/Actinver/css/font-awesome-4.1.0/font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" />
	    <link href="/resources/css/bootstrap.css" rel="stylesheet" type="text/css" />
	    <link href="/resources/css/estilosApps.css" rel="stylesheet" type="text/css" />
		<link href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" />	    

<%-- 	    <link href="<%=request.getContextPath()%>/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" /> --%>
<!-- 	    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" /> -->
<%-- 	    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet" type="text/css" /> --%>
<%-- 	    <link href="<%=request.getContextPath()%>/resources/css/estilosApps.css" rel="stylesheet" type="text/css" /> --%>
	</head>
		<body>
				
			<div style="width: 100%; height: 100%; float: left; position: relative;">
				<div class="wrapAdmTick">
					<div class="areaSelects">
						<div class="panel panel-default">
							<div class="panel-heading" style="color: #DADADA; background-color: #001123;">
							  <h3 class="panel-title">
							  	<i class="fa fa-eye-slash fa-lg"></i>
							  	&nbsp; Emisoras Nacionales Para <strong>NO</strong> Mostrar en el Ticker
							  </h3>
							</div>
							<div class="panel-body deepAdmTick">
								<div id="emDefault" class="list-group navScroll">
									<c:forEach var="resEmDef" items="${listEmDef.selListEmNa}">
										<a class="colorOver list-group-item ${resEmDef.emEstatus}" data-clase="${resEmDef.emEstatus}" id="${resEmDef.emId}" href="#">${resEmDef.emNombre}</a>
									</c:forEach>
								</div>
							</div>
							<form class="form-inline" style="margin-top: -35px !important;">
								<div class="panel-body deepAdmTick">
									<div class="input-group">
								      	<div class="input-group-addon">
								      		<i class="fa fa-search-minus quitMarg"></i>
								      	</div>
										<input type="text" class="form-control soloTexto commonCl" id="textDef" placeholder="Ingresar Emisora" maxlength="50" style="width: 50% !important;">
								    </div>
								    <br>
								    <a id="buscarEmDef" class="btn btn-default" href="#" role="button">Buscar</a>
								</div>
							</form>
						</div>
					</div>
					<div class="areaSelectsImg">
						<div class="areaImgAOR">
							<img src="/resources/images/switch.png">
<!-- 							<img src="resources/images/switch.png"> -->
						</div>
					</div>
					<div class="areaSelects">
						<div class="panel panel-default">
							<div class="panel-heading" style="color: #DADADA; background-color: #001123;">
							  <h3 class="panel-title">
							  	<i class="fa fa-eye fa-lg"></i>
							  	&nbsp; Emisoras Nacionales Para Mostrar en el Ticker
							  </h3>
							</div>
							<div class="panel-body deepAdmTick">
								<div id="emSelected" class="list-group navScroll">
									<c:forEach var="resEmCtm" items="${listEmSel.selListEmNa}">
										<a class="colorOver list-group-item ${resEmCtm.emEstatus}" data-clase="${resEmCtm.emEstatus}" href="#" id="${resEmCtm.emId}">${resEmCtm.emNombre}</a>
									</c:forEach>
								</div>
							</div>
							<form class="form-inline" style="margin-top: -35px !important;">
								<div class="panel-body deepAdmTick">
									<div class="input-group">
								      	<div class="input-group-addon">
								      		<i class="fa fa-search-plus quitMarg"></i>
								      	</div>
										<input type="text" class="form-control soloTexto commonCl" id="textSel" placeholder="Ingresar Emisora" maxlength="50" style="width: 50% !important;">
								    </div>
								    <br>
								    <a id="buscarEmSel" class="btn btn-default" href="#" role="button">Buscar</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="wrapAdmTickArBtn">
				    <button id="actSaveEm" class="styleBtns" type="button" data-loading-text="Guardando Emisoras..." autocomplete="off">
				    	<i class="fa fa-floppy-o" style="margin-left: 0 !important;"></i>
				    	&nbsp;Guardar Emisoras
                    </button>
				</div>
			</div>		
	
	<script src ="/resources/js/jquery/jquery.min.js"></script>
	<script src ="/resources/js/jquery/bootstrap.min.js"></script>
	<script src ="/resources/js/admin/admTickerv0.js"></script>
<%-- 	<script src ="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 	<script src ="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 	<script src ="<%=request.getContextPath()%>/resources/js/admin/admTickerv0.js"></script> --%>
	</body>
</html>
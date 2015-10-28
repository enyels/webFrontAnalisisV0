<!DOCTYPE html>
<%@page contentType="text/html;charset=UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html lang="es">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
		<meta http-equiv='cache-control' content='no-cache'>
		<meta http-equiv='expires' content='0'>
		<meta http-equiv='pragma' content='no-cache'>
		
				
		

		
		
	<%-- 	<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
       	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/plugins/editor.css" />
 		<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
 		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"> 
        <script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
		<script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/moment.min.js'></script> 
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.bootpag.min.js"></script>
     	<script  src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script>
		<script  src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script>
		<script  src="<%=request.getContextPath()%>/resources/js/jquery/jquery.ui.touch-punch.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.ebcaptcha.js"></script>
      
		<script src="<%=request.getContextPath()%>/resources/js/scripts/admBlogPerfil.js"></script> --%>
		
		
		
		
		
		
	 <script src="/static/JS/jquery-1.3.2.js" type="text/javascript"></script>
  <link rel="stylesheet" href="/static/CSS/bootstrap.css">
  <link rel="stylesheet" href="/static/CSS/font-awesome-4.1.0/font-awesome-4.1.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/static/CSS/main.css">
  <link rel="stylesheet" href="/cs/Actinver/css/header.css">
  <link href="/cs/Actinver/least/leastjs2.2.0/src/css/least.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="/static/CSS/jquery.mmenu.all.css">
  <!--script src="/static/JS/jquery.min.js" type="text/javascrip"></script-->
  <script src="/cs/Actinver/least/leastjs2.2.0/src/js/libs/jquery/2.0.2/jquery.min.js"></script>
  <script src="/static/JS/bootstrap.min.js" type="text/javascrip"></script>
  <script src="/static/JS/jquery.mmenu.min.all.js" type="text/javascrip"></script>
  <script src="/cs/Actinver/least/leastjs2.2.0/src/js/libs/least/least.min.js"></script>
  <script type="text/javascript" src="/cs/Actinver/js/tinysort.js"></script>
      
      
		<script src="/resources/js/scripts/admBlogPerfil.js"></script>
		
		
		
		
</head>
<!-- <body ng-app="App" ng-controller="angularCtrl" id="angularData"> -->
<body>
<label class="messageError"><span class="msgError"></span></label>
<div class="col-xs-12 col-sm-8 col-md-6 col-xs-offset-0 col-sm-offset-2 col-md-offset-3">
                <div class="jumbotron">
                               <div style="margin-bottom:25px" class="form-group">
                                               <label class="col-sm-4 control-label">Contraseña anterior</label>
                                               <div class="col-sm-8">
                                                               <input type="password" class="form-control" id="passwordanterior">
                                               </div>
                                               <div class="hidden-xs" style="height:20px"></div>
                               </div>
                               <div style="margin-bottom:25px" class="form-group">
                                               <label class="col-sm-4 control-label">Contraseña nueva</label>
                                               <div class="col-sm-8">
                                                               <input type="password" class="form-control" id="passwordnuevo">
                                               </div>
                                               <div class="hidden-xs" style="height:20px"></div>
                               </div>
                               <div style="margin-bottom:25px" class="form-group">
                                               <label class="col-sm-4 control-label">Repetir contraseña</label>
                                               <div class="col-sm-8">
                                                               <input type="password" class="form-control" id="passwordnuevo2">
                                               </div>
                                               <div class="hidden-xs" style="height:20px"></div>
                               </div>
                         	
                               
                               <center>
                                               <a class="btn btn-warning" role="button" id="cambiarpass">Cambiar</a>
                               </center>
                </div>
</div>

</body>
</html>
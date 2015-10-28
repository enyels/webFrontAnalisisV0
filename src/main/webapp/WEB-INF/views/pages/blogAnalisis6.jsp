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

        <link rel="stylesheet" type="text/css" href='/resources/css/styles/datapicker.css' />
        <link rel="stylesheet" type="text/css" href="/resources/css/styles/blog/bootstrap-theme.min.css" >
        <link rel="stylesheet" type="text/css" href="/resources/css/styles/blog/bootstrap.min.css" >
 		<link rel="stylesheet" type="text/css" href="/resources/css/styles/blog/font-awesome.min.css" >
    	<link rel="stylesheet" type="text/css" href="/resources/css/styles/blog/bloganalisis.css" />
    	<link rel="stylesheet" type="text/css" href="/resources/css/styles/blog/html5tooltips.css" />
		<link rel="stylesheet" type="text/css" href="/resources/css/styles/blog/html5tooltips.animation.css" />
		
		
   		 <script src="/resources/js/scripts/blog/jquery-2.1.0.min.js"></script>
        <script src="/resources/js/jquery/jquery.min.js"></script>
        <script src="/resources/js/scripts/blog/jquery-ui.js"></script>
        <script src='/resources/js/scripts/plug-ins/calendar.mino.js' charset="UTF-8"></script>
		<script src='/resources/js/scripts/plug-ins/moment.min.js'></script>
        <script src="/resources/js/scripts/blog/bootstrap.min.js"></script>
        <script src="/resources/js/scripts/plug-ins/jquery.bootpag.min.js"></script>
        <script src="/resources/js/scripts/plug-ins/jquery.ebcaptcha.js"></script>
		<script src="/resources/js/scripts/blog/html5tooltips.js"></script>
		<script src="/resources/js/scripts/blogAnalisis6.js"></script>
		
</head>
<!-- <body ng-app="App" ng-controller="angularCtrl" id="angularData"> -->
<body>
		<a name="ancla" id="a"></a>
			<div class="row">
					<div class="col-md-8">
							<ol class="breadcrumb"></ol>
							<div class="bs-docs-example">
									<p class="content2t"></p>
									<ul id="fivepostword"></ul>
									<p class="demo2"></p>
									<p class="demo3"></p>
							</div>
	
							<div id="backModWish" class="modal fade insMap04" data-backdrop="static" data-keyboard="false" data-keyboard="false">
								<div class="modal-dialog">
									<div class="modal-content">
										
										 <div class="modal-header" style="padding: 7px 10px 25px 10px; background: #031E2F">
							                          <button aria-hidden="true" class="close" data-dismiss="modal" type="button" style="color: white; opacity: 1;" id="fnCloseModal">×</button>
							            </div>
										<div class="modal-body" id="anchorOne">
											<label>Seleccione una de las siguientes acciones.</label>
											<!-- <br class="separadorSM"> <br class="separadorSM"> -->
										<form id="myForm">
												<div id="containerRadio">
													<label class="radio-inline">
									  					<input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" checked="checked" > Conservar mi nombre de usuario.
													</label>
													<label class="radio-inline">
									 					 <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"> Crear un  alias.
													</label>
												</div>
												<div id="containerInputs">	
														<div class="form-group">
							                                	 	<label style="color: #031E2F">Ingresar Alias</label>
							                                 		<div class="input-group" style="margin:inherit">
							                                 				<div class="input-group-addon"><i class="fa fa-user"></i></div>
							                                	 			<input type="text" class="form-control" id="addalias" placeholder="Alias" maxlength="100">
							                                		</div>
							                            </div>
							                            <div class="form-group">
							                                        <label style="color: #031E2F">Confirmar Alias</label>
							                                         <div class="input-group" style="margin:inherit">
							                                                 <div class="input-group-addon"><i class="fa fa-user"></i></div>
							                                                 <input type="text" class="form-control" id="confalias" placeholder="Alias" maxlength="100">
							                                         </div>
							                          </div>
												</div> 
										 		<button type="button" class="btn btn-primary" id="guardarname"  >Aceptar</button>	
										 	 <br>
								                <br>
											<div id="msgerror"></div>
										</form>
										<form  id="formmodal">
											<input type="button" id='saveUsername'  class="btn btn-primary" value="Crear Alias">
										</form>
										</div>
									</div>
								</div>
							</div>

	</div>
	<div class="col-md-3">
		<div id='barraR'>
			<div class="tetxbusqueda" >
 				<p>Búsqueda</p>
 			</div>
 			<hr id="hrstyle">
			<div class="input-group">
      				<input type="text" class="form-control" placeholder="Buscar..."  id="inputSearch">
     				 <span class="input-group-btn">
        					<button class="btn btn-default commentx" type="button" id="miboton"><i class="fa fa-search"></i>&nbsp;</button>
      				</span>
   			 </div><!-- /input-group -->
			
			<div>
			<br>
		 <button type="submit" class="col-xs-12 col-sm-5 col-md-7 col-lg-6 btn btn-primary btn-sm  commentx " id="comentario" style="padding: 5px 5px 5px 5px; margin-top: 5px;">Respuesta de Analista</button>
		<button type="submit" class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-sm-offset-2 col-md-offset-0 col-lg-offset-1 btn btn-primary btn-sm commentx " id="favoritos" style="padding: 5px 5px 5px 5px; margin-top: 5px;">Mis Favoritos</button>

		
		</div>
			
		<br>
		<br>
		<hr id="hrstyle">
		<h4 class="tetxbusqueda">Calendario</h4>
		<div id="datepicker" style="margin-top: 0px;"></div>
		
		<h4 class="tetxbusqueda" >Posts Recientes</h4>
		<hr id="hrstyle">
		<div id='lista'>
			<ul id="fivepost" class="commentx" >
				<!-- //<div id="fivepost"></div> -->
			</ul>
		</div>
	
			<div>
			<br>
			<a href="#anchorOne"><button  type="button" class="btn btn-primary commentx" id="editalias"  >Editar Perfil</button>	</a>
		</div>
		</div>
	</div>
</div>
</body>
</html>
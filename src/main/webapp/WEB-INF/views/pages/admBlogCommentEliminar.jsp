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
		
		
	<%-- 	
        <link href='<%=request.getContextPath()%>/resources/css/styles/datapicker.css' rel='stylesheet' />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
       <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/plugins/editor.css" />
 	        
 	
 		<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
 		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"> 
    	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/bloganalisis.css" />
    
        <script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/calendar.mino.js' charset="UTF-8"></script>
		<script src='<%=request.getContextPath()%>/resources/js/scripts/plug-ins/moment.min.js'></script>
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        
        <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.bootpag.min.js"></script>
        
     	<script  src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script>
		<script  src="<%=request.getContextPath()%>/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script>
		<script  src="<%=request.getContextPath()%>/resources/js/jquery/jquery.ui.touch-punch.js"></script>
        
        <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.ebcaptcha.js"></script>

        <script  src="<%=request.getContextPath()%>/resources/js/jquery/Ofcaptcha.js"></script>
		<script src="<%=request.getContextPath()%>/resources/js/scripts/admBlogCommentEliminar.js"></script>
		 --%>
		
		

        <link href='/resources/css/styles/datapicker.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
       <link rel="stylesheet" type="text/css" href="/resources/css/styles/plugins/editor.css" />
 	        
 	
 		<script src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
 		<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"> 
    	 <link rel="stylesheet" type="text/css" href="/resources/css/styles/blog/bloganalisis.css" />
    
        <script src="/resources/js/jquery/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script src='/resources/js/scripts/plug-ins/calendar.mino.js' charset="UTF-8"></script>
		<script src='/resources/js/scripts/plug-ins/moment.min.js'></script>
        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        
        <script src="/resources/js/scripts/plug-ins/jquery.bootpag.min.js"></script>
        
     	<script  src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-sort.min.js"></script>
		<script  src="/resources/js/jquery/JqueryUiBlocks/jquery-ui-drop.min.js"></script>
		<script  src="/resources/js/jquery/jquery.ui.touch-punch.js"></script>
        
        <script src="/resources/js/scripts/plug-ins/jquery.ebcaptcha.js"></script>

        <script  src="/resources/js/jquery/Ofcaptcha.js"></script>
		<script src="/resources/js/scripts/admBlogCommentEliminar.js"></script>
		
	
		
		
</head>
<!-- <body ng-app="App" ng-controller="angularCtrl" id="angularData"> -->
<body>
<a name="ancla" id="a"></a>

<div class="row">
	<div class="col-md-8">
	
	
<ol class="breadcrumb"></ol>
	
		
<%-- <form:form method="GET" action="/appsFrontAnalisis/blogAddPost"> 

    <input type="submit" value="Redactar" id="redactar"/>
   
</form:form>
 --%>
		
	<!-- <button type="button" class="btn btn-primary" id="redactar">Redactar</button> -->
		<div class="bs-docs-example">
			<p class="content2t"></p>
			<ul id="fivepostword">
				<!-- //<div id="fivepost"></div> -->
			</ul>
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
			
			
			
			
			</form>
			
			<form  id="formmodal">
				<input type="button" id='saveUsername'  class="btn btn-primary" value="Crear Alias">
			</form>
			</div>
			
		</div>
	</div>
</div>


<!-- fin modal -->







<!-- fin otra modal -->
	</div>
	<div class="col-md-3">
		
			
	
		<h4 class="tetxbusqueda">Calendario</h4>
		<div id="datepicker" style="margin-top: 0px;"></div>
		
		<h4 class="tetxbusqueda" >Comentarios</h4>
		<hr id="hrstyle">
	 <button type="submit" class="btn btn-primary" id="comentarioUp">Comentarios Usuarios</button>
		
		</div>
	</div>
</body>

<style>


</style>

<style>


</style>








<!-- <script type="text/javascript">
                        a = $('.demo1').bootpag({
                            total: 5
                        }).on("page", function(event, num){
                            $(".content1").html("Page " + num); // or some ajax content loading...

                            // ... after content load -> change total to 10
                            $(this).bootpag({total: 10, maxVisible: 10});

                        });
                        $('.demo2').bootpag({
                           total: 23,
                           page: 1,
                           maxVisible: 10
                        }).on('page', function(event, num){
                            $(".content2").html("Page " + num);
                            
                            
                            
                            
                             // or some ajax content loading...
                        });
                        $('.demo3').bootpag({
                           total: 9,
                           page: 5,
                           maxVisible: 6,
                           href: "#pro-page-{{number}}",
                           leaps: false,
                           next: 'next',
                           prev: null
                        }).on('page', function(event, num){
                            $(".content3").html("Page " + num); // or some ajax content loading...
                        });
                        $('.demo4_top,.demo4_bottom').bootpag({
                            total: 50,
                            page: 2,
                            maxVisible: 5,
                            leaps: true,
                            firstLastUse: true,
                            first: '<span aria-hidden="true">&larr;</span>',
                            last: '<span aria-hidden="true">&rarr;</span>',
                            wrapClass: 'pagination',
                            activeClass: 'active',
                            disabledClass: 'disabled',
                            nextClass: 'next',
                            prevClass: 'prev',
                            lastClass: 'last',
                            firstClass: 'first'
                        }).on("page", function(event, num){
                            $(".content4").html("Page " + num); // or some ajax content loading...
                        }).find('.pagination');
                    </script> -->

</html>
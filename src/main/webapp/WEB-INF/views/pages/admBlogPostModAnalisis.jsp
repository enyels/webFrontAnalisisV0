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
		
		
		
   <%--      <link href='<%=request.getContextPath()%>/resources/css/styles/datapicker.css' rel='stylesheet' />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
       <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/plugins/editor.css" />
 	        
 	
 		<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
 		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"> 
    	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/admbloganalisis.css" />
    
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
  		<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/editor.js"></script>
        <script  src="<%=request.getContextPath()%>/resources/js/jquery/Ofcaptcha.js"></script>
		<script src="<%=request.getContextPath()%>/resources/js/scripts/admBlogPostModAnalisis.js"></script> --%>
		
		
	  <link href='/resources/css/styles/datapicker.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <!--    	<link rel="stylesheet" type="text/css" href="/resources/css/styles/plugins/editor.css" /> -->
 	
 		<script src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
 		<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"> 
    	<link rel="stylesheet" type="text/css" href="/resources/css/styles/admbloganalisis.css" />
    
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
  		<!-- <script src="/resources/js/scripts/plug-ins/editor.js"></script> -->
        <script  src="/resources/js/jquery/Ofcaptcha.js"></script>
        
		<script src="/resources/js/scripts/admBlogPostModAnalisis.js"></script>
		
</head>
<!-- <body ng-app="App" ng-controller="angularCtrl" id="angularData"> -->
<body>

<div class="row">
	<div class="col-md-8">
		<button type="button" class="btn btn-primary" id="redactar">Redactar</button>
		<div class="bs-docs-example">
			<p class="content2t"></p>
		<!-- 	<ul id="fivepostword">
				//<div id="fivepost"></div>
			</ul> -->
			<p class="demo2"></p>
		</div>
			<div id="formEdit">
			<div id="idpost"><input type="hidden"  id="idpost2"></div>
			<div id="imguser"></div>
			<div id="user"></div>
			<div>
<!-- 			<label style="margin-left: 40px;">Titulo:</label> <input type="text" class="form-control" placeholder="entrada" aria-describedby="basic-addon1" id="titleAdm" maxlength="100">
 -->			
			<div class="input-group" id="titleAdm">
  				<span class="input-group-addon" id="sizing-addon2">Titulo</span>
 						 <input type="text" class="form-control" placeholder="entrada" aria-describedby="basic-addon1"  id="title" maxlength="100">
				</div>
			</div>
			<hr style="margin-left: 30px;width: 90%;">
					<div class="container-fluid">
						<div class="container">
							<div class="col-lg-12 nopadding">
								<textarea class="form-control" rows="3" id="txtEditor"></textarea> 
							</div>
						</div>
					</div>
				<br>
				<div id='containerButton'>
				<button type="button" class="btn btn-primary" id="publicar">Modificar</button>			
				<button type="button" class="btn btn-warning" id="cancelar">Cancelar</button>
				</div>
					<div id='containerButton2'>
				<button type="button" class="btn btn-primary" id="publicar2">Publicar</button>			
				<button type="button" class="btn btn-warning" id="cancelar2">Cancelar</button>
				</div>
		</div> 

	</div>
	<div class="col-md-3">
		<div id='barraR'>
			
		<br>
		<br>
		<hr id="hrstyle">
		<h4 class="tetxbusqueda">Calendario</h4>
		<div id="datepicker" style="margin-top: 0px;"></div>
		</div>
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
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
		
		
		
       <%--  <link href='<%=request.getContextPath()%>/resources/css/styles/datapicker.css' rel='stylesheet' />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
       <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/plugins/editor.css" />
 	        
 		<link rel="stylesheet" type="text/css" href="/resources/css/styles/plugins/editor.css" />
 		<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
 		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"> 
    
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
		<script src="<%=request.getContextPath()%>/resources/js/scripts/admBlogPostAnalisis.js"></script> --%>
		
		
		
		     <link href='/resources/css/styles/datapicker.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
       <link rel="stylesheet" type="text/css" href="/resources/css/styles/plugins/editor.css" />
 	        
 		<link rel="stylesheet" type="text/css" href="/resources/css/styles/plugins/editor.css" />
 		<script src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
 		<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"> 
    
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
        <script src="/resources/js/scripts/plug-ins/editor.js"></script>
        <script  src="/resources/js/jquery/Ofcaptcha.js"></script>
		<script src="/resources/js/scripts/admBlogPostAnalisis.js"></script>
		
		
	
		
		
</head>
<!-- <body ng-app="App" ng-controller="angularCtrl" id="angularData"> -->
<body>

<div class="row">
	<div class="col-md-8">
		
<%-- <form:form method="GET" action="/appsFrontAnalisis/blogAddPost"> 

    <input type="submit" value="Redactar" id="redactar"/>
   
</form:form>
 --%>
		
	<button type="button" class="btn btn-primary" id="redactar">Redactar</button>
	
		<div id="formEdit">
			<div id="imguser"></div>
			<div><label style="margin-left: 30px;">Entrada:</label> <input type="text" class="form-control" placeholder="entrada" aria-describedby="basic-addon1" id="title"></div>
			<hr style="margin-left: 30px;width: 90%;">
					<div class="container-fluid">
						<div class="container">
							<div class="col-lg-12 nopadding">
								<textarea id="txtEditor"></textarea> 
							</div>
						</div>
					</div>
				<br>
				<div id='containerButton'>
				<button type="button" class="btn btn-primary" id="publicar">Publicar</button>			
				<button type="button" class="btn btn-warning" id="cancelar">Cancelar</button>
				</div>
		</div> 

	</div>

</div>
</body>

<style>

body {
	margin-left: 0px;
}
#inputSearch{


}
#fivepost{
 margin-top: 2px;
  margin-bottom: 2px;
  color: #333333;
}
.listalastfive{
	margin-top: 2px;
  	margin-bottom: 2px;
  	color: #337ab7;
    list-style-type: disc;
  	line-height: 1.5;

}

.liastafiveaa {
  color: #333333;
  text-decoration: none;
}

#hrstyle {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0;
  border-top: 1px solid #eee;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

@media (min-width: 992px)
.col-md-3 {
  width: 30%;
}
.col-md-3 {
margin-left: 50px
}

#ebcaptchatext{
 color: #000000;

}

.pages {
	border-radius: 0px;
	border: 1px solid #DCDCDC;
}

.allcontent {
	border: 1px solid #080808;
	margin-left: 40px;
}

.commentstl {
	border: 1px solid #080808;
	margin-left: 40px;
}

.postblog {
	font-family: 'Source sans Pro';
	font-size: 14px;
}

.txtMegusta {
	color: #0C4A87;
	width: 10%;
	float: left;
	margin-top: -20px;
	margin-left: 30px;
}

.likenum {
	  /* margin-right: 40px; */
  /* margin-top: -20px; */
  float: right;
  padding: 0px 4px 0px 4px;
  background: #337ab7;
  color: #ffffff;
  font-weight: bold;
  margin-left: 77px;
  border-radius: 4px;
  /* margin-top: -25px; */
  /* font-size: 11px; */
  font-size: 10px;
    border-color: white;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
}

.dataCommnet {
	
	
  /* margin-top: -8px; */
  margin-right: 0px;
  float: right;
  font-size: 10px;
  padding: 0px 4px 0px 4px;
  
  background-color: #337ab7;
  color: white;
  border-color: white;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
	
}
.dataCommnetimg{
background: url(/appsFrontAnalisis/resources/images/coment.png) no-repeat 5px 0px;
  width: 30px;
  height: 30px;
  float: right;
  margin-top: -30px;
}

.likepostimg{
background: url(/appsFrontAnalisis/resources/images/like.png) no-repeat 5px 0px;
  width: 30px;
  height: 30px;
  float: right;
  margin-right: 40px;
  margin-top: -30px;
}

#imageL {
	float: left;
	  width: 70%;
}

#imageR {
	float: right;

}

#titleUserPost {
	font-weight: bold;
	margin-left: 140px;
}

#dateUserPost {
	margin-left: 140px;
}

#titlePost {
	margin-left: 140px;
}

#bodyPost {
	margin-top: 10%;
}

#addComent {
	color: #0C4A87;
	margin-left: 10px;
	font-weight: bold;
}

a img {
	border: none;
	outline: none;
}

.content {
	margin-top: 100px;
	padding: 0px;
	bottom: 0px;
}

.demo {
	width: 580px;
	padding: 10px;
	margin: 10px auto;
	border: 1px solid #fff;
	background-color: #00AEEF;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 30px;
}

.demo h1 {
	color: #CCC;
}

.pagedemo {
	border: 1px solid #CCC;
	width: 90%;
	margin: 2px;
	padding: 50px 10px;
	text-align: center;
	background-color: white;
	font-size: 50px;
}

#inputsLeft {
	float: left;
}

#inputsright {
	float: right;
}

#backModWish {
	width: 70%;
}

.panel {
	margin-bottom: 0px;
}

.pagination {
	margin-left: 200px;
}

.tetxbusqueda {
	background-color: transparent;
	text-align: left;
	font-size: 18px;
	line-height: 18px;
	font-family: source-sans-pro, sans-serif;
	font-weight: 700;
	margin-top: 20px;
}

.inputbuscar {
	border-radius: 6px 0px 0px 6px;

}

#miboton {
 position: absolute;
  margin-top: 0px;
  margin-bottom: 10px;
  width: 10%;
  float: left;
  height: 5%;
}


#inputSearch {
width: 80%;
float: left;
}



.hasDatepicker {
	margin-top: 80px;
}

.form-control {
	width: 80%;
}

#bodyPost {
	margin-left: 10px;
}

#redactar {
	margin-left: 30px;
}

#containerButton {
	margin-left: 30px;
}

#containerCatcha {
	margin-top: 40px;
}


</style>

<style>
#nav {
	list-style: none;
	margin: 0px;
	padding: 0px;
}

#nav li {
	float: left;
	margin-right: 20px;
	font-size: 14px;
	font-weight: bold;
}

#nav li a {
	color: #333333;
	text-decoration: none
}

#nav li a:hover {
	color: #006699;
	text-decoration: none
}

#notification_li {
	position: relative
}

#notificationTitle {
	z-index: 1000;
	font-weight: bold;
	padding: 8px;
	font-size: 13px;
	background-color: #5B5B5F;
	width: 384px;
	border-bottom: 1px solid #dddddd;
}

#notificationsBody {
	padding: 33px 0px 0px 0px !important;
	min-height: 200px;
}

#notification_count {
	padding: 3px 7px 3px 7px;
	background: #cc0000;
	color: #ffffff;
	font-weight: bold;
	margin-left: 77px;
	border-radius: 9px;
	position: absolute;
	margin-top: -11px;
	font-size: 11px;
}

li {
	list-style-type: none;
}

.nomUserCom {
	color: #0C4A87;
	font-weight: bold;
}

.usercoment {
	font-weight: bold;
}

.wrapBtnEm{
	float: right;
  	padding-top: 5px;
}
#ebcaptchainput{
	width: 10%;
}
.inputcoment{
width: 90%;
}
#txtMat{
font-size: 12px;
color:#333333;
}


</style>










</html>
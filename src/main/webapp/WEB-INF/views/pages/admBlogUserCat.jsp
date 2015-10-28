<!DOCTYPE html>
<html lang="es">
  	<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>
	    
	
	    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600,400' rel='stylesheet' type='text/css'>
	
	<%--     <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/cssgrid/jsgrid.css" />
	    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/cssgrid/theme.css" />
	  	<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/>
	   <!--  //<script src="../external/jquery/jquery-1.8.3.js"></script> -->
	    <script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/admBlogUserCat.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.core.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.load-indicator.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.load-strategies.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.sort-strategies.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.text.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.number.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.select.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.checkbox.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.control.js"></script> --%>
	    
	    
	    	   
	    <link rel="stylesheet" type="text/css" href="/resources/css/styles/cssgrid/theme.css" />
	  	<link href="/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/>
	  	<link rel="stylesheet" type="text/css" href="/resources/css/styles/bloganalisisCat.css" />
	  	 <link rel="stylesheet" type="text/css" href="/resources/css/styles/cssgrid/jsgrid.css" />
	    <script src="../external/jquery/jquery-1.8.3.js"></script>
	    <script src="/resources/js/jquery/jquery.min.js"></script>
	    <script src="/resources/js/jquery/bootstrap.min.js"></script>
	    <script src="/resources/js/scripts/admBlogUserCat.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.core.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.load-indicator.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.load-strategies.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.sort-strategies.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.text.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.number.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.select.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.checkbox.js"></script>
	    <script src="/resources/js/scripts/plug-ins/jsgrid/jsgrid.field.control.js"></script>

	</head>
	<body>
	 <h1>Adminitración Usuarios Cat</h1>
	 <div class="containerButton">
	 	<div class="form-group">
   			 		<label for="exampleInputEmail1">Nombre: </label>
    				<input type="text" class="form-control"  placeholder="Nombre" id="txtname">
 		</div>
 		<label for="exampleInputEmail1">Correo: </label>
		<div class="input-group">
  				
  				<input type="text" class="form-control" placeholder="Ingrese su correo"  id="txtmail">
  				<span class="input-group-addon" id="basic-addon2">@actinver.com.mx</span>
		</div>
	 
	
	 
	 
	 <input type="button" id="botonAdd" value="Agregar"/>
	 
	 <div class="alert alert-info fade in" id="msginfo">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Info!</strong> Ingrese los datos solictados.
  </div>
	 
	 </div>
	
	 
    <div id="jsGrid"></div>

    <script>
        $(function() {

            $("#jsGrid").jsGrid({
                height: "70%",
                width: "100%",
                filtering: true,
                editing: true,
                sorting: true,
                paging: true,
                autoload: true,
                pageSize: 10,
                pageButtonCount: 5,
                deleteConfirm: "¿Esta seguro que desea eliminar el usuario?",
                controller: db,
                fields: [
                    { name: "nombre", type: "text", width: 150 },
                    { name: "correo", type: "text", width: 150 },
                    { name: "usuario", type: "text", width: 200 },
                    
                    { name: "estatus", type: "text", width: 200 },
                    { type: "control" }
                ]
            });

        });
    </script>
	</body>
<!-- 	<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    height: 100%;
    padding: 10px;
    color: #262626;
    font-family: 'Helvetica Neue Light', 'Open Sans', Helvetica;
    font-size: 14px;
    font-weight: 300;
}

h1 {
    margin: 0 0 8px 0;
    font-size: 24px;
    font-family: 'Helvetica Neue Light', 'Open Sans', Helvetica;
    font-weight: 300;
}

h2 {
    margin: 16px 0 8px 0;
    font-size: 18px;
    font-family: 'Helvetica Neue Light', 'Open Sans', Helvetica;
    font-weight: 300;
}

ul {
    list-style: none;
}

a {
    color: #2ba6cb;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
    color: #258faf;
}

input, button, select {
    font-family: 'Helvetica Neue Light', 'Open Sans', Helvetica;
    font-weight: 300;
    font-size: 14px;
    padding: 2px;
}

.navigation {
    width: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 10px;
    border-right: 1px solid #e9e9e9;
}

.navigation li {
    margin: 10px 0;
}

.demo-frame {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 200px;
}

iframe[name='demo'] {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
}

#txtmail{
	
	margin-left: 23px;
	float: left;
}
#maillb{
	margin-left: 10px;
    float: left;
}
#namelb{
margin-left: 10px;
    float: left;
}	
	

#botonAdd{
     width: 60px;
    margin-top: 20px;
    margin-left: 20px;
}
.form-control{
	margin-left: 23px;
	width: 30%;
}
.input-group{
width: 30%;
}
.input-group-addon{
width: 40%;
}
	
	</style> -->
</html>
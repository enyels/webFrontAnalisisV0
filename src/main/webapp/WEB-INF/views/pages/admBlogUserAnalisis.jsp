<!DOCTYPE html>
<html lang="es">
  	<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>
	    
	
	    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600,400' rel='stylesheet' type='text/css'>
	
	    <link rel="stylesheet" type="text/css" href="/resources/css/styles/cssgrid/jsgrid.css" />
	    <link rel="stylesheet" type="text/css" href="/resources/css/styles/cssgrid/theme.css" />
	   <!--  //<script src="../external/jquery/jquery-1.8.3.js"></script> -->
	    <script src="/resources/js/jquery/jquery.min.js"></script>
	    <script src="/resources/js/scripts/admBlogUserAnalisis.js"></script>
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
	    
<%-- 	    	    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/cssgrid/jsgrid.css" />
	    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/styles/cssgrid/theme.css" />
	   <!--  //<script src="../external/jquery/jquery-1.8.3.js"></script> -->
	    <script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script>
	    <script src="<%=request.getContextPath()%>/resources/js/scripts/admBlogUserAnalisis.js"></script>
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




	</head>
	<body>
	 <h1>Adminitracion Analistas</h1>
	
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
                pageSize: 5,
                pageButtonCount: 5,
                deleteConfirm: "Esta seguro que quiere borrar el registro del analista?",
                controller: db,
                fields: [
                    { name: "nombre", type: "text", width: 150 },
                    { name: "correo", type: "text", width: 150 },
                    { name: "usuario", type: "hidden", width: 200 },
                    
                    { name: "estatus", type: "text", width: 200 },
                    { type: "control" }
                ]
            });

        });
    </script>
	</body>
	<style>
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
#txtname{
margin-left: 25px;
    float: left;
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
	
.dvmail{
margin-top: 10px;
margin-bottom: 20px
}	
#botonAdd{
 width: 60px;
}
	
	</style>
</html>
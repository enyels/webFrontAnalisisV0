<!DOCTYPE html>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html lang="es">
	<head>

		
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="-1" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>Listas de distribuci�n</title>
    <link rel="shortcut icon" href="imagenes/favicon.ico">
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/js/scripts/listas/angular-1.2.11/docs/components/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/js/scripts/listas/css/app.css">
    <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/css/styles-movile.css" rel="stylesheet">
  <%--   <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/css/font-awesome.min.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/css/jquery.mmenu.all.css" rel="stylesheet"> --%>
    <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/css/listasDist.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/ngtable/ng-table.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/nggrid/ng-grid.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/css/loading-bar.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/js/scripts/listas/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
		
		
		

 	        
 	
		
		

</head>


<body>
<!-- directive:init-private -->
<div class="container_g">
    <!-- Gray -->
    <h4><i class="fa fa-search" id="userAdd"></i>&nbsp;Busqueda</h4>
    <hr class="featurette-divider">
    <section class="jumbotron">
           
            
        <form action="#" data-ng-submit="initBusqueda($event)" name="formSearch">



            <div class="row">
                <div class="form-group">
                 <label class="control-label">Tipo de Cliente:</label>&nbsp &nbsp


            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">                
			<strong>
                <input class="control-label" type="radio" name="somethign" value="1"  ng-model="checkboxSelection"/> Clientes (Perfil 0,1,2,3)
                <input class="control-label" type="radio" name="somethign" value="2" ng-model="checkboxSelection"/> Institucionales, Partner y Asesoria
           	</strong>
            </div>
   
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <a href="#/altaNoClientes" class="pull-right btn"><i class="fa fa-plus-circle"></i> Agregar nuevo cliente</a>
                    </div>
                </div>
                
                <div class="form-group">
                 <div class="col-sm-4 col-xs-12">
                  <label>Búsqueda por correo</label>
                 </div>
                 
                 <div class="col-sm-4 col-xs-12">
                  <label>Búsqueda por nombre</label>
                 </div>
                 
                 <div class="col-sm-4 col-xs-12">
                  <label>Búsqueda por contrato</label>
                 </div>
                </div>
                
                <div class="form-group" ng-class="{'has-error':valid===false}">
                    <div class="col-sm-4 col-xs-12">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input type="text" placeholder="Búsqueda por correo" id="email" ng-change="validateEmail()" ng-model="correo" name="nCorreo" class="form-control">
                        </div>
                        <span class="text-danger" ng-show="emailError">Email no valido!</span>
                    </div>			
					 
					
					<div class="col-sm-4 col-xs-12">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <input type="text" placeholder="Búsqueda por nombre" id="nombre" ng-model="nombre" name="nNombre" class="form-control"  ng-change="onlyLet(event)">
                        </div>
                           <span class="text-danger" ng-show="nombreError">Nombre no valido!</span>
                    </div>
                    
	                <div class="col-sm-4 col-xs-12" ng-show="isCheckboxSelected('1')">
	                    <div class="input-group">
	                        <span class="input-group-addon"><i class="fa fa-list"></i></span>
	                        <input ng-keypress="onlyNumber(evt)" type="text" placeholder="Búsqueda por Contrato" ng-model="cliente" name="nCliente" class="form-control">
	                    </div>
	               </div>
					
                </div>
                
            </div>
            <div class="btn-toolbar">
                <button class="btn btn-success">Buscar</button>
            </div>
        </form>
    </section>
</div>
<!--Fin Gray-->
<!-- Resultados -->

<div class="container_w ng_scope" id="gridBusqueda" style="display:none">
    <div>
        <h5 class="text-info">Resultados de búsqueda 
        <label class="control-label" ng-show="isCheckboxSelected('1')"> de Clientes (Perfil 0,1,2,3)</label>
        <label class="control-label" ng-show="isCheckboxSelected('2')"> de Institucionales, Partner y Asesoria</label>
        </h5><hr class="featurette-divider">
    </div>

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Tipo registro</th> 
                    <th>No. de cliente</th>
                    <th>No. de contrato</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Perfil</th>
                    <th>Tipo de envío</th>
                    <th>Idioma</th>
                    <th class="center">Alta/Modificar</th>
                </tr>
            </thead>
            <tr ng-repeat="datos in resultados">
                <td ng-show="datos.registrado === 1">Registrado</td><td ng-show="datos.registrado === 0">No Registrado</td> 
                <td>{{datos.numCliente}}</td>
                <td>{{datos.numContrato}}</td>
                <td>{{datos.nombre}}</td>
                <td>{{datos.email}}</td>
                <td>{{datos.idPerfilVenta.id}}</td>
                <td>{{datos.contenidoAcceso}}</td>
                <td>{{datos.idioma.nombre}}</td>
                <td class="center">
                    <a href="javascript: void(0);" ng-click="goEdit(datos)">                    
                    <i class="fa fa-arrow-right fa-green" ng-show="datos.registrado === 0"></i>
                    <i class="fa fa-pencil fa-yellow" ng-show="datos.registrado === 1"></i>
                    </a>
                </td>
            </tr>
        </table>
    </div>

</div>
<!--Fin White-->
<!-- Fin Tabla Consulta -->
 <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/jquery1_10.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/angular-1.2.11/angular.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/angular-1.2.11/angular-route.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/angular-1.2.11/angular-animate.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/angular-1.2.11/docs/components/bootstrap/js/bootstrap.js"></script>
<!--     <script src="js/jquery.mmenu.min.all.js"></script>
    <script src="js/mainMenu.js" type="text/javascript"></script> -->
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/angular-1.2.11/i18n/angular-locale_es-mx.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/loading-bar.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/ui-utils-0.1.1/ui-utils.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/require.js" data-main="<%=request.getContextPath()%>/resources/js/scripts/jslist/main"></script>
 
     <%-- <script src="<%=request.getContextPath()%>/resources/js/scripts/jslist/controllers/listasdist/busqueda/busquedaController.js"></script> --%>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/placeholder/jquery.html5-placeholder-shim.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/scripts/listas/bootstrap-datetimepicker.min.js"></script>
   


</body>
</html>
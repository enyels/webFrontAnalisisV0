<!DOCTYPE html>
<html lang="es"> 
  	<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>Grupo financiero Actinver</title>
<!-- Bootstrap core CSS -->
 
 <link href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="https://www.actinver.mx/cs/Actinver/css/main.css">



<%-- 		
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/plugins/token-input.css" type="text/css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/plugins/token-input-facebook.css" type="text/css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/plugins/token-input-mac.css" type="text/css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">	
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/calculadora.css" rel="stylesheet">	
<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/angular.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/jquery/sockjs-0.3.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/jquery/stomp.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.tokeninput.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/scripts/calculadoraFinanciera.js"></script> --%>


		
<link rel="stylesheet" href="/resources/css/styles/plugins/token-input.css" type="text/css" />
<link rel="stylesheet" href="/resources/css/styles/plugins/token-input-facebook.css" type="text/css" />
<link rel="stylesheet" href="/resources/css/styles/plugins/token-input-mac.css" type="text/css" />
<link rel="stylesheet" href="/resources/css/bootstrap.css" rel="stylesheet">	
<link rel="stylesheet" href="/resources/css/styles/calculadora.css" rel="stylesheet">	
<script src="/resources/js/jquery/jquery.min.js"></script>
<script src="/resources/js/scripts/plug-ins/angular.min.js"></script>
<script src="/resources/js/jquery/sockjs-0.3.js"></script>
<script src="/resources/js/jquery/stomp.js"></script>

<script type="text/javascript" src="/resources/js/scripts/plug-ins/jquery.tokeninput.js"></script>
<script type="text/javascript" src="/resources/js/scripts/calculadoraFinanciera.js"></script>


</head>
<body ng-app="App" ng-controller="angularCtrl" id="angularData">
	<div>
		<div id='containerTop'>
			<div id='leftCon' style='float: left;'><input type="text" id="demo-input-local" name="blah" /></div>
			<div id='rightCon' style='float: left;'><input type="button" value="" id="miboton" /></div>
			<div id='rightCon2' style='float: left; margin-left: 20px;'><button type="button" class="btn btn-primary" id="emisorabtn" ></button></div>
		</div>	
			
		<label class="messageError"><span class="msgError"></span></label>
	</div>
	<br>

	<div class="contenedor">
	<br>
		<div id="contenedorTitle">
			<div id="title" style="font-weight: bold; font-size: 15px; float:left; margin-right: 10px;" ></div>	
		</div>
		<br>
		<br>
		<div class="tablas">
			<div class="row">
				<div class="col-md-2">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Datos Intradía</h3>
						</div>
						<div class="panel-body">
							<div id="listaTabla"></div>
							<div id="listaTablaHistoricos"></div>
						</div>
					</div>
						<ul style="list-style-type:none;  text-align:left; padding-left: 0px;">
  <li>*Millones de Acciones</li>
  <li>**Millones de Pesos.</li>

</ul>
				</div>
				<div class="col-md-3">
				<div class="panel panel-primary"> 
						<div class="panel-heading">
							<h3 class="panel-title">Información Periódica</h3>
						</div>
				<div class="panel-body"> 
							<div id="tablePeriodicInformation" >
												<table>
                                                                        <tr>
                                                                            <td class="tituloCol">Precio máximo 52 semanas($)'</td>
                                                                            <td class="resulBold2" id="precioMax52"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Fecha máximo 52 semanas'</td>
                                                                            <td class="resulBold2" id="fechaMax12mes"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Cambio vs máximo(%)</td>
                                                                            <td class="resulBold2" id="cambioMax"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Precio mínimo 52 semanas($)'</td>
                                                                            <td class="resulBold2" id="min12meses"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Fecha mínimo 52 semanas'</td>
                                                                            <td class="resulBold2" id="fechaMin12"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Cambio vs mínimo(%)</td>
                                                                            <td class="resulBold2" id="cambioMinimo"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="tituloCol">Rendimiento 12 meses(%)</td>
                                                                            <td class="resulBold2" id="redDoceMeses"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="tituloCol">Rendimiento YTD(%)</td>
                                                                            <td class="resulBold2" id="redYTD"></td>
                                                                        </tr>
                                                                        <tr>
                                                                        <td></td>
                                                                        </tr>
                                                                    </table>
							</div>
							
						</div>
						
					</div> 
					'Considera precios de cierre hasta  del día hábil  inmediato anterior.
				</div>
				<div class="col-md-2">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Operatividad</h3>
						</div>
						<div class="panel-body">
						<div id="tableOperability">
						<table >
                                                                        <tr>
                                                                            <td class="tituloCol">Bursatilidad</td>
                                                                            <td class="resulBold" id ="bursativilidad" ></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Precio Obj.</td>
                                                                            <td class="resulBold" id="Volprom180d"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Rend (E)%</td>
                                                                            <td class="resulBold" id="Volprom90d"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Cap. Mcdo.**</td>
                                                                            <td class="resulBold" id="Volprom30d"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Acc. Circ.*</td>
                                                                            <td class="resulBold" id="Impprom180d"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Vol. Prom. 90d**</td>
                                                                            <td class="resulBold" id="Impprom90d"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="tituloCol">Imp. Prom. 90d**</td>
                                                                            <td class="resulBold" id="Impprom30d"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="tituloCol">Float(%)</td>
                                                                            <td class="resulBold" id="flotante"></td>
                                                                        </tr>
                                                                        <tr>
                                                                        <td></td>
                                                                        </tr>
                                                                    </table>
						</div>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title" id="panel_info">Información periódica+</h3>
						</div>
						<div class="panel-body">
							<div  class="table-responsive" id="tablefinancialinformation">
							 <table class="table">
                                                                        <tr >
                                                                            <td class="tituloColInfo"></td>
                                                                            <td  class="resulBoldHist">12 meses</td>
                                                                            <td class="resulBoldHist" id="anioAcc"></td>
                                                                            <td class="resulBoldHist">% YTD</td>
                                                                            <td class="resulBoldHist" id="headerP"></td>
                                                                            <td class="resulBoldHist">% a/a </td>
                                                                            <td class="resulBoldHist" id="actualY">2015 (e)</td>
                                                                            <td class="resulBoldHist" id="nextY">2016 (e)</td>
                                                                            <td class="resulBoldHist" id="moraY">2017 (e)</td>
                                                                        </tr>
                                                                         <tr >
                                                                            <td class="tituloColInfo" >C.Cre.Vig </td>
                                                                            <td class="vetastrid" id="ventas12m" ></td>
                                                                            <td class="vetastrid" id="ventasac" ></td>
                                                                            <td class="vetastrid" id="varacuventas" ></td>
                                                                            <td class="vetastrid" id="ventast" ></td>
                                                                            <td class="vetastrid" id="varvtast" ></td>
                                                                            <td class="vetastrid" id="vtase1"></td>
                                                                            <td class="vetastrid" id="vtase2"></td>
                                                                            <td class="vetastrid"  id="vtase3"></td>
                                                                        </tr>
                                                                         <tr>
                                                                           <td class="tituloColInfo" >Marg.Fin</td>
                                                                            <td class="vetastrid" id="ebitda12m"></td>
                                                                            <td class="vetastrid" id="ebitdaac"></td>
                                                                            <td class="vetastrid" id="varacuebitda"></td>
                                                                            <td class="vetastrid" id="ebitdat"></td>
                                                                            <td class="vetastrid"  id="varebitdat"></td>
                                                                            <td class="vetastrid" id="ebitdae1"></td>
                                                                            <td class="vetastrid"  id="ebitdae2"></td>
                                                                            <td class="vetastrid" id="ebitdae3"></td>
                                                                        </tr>
                                                                    
                                                                         <tr>
                                                                             <td class="tituloColInfo"> IngNoFin</td>
                                                                            <td id="utneta12m"></td>
                                                                            <td id="utnetaac"> </td>
                                                                            <td id="varacuutneta"></td>
                                                                            <td id="utnetat"></td>
                                                                            <td id="varutnett"></td>
                                                                            <td id="utnete1"></td>
                                                                            <td id="utnete2"></td>
                                                                            <td id="utnete3"></td>
                                                                        </tr>
                                                                    
                                                             
                                           
                                                             
                                                             
                                                             
                                                                          <tr>
                                                                            <td class="tituloColInfo" >Ut. Neta</td>
                                                                            <td class="vetastrid"  id="deudaneta12m"></td>
                                                                            <td class="vetastrid"  id="deudanetaac"></td>
                                                                            <td class="vetastrid" id="vardeudaneta"></td>
                                                                            <td class="vetastrid" id="deudanetat"></td>
                                                                            <td class="vetastrid" id="vardeudanetat"></td>
                                                                            <td class="vetastrid"  id="deunete1"></td>
                                                                            <td class="vetastrid" id="deunete2"></td>
                                                                            <td class="vetastrid" id="deunete3"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloColInfo">Cap.May.</td>
                                                                            <td id="capmay12m"></td>
                                                                            <td id="capitalmayac"></td>
                                                                            <td id="varaccapmay"></td>
                                                                            <td id="capitalmayt"></td>
                                                                            <td id="varcapmayt"></td>
                                                                            <td id="capmaye1"></td>
                                                                            <td id="capmaye2"></td>
                                                                            <td id="capmaye3"></td>
                                                                        </tr>
                                                                        <tr>
                                                                             <td class="tituloColInfo">UPA</td>
                                                                             <td id="upa12m"></td>
                                                                            <td id="upaacu"></td>
                                                                            <td id="varacuupa"></td>
                                                                            <td id="upat"></td>
                                                                            <td id="varupat"></td>
                                                                            <td id="upae1"></td>
                                                                            <td id="upae2"></td>
                                                                            <td id="upae3"></td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td class="tituloColInfo">VL</td>
                                                                            <td id="vl12m"></td>
                                                                            <td id="vlacu"></td>
                                                                            <td id="varacvl"></td>
                                                                            <td id="vlt"></td>
                                                                            <td id="varvlt"></td>
                                                                            <td id="vle1"></td>
                                                                            <td id="vle2"></td>
                                                                            <td id="vle3"></td>
                                                                        </tr>
                                                                       <tr class="delspace"><td></td> </tr>
                                                                        <tr class="delspace"><td></td> </tr>
                                                                         <tr class="delspace"><td></td> </tr>
                                                                      
                                                                    </table>
                                                                
							</div>
							 
						</div>
						   
					</div>
					<p>+Cifras en millones de pesos, excepto por Acción.</p>
				</div>
			
			</div>
				
			<div class="row">
				<div class="col-md-3">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Múltiplos historicos</h3>
						</div>
						<div class="panel-body">
							<table>
								<tr class="trHead">
									<td class="resulSegL">Múltiplo</td>
									<td class="resulSeg3">Últimos 3 años</td>
									<td class="resulSeg3">Últimos 12 Meses</td>
								</tr>
								<tr>
									<td class="resulSegL">P/U</td>
									<td class="resulSeg3" id="puprom3"></td>
									<td class="resulSeg3" id="pu12m"></td>
								</tr>
							
								<tr>
									<td class="resulSegL">P/VL</td>
									<td class="resulSeg3" id="pvlprom3"></td>
									<td class="resulSeg3" id="pvl12m"></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Múltiplos Actinver</h3>
						</div>
						<div class="panel-body">
							<table >
								<tr class="trHead">
									<td class="resulSegL">Múltiplo</td>
									<td class="resulSeg">2015 (e)</td>
									<td class="resulSeg">2016 (e)</td>
									<td class="resulSeg">2017 (e)</td>

								</tr>
								<tr>
									<td class="resulSegL">P/U</td>
									<td class="resulSeg" id ="actualyearPU"></td>
									<td class="resulSeg" id="nextyearPU"></td>
									<td class="resulSeg" id ="nextmorePU"></td>
								</tr>
							
								<tr>
									<td class="resulSegL">P/VL</td>
									<td class="resulSeg" id ="actualyearVL"></td>
									<td class="resulSeg" id ="nextyearVL"></td>
									<td class="resulSeg" id ="nextmoreVL"></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Múltiplos Consenso++</h3>
						</div>
						<div class="panel-body">
							<table>
								<tr class="trHead">
									<td class="resulSegL">Múltiplo</td>
									<td class="resulSeg">2015 (e)</td>
									<td class="resulSeg">2016 (e)</td>
									<td class="resulSeg">2017 (e)</td>

								</tr>
								<tr>
									<td class="resulSegL">P/U</td>
									<td class="resulSeg" id="upacon1"></td>
									<td class="resulSeg" id="upacon2"></td>
									<td class="resulSeg" id="upacon3"></td>
								</tr>
							
								<tr>
									<td class="resulSegL">P/VL</td>
									<td class="resulSeg" id="vlcon1"></td>
									<td class="resulSeg" id="vlcon2"></td>
									<td class="resulSeg" id="vlcon3"></td>
								</tr>
							</table>
						</div>
						
						
					</div>
					<p>++Consenso de mercado. Fuente: Bloomberg</p>
				</div>
				<div class="col-md-3">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Premio/Descuento Actinver vs Consenso</h3>
						</div>
						<div class="panel-body">
							<table >
								<tr class="trHead">
									<td class="resulSegL">Múltiplo</td>
									<td class="resulSeg">2015 (e)</td>
									<td class="resulSeg">2016 (e)</td>
									<td class="resulSeg">2017 (e)</td>
								</tr>
								<tr>
									<td class="resulSegL">P/U</td>
									<td class="resulSeg"  id="despu1"></td>
									<td class="resulSeg"  id="despu2"></td>
									<td class="resulSeg"  id="despu3"></td>
								</tr>
							
								<tr>
									<td class="resulSegL">P/VL</td>
									<td class="resulSeg" id="desvl1"></td>
									<td class="resulSeg" id="desvl2"></td>
									<td class="resulSeg" id="desvl3"></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

</body>
<style>
.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td{
border-top: 1px solid #ffffff;
padding: 2px;
width: 100px;
}
@media (min-width: 992px)
.col-md-3 {
  width: 10%;
}
@media (min-width: 992px)
.col-md-5 {
  width: 10%;
}
@media(max-width:60px){
.col-md-3 
  width: 10%;

}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 10px; 
  padding-right: 10px;
}

.resulSegL {

  width: 22%;

}
.panel-primary {

  margin-bottom: 0px;
}
li.token-input-token {
 size:16px;
 font-family: Source Sans Pro;
  overflow: hidden;
  height: auto !important;
  height: 1%;
  margin: 3px;
  padding: 3px 5px;
  background-color: #FDD10A  ;
  color: #001223;
  font-weight: bold;
  cursor: default;
  display: block;.width(100).height(200);
}
li.token-input-selected-token {
    background-color: #fef1b5;
    color: #fef1b5;
}
div.token-input-dropdown ul li.token-input-selected-dropdown-item {
    background-color: #fef1b5;
}


</style>

</html>
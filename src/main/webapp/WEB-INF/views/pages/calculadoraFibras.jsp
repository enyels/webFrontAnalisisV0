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



		
<%-- <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/plugins/token-input.css" type="text/css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/plugins/token-input-facebook.css" type="text/css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/plugins/token-input-mac.css" type="text/css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">	
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/styles/calculadora.css" rel="stylesheet">	
<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/angular.min.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/jquery/sockjs-0.3.js"></script>
<script src="<%=request.getContextPath()%>/resources/js/jquery/stomp.js"></script>

<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.tokeninput.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/scripts/calculadoraFibras.js"></script>
 --%>

		
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
<script type="text/javascript" src="/resources/js/scripts/calculadoraFibras.js"></script>


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
                                                                            <td class="tituloCol" id="titlePrecioObj"></td>
                                                                            <td class="resulBold" id="PrecioObj"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Rend (E)%</td>
                                                                            <td class="resulBold" id="rend"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Cap. Mcdo.**</td>
                                                                            <td class="resulBold" id="capmcdo"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Acc. Circ.*</td>
                                                                            <td class="resulBold" id="acccirc"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloCol">Vol. Prom. 90d**</td>
                                                                            <td class="resulBold" id="volprom90d"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="tituloCol">Imp. Prom. 90d**</td>
                                                                            <td class="resulBold" id="Impprom90d"></td>
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
                                                                            <td  class="resulBoldHist" id="anioAcc"></td>
                                                                            <td class="resulBoldHist" >% TsT</td>
                                                                            <td class="resulBoldHist">% AsA</td>
                                                                            <td class="resulBoldHist" id="actualY">2015 (e)</td>
                                                                            <td class="resulBoldHist" id="nextY">2016 (e)</td>
                                                                            <td class="resulBoldHist" id="moraY">2017 (e)</td>
                                                                        </tr>
                                                                         <tr >
                                                                            <td class="tituloColInfo" >Ingresos </td>
                                                                            <td class="vetastrid" id="ingTrim" ></td>
                                                                            <td class="vetastrid" id="ingVarTrim" ></td>
                                                                            <td class="vetastrid" id="ingVarAa" ></td>
                                                                            <td class="vetastrid" id="ingE1"></td>
                                                                            <td class="vetastrid" id="ingE2"></td>
                                                                            <td class="vetastrid"  id="ingE3"></td>
                                                                        </tr>
                                                                         <tr>
                                                                           <td class="tituloColInfo" >NOI</td>
                                                                       
                                                                            <td class="vetastrid" id="noiTrim"></td>
                                                                            <td class="vetastrid" id="noiVarTrim"></td>
                                                                            <td class="vetastrid"  id="noiVarAa"></td>
                                                                            <td class="vetastrid" id="noiE1"></td>
                                                                            <td class="vetastrid"  id="noiE2"></td>
                                                                            <td class="vetastrid" id="noiE3"></td>
                                                                        </tr>
                                                                    
                                                                         <tr>
                                                                             <td class="tituloColInfo">EBITDA</td>
                                                                   
                                                                            <td id="ebitTrim"></td>
                                                                            <td id="ebitVarTrim"></td>
                                                                            <td id="ebitVarAa"></td>
                                                                            <td id="ebitE1"></td>
                                                                            <td id="ebitE2"></td>
                                                                            <td id="ebitE3"></td>
                                                                        </tr>
                                                                    
                                                             
                                                                          <tr>
                                                                            <td class="tituloColInfo" >FFO</td>
                                                                       
                                                                            <td class="vetastrid" id="ffoTrim"></td>
                                                                            <td class="vetastrid" id="ffoVarTrim"></td>
                                                                            <td class="vetastrid" id="ffoVarAa"></td>
                                                                            <td class="vetastrid"  id="ffoE1"></td>
                                                                            <td class="vetastrid" id="ffoE2"></td>
                                                                            <td class="vetastrid" id="ffoE3"></td>
                                                                        </tr>
                                                                         <tr>
                                                                            <td class="tituloColInfo">Deuda N.</td>
                                                                        
                                                                            <td id="dnetTrim"></td>
                                                                            <td id=""></td>
                                                                            <td id=""></td>
                                                                            <td id="dnetE1"></td>
                                                                            <td id="dnetE2"></td>
                                                                            <td id="dnetE3"></td>
                                                                        </tr>
                                                                        <tr>
                                                                             <td class="tituloColInfo">Div/CBFI</td>
                                                                     
                                                                            <td id="divTrim"></td>
                                                                            <td id="divVarTrim"></td>
                                                                            <td id="divVarAa"></td>
                                                                            <td id="divE1"></td>
                                                                            <td id="divE2"></td>
                                                                            <td id="divE3"></td>
                                                                        </tr>
                                                                  
                                                                       <tr class="delspace"><td></td> </tr>
                                                                        <tr class="delspace"><td></td> </tr>
                                                                         <tr class="delspace"><td></td> </tr>
                                                                      
                                                                    </table>
                                                                
							</div>
							 
						</div>
						   
					</div>
					<p>+Cifras en millones de pesos, excepto por CBFI.</p>
				</div>
			
			</div>
				
				
	
				
				
				
			<div class="row" id="rowbutton">
				<div class="col-md-5">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Retornos Esperados Actinver</h3>
						</div>
						<div class="panel-body">
							<table class="table" id="tblretorno">
								<tr class="trHead">
									<td class="aniotitle"></td>
									<td class="anioref">2015 (e)</td>
									<td class="anioref">2016 (e)</td>
									<td class="anioref">2017 (e)</td>
								</tr>
								<tr>
									<td class="tituloColInfo">NOI Cap Rate</td>
									<td  id="noiCapRateE1"></td>
									<td  id="noiCapRateE2"></td>
									<td  id="noiCapRateE3"></td>
								</tr>
							
								<tr>
									<td   class="tituloColInfo">Adj Cap Rate</td>
									<td  class="anioref" id="adjCapRateE1"></td>
									<td  class="anioref" id="adjCapRateE2"></td>
									<td  class="anioref" id="adjCapRateE3"></td>
								</tr>
								<tr>
									<td class="tituloColInfo">FFO Yield</td>
									<td  class="anioref" id="ffoYieldE1"></td>
									<td  class="anioref" id="ffoYieldE2"></td>
									<td  class="anioref" id="ffoYieldE3"></td>
								</tr>
								<tr>
									<td  class="tituloColInfo">Div Yield</td>
									<td class="anioref"  id="divYeldE1"></td>
									<td class="anioref"  id="divYeldE2"></td>
									<td class="anioref"  id="divYeldE3"></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">Retorno Div. Esp. /Consenso /Benchmarks **</h3>
						</div>
						<div class="panel-body">
							<table class="table" id="tblretorno">
								<tr class="trHead">
									<td ></td>
									<td >2015 (e)</td>
									<td >2016 (e)</td>
									<td >2017 (e)</td>

								</tr>
								<tr>
									<td class="tituloColInfo">Div Yield Consenso.</td>
									<td  id ="divyE1"></td>
									<td  id="divyE2"></td>
									<td  id ="divyE3"></td>
								</tr>
							
								<tr>
									<td class="tituloColInfo">Spread vs. Consenso.</td>
									<td id ="spreadConsE1"></td>
									<td id ="spreadConsE2"></td>
									<td id ="spreadConsE3"></td>
								</tr>
								<tr>
									<td class="tituloColInfo" id= "titleEmi"></td>
									<td  id ="benchE1"></td>
									<td  id ="benchE2"></td>
									<td  id ="benchE3"></td>
								</tr>
								<tr>
									<td class="tituloColInfo">Spread vs. Bench.L</td>
									<td id ="spreadVsBrench1"></td>
									<td  id ="spreadVsBrench2"></td>
									<td  id ="spreadVsBrench3"></td>
								</tr>
							</table>
						</div>
					</div>
						<ul style="list-style-type:none;  text-align:left; padding-left: 0px;">
							<li>**Consenso de Mercado.</li>
							<li>Notas: El plazo del udibono es 10 años.</li>
						</ul>
				</div>
			 
			
			</div>

		</div>
	</div>

</body>
<style>
#rowbutton{
padding-left: 15%; 

}
.anioref{

width: 23%;
}
.aniotitle{
width: 30%;

}

.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td{
border-top: 1px solid #ffffff;
padding: 3px;
width: 210px;
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
#tblretorno{

    margin-bottom: 0px;
    }

</style>

</html>
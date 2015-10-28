<!DOCTYPE html>
<html lang="es"> <!-- Opcionalmente <html ng-app> -->
  	<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>
<%-- 	    <link href="<%=request.getContextPath()%>/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css"> --%>
<%-- 	   	<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet" type="text/css" /> --%>
<%-- 	    <link href="<%=request.getContextPath()%>/resources/css/estilosApps.css" rel="stylesheet" type="text/css"/> --%>
   		<link href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" />
	    <link href="/resources/css/bootstrap.css" rel="stylesheet" type="text/css" />
	    <link href="/resources/css/estilosApps.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
	
<!-- 	<div ng-app="appGlobal" ng-controller="ctmCtrl">Aqui Angular</div> -->
	
		<div class="divWrapper">
			<table id="tipoCambioTab" class="tablesTops">
				<colgroup>
					<col style="width: 35%;">
					<col style="width: 6%;">
					<col style="width: 25%;">
					<col style="width: 34%;">
				</colgroup>
				<thead>
					<tr>
						<th colspan="4" class="headerTops forSubTitles">Tipo de cambio al d&iacute;a</th>
					</tr>
				</thead>
				<tbody class="forText">
					<tr>
						<td class='regEstilo forSubTitles'><small>Divisas y Metales</small></td>
						<td></td>
						<td class='regEstilo forSubTitles'><small>Compra</small></td>
						<td class='regEstilo forSubTitles'><small>Venta</small></td>
					</tr>
					<!-- Aqui filas dinamicas Tipo Cambio-->
					<tr>
						<td class='regEstilo'><i class="img-dollar"></i>&nbsp; D&oacute;lar</td>
						<td></td>
						<td class='regEstilo'><span id="pcDol" class="formatD"></span></td>
						<td class='regEstilo'><span id="pvDol" class="formatD"></span></td>
					</tr>
					<tr>
						<td class='regEstilo'><i class="img-euro"></i>&nbsp; Euro</td>
						<td></td>
						<td class='regEstilo'><span id="pcEur" class="formatD"></span></td>
						<td class='regEstilo'><span id="pvEur" class="formatD"></span></td>
					</tr>
					<tr>
						<td class='regEstilo'><i class="img-platalib"></i>&nbsp; Libra Esterlina</td>
						<td></td>
						<td class='regEstilo'><span id="pcPla" class="formatD"></span></td>
						<td class='regEstilo'><span id="pvPla" class="formatD"></span></td>
					</tr>	
<!-- 					<tr> -->
<!-- 						<td class='regEstilo'><i class="img-orocen"></i>&nbsp; Oro Centenario</td> -->
<!-- 						<td></td> -->
<!-- 						<td class='regEstilo'><span id="pcCen" class="formatD"></span></td> -->
<!-- 						<td class='regEstilo'><span id="pvCen" class="formatD"></span></td> -->
<!-- 					</tr>						 -->
				</tbody>
			</table>
			<small class="msgTicker">*Fuente de informaci&oacute;n Infosel<br>(Tipo de cambio Interbancario).</small>
			<br>

			<table id="cotTab" class="tablesTops">
				<colgroup>
					<col style="width: 43%;">
					<col style="width: 16%;">
					<col style="width: 7%;">
					<col style="width: 34%;">
				</colgroup>
				<thead>
					<tr>
						<th class="headerTops forSubTitles">Cotizaciones</th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody class="forText">
					<!-- Aqui filas dinamicas Cotizaciones-->
					<tr>
						<td class='regEstilo'><span id="priCotName"></span></td>
						<td class="app1"><span class="valPri"></span></td>
					</tr>
					<tr>
						<td class='regEstilo'><span id="segCotName"></span></td>
						<td class="app2"><span class="valSeg"></span></td>
					</tr>
					<tr>
						<td class='regEstilo'><span id="terCotName"></span></td>
						<td class="app3"><span class="valTer"></span></td>
					</tr>
					<tr>
						<td class='regEstilo'><span id="cuaCotName"></span></td>
						<td class="app4"><span class="valCua"></span></td>
					</tr>
					<tr>
						<td class='regEstilo'><span id="quiCotName"></span></td>
						<td class="app5"><span class="valQui"></span></td>
					</tr>	
				</tbody>
			</table>
			<small class="msgTicker">*Fuente de informaci&oacute;n Infosel.</small>
			<small class="msgTicker">*Precios al cierre, IPC con 20 minutos de retraso.</small>
			<br>
			<table id="topMasTab" class="tablesTops">
				<colgroup>
					<col style="width: 35%;">
					<col style="width: 6%;">
					<col style="width: 25%;">
					<col style="width: 34%;">
				</colgroup>
				<thead>
					<tr>
						<th colspan="4" class="headerTops forSubTitles">Mayores Alzas</th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody class="forText">
					<!-- Aqui filas dinamicas Top Mas-->
					<tr>
						<td class="regEstilo emNamePlus00"></td>
						<td><div class="sinImg" style='width:17px; height:23px;'></div></td>
						<td class="regEstiloSpec emAverPlus00"style="color:#00A900"></td>
						<td class="regEstiloSpec emVarPlus00" style="color:#00A900"></td>
					</tr>
					<tr>
						<td class="regEstilo emNamePlus01"></td>
						<td><div class="sinImg" style='width:17px; height:23px;'></div></td>
						<td class="regEstiloSpec emAverPlus01"style="color:#00A900"></td>
						<td class="regEstiloSpec emVarPlus01" style="color:#00A900"></td>
					</tr>
					<tr>
						<td class="regEstilo emNamePlus02"></td>
						<td><div class="sinImg" style='width:17px; height:23px;'></div></td>
						<td class="regEstiloSpec emAverPlus02"style="color:#00A900"></td>
						<td class="regEstiloSpec emVarPlus02" style="color:#00A900"></td>
					</tr>
					<tr>
						<td class="regEstilo emNamePlus03"></td>
						<td><div class="sinImg" style='width:17px; height:23px;'></div></td>
						<td class="regEstiloSpec emAverPlus03"style="color:#00A900"></td>
						<td class="regEstiloSpec emVarPlus03" style="color:#00A900"></td>
					</tr>
					<tr>
						<td class="regEstilo emNamePlus04"></td>
						<td><div class="sinImg" style='width:17px; height:23px;'></div></td>
						<td class="regEstiloSpec emAverPlus04"style="color:#00A900"></td>
						<td class="regEstiloSpec emVarPlus04" style="color:#00A900"></td>
					</tr>
				</tbody>
			</table>
			<table id="topMenosTab" class="tablesTops">
				<colgroup>
					<col style="width: 35%;">
					<col style="width: 6%;">
					<col style="width: 25%;">
					<col style="width: 34%;">
				</colgroup>
				<thead>
					<tr>
						<th colspan="4" class="headerTops forSubTitles">Mayores Bajas</th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody class="forText">
					<tr>
						<td class="regEstilo emNameLess00"></td>
						<td><div class="sinImg" style="width:17px; height:23px;"></div></td>
						<td class="regEstiloSpec emAverLess00" style="color:#FF0000"></td>
						<td class="regEstiloSpec emVarLess00" style="color:#FF0000"></td>
					</tr>
					<tr>
						<td class="regEstilo emNameLess01"></td>
						<td><div class="sinImg" style="width:17px; height:23px;"></div></td>
						<td class="regEstiloSpec emAverLess01" style="color:#FF0000"></td>
						<td class="regEstiloSpec emVarLess01" style="color:#FF0000"></td>
					</tr>
					<tr>
						<td class="regEstilo emNameLess02"></td>
						<td><div class="sinImg" style="width:17px; height:23px;"></div></td>
						<td class="regEstiloSpec emAverLess02" style="color:#FF0000"></td>
						<td class="regEstiloSpec emVarLess02" style="color:#FF0000"></td>
					</tr>
					<tr>
						<td class="regEstilo emNameLess03"></td>
						<td><div class="sinImg" style="width:17px; height:23px;"></div></td>
						<td class="regEstiloSpec emAverLess03" style="color:#FF0000"></td>
						<td class="regEstiloSpec emVarLess03" style="color:#FF0000"></td>
					</tr>
					<tr>
						<td class="regEstilo emNameLess04"></td>
						<td><div class="sinImg" style="width:17px; height:23px;"></div></td>
						<td class="regEstiloSpec emAverLess04" style="color:#FF0000"></td>
						<td class="regEstiloSpec emVarLess04" style="color:#FF0000"></td>
					</tr>
				</tbody>
			</table>
		</div>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/angular.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.tablesorter.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.webticker.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/sockjs-0.3.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/stomp.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.currency.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/tickerNaWs.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/divMetv0.js"></script> --%>

		<script src="/resources/js/jquery/jquery.min.js"></script>
		<script src="/resources/js/jquery/jquery.tablesorter.js"></script>
		<script src="/resources/js/jquery/jquery.webticker.js"></script>
		<script src="/resources/js/jquery/sockjs-0.3.js"></script>
		<script src="/resources/js/jquery/stomp.js"></script>
		<script src="/resources/js/jquery/jquery.currency.js"></script>
		<script src="/resources/js/tickerNaWs.js"></script>
		<script src="/resources/js/divMetv0.js"></script>

		<!--[if lte IE 9]>
			<script type='text/javascript' src='/resources/js/jquery/jquery.xdomainrequest.min.js'></script>
		<![endif]-->

	</body>
</html>
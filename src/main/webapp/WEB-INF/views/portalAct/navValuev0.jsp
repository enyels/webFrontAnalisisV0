<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="es">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv='cache-control' content='no-cache'>
	<meta http-equiv='expires' content='0'>
	<meta http-equiv='pragma' content='no-cache'>
	<link href="/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/>
	<link href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css">
	<link href="/cs/Actinver/css/font-awesome-4.1.0/font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" />
	<link href="/resources/portalAct/css/estiloPortal.css" rel="stylesheet" type="text/css">
<%-- 		<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/> --%>
<%-- 		<link href="<%=request.getContextPath()%>/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css"> --%>
<!-- 		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" /> -->
<%-- 		<link href="<%=request.getContextPath()%>/resources/portalAct/css/estiloPortal.css" rel="stylesheet" type="text/css"> --%>
	</head>
	<body>
	
		<div class="wrapMainStation">
			<div class="wrapContenArea">
				<i id="loadNavValue" class="fa fa-cog fa-spin fa-3x fa-fw"></i>
				<table class="tableNavVal">
					<colgroup>
						<col style="width: 25%;">
						<col style="width: 15%;">
						<col style="width: 15%;">
						<col style="width: 10%;">
						<col style="width: 10%;">
						<col style="width: 25%;">
					</colgroup>
					<thead>
						<tr>
							<th class="tableHeaderTitle"></th>
							<th class="tableHeaderTitle">Cierre d&iacute;a anterior</th>
							<th class="tableHeaderTitle tabContentRight tablePadHead">Precio &Uacute;ltimo</th>
							<th class="tableHeaderTitle tabContentRight tablePadHead">Cambio $</th>
							<th class="tableHeaderTitle tabContentRight tablePadHead">Cambio %</th>
							<th class="tableHeaderTitle tabContentRight tablePadHead">Fecha</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="tableBodyMargen">NAV <i class="fa fa-info-circle"></i></td>
							<td class="tabContentRight">MXN $ <span id="lastPrice"></span> </td>
							<td id="closingPrice" class="tabContentRight tablePadBod"></td>
							<td id="changeMon" class="tabContentRight tablePadBod"></td>
							<td id="changePer" class="tabContentRight tablePadBod"></td>
							<td id="dateRq" class="tabContentRight tablePadBod"></td>
						</tr>
					</tbody>
				</table>
				<small class="msgTicker2">*Informaci&oacute;n con 20 minutos de retraso.</small>
			</div>			
		</div>
	
		<script src="/resources/js/jquery/jquery.min.js"></script>
		<script src="/resources/js/jquery/bootstrap.min.js"></script>
		<script src="/resources/portalAct/js/navValuev0.js"></script>	
<%-- 	<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 	<script src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 	<script src="<%=request.getContextPath()%>/resources/portalAct/js/navValuev0.js"></script>	 --%>
	</body>
</html>
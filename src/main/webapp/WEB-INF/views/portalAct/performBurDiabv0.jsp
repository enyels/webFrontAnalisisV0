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
	<link href="/resources/portalAct/css/estiloPortal.css" rel="stylesheet" type="text/css">
<%-- 	<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/> --%>
<%-- 	<link href="<%=request.getContextPath()%>/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css"> --%>
<%-- 	<link href="<%=request.getContextPath()%>/resources/portalAct/css/estiloPortal.css" rel="stylesheet" type="text/css"> --%>
	</head> 
<body>

		<div class="wrapMainStation">
			<div class="wrapContenArea">
				<table class="tablePerfo">
					<colgroup>
						<col style="width: 35%;">
						<col style="width: 2%;">						
						<col style="width: 15%;">
						<col style="width: 3%;">
						<col style="width: 15%;">
						<col style="width: 15%;">
						<col style="width: 15%;">
					</colgroup>
					<colgroup>
						<col style="width: 35%;">
						<col style="width: 2%;">						
						<col style="width: 15%;">
						<col style="width: 3%;">
						<col style="width: 15%;">
						<col style="width: 15%;">
						<col style="width: 15%;">
					</colgroup>
					<thead>
						<tr>
							<th colspan="1">&nbsp;</th>
							<th colspan="1">&nbsp;</th>
							<th colspan="1" class="tableHeaderTitle">Cambio Porcentual Diario</th>
							<th colspan="1">&nbsp;</th>
							<th colspan="3" class="tableHeaderTitle">Acumulado (%) DIABLOI</th>
						</tr>
						<c:forEach var="RetornoSmrt" items="${listObjRetornoD}"  begin="1" end="1">
						<tr>
							<th>${RetornoSmrt.fecha}</th>
							<th class="tableBodyCenter"></th>
							<th class="tableBodyCenter"></th>
							<th class="tableBodyCenter"></th>
							<th class="tableBodyCenter">Acumulado en el mes</th>
							<th class="tableBodyCenter">Acumulado 60 días</th>
							<th class="tableBodyCenter">Acumulado 90 días</th>
						</tr>
						</c:forEach>
					</thead>
					<tbody>
						<c:forEach var="oneTopTen" items="${listObjRetornoD}" begin="0" end="1">
						<tr>						
							<td class="tabContentLeft">${oneTopTen.titulo}  ${oneTopTen.indice}</td>
							<td class="tableBodyCenter boderCellReg"></td>
							<td class="tableBodyCenter boderCellReg">${oneTopTen.cambioPorc}%</td>
							<td class="tableBodyCenter boderCellReg"></td>
							<td class="tableBodyCenter boderCellReg">${oneTopTen.inicio}%</td>
							<td class="tableBodyCenter boderCellReg">${oneTopTen.ytd}%</td>
							<td class="tableBodyCenter boderCellReg">${oneTopTen.mesanterior}%</td>
						</tr>					
						</c:forEach>						
					</tbody>
				</table>
			</div>			
		</div>	

 	<script src="/resources/js/jquery/jquery.min.js"></script>
	<script src="/resources/js/jquery/bootstrap.min.js"></script>
<%-- 	<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 	<script src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
</body>
</html>
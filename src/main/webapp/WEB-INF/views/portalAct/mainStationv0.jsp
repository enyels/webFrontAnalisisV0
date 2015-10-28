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
				<table class="tableMainStation">
					<colgroup>
						<col style="width: 25%;">
						<col style="width: 50%;">
						<col style="width: 25%;">
					</colgroup>
					<thead>
						<tr>
							<th class="tableHeaderTitle">Emisora</th>
							<th class="tableHeaderTitle">Raz&oacute;n social</th>
							<th class="tableHeaderTitle">% del TRAC</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="oneTopTen" items="${listTopTen}">					
						<tr>
							<td class="tableBodyMargen">${oneTopTen.emisora}</td>
							<td class="tableBodyCenter">${oneTopTen.razonsocial}</td>
							<td class="tableBodyCenter">${oneTopTen.porcenttrac}%</td>
						</tr>					
						</c:forEach>									
					</tbody>
				</table>
			</div>
			
			<div class="wrapContenArea">
			</div>

		</div>
	
		<script src="/resources/js/jquery/jquery.min.js"></script>
		<script src="/resources/js/jquery/bootstrap.min.js"></script>
		<script src="/resources/portalAct/js/mainStationv0.js"></script>	
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/portalAct/js/mainStationv0.js"></script>	 --%>
	</body>
</html>
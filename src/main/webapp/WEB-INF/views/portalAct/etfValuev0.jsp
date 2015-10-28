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
						<col style="width: 30%;">
						<col style="width: 40%;">
						<col style="width: 30%;">
					</colgroup>
										<thead colspan="3">
					<c:forEach var="oneTopTen" items="${listETF}" begin="1" end="1">	
						<tr>
							<th colspan="3" class="titleContenAreaEtf">${oneTopTen.fecha}</th>
						</tr>	
						</c:forEach>					
					</thead>
					<thead >

						<tr>
							<th class="tableHeaderTitle"></th>
							<th class="tableHeaderTitle">EMISORAS</th>
							<th class="tableHeaderTitle">PESO</th>
						</tr>	
										
					</thead>
					<tbody>
						<c:forEach var="oneTopTen" items="${listETF}">					
						<tr>
							<td align="center" class="tableBodyMargen">${oneTopTen.valor}</td>
							<td align="center" class="tableBodyMargen">${oneTopTen.emisora}</td>
							<td align="center" class="tableBodyMargen">${oneTopTen.peso} %</td>
						</tr>					
						</c:forEach>									
					</tbody>
				</table>
			</div>
			
		</div>
	
  		<script src="/resources/js/jquery/jquery.min.js"></script>
		<script src="/resources/js/jquery/bootstrap.min.js"></script>
		<script src="/resources/portalAct/js/etfValuev0.js"></script>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/portalAct/js/etfValuev0.js"></script>	 --%>
	</body>
</html>
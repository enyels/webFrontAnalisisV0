<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
<%-- 	<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet" type="text/css"/> --%>
<%-- 	<link href="<%=request.getContextPath()%>/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css"> --%>
<%-- 	<link href="<%=request.getContextPath()%>/resources/portalAct/css/estiloPortal.css" rel="stylesheet" type="text/css"> --%>
	</head>
	<body>
	
		<div class="wrapMainStation">
			<div class="wrapContenArea">
				<i id="loadActNet" class="fa fa-cog fa-spin fa-3x fa-fw"></i>
				<table class="tableActivNet">
					<colgroup>
						<col style="width: 50%;">
						<col style="width: 50%;">
					</colgroup>
					<thead>
						<tr>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td id="titleActiv"></td>
							<td id="priceActiv"></td>
						</tr>
						<tr>
							<td id="dateActiv"></td>
							<td ></td>
						</tr>	
					</tbody>
				</table>
				<label  style="display:none" id="dateofc"></label>
			</div>		
		</div>
	
		<script src="/resources/js/jquery/jquery.min.js"></script>
		<script src="/resources/js/jquery/bootstrap.min.js"></script>
		<script src="/resources/portalAct/js/activoNetov0.js"></script>	
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script> --%>
<%-- 		<script src="<%=request.getContextPath()%>/resources/portalAct/js/activoNetov0.js"></script>	 --%>
	</body>
</html>
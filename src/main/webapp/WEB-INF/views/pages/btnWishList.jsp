<!DOCTYPE html>

<html lang="es">
  	<head>
	    <meta http-equiv="Content-Type" content="text/html;charset=utf-8;charset=iso-8859-1" />
	    <meta http-equiv='cache-control' content='no-cache'>
	    <meta http-equiv='expires' content='0'>
	    <meta http-equiv='pragma' content='no-cache'>
<%-- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" charset="UTF-8"></script> 
<script src="<%=request.getContextPath()%>/resources/js/jquery/jquery.min.js" charset="UTF-8"></script> --%>
 <link href="/resources/css/SourceSansPro.css" rel="stylesheet" type="text/css" />
<script src="/resources/js/jquery/jquery.min.js"></script>

	</head>
	<body id="principal" style="overflow: hidden; margin:0px">
			<a></a>
	<div id="conMensaje">
         <img src="/resources/images/img/icono_con.png" style="cursor:pointer"/>
     <%--     <img src="<%=request.getContextPath()%>/resources/images/img/icono_con.png"/> --%>
     </div>
      <div id="sinMensaje">
         <img src="/resources/images/img/icono_sin.png" style="cursor:pointer"/>
    <%--      <img src="<%=request.getContextPath()%>/resources/images/img/icono_sin.png"/> --%>
     </div>

<script src="/resources/js/scripts/btnWishList.js" ></script>
<%-- <script src="<%=request.getContextPath()%>/resources/js/scripts/btnWishList.js"></script> --%>

	</body>
<style>

.modal-footer{
 padding: 0px 0px 0px 0px;

}



.sub_header{
	height: 40px;
	padding: 0px 0px 0px 0px;
  	margin-bottom: 0px;
	margin-left: 0px;
	margin-right: 0px;
	margin-top: 0px;

}
.img_title{
	float: right;
	padding: 1px 0px 0px 0px;
	height: 35px;
	width: 110px;

	/*background-image: url("<%=request.getContextPath()%>/resources/images/img/logo.png");*/
	background-image: url("/resources/images/img/logo.png");
}
#fnCloseModal{
	font-size: 30px;
  	font-weight: bold;
  	line-height: 30px;
  	color: #FFFFFF;
  	text-shadow: 0 1px 0 #ffffff;
  	opacity: 0.8;
	margin-top: 0px;
    margin-bottom: 10px;
    margin-right: 5px;
    margin-left: 0px;
}
.modal-body{
	height: auto;
	margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;

}
.modal-title{
	color:#333333;
	font-family: Source Sans Pro;
	font-size: 18px;
	font-weight: bold;

}
.modal-content{
	padding: 0px 0px 0px 0px;

}

#inMensaje{
 	resize: none;
 }


</style>
	</html>

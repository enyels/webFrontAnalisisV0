
<link class="insMap02" rel="stylesheet" href="/resources/css/bootstrap.css">
<link class="insMap03" rel="stylesheet" href="/resources/css/styles/btnwhislist.css">

<%-- <link class="insMap02" rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/bootstrap.css">
<link class="insMap03" rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/estilosApps.css"> --%>

<div id="backModWish" class="modal fade insMap04" data-backdrop="static" data-keyboard="false" data-keyboard="false">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
			<button id="fnCloseModal" aria-hidden="true" data-dismiss="modal"
					class="close" type="button">&times;</button>
				<div class="sub_header">
				</div>
				<h2 class="modal-title">
					Wishlist
				</h2>
			</div>
			<div class="modal-body">
				<br class="separadorSM"> <br class="separadorSM">
				<textarea class="form-control" id="inMensaje" rows="6"
					placeholder="Ingresa el recordatorio." maxlength="200"></textarea>
					<div id="inMensajeD"></div>
					<div class="img_title"></div>
			</div>
			<div class="modal-footer">
					<div class="sub-footer"></div>
			</div>
		</div>
	</div>
</div>
<script class="insMap05" src="/resources/js/scripts/plug-ins/jquery.autoSave.min.js"></script>
<script class="insMap05" src="/resources/js/jquery/bootstrap.min.js"></script>
<script class="insMap06" src="/resources/js/scripts/formWishList.js"></script>

<%-- <script class="insMap05" src="<%=request.getContextPath()%>/resources/js/scripts/plug-ins/jquery.autoSave.min.js"></script>
<script class="insMap05" src="<%=request.getContextPath()%>/resources/js/jquery/bootstrap.min.js"></script>
<script class="insMap06" src="<%=request.getContextPath()%>/resources/js/scripts/formWishList.js"></script> --%>




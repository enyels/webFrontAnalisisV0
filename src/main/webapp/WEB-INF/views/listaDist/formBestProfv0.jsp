<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="container">
	<br>
	<label>Datos generales</label>
	<hr style="border: 2px solid #115EAC;">
</div>
<div class="container">
	<div class="col-xs-12 col-sm-4 col-md-6">
		<form>
			<div class="row">
				<div class="form-group col-sm-12 col-md-7">
					<label>Correo electr&oacute;nico</label>
					<div class="input-group">
						<div class="input-group-addon checkingEm">
							<i class="fa fa-envelope text-primary"></i>
						</div>
						<input type="email" class="form-control checkingEm realTimeEm" id="profEmail" value=""> 
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group col-sm-12 col-md-7">
					<label>T&eacute;rminos y condiciones</label>
					<div class="input-group">
						<span class="input-group-addon dangerInMap" id="backColorInTerm1">
							<input type="checkbox" aria-label="..." id="profTermAndCond">
						</span>
						<label class="form-control dangerInMap" id="backColorInTerm2" aria-label="..."><strong id="linkToTerminos" style="cursor: pointer;">Acepto t&eacute;rminos y condiciones</strong></label>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class="col-xs-12 col-sm-8 col-md-6">
		<div class="wrapTree">
			<label>Tipo de Env&iacute;o </label>
			<ul id="ulMainTree" class="list-group">
				<!-- Here::content dinamy -->
			</ul>
		</div>
		<div class="row" id="wrapErLstsSend" style="display: none;">
				<label style="color: #c60c30"><i class="fa fa-exclamation-triangle"></i>&nbsp;&nbsp;&nbsp; <strong id="textErr1"></strong></label>
		</div>
		<button type="button" class="btn btn-warning pull-right" data-loading-text="Guardando..." autocomplete="off" id="btnSaveTreMod" disabled="disabled">
			<i class="fa fa-disquette"></i>&nbsp; Guardar
		</button>
	</div>
</div>

<!-- <script src="/resources/js/jquery/progressbar.min.js"></script> -->
<!-- <script src="/resources/listaDist/js/formBestProfv0.js"></script> -->
<script src="resources/js/jquery/progressbar.min.js"></script>
<script src="resources/listaDist/js/formBestProfv0.js"></script>
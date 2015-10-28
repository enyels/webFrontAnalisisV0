$(document).ready(function(){
	$('#backModWish', top.document).modal('show');
	$('#backModWish', top.document).after('<div id="modwish" class="modal-backdrop fade in insMap01"></div>');
	$('#fnCloseModal', top.document).click(function(e){
		e.preventDefault();
		var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
				if (isiDevice==true)
				{
					validateData();
				}
		$('.insMap01', top.document).remove();
		$('.insMap02', top.document).remove();
		$('.insMap03', top.document).remove();
		$('.insMap04', top.document).remove();
		$('.insMap05', top.document).remove();
		$('.insMap06', top.document).remove();
		location.reload();
		
    });
	});

var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
if(isiDevice!=true){
    $("#inMensaje",top.document).autoSave(function() {
    	var time = showTime();
        validateData();
        $("#inMensajeD",top.document).text("Guardado..... " + time).show();
        $("#inMensaje",top.document).reload();
        $("#inMensajeD").text("");
    }, 1000);
    
}   

    $("#refresh").click(function() {
    	location.reload();
    });
    $("#clear").click(function() {
        localStorage.clear();
        location.reload();
    });

    function showTime() {
        var timeNow = new Date();
        var hours = timeNow.getHours();
        var minutes = timeNow.getMinutes();
        var seconds = timeNow.getSeconds();
        var timeString = "" + ((hours > 12) ? hours - 12 : hours);
        timeString += ((minutes < 10) ? ":0" : ":") + minutes;
        timeString += ((seconds < 10) ? ":0" : ":") + seconds;
        timeString += (hours >= 12) ? " P.M." : " A.M.";
        return timeString;
    }
	
function validateData(){
	var mensaje = $('#inMensaje', top.document).val();
	var usuarioparametro =$('#usuario',top.document).attr("value");
	var jsonData = {
			"usuario":usuarioparametro,
			"mensaje":mensaje
		};
	var dataBack;
	

	$.ajax({
        url: 'AdmCalendarController/getFrontCalendario',
        type : 'get',
		dataType : 'text',
		async: false,
        success: function (resp) {
        	dataBack = resp;
        },
        error: function () {
        	}
    }); 
	

	var base = dataBack;
		var urlRestWishInsert = base+ 'appsBackAnalisis/jaxrs/WhishListInfoRest/validaMessage';
		$.ajax({
			url :urlRestWishInsert,
			type : 'get',
			dataType : 'json',
			data : jsonData
		}).done(function(data) {
		}).fail(function() {
		});
	
}

	

	
	
	
	
	
	
	
	
	
	
	
	

	
	
	





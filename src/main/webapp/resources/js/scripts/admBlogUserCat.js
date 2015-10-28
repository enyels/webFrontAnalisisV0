//adminstrador de modificacion y eliminacion de usuarios cat
(function() {
    var db = {
        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.nombre || client.nombre.indexOf(filter.nombre) > -1)
                    && (!filter.correo || client.correo === filter.correo)
                    && (!filter.usuario || client.usuario.indexOf(filter.usuario) > -1)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },
        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },
        updateItem: function(updatingClient) { 
        	var struser=updatingClient.correo;
        	var nombre=updatingClient.nombre;
        	var nombre2=encodeURIComponent(nombre);
        	var mailuser= struser.substr(0, struser.indexOf('@')); 
        	var jsonData = {
						'idUser': updatingClient.usuario,
						'name' : nombre2,
						'newUser':mailuser
					};
				$.ajax({
					url : 'BlogAnalisisController/updateUserAnalistaByUser',
					type : 'get',
					dataType : 'json',
					data : jsonData,
					async: false
				}).done(function(data20) {
					location.reload();
				}).fail(function() {
				});
        },

        deleteItem: function(deletingClient) {
        	var clientIndex = $.inArray(deletingClient, this.clients);
        				  var jsonData = {
        							'idUser': deletingClient.usuario
        						};
        					$.ajax({
        						url : 'BlogAnalisisController/modUserAnalistaByUser',
        						type : 'get',
        						dataType : 'json',
        						data : jsonData,
        						async: false
        					}).done(function(data20) {
        					}).fail(function() {
        					});
            this.clients.splice(clientIndex, 1);
        }
    };
    window.db = db;
    $.ajax({
		url : 'BlogAnalisisController/getUserCat',
		type : 'get',
		dataType : 'json',

		async: false
	}).done(function(data20) {
		db.clients=data20;
	}).fail(function() {
	});
    
}());
function setUser(user,name,nameTr,show,imgcodif){
	var nameTr2=encodeURIComponent(nameTr);
	var estatus=3;
		var jsonData = {
				'user' :user,
				'alias' :name,
				'estatus': estatus, 
				'name': nameTr2,
				'show': show,
				'imguser':imgcodif
			};
		$.ajax({
			url : 'BlogAnalisisController/setAliasCat',
			type : 'get',
			dataType : 'json',
			data : jsonData,
			async: true
		}).done(function(data2) {
		alert("Se envio con exito");
		location.reload();
		}).fail(function() {
		});

	}


$(document).ready(function() {
$('#txtmail').bind('keyup blur', function () { $(this).val($(this).val().replace(/[^A-Za-z]/g, '')) });

	$("#msginfo").hide();
	$("#botonAdd").click(function(){
	var show=1;
	var user=$("#txtmail").val();
	var name=$("#txtname").val();
	var imgcodif="usuario_cat_sin_imagen";
	var nameTr=name;
		setUser(user,name,nameTr,show,imgcodif);
	});
});


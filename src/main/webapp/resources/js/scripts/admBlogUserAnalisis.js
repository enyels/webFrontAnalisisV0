//adminstrador de modificacion y eliminacion de analistas
(function() {
    var db = {
        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.nombre || client.nombre.indexOf(filter.nombre) > -1)
                    && (!filter.correo || client.correo === filter.correo)
                    && (!filter.estatus || client.estatus.indexOf(filter.estatus) > -1)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },
        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { 
        	var struser=updatingClient.correo;
        	var mailuser= struser.substr(0, struser.indexOf('@')); 
        	var nombre=updatingClient.nombre;
        	var nombre2=encodeURIComponent(nombre);
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
		url : 'BlogAnalisisController/getUserAnalista',
		type : 'get',
		dataType : 'json',
		async: false
	}).done(function(data20) {
		db.clients=data20;
	}).fail(function() {
	});

}());
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

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
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
		console.log(data20);
		db.clients=data20;

	}).fail(function() {
	});
	
    
    
  /*  db.clients = [
        {
            "Nombre": "Otto Clay",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #897-1459 Quam Avenue",
            "Married": false
        },
        {
            "Nombre": "Connor Johnston",
            "Correo": "ejemplo@actinver.com.mx",
            "Usuario": "acabrera",
            "Estatus": "Ap #370-4647 Dis Av.",
            "Married": false
        },
        {
            "Nombre": "Lacey Hess",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #365-8835 Integer St.",
            "Married": false
        },
        {
            "Nombre": "Timothy Henson",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "911-5143 Luctus Ave",
            "Married": false
        },
        {
            "Nombre": "Ramona Benton",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #614-689 Vehicula Street",
            "Married": true
        },
        {
            "Nombre": "Ezra Tillman",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 738, 7583 Quisque St.",
            "Married": true
        },
        {
            "Nombre": "Dante Carter",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 976, 6316 Lorem, St.",
            "Married": false
        },
        {
            "Nombre": "Christopher Mcclure",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "847-4303 Dictum Av.",
            "Married": true
        },
        {
            "Nombre": "Ruby Rocha",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "5212 Sagittis Ave",
            "Married": false
        },
        {
            "Nombre": "Imelda Hardin",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "719-7009 Auctor Av.",
            "Married": false
        },
        {
            "Nombre": "Jonah Johns",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 939, 9310 A Ave",
            "Married": false
        },
        {
            "Nombre": "Herman Rosa",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "718-7162 Molestie Av.",
            "Married": true
        },
        {
            "Nombre": "Arthur Gay",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "5497 Neque Street",
            "Married": false
        },
        {
            "Nombre": "Xena Wilkerson",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #303-6974 Proin Street",
            "Married": true
        },
        {
            "Nombre": "Lilah Atkins",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "622-8602 Gravida Ave",
            "Married": true
        },
        {
            "Nombre": "Malik Shepard",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "967-5176 Tincidunt Av.",
            "Married": false
        },
        {
            "Nombre": "Keely Silva",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 153, 8995 Praesent Ave",
            "Married": false
        },
        {
            "Nombre": "Hunter Pate",
            "Correo": "ejemplo@actinvercom.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 771, 7599 Ante, Road",
            "Married": false
        },
        {
            "Nombre": "Mikayla Roach",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #438-9886 Donec Rd.",
            "Married": true
        },
        {
            "Nombre": "Upton Joseph",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #896-7592 Habitant St.",
            "Married": true
        },
        {
            "Nombre": "Jeanette Pate",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 177, 7584 Amet, St.",
            "Married": false
        },
        {
            "Nombre": "Kaden Hernandez",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "366 Ut St.",
            "Married": true
        },
        {
            "Nombre": "Kenyon Stevens",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 704, 4580 Gravida Rd.",
            "Married": false
        },
        {
            "Nombre": "Jerome Harper",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "2464 Porttitor Road",
            "Married": false
        },
        {
            "Nombre": "Jelani Patel",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 541, 5805 Nec Av.",
            "Married": true
        },
        {
            "Nombre": "Keaton Oconnor",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #657-1093 Nec, Street",
            "Married": false
        },
        {
            "Nombre": "Bree Johnston",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "372-5942 Vulputate Avenue",
            "Married": false
        },
        {
            "Nombre": "Maisie Hodges",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 445, 3880 Odio, Rd.",
            "Married": false
        },
        {
            "Nombre": "Kuame Calhoun",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 609, 4105 Rutrum St.",
            "Married": true
        },
        {
            "Nombre": "Carlos Cameron",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #215-5386 A, Avenue",
            "Married": false
        },
        {
            "Nombre": "Fulton Parsons",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 523, 3705 Sed Rd.",
            "Married": false
        },
        {
            "Nombre": "Wallace Christian",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "416-8816 Mauris Avenue",
            "Married": true
        },
        {
            "Nombre": "Caryn Maldonado",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "108-282 Nonummy Ave",
            "Married": false
        },
        {
            "Nombre": "Whilemina Frank",
            "Correo": "ejemplo@actiner.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 681, 3938 Egestas. Av.",
            "Married": true
        },
        {
            "Nombre": "Emery Moon",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #717-8556 Non Road",
            "Married": true
        },
        {
            "Nombre": "Price Watkins",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "832-7810 Nunc Rd.",
            "Married": false
        },
        {
            "Nombre": "Lydia Castillo",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "5280 Placerat, Ave",
            "Married": true
        },
        {
            "Nombre": "Lawrence Conway",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #452-2808 Imperdiet St.",
            "Married": false
        },
        {
            "Nombre": "Kalia Nicholson",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 871, 3023 Tellus Road",
            "Married": true
        },
        {
            "Nombre": "Brielle Baxter",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #822-9526 Ut, Road",
            "Married": true
        },
        {
            "Nombre": "Valentine Brady",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "8014 Enim. Road",
            "Married": true
        },
        {
            "Nombre": "Rebecca Gardner",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "8655 Arcu. Road",
            "Married": true
        },
        {
            "Nombre": "Vladimir Tate",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "130-1291 Non, Rd.",
            "Married": true
        },
        {
            "Nombre": "Vernon Hays",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "964-5552 In Rd.",
            "Married": true
        },
        {
            "Nombre": "Allegra Hull",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "245-8891 Donec St.",
            "Married": true
        },
        {
            "Nombre": "Hu Hendrix",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "428-5404 Tempus Ave",
            "Married": true
        },
        {
            "Nombre": "Kenyon Battle",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "921-6804 Lectus St.",
            "Married": false
        },
        {
            "Nombre": "Gloria Nielsen",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #275-4345 Lorem, Street",
            "Married": true
        },
        {
            "Nombre": "Illiana Kidd",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "7618 Lacus. Av.",
            "Married": false
        },
        {
            "Nombre": "Adria Todd",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "1889 Tincidunt Road",
            "Married": false
        },
        {
            "Nombre": "Kirsten Mayo",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "100-8640 Orci, Avenue",
            "Married": false
        },
        {
            "Nombre": "Willa Hobbs",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 323, 158 Tristique St.",
            "Married": false
        },
        {
            "Nombre": "Alexis Clements",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 176, 5107 Proin Rd.",
            "Married": false
        },
        {
            "Nombre": "Akeem Conrad",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "282-495 Sed Ave",
            "Married": true
        },
        {
            "Nombre": "Montana Silva",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 120, 9766 Consectetuer St.",
            "Married": false
        },
        {
            "Nombre": "Kaseem Hensley",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #510-8903 Mauris. Av.",
            "Married": true
        },
        {
            "Nombre": "Christopher Morton",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 234, 3651 Sodales Avenue",
            "Married": false
        },
        {
            "Nombre": "Wade Fernandez",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "740-5059 Dolor. Road",
            "Married": true
        },
        {
            "Nombre": "Illiana Kirby",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "527-3553 Mi Ave",
            "Married": false
        },
        {
            "Nombre": "Kimberley Hurley",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 637, 9915 Dictum St.",
            "Married": false
        },
        {
            "Nombre": "Arthur Olsen",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "887-5080 Eget St.",
            "Married": false
        },
        {
            "Nombre": "Brody Potts",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #577-7690 Sem Road",
            "Married": false
        },
        {
            "Nombre": "Dillon Ford",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #885-9289 A, Av.",
            "Married": true
        },
        {
            "Nombre": "Hannah Juarez",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "4744 Sapien, Rd.",
            "Married": true
        },
        {
            "Nombre": "Vincent Shaffer",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "9203 Nunc St.",
            "Married": true
        },
        {
            "Nombre": "George Holt",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "4162 Cras Rd.",
            "Married": false
        },
        {
            "Nombre": "Tobias Bartlett",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "792-6145 Mauris St.",
            "Married": true
        },
        {
            "Nombre": "Xavier Hooper",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "879-5026 Interdum. Rd.",
            "Married": false
        },
        {
            "Nombre": "Declan Dorsey",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #926-4171 Aenean Road",
            "Married": true
        },
        {
            "Nombre": "Clementine Tran",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 176, 9865 Eu Rd.",
            "Married": true
        },
        {
            "Nombre": "Pamela Moody",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "622-6233 Luctus Rd.",
            "Married": true
        },
        {
            "Nombre": "Julie Leon",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #915-6782 Sem Av.",
            "Married": true
        },
        {
            "Nombre": "Shana Nolan",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 603, 899 Eu St.",
            "Married": false
        },
        {
            "Nombre": "Vaughan Moody",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "880 Erat Rd.",
            "Married": false
        },
        {
            "Nombre": "Randall Reeves",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "1819 Non Street",
            "Married": false
        },
        {
            "Nombre": "Dominic Raymond",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #689-4874 Nisi Rd.",
            "Married": true
        },
        {
            "Nombre": "Lev Pugh",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #433-6844 Auctor Avenue",
            "Married": true
        },
        {
            "Nombre": "Desiree Hughes",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "605-6645 Fermentum Avenue",
            "Married": true
        },
        {
            "Nombre": "Idona Oneill",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "751-8148 Aliquam Avenue",
            "Married": true
        },
        {
            "Nombre": "Lani Mayo",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "635-2704 Tristique St.",
            "Married": true
        },
        {
            "Nombre": "Cathleen Bonner",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "916-2910 Dolor Av.",
            "Married": false
        },
        {
            "Nombre": "Sydney Murray",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "835-2330 Fringilla St.",
            "Married": false
        },
        {
            "Nombre": "Brenna Rodriguez",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "3687 Imperdiet Av.",
            "Married": true
        },
        {
            "Nombre": "Alfreda Mcdaniel",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "745-8221 Aliquet Rd.",
            "Married": true
        },
        {
            "Nombre": "Zachery Atkins",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "549-2208 Auctor. Road",
            "Married": true
        },
        {
            "Nombre": "Amelia Rich",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 734, 4717 Nunc Rd.",
            "Married": false
        },
        {
            "Nombre": "Kiayada Witt",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #735-3421 Malesuada Avenue",
            "Married": false
        },
        {
            "Nombre": "Lysandra Pierce",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #146-2835 Curabitur St.",
            "Married": true
        },
        {
            "Nombre": "Cara Rios",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "Ap #562-7811 Quam. Ave",
            "Married": true
        },
        {
            "Nombre": "Austin Andrews",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 274, 5505 Sociis Rd.",
            "Married": false
        },
        {
            "Nombre": "Lillian Peterson",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "6212 A Avenue",
            "Married": false
        },
        {
            "Nombre": "Adria Beach",
            "Correo": "ejemplo@actinver.com.mx", 
            "Usuario": "acabrera",
            "Estatus": "P.O. Box 183, 2717 Nunc Avenue",
            "Married": true
        },
       
    ];*/

   

}());
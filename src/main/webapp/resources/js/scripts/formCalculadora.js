$(document).ready(function(){
	$('#backModCalc', top.document).modal('show');
	$('#backModCalc', top.document).after('<div id="modwish" class="modal-backdrop fade in insMap01"></div>');
	$('#fnCloseModal', top.document).click(function(e){
		e.preventDefault();
		var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
				if (isiDevice==true)
				{
					//validateData();
				}
		$('.insMap01', top.document).remove();
		$('.insMap02', top.document).remove();
		$('.insMap03', top.document).remove();
		$('.insMap04', top.document).remove();
		$('.insMap05', top.document).remove();
		$('.insMap06', top.document).remove();
		location.reload();
		
    });
	var valuebuttonEmisora=$("#emisorabtn").html();
	console.log(valuebuttonEmisora);
	  $.ucm.getSchemaValues('empresasList', null, null, function(ucmResponse){
          var empresas = ucmResponse.ResultSets['empresaslist'];
          console.log(empresas);
          for (var rowIndex in empresas.rows) {
                          var row = ucmResponse.getRow(empresas, rowIndex);
                          if(row.empName == valuebuttonEmisora) {
                                                         $.ucm.cgiPath = "/cs/idcplg";
                                                         $.ucm.fullSearch('xEmpresa <matches> `' + row.empPrimaryKey + '`  <AND>  dExtension <matches> `pdf`', '1', 'dInDate', 'Desc', function(ucmResponse){
                                                                         var searchResults = ucmResponse.ResultSets.SearchResults;
                                                                         for (var rowIndex in searchResults.rows) {
                                                                                         var row = ucmResponse.getRow("SearchResults", rowIndex);
                                                                                         $('#ventanaCalculadora').attr('src',"/static/pdf/web/viewer.html?file=" + encodeURIComponent(row.URL));
                                                                         }
                                                         });
                          
                          }
          }

});
	
	
	
	
	
	
	
	
	
	
	
	});



    $("#refresh").click(function() {
    	location.reload();
    });
    $("#clear").click(function() {
        localStorage.clear();
        location.reload();
    });


	
  
      



	

	
	
	
	
	
	
	
	
	
	
	
	

	
	
	





$(document).ready(function(){
	
	var pi, bi, tri, tetra, pasa = false;
	//alert("se han creado las variables");
	
	//arreglo con los 16 posibles valores que corresponden a 16 tipos de fuente 
	var ops = ["fa fa-eur", " fa fa-usd", "fa fa-list", "fa fa-table", "fa fa-file", "fa fa-th", "fa fa-money", "fa fa-cog", "fa fa-user", "fa fa-star", "fa fa-signal", "fa fa-tag", "fa fa-mobile", "fa fa-info", "fa fa-folder", "fa fa-lock"];
	//alert("se ha creado el arreglo");
	
	//supreción de clases en los item de la lista, no tendrán fuente cada vez que se recargue
	$("#uno").find("i").removeAttr("class");
	$("#dos").find("i").removeAttr("class");
	$("#tres").find("i").removeAttr("class");
	$("#cuatro").find("i").removeAttr("class");
	$("#opcion").find("i").removeAttr("class");
	//alert("se quitan las clases");
	
	//este bucle condicional sirve para evitar que se repitan los iconos, dado que son 16 diferentes opciones, siempre saldrán 4 diferentes, en caso de repetirse alguno, permanecerá en el bucle hasta que los cuatro sean diferentes
	do {
		pi = Math.round(Math.random() * 15);
		bi = Math.round(Math.random() * 15);
		tri = Math.round(Math.random() * 15);
		tetra = Math.round(Math.random() * 15);
		if (((pi !== bi) && (pi !== tri) && (pi !== tetra)) && ((bi !== tri) && (bi !== tetra)) && (tri !== tetra)) {
			pasa = true;
		}
	} while (!pasa);
	//alert("se evitó la repetición de iconos");
	var penta= Math.round(Math.random() * 4);
	if(penta==0){
		penta++;
	}
	var opcion="#";
	switch(penta){
	case 1:
		opcion+="uno";
		break;
	case 2:
		opcion+="dos";
		break;
	case 3:
		opcion+="tres";
		break;
	case 4:
		opcion+="cuatro";
		break;
	default:	
		opcion+="cuatro";
		break;
	}
	//asignación aleatoria de la fuente a cada item, el div(opción) tendrá la misma fuente que el segundo item siempre
	$("#uno").find("i").addClass(ops[pi]);
	$("#dos").find("i").addClass(ops[bi]);
	$("#tres").find("i").addClass(ops[tri]);
	$("#cuatro").find("i").addClass(ops[tetra]);
	$("#opcion").find("i").addClass($(opcion).find("i").attr("class"));
	//alert("asignación de iconos");
	
	//cuando se le da click a un item, se suprime la clase seleccionado de todos los item que la tengan , y se le asigna sólo al item clickeado 
	$("li").mousedown(function() {
		$("ul").find("li").removeClass("seleccionado");
		$(this).addClass("seleccionado");
	});
	//alert("selección de un item");
	
	//Establece el comportamiento para cambiar el orden de los elementos de la lista
	$("#seleccionable").sortable({
		containment: $("#contenedor")
	//		containment: "#contenedor"
	});
	
	//cuando se suelta el item seleccionado sobre el div(opción), se hace una comparación, si la fuente del item coresponde con la duente del div(opción), se libera el botón del formulario, de lo contrario permanecerá bloqueado
	$("#opcion").droppable({drop: function() {
		if ($(".seleccionado").find("i").attr("class") === $(this).find("i").attr("class")) {
			$("#opcion").css("opacity", 1);
			$("#accesNumberC").removeAttr("disabled");
		} else {
			$("#opcion").css("opacity", .2);
			$("#accesNumberC").attr("disabled", true);
		}
	}});

});
window.addEventListener("load", function(){
	// variables globales
	var lista = document.getElementById("list");
	var newList	= document.getElementById("newList");
	var listName = document.getElementById("listName");
	var wrapperList = document.getElementById("wrapperList");

	lista.addEventListener("click", NewList);
	//ingresar nombre de lista
	function NewList(e){
		lista.classList.add("hidden");
	    newList.classList.remove("hidden");
	    wrapperList.classList.add("addList");
	    listName.classList.add("block");
	    listName.classList.add("inputAdd");
	    listName.focus();
	}
	// validar inut vacio 
	function validarInput(){
	    var contenido = listName.value.length;
	    if(contenido <= 0){
	        botonGuardar.disabled = true;
	    }else if(contenido >= 1){
	        botonGuardar.disabled = false;
	    } 
	}
	
});

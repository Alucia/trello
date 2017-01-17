window.addEventListener("load", function(){
	// variables globales
	var lista = document.getElementById("list");
	var newList	= document.getElementById("newList")
	var listName = document.getElementById("listName");

	lista.addEventListener("click", NewList);

	function NewList(){
		lista.classList.add("hidden");
	    newList.classList.remove("hidden");
	    listName.classList.add("block");
	    listName.focus();
	}

});
// validar inut vacio 
function validarInput(){
    var contenido = inputName.value.length;
    if(contenido <= 0){
        botonGuardar.disabled = true;
    }else if(contenido >= 1){
        botonGuardar.disabled = false;
    } 
}
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
	function Listacreada(e){
	    e.preventDefault();
	    newList.classList.add("hidden");
	    lista.classList.remove("hidden");

	    // creando variables locales para la funcion Listacreda
	    var padre = this.parentElement.parentElement;
	    var nameList = document.createElement("div");
	    var newCard= document.createElement("div");
	    var contenedor = document.createElement("div");

	    contenedor.classList.add("contenedor");
	    nameList.classList.add("nameList");
	    newCard.classList.add("añadirCard");
	    padre.setAttribute("draggable", "true");

	    nameList.innerText = listName.value;
    	listName.value = "";

    	newCard.innerText = "Añadir una Tarjeta...";
    
	    contenedorTrello.appendChild(contenedor);
	    padre.appendChild(newCard);
	    padre.insertBefore(nameList,padre.childNodes[0]);
	    contenedor.insertBefore(lista,contenedor.childNodes[0]);
	    contenedor.insertBefore(anadirForm,contenedor.childNodes[1]);
    }
});

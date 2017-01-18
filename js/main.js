window.addEventListener("load", function(){
	// variables globales
	var contList = document.getElementById("contListas");
	var lista = document.getElementById("list");
	var newList	= document.getElementById("newList");
	var listName = document.getElementById("listName");
	var wrapperList = document.getElementById("wrapperList");
	var btnSave = document.getElementById("btnSave");

	btnSave.addEventListener("click", Listacreada);
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
	    newCard.classList.add("newCard");
	    padre.setAttribute("draggable", "true");

	    nameList.innerText = listName.value;
    	listName.value = "";

    	newCard.innerText = "Añadir una Tarjeta...";
    
	    contList.appendChild(contenedor);
	    padre.appendChild(newCard);
	    padre.insertBefore(nameList,padre.childNodes[0]);
	    contenedor.insertBefore(lista,contenedor.childNodes[0]);
	    contenedor.insertBefore(newList,contenedor.childNodes[1]);

	    padre.addEventListener("dragover", dragSobre);
	    padre.addEventListener("drop", dragSoltar);

	    newCard.addEventListener("click", anadirTarjeta);


	    function anadirTarjeta(){
	      	this.classList.add("hidden");

	      	var formulario = document.createElement("form");
	     	var textArea= document.createElement("textarea");
	      	var botonAnadir = document.createElement("button");
	     	var iconoLista= document.createElement("i");

	     	formulario.classList.add("contenedorTarjeta");
	     	textArea.classList.add("textArea");
	     	botonAnadir.classList.add("botonCerrar");
	     	iconoLista.classList.add("icon-cross", "iconoLista");

	     	iconoLista.setAttribute("id", "iconoLista");
	     	botonAnadir.setAttribute("type","button");
	     	botonAnadir.setAttribute("disabled", "true");
	     	botonAnadir.textContent = "Añadir";

	     	formulario.insertBefore(textArea, formulario.childNodes[0]);
	     	formulario.insertBefore(botonAnadir, formulario.childNodes[1]);
	     	formulario.insertBefore(iconoLista, formulario.childNodes[2]);
	     	this.parentElement.appendChild(formulario);

	     	textArea.focus();
	     	textArea.addEventListener("keyup", validarTextArea)
	     	function validarTextArea(){
	     		var long = textArea.value.length;
	     		if(long <= 0){
	     			botonAnadir.disabled = true;
	     		}else if(long >= 1){
	     			botonAnadir.disabled = false;
	     		}
	     	}

	     	botonAnadir.addEventListener("click", tarjetaWhite);
	     	iconoLista.addEventListener("click", iconoListaHidden);
	    }

    }
});

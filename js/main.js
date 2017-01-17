window.addEventListener("load", function(){
	// variables globales
	
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
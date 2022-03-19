
function validarPass() {

let ingresa_pass = document.getElementById('insert_pass').value;
let confirma_pass = document.getElementById('confirm_pass').value;

if (ingresa_pass !== "" && confirma_pass !== "") {

	if (ingresa_pass === confirma_pass) {
		alert('La contraseña ha sido cambiada exitosamente!');
	} else {
		alert('Las contraseñas no coinciden.');
	}
} else {
	alert('Todos los campos deben de estar llenos');
}

//alert('aqui esta lo ingresado: '+ingresa_pass +"    "+ confirma_pass);

}




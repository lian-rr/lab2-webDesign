$(document).ready(function () {
	// mostrarResultado("hello world", "dark");
	// new Date(1995,4,31,0,0,0,0)

	$("#btn_calcular_edad").click(function(){

		var user = new usuario($("#name").val(), new Date($("#fecha_nacimiento").val()));
		user.mostrar();
	});

});


var mostrarResultado = function(texto, estilo){
	if(texto instanceof usuario){
		var message = "Hola, mi nombre es " + texto.name + " y tengo " + texto.edad + " años.";

		$("#mostrarResultado").val(message).addClass(estilo);
	}	
};






function usuario(nombre, fecha){

	this.edad = 0;
	this.name = nombre;

	//private function
	var calcularEdad = function(){		
		var currentDate = new Date(fecha);
		var age = currentDate.getFullYear() - fecha.getFullYear();
		return (currentDate.getMonth() < fecha.getMonth())? age-1 : (currentDate.getMonth() === fecha.getMonth() && currentDate.getDate() < fecha.getDate())? age-1 : age;
	}


	this.mostrar = function(){
		this.edad = calcularEdad();		
		mostrarResultado(this,"dark");

	}
}
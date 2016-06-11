function Persona(nombre, email) {
	this.nombre = nombre;
	this.email = email;

}

var personas = [];

$("[name=agregar]").on('click', function() {
	if ($("[name=email]").val() == "") {
		console.log("email vacío");
	} else {
		console.log($("[name=email]").val());
		var persona = new Persona($("[name=nombre]").val(), $("[name=email]").val());
		personas.push(persona);
	}
})
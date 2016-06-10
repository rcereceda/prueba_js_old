var suma = 0;

do {
	var ingreso = prompt("Ingresa un número");
	if (!(isNaN(ingreso))) {
		suma += parseInt(ingreso);
	}
	console.log(ingreso);
} while (ingreso != "fin")

console.log(suma);

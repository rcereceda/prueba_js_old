function Telefono(numero, marca, color) {
	this.numero = numero;
	this.marca = marca;
	this.color = color;
	this.contador = 0;

	this.marcar = function () {
		this.contador += 1;
	}
}

var arr = [];
var result = [];

var tel01 = new Telefono(123456, "Apple", "black");
var tel02 = new Telefono(123456, "Apple", "black");
var tel03 = new Telefono(123456, "Apple", "white");
var tel04 = new Telefono(123456, "Samsung", "black");
var tel05 = new Telefono(123456, "Apple", "white");
var tel06 = new Telefono(123456, "Samsung", "black");

arr.push(tel01);
arr.push(tel02);
arr.push(tel03);
arr.push(tel04);
arr.push(tel05);
arr.push(tel06);

console.log(arr);

function resultado(fonos, marca) {
	for (var i = 0; i < fonos.length; i++) {
		if (fonos[i].marca == marca) {
			result.push(fonos[i]);
		}
	}
	/*fonos.filter(function () {
		return fonos.marca == marca;
	})*/
}

resultado(arr, "Apple");

console.log(result);
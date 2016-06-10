var arr = [1,2,3,4,5,6, "hola"];
var total = 0;

function sumar(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (!(isNaN(arr[i]))) {
			total += arr[i];
		}
	}
}

sumar(arr);

console.log(total);

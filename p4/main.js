do {
	var n = prompt("Ingrese el largo del cuadrado");
	console.log(n);
} while ((isNaN(n)))

document.write("<table>");
for (var i = 0; i < n; i++) {
	document.write("<tr>");
	for (var j = 0; j < n; j++) {
		if (i == 0 || j == 0 || i == n-1  || j == n-1) {
			document.write("<td>*</td>");
		} else {
			document.write("<td> </td>");
		}
	}
	document.write("<tr>");
}
document.write("</table>");

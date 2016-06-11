var count = 5;

$("[name=agregar]").on('click', function() {
	if ($("[name=color]").val() != "") {
		if ($("[name=valor]").val() == "") {
			count++;
			$("ul").append("<li style='color: " + $("[name=color]").val() + "'>" + count + "</li>");
		} else {
			$("ul").append("<li style='color: " + $("[name=color]").val() + "'>" + $("[name=valor]").val() + "</li>");
		}
	} else {
		if ($("[name=valor]").val() == "") {
			count++;
			$("ul").append("<li>" + count + "</li>");
		} else {
			$("ul").append("<li>" + $("[name=valor]").val() + "</li>");
		}
	}
})

$("[name=eliminar]").on('click', function() {
	$("ul li").first().remove();
})
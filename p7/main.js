$("#evento").on('click', function (e) {
	$(this).css("background-color", "red")
})
$("#evento p").on('click', function (e) {
	e.stopPropagation();
})
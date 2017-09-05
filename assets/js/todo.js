// check of completed tasks
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function (e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text'").keypress(function(e) {
	if(e.which === 13) {
		// grab new todo text from input
		var todoText = $(this).val();
		// clear the input
		$(this).val("");
		// add todo to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});
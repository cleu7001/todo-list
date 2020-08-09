// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Delete Todo by clicking X
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
	if (e.which === 13) {
		let todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
	};
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").slideToggle();
});
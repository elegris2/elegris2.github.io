$('document').ready(function() {
	var nav = $('nav');
	$("#hamburger").on('click', function(event) {
		nav.toggleClass('hidden');
	});
});


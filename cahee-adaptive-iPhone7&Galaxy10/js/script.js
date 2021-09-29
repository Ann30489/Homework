$(document).ready(function() {
		$('.c-header__toggle-menu').click(function(event) {
			$('.c-header__toggle-menu, .c-navbar').toggleClass('active');
			$('body').toggleClass('lock');
		});
});
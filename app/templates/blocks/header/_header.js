// header
// --------------------------------------------------

var html = document.querySelector('html');
var body = document.querySelector('body');
var outer = document.querySelector('.outer');

if (html.classList.contains('tablet') || html.classList.contains('mobile')) {
	outer.classList.remove('header-top');
} else {
		if (window.outerWidth > 750) {
			window.addEventListener('load', headerChange);
			window.onscroll = headerChange;
		} else {
			outer.classList.remove('header-top');
		}

		window.addEventListener('resize', function() {
			if (window.outerWidth <= 750) {
				outer.classList.remove('header-top');
			} else {
				headerChange();
			}
		});
}

function headerChange() {
	if (!outer.classList.contains('header-static')) {
		if (window.scrollY <= 50) {
			outer.classList.add('header-top');
		} else {
			outer.classList.remove('header-top');
		}
	}
}

// header end
// --------------------------------------------------

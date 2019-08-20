// body attaching
// --------------------------------------------------

function bodyAttach() {
	var html = document.querySelector('html');
	var body = document.querySelector('body');

  html.style.overflow = 'hidden';
  body.style.overflow = 'hidden';
}
function bodyDetach() {
	var html = document.querySelector('html');
	var body = document.querySelector('body');

  html.style.overflow = null;
  body.style.overflow = null;
}

// body attaching end
// --------------------------------------------------

// outer min-height begin
// --------------------------------------------------

outerSetMinHeight();
window.onresize = function() {
  outerSetMinHeight();
}
window.onload = function() {
  outerSetMinHeight();
}
function outerSetMinHeight() {
  var outer = document.querySelector('.outer');
	var window_height = window.innerHeight;

	outer.style.minHeight = window_height + 'px';
}

// outer min-height end
// --------------------------------------------------

@import 'app\assets\js-dev\_validation.js'

@import 'app\templates\blocks\header\_header.js'

@import 'app\templates\blocks\forms\form-login\_form-login.js'

@import 'app\templates\blocks\sliders\slider-last_winners\_slider-last_winners.js'

@import 'app\templates\blocks\games_list\_games_list.js'

@import 'app\templates\blocks\forms\form-search\_form-search.js'

@import 'app\templates\blocks\sliders\slider-promo\_slider-promo.js'

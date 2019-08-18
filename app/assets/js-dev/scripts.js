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

@import 'app\templates\blocks\header\_header.js'

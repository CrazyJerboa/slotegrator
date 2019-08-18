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

@import 'app\templates\blocks\header\_header.js'

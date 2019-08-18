// footer to down
// --------------------------------------------------

footerToDown();
window.onresize = function() {
  footerToDown();
}
window.onload = function() {
  footerToDown();
}
window.onload = function() {
  footerToDown();
}

if (document.querySelector('.outer').classList.contains('outer__fullpage') && (document.querySelector('html').classList.contains('tablet') || document.querySelector('html').classList.contains('mobile'))) {
  document.querySelector('html').onscroll = function() {
    footerToDown();
  }
  document.querySelector('body').onscroll = function() {
    footerToDown();
  }
  window.onscroll = function() {
    footerToDown();
  }
}

function footerToDown() {
  var outer = document.querySelector('.outer');

  var header_height = 0;
  if (document.querySelector('.header')) {
    header_height = document.querySelector('.header').offsetHeight;
  }

  var footer_height = 0;
  if (document.querySelector('.footer')) {
    footer_height = document.querySelector('.footer').offsetHeight;
  }
  var window_height = window.innerHeight;

	if (outer.classList.contains('outer__fullpage'))
	  outer.style.height = window_height + 'px';
	else
		outer.style.minHeight = window_height + 'px';

  if (!document.querySelector('.section__first')) {
    outer.classList.add('header-static');
    outer.classList.remove('header-top');
    outer.style.paddingTop = header_height + 'px';
  }

  outer.style.paddingBottom = footer_height + 'px';
}

// footer to down end
// --------------------------------------------------

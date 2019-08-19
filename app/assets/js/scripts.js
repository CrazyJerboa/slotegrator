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

// header begin
// --------------------------------------------------

// menu logic begin
function menuLogic() {
  if (document.querySelector('.hamburger')) {
    document.querySelector('.hamburger').onclick = function() {
      mainMenuOpen();
    }
  }

  if (document.querySelector('.menu__close')) {
    document.querySelector('.menu__close').onclick = function() {
      mainMenuClose();
      loginFormClose();
    }
  }

  if (document.querySelector('.second.header-line .before')) {
    document.querySelector('.second.header-line .before').onclick = function() {
      mainMenuClose();
      loginFormClose();
    }
  }
}
menuLogic();

function mainMenuOpen() {
  var outer = document.querySelector('.outer');
  var menu_outer = document.querySelector('.second.header-line');
  var header = document.querySelector('.header');

  bodyAttach();

  outer.classList.add('menu_opened');
  header.classList.add('menu_opened');
  setTimeout(function() {
    menu_outer.style.opacity = 1;
  }, 10);
}
function mainMenuClose() {
  var outer = document.querySelector('.outer');
  var menu_outer = document.querySelector('.second.header-line');
  var header = document.querySelector('.header');

  menu_outer.style.opacity = null;
  header.classList.remove('menu_opened');
  setTimeout(function() {
    outer.classList.remove('menu_opened');
    bodyDetach();
  }, 300);
}
// menu logic end

// menu login logic begin
function menuLoginLogic() {
  if (document.querySelector('.form-login_btn')) {
    document.querySelector('.form-login_btn').onclick = function() {
      loginFormOpen();
    }
  }

  if (document.querySelector('.form-login__close')) {
    document.querySelector('.form-login__close').onclick = function() {
      loginFormClose();
    }
  }
}
menuLoginLogic();

function loginFormOpen() {
	var form = document.querySelector('.header .form-login__outer');

	form.classList.add('opened');
}
function loginFormClose() {
	var form = document.querySelector('.header .form-login__outer');

	form.classList.remove('opened');
}
// menu login logic end

// header end
// --------------------------------------------------


// games_info slider begin
// --------------------------------------------------

if (document.querySelectorAll('.slider-last_winners').length != 0) {
  var slider = tns({
    container: '.slider-last_winners',
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayButton: false,
    autoplayHoverPause: true,
    mouseDrag: true,
    swipeAngle: false,
    items: 1,
    loop: true,
    controls: true,
    controlsText: ['<span class="prev nab_btn icon icon-arr_left"></span>', '<span class="next nab_btn icon icon-arr_right"></span>'],
    nav: false,
    gutter: 15,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 4,
      },
      480: {
        items: 3,
      },
      0: {
        items: 2,
      }
    }
  });

  window.onload = function() {
    slideGameNameShave();
  }
  window.onresize = function() {
    slideGameNameShave();
  }

  function slideGameNameShave() {
    if (document.querySelectorAll('.slider-last_winners .slide__game').length != 0) {
      shave('.slider-last_winners .slide__game', 15);
    }
  }
}

// games_info slider end
// --------------------------------------------------


// games_list begin
// --------------------------------------------------

if (document.querySelectorAll('.games_list .game__name').length != 0) {
  shave('.games_list .game__name a', 15);
}

// games_list end
// --------------------------------------------------


// games_info slider begin
// --------------------------------------------------

if (document.querySelectorAll('.slider-promo').length != 0) {
  var slider = tns({
    container: '.slider-promo',
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayButton: false,
    autoplayHoverPause: true,
    mouseDrag: true,
    swipeAngle: false,
    items: 1,
    loop: true,
    controls: false,
    nav: true,
    gutter: 0
  });
}

// games_info slider end
// --------------------------------------------------


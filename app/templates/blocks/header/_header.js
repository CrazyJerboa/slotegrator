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

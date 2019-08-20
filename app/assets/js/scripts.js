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

// validation begin
// --------------------------------------------------

// removing standart HTML5 validation if js is enabled
htmlValidationRemove();
function htmlValidationRemove() {
  var input = document.querySelectorAll('input');
  var email = document.querySelectorAll('input[type="email"]');
  var textarea = document.querySelectorAll('textarea');
  var select = document.querySelectorAll('select');

  for (var i = 0; i < input.length; i++) {
    input[i].removeAttribute('required');
    input[i].setAttribute('data-required', 'required');
  }
  // for (var i = 0; i < email.length; i++) {
  //   email[i].setAttribute('type', 'text');
  // }
  for (var i = 0; i < textarea.length; i++) {
    textarea[i].removeAttribute('required');
    textarea[i].setAttribute('data-required', 'required');
  }
  for (var i = 0; i < select.length; i++) {
    select[i].removeAttribute('required');
    select[i].setAttribute('data-required', 'required');
  }
}

function cjValidate(selector) {
  var form = document.querySelector(selector);

  form.onsubmit = function(e) {
    e.preventDefault();

    var errors_len = 0;

    for (var i = 0; i < form.querySelectorAll('*[data-required="required"]').length; i++) {
      var element = form.querySelectorAll('*[data-required="required"]')[i];
      var parent = element.parentNode;

      var name = element.getAttribute('name');
      name = name.toLowerCase();

      var val = element.value;

      var rules = {
        'letters': /^[а-яА-ЯёЁa-zA-Z ]+$/i.test(val),
        'letters_numbers': /^[A-Za-z0-9]+$/i.test(val),
        'numbers': /^[0-9]+$/i.test(val),
        'min_1': val.length >= 1,
        'min_6': val.length >= 6,
        'max_500': val.length <= 500,
        'email': /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/i.test(val)
      }

      var check = {
        'name': [rules.letters, 'field is invalid'],
        'login': [rules.letters_numbers, 'field is invalid'],
        'password': [rules.min_6, '6 characters is a minimum'],
        'email': [rules.email, 'field is invalid'],
        'required': [rules.min_1, 'field is required']
      }

      if (name == 'login' || name == 'username') {
        if (!check.login[0]) {
          element.classList.remove('success');
          element.classList.add('error');

          if (parent.querySelectorAll('span.error').length == 0) {
            parent.insertAdjacentHTML('afterbegin', '<span class="error">'+check.login[1]+'</span>');
          } else {
            parent.querySelector('span.error').innerHTML = check.login[1];
          }

          errors_len++;
        } else {
          element.classList.remove('error');
          element.classList.add('success');
          if (parent.querySelectorAll('span.error').length != 0) {
            parent.querySelector('span.error').remove();
          }
        }
      }

      if (name == 'password') {
        if (!check.password[0]) {
          element.classList.remove('success');
          element.classList.add('error');

          if (parent.querySelectorAll('span.error').length == 0) {
            parent.insertAdjacentHTML('afterbegin', '<span class="error">'+check.password[1]+'</span>');
          } else {
            parent.querySelector('span.error').innerHTML = check.password[1];
          }

          errors_len++;
        } else {
          element.classList.remove('error');
          element.classList.add('success');
          if (parent.querySelectorAll('span.error').length != 0) {
            parent.querySelector('span.error').remove();
          }
        }
      }

      if (name == 'search') {
        if (!check.required[0]) {
          element.classList.remove('success');
          element.classList.add('error');

          if (parent.querySelectorAll('span.error').length == 0) {
            parent.insertAdjacentHTML('afterbegin', '<span class="error">'+check.required[1]+'</span>');
          } else {
            parent.querySelector('span.error').innerHTML = check.required[1];
          }

          errors_len++;
        } else {
          element.classList.remove('error');
          element.classList.add('success');
          if (parent.querySelectorAll('span.error').length != 0) {
            parent.querySelector('span.error').remove();
          }
        }
      }
    }

    if (errors_len == 0) {
      form.submit();
    }
  }
}

// validation end
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


// form-login begin
// --------------------------------------------------

cjValidate('.form-login');

// form-login end
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


// form-login begin
// --------------------------------------------------

cjValidate('.form-search');

// form-login end
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


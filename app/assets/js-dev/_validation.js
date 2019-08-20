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

// REST Super Member Portal — login handling (POC, client-side only)

(function () {
  var VALID_EMAIL = 'sarah.chen@restsuper.com.au';
  var VALID_PASSWORD = 'Demo2026!';

  var form = document.getElementById('login-form');
  if (!form) return;

  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var errorEl = document.getElementById('login-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var email = (emailInput.value || '').trim();
    var password = passwordInput.value || '';

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      errorEl.hidden = true;
      window.location.href = 'dashboard.html';
    } else {
      errorEl.hidden = false;
    }
  });
})();

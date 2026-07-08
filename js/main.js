// Client-side form handling: each form swaps to its confirmation card on
// submit, matching the design prototype. No data is sent anywhere yet — wire
// these up to a form backend (email service, Formspree, etc.) when ready.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form[data-success]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var success = document.getElementById(form.dataset.success);
      if (success) {
        form.hidden = true;
        success.hidden = false;
      }
    });
  });

  // Events page: "Register your interest" reveals the couples form.
  var openCouples = document.getElementById('open-couples-form');
  var couplesCard = document.getElementById('couples-form-card');
  if (openCouples && couplesCard) {
    openCouples.addEventListener('click', function () {
      openCouples.hidden = true;
      couplesCard.hidden = false;
    });
  }
});

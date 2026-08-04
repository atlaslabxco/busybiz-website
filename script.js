// Busy Biz Solution — mockup interactions

// Mobile nav toggle
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
})();

// Enquiry form — placeholder handler.
// TODO: wire to Formspree, Netlify Forms, or an email endpoint before going live.
function bbSubmit(e) {
  e.preventDefault();
  var note = document.getElementById('formNote');
  if (note) {
    note.textContent = "Thanks! This is a demo form — we'll connect it to email before launch.";
  }
  e.target.reset();
  return false;
}
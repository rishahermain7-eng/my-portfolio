$(document).ready(function() {
  // Smooth scrolling for all internal links
  $('a[href^="#"]').on('click', function(event) {
    const target = this.hash;
    if (target) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top }, 700);
    }
  });

  // Contact form: store data locally
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    const name = $('input[name="name"]').val();
    const email = $('input[name="email"]').val();
    const message = $('textarea[name="message"]').val();
    const existing = JSON.parse(localStorage.getItem('messages') || '[]');

    existing.push({ name, email, message, date: new Date().toLocaleString() });
    localStorage.setItem('messages', JSON.stringify(existing));

    $('#msg').fadeIn().delay(1500).fadeOut();
    $(this).trigger('reset');
  });
});

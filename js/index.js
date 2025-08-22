document.addEventListener("DOMContentLoaded", function() {

const sideButton = document.querySelector('.side_button');
  const anchor = document.getElementById('side_button_anchor');

  function updateButtonPosition() {
    const anchorRect = anchor.getBoundingClientRect();
    const windowCenter = window.innerHeight * 0.7;

    if (anchorRect.top <= windowCenter) {
      sideButton.classList.add('fixed');
    } else {
      sideButton.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', updateButtonPosition);
  window.addEventListener('resize', updateButtonPosition);
  updateButtonPosition();

  const accordionContent = document.getElementById('accordionContent');
  const readMoreBtn = document.getElementById('readMoreBtn');
  const fade = document.querySelector('.schedule_fade');

  readMoreBtn.addEventListener('click', () => {
    accordionContent.classList.toggle('expanded');
    fade.style.display = accordionContent.classList.contains('expanded') ? 'none' : 'block';
    readMoreBtn.textContent = accordionContent.classList.contains('expanded') ? 'Close' : 'Read more';
  });

});

document.addEventListener("DOMContentLoaded", function() {

  const accordionContent = document.getElementById('accordionContent');
  const readMoreBtn = document.getElementById('readMoreBtn');
  const fade = document.querySelector('.schedule_fade');

  readMoreBtn.addEventListener('click', () => {
    accordionContent.classList.toggle('expanded');
    fade.style.display = accordionContent.classList.contains('expanded') ? 'none' : 'block';
    readMoreBtn.textContent = accordionContent.classList.contains('expanded') ? '閉じる' : 'Read more';
  });

});

window.addEventListener('DOMContentLoaded', function() {
  const menuTrigger = document.getElementById('menu-trigger');
  menuTrigger.addEventListener('click', function() {
    const body = document.body;
    body.classList.add('outside--show');
  });

  const menuClose = document.getElementById('close__outside');
  menuClose.addEventListener('click', function() {
    const body = document.body;
    body.classList.remove('outside--show');
  });
});

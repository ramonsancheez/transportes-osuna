window.addEventListener('DOMContentLoaded', function() {

  var splide = new Splide( '.splide', {
    type   : 'loop',
    // autoWidth: true,
    gap: "5em",
    focus: 'center',
    perPage: 3,

  } );
  
  splide.mount();

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

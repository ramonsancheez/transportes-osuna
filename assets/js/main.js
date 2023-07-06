window.addEventListener('DOMContentLoaded', function() {

  var splide = new Splide( '#splide1', {
    type   : 'loop',
    gap: "5em",
    focus: 'center',
    perPage: 3,
    autoplay: true,
    interval: 2500,
    arrows: false,
    breakpoints: {
      767: {
        perPage: 1,
      }
    }

  } );
  splide.mount();

  var splide2 = new Splide('#splide2', {
    type: 'loop',
    perPage: 1,
    pagination: false,
  });
  
  splide2.mount();

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

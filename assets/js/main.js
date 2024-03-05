function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
  }

ready(function() {
  var elms = document.getElementsByClassName( 'card__carousel' );
  if(elms){
      for ( var i = 0, len = elms.length; i < len; i++ ) {
              new Splide( elms[ i ], {
              arrows: true,
              pagination: false,
              perPage: 1,
              breakpoints: {
                1300: {
                    arrows: false,
                    pagination : true,
                    perPage: 1,
                },
            }
          } 
          ).mount();
      }
  }
});


window.addEventListener('DOMContentLoaded', function() {
  var splide1Element = document.querySelector("#splide1");
  if (splide1Element) {
    var splide1 = new Splide(splide1Element, {
      type   : 'loop',
      drag   : 'free',
      arrows : false,
      focus  : 'center',
      arrows: false,
      gap : 50,
      perPage: 3,
      interval: 2000,
      autoplay: true,
      autoScroll: {
        speed: 800,
      },
      perMove: 1,
      breakpoints : {
        767: {
          perPage: 1,
          padding: "4em",
        }
      }
    });
    splide1.mount();
    
  }


  var splide2Element = document.querySelector("#splide2");
  if (splide2Element) {
    var splide2 = new Splide('#splide2', {
      type: 'loop',
      perPage: 1,
      pagination: false,
      autoplay: true,
      interval: 5000,
    });
    
    splide2.mount();
  }

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

window.addEventListener('load', function() {

  const homeWelcome = document.querySelectorAll('.home-welcome__content, .home-welcome__photo');
  if(homeWelcome){
      const options = { 
          root: null,
          threshold: 1,
          rootMargin: "50px"
      };
      const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
              if(!entry.isIntersecting){
                  return; 
              }
              entry.target.classList.toggle("animate--goUp");
              observer.unobserve(entry.target);
          })
      }, options);
      
      homeWelcome.forEach(listArticle => {
          observer.observe(listArticle);
      })
  }

  const homeServices = document.querySelectorAll('.home-services__service');
  if(homeServices){
      const options = { 
          root: null,
          threshold: 0,
          rootMargin: "-10px",
      };
      const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
              if(!entry.isIntersecting){
                  return; 
              }
              entry.target.classList.toggle("animate--goUp");
              observer.unobserve(entry.target);
          })
      }, options);
      
      homeServices.forEach(listArticle => {
          observer.observe(listArticle);
      })
  }

});

document.querySelector('form').addEventListener('submit', function(e) {
  if (!validarFormulario()) {
      e.preventDefault();
  }
});

function validarFormulario() {
  var nombre = document.getElementById('name').value;
  var apellidos = document.getElementById('surname').value;
  var subject = document.getElementById('subject').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('phone-number').value;
  var mensaje = document.getElementById('message').value;

  var regexTelefono = /^[0-9]+$/;
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var camposValidos = true;

  if (nombre === '') {
      camposValidos = false;
      document.getElementById('name').classList.add('error');
  } else {
      document.getElementById('name').classList.remove('error');
  }

  if (apellidos === '') {
      camposValidos = false;
      document.getElementById('surname').classList.add('error');
  } else {
      document.getElementById('surname').classList.remove('error');
  }

  if (subject === '') {
    camposValidos = false;
    document.getElementById('subject').classList.add('error');
  } else {
      document.getElementById('subject').classList.remove('error');
  }

  if (!regexEmail.test(email)) {
      camposValidos = false;
      document.getElementById('email').classList.add('error');
  } else {
      document.getElementById('email').classList.remove('error');
  }

  if (!regexTelefono.test(telefono)) {
      camposValidos = false;
      document.getElementById('phone-number').classList.add('error');
  } else {
      document.getElementById('phone-number').classList.remove('error');
  }

  if (mensaje === '') {
      camposValidos = false;
      document.getElementById('message').classList.add('error');
  } else {
      document.getElementById('message').classList.remove('error');
  }

  return camposValidos;
}

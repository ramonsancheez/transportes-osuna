window.addEventListener('DOMContentLoaded', function() {

  var splide1Element = document.querySelector("#splide1");
  if (splide1Element !== null) {
    var splide1 = new Splide(splide1Element, {
      type: 'loop',
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
    });
    splide1.mount();
  }


  var splide2Element = document.querySelector("#splide2");
  if (splide2Element !== null) {
    var splide2 = new Splide('#splide2', {
      type: 'loop',
      perPage: 1,
      pagination: false,
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

  const spinner = document.querySelector('.loading');
  spinner.remove();

  const homeWelcome = document.querySelectorAll('.home-welcome__title, .home-welcome__wyswyg');
  if(homeWelcome){
      const options = { 
          root: null,
          threshold: 1,
          rootMargin: "-150px"
      };
      const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
              if(!entry.isIntersecting){
                  return; 
              }
              entry.target.classList.toggle("animate--fade");
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

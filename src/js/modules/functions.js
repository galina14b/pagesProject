export function isWebp() {
  function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {

  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });
}


window.onload = function() {
   // Menu opening / closing
  const burger = document.querySelector('.burger');
  const menuList = document.querySelector('.mb-menu');
   
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuList.classList.toggle('menu-opened')
  });

  //Swiper 
  new Swiper('.resources__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 700,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
    slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  });
  
  // Scrolling 

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          console.log(id);
          console.log(document.querySelector(id));
      
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  )}

};
$(document).ready(function () {
   $('.slider__box').slick({
      responsive: [
         {
            breakpoint: 610,
            settings: {
               arrows: false
            }
         },
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
   });
   
});

// ====burger

const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
   const menu = document.querySelector('.menu');
   menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('lock')
      menuBurger.classList.toggle('active')
      menu.classList.toggle('active')
   });
}



//function slidesPlugin(activeSlide) {
//   const slides = document.querySelectorAll('.slider__box-galery')

//   slides[activeSlide].classList.add('active')

//   for (const slide of slides) {
//      slide.addEventListener('click', () => {
//         clearActiveClasses()

//         slide.classList.add('active')
//      })
//   }

//   function clearActiveClasses() {
//      slides.forEach((slide) => {
//         slide.classList.remove('active')
//      })
//   }
//}

//slidesPlugin(2)
const sliderItems = Array.from(document.querySelectorAll(".slider__item")); 
const sliderDots = Array.from(document.querySelectorAll('.slider__dot')); 
const sliderDotsButton = document.querySelector('.slider__dots');
const prev = document.querySelector(".slider__arrow_prev"); 
const next = document.querySelector(".slider__arrow_next"); 

let slideIndex = 0;

showSliders(slideIndex);

function showSliders (n) {
       if(n >= sliderItems.length) {
         slideIndex = 0;
       } else if(n < 0) {
         slideIndex = sliderItems.length - 1;
       }
       let i = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
       sliderItems[i].classList.remove('slider__item_active');
       sliderDots[i].classList.remove('slider__dot_active');
       
       sliderItems[slideIndex].classList.add('slider__item_active');
       sliderDots[slideIndex].classList.add('slider__dot_active');
     }
 
 function plusSlides (n) {
   let i = slideIndex += n;
   showSliders(i);
 }
 
 function itemDot (n) {
   let i = slideIndex = n;
   showSliders(i);
 }
 
 next.onclick = () => {
   plusSlides(1);
 }
 
 prev.onclick = () => {
   plusSlides(-1);
 }
 
 sliderDotsButton.onclick = (n) => {
   for(let i = 0; i < sliderDots.length; i++) {
     if(n.target.classList.contains('slider__dot') && n.target === sliderDots[i]) {
       itemDot(i);
     }
   }
 }
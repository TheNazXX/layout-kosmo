$(function(){
  $('.slider__box').slick({
    prevArrow: '<img class="slider__box-prevArrow" src="./assets/images/arrow_prev.svg" alt="#">',
    nextArrow: '<img class="slider__box-nextArrow" src="./assets/images/arrow_next.svg" alt="#">'
  })
})

let headerBtn = document.querySelector('.header__menu-btn')
headerBtn.addEventListener('click',function(){
  let list = document.querySelector('.header__list')
  list.classList.toggle('active')
})
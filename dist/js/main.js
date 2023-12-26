$(function(){
  const mapItems = document.querySelectorAll('.header__map-item');
  let currentDate = new Date();
  let headerDateElement = document.querySelector('.header__date');

  headerDateElement.innerHTML = headerDateElement.innerHTML
                                  .replace('20', currentDate.getDate())
                                  .replace('06', currentDate.getMonth() + 1)
                                  .replace('2018', currentDate.getFullYear());

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="Left arrow"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="Right arrow"></img>',
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.header__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    mapItems.forEach(function(item){
      item.classList.remove('header__map-item--active');
    })
    document.querySelector(`#map-${nextSlide + 1}`).classList.add('header__map-item--active');
  });

});
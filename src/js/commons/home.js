
function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    var totalScrollDistance = document.scrollingElement.scrollTop;
    var scrollY = totalScrollDistance, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

function capitalizeString (string) { 
    string = string.toLowerCase();
   return string.replace(/^./, string[0].toUpperCase()); 
  }

document.addEventListener("DOMContentLoaded", function(){
    if( window.innerWidth >= 768){
        if(!!document.querySelector('.brand-experts__header')){
            document.querySelector('.brand-experts__header').classList.add('o-container');
            document.querySelector('.brand-experts__title').classList.remove('o-container')
            document.querySelector('.brand-experts__image-contains').classList.remove('o-container')
            document.querySelector('.brand-experts__image-contains').classList.remove('o-container--large')
            document.querySelector('.brand-experts__subtitle').classList.remove('o-container')
        }   
    }

    // control active link menu
    if(document.location.href.includes("instalaciones")){
        document.querySelectorAll('.c-header__list-item')[1].classList.add('c-header__list-item--active')
    }else if(document.location.href.includes("sobre-nosotros")){
        document.querySelectorAll('.c-header__list-item')[2].classList.add('c-header__list-item--active')
    }else if(document.location.href.includes("contacto")){
        document.querySelectorAll('.c-header__list-item')[3].classList.add('c-header__list-item--active')
    }else if(document.location.href.includes("buzon")){
            document.querySelectorAll('.c-header__list-item')[4].classList.add('c-header__list-item--active')
    }else{
        document.querySelectorAll('.c-header__list-item')[0].classList.add('c-header__list-item--active')
    }
});


document.querySelector('.c-header__burger-menu').addEventListener('click', function(e){
    e.preventDefault();
    if(document.querySelector('.c-header__menu').classList.contains('c-header__menu--none')){
        document.querySelector('.c-header__menu').classList.remove('c-header__menu--none');
        document.querySelector('.c-header__patnerts').classList.remove('c-header__patnerts--none');
        document.querySelector('.main').classList.add('overlay');
        document.querySelector('.main').classList.add('u-relative');
    }else{
        document.querySelector('.c-header__menu').classList.add('c-header__menu--none');
        document.querySelector('.c-header__patnerts').classList.add('c-header__patnerts--none');
        document.querySelector('.main').classList.remove('overlay');
        document.querySelector('.main').classList.remove('u-relative');
    }
});


document.querySelector('.js-up').addEventListener('click', function(e){
    e.preventDefault();
    scrollToTop(1000);
});

if( !!document.querySelector('.js-close-banner')){
    document.querySelector('.js-close-banner').addEventListener('click', function(e){
        e.preventDefault();
        this.closest('.js-banner').classList.remove('banner--active')
    });
}
gsap.to('.card__image img', {
    x:100,
    duration:10,
    repeat:-1,
    yoyo:true
  
    
}) 
gsap.to('.map-info-area img', {
    x:100,
    duration:10,
    repeat:-1,
    yoyo:true
  
    
}) 
const isTouchDevice = () => {  
    return (('ontouchstart' in window) ||  
        (navigator.maxTouchPoints > 0) ||  
        (navigator.msMaxTouchPoints > 0));  
};
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CSS UNITS IN PIXELS
    const baseFontSizeString = getComputedStyle(document.querySelector('html')).fontSize;
    const baseFontSize = +baseFontSizeString.substring(0, baseFontSizeString.length - 2);
    let vw = windowWidth / 100;
    let vwRestricted = windowWidth / 100;
    let vh = windowHeight / 100;
    let vhFull = window.outerHeight / 100;

    if (windowWidth > 1950) {
        vwRestricted = 1920 / 100;
    }
let scrollTimelineEnd = 'bottom 0%';
let scrollTimelineEnd2 = 'bottom 0%';

if (navigator.userAgent.match(/firefox|fxios/i)) {
    // scrollTimelineEnd = 'top -8000px';
    scrollTimelineEnd = '60% 0%';
    scrollTimelineEnd2 = '150% 0%';
}

if (windowWidth < 850 || isTouchDevice()) {
    scrollTimelineEnd = '60% 0%';
    scrollTimelineEnd2 = '150% 0%';
}
  const timeline = gsap.timeline({
              scrollTrigger: {
                  trigger: '.main-page',
                  start: '0% 0%',
                  end: scrollTimelineEnd,
                  scrub: 1,
              
              }
          });
  timeline
  .add('smoother-section-animation')
    // .to('.section-smoother .content', {duration: 1.2, y: -110 * vh, ease: 'linear'}, 'smoother-section-animation+=.2')
    .to('.section-smoother .inner-container', {duration: 3, y: '-10vh', ease: 'linear'}, 'smoother-section-animation+=.2')
    .fromTo('.section-smoother .inner-container .flex-container-2', {duration: .3, x: '6rem', ease: 'linear'}, {duration: .3, x: '2rem', ease: 'linear'}, 'smoother-section-animation+=.2')
    .fromTo('.section-smoother .inner-container .flex-container-3', {duration: .3, x: '10rem', ease: 'linear'}, {duration: .3, x: '2rem', ease: 'linear'}, 'smoother-section-animation+=.2')
      .fromTo('.section-smoother .inner-container .flex-container-4', { duration: .3, x: '14rem', ease: 'linear' }, { duration: .3, x: '2rem', ease: 'linear' }, 'smoother-section-animation+=.2')
      .fromTo('.section-smoother .inner-container .flex-container-5', { duration: .3, x: '18rem', ease: 'linear' }, { duration: .3, x: '2rem', ease: 'linear' }, 'smoother-section-animation+=.2')
      .fromTo('.section-smoother .inner-container .flex-container-6', { duration: .3, x: '20rem', ease: 'linear' }, { duration: .3, x: '2rem', ease: 'linear' }, 'smoother-section-animation+=.2')
      .to('.section-smoother .inner-container .flex-container-2', {duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
      .to('.section-smoother .inner-container .flex-container-3', {duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
    .to('.section-smoother .inner-container .flex-container-4', {duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
      .to('.section-smoother .inner-container .flex-container-5', { duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
    .to('.section-smoother .inner-container .flex-container-6', {duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
    // .from('.section-smoother .content', {duration: .8, y: 110 * vh, ease: 'linear'}, 'smoother-section-animation+=.2')

    const timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.inner-container1',
            start: '0% 0%',
            end: scrollTimelineEnd2,
            scrub: 1,
        
        }
    });
    timeline1
    .add('smoother-section-animation')
      // .to('.section-smoother .content', {duration: 1.2, y: -110 * vh, ease: 'linear'}, 'smoother-section-animation+=.2')
      .to('.section-smoother .inner-container1', {duration: 1.9, y: '-10vh', ease: 'linear'}, 'smoother-section-animation+=.2')
      .fromTo('.section-smoother .inner-container1 .flex-container-2', {duration: .3, x: '6rem', ease: 'linear'}, {duration: .3, x: '2rem', ease: 'linear'}, 'smoother-section-animation+=.2')
      .fromTo('.section-smoother .inner-container1 .flex-container-3', {duration: .6, x: '10rem', ease: 'linear'}, {duration: .3, x: '2rem', ease: 'linear'}, 'smoother-section-animation+=.2')
        .fromTo('.section-smoother .inner-container1 .flex-container-4', { duration: .9, x: '14rem', ease: 'linear' }, { duration: .3, x: '2rem', ease: 'linear' }, 'smoother-section-animation+=.2')
        .to('.section-smoother .inner-container1 .flex-container-2', {duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
        .to('.section-smoother .inner-container1 .flex-container-3', {duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')
      .to('.section-smoother .inner-container1 .flex-container-4', {duration: .2, delay: .3, x: 0, ease: 'linear'}, 'smoother-section-animation+=.2')

  
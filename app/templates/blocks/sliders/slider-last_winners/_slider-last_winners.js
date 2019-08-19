// games_info slider begin
// --------------------------------------------------

if (document.querySelectorAll('.slider-last_winners').length != 0) {
  var slider = tns({
    container: '.slider-last_winners',
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayButton: false,
    autoplayHoverPause: true,
    mouseDrag: true,
    swipeAngle: false,
    items: 1,
    loop: true,
    controls: true,
    controlsText: ['<span class="prev nab_btn icon icon-arr_left"></span>', '<span class="next nab_btn icon icon-arr_right"></span>'],
    nav: false,
    gutter: 15,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 4,
      },
      480: {
        items: 3,
      },
      0: {
        items: 2,
      }
    }
  });

  window.onload = function() {
    slideGameNameShave();
  }
  window.onresize = function() {
    slideGameNameShave();
  }

  function slideGameNameShave() {
    if (document.querySelectorAll('.slider-last_winners .slide__game').length != 0) {
      shave('.slider-last_winners .slide__game', 15);
    }
  }
}

// games_info slider end
// --------------------------------------------------

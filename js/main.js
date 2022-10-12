/*global $, jQuery, alert*/
$(document).ready(function () {
  'use strict'

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on('scroll', onScroll)

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault()
    $(document).off('scroll')

    $('a').each(function () {
      $(this).removeClass('active')
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp()
      }
    })

    $(this).addClass('active')

    var target = this.hash,
      menu = target

    target = $(target)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 80
        },
        500,
        'swing',
        function () {
          window.location.hash = target.selector
          $(document).on('scroll', onScroll)
        }
      )
  })

  function onScroll (event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop()
      $('nav ul li a').each(function () {
        var currLink = $(this)
        var refElement = $(currLink.attr('href'))
      })
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  /*$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").fadeIn(500);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });*/

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle()
  })

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $('.typed')

  $(function () {
    typed.typed({
      strings: ['World!', "I'm Aubrey."],
      loop: false,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    })
  })
})

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  })

  $('#portfolio-flters li').on('click', function () {
    $('#portfolio-flters li').removeClass('filter-active')
    $(this).addClass('filter-active')

    portfolioIsotope.isotope({ filter: $(this).data('filter') })
  })

  /**
   * Modal big with sticky footer
   */
  var modalStickyFooter = new tingle.modal({
    footer: true,
    stickyFooter: true
  })
  var btn4 = document.querySelector('.js-tingle-modal-4')

  if (btn4) {
    btn4.addEventListener('click', function () {
      modalStickyFooter.open()
    })
  }

  modalStickyFooter.addFooterBtn(
    'I agree',
    'tingle-btn tingle-btn--primary tingle-btn--pull-right',
    function () {
      modalStickyFooter.close()
    }
  )

  modalStickyFooter.addFooterBtn(
    'Cancel',
    'tingle-btn tingle-btn--default tingle-btn--pull-right',
    function () {
      modalStickyFooter.close()
    }
  )

  modalStickyFooter.setContent(
    document.querySelector('.tingle-demo-sticky').innerHTML
  )
})

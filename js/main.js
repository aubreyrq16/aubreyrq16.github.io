/*global $, jQuery, alert*/
$(document).ready(function () {
  'use strict'

  $('.delay-el').each(function (index) {
    const $el = $(this)

    setTimeout(function () {
      $el.fadeIn(500)

      if ($(window).width() < 768) {
        $('html, body').animate({
          scrollTop: $('.delay-el.message').offset().top
        }, 2000)
      }

      if (index === $('.delay-el').length - 1) {
        $('.display-on-click').show()

        var portfolioIsotope = $('.portfolio-container').isotope({
          itemSelector: '.portfolio-thumbnail',
          layoutMode: 'fitRows'
        })

        $('#portfolio-flters li').on('click', function () {
          $('#portfolio-flters li').removeClass('filter-active')
          $(this).addClass('filter-active')

          portfolioIsotope.isotope({ filter: $(this).data('filter') })
        })
      }
    }, index * 2000)
  })

  $('#showSectionsBtn').click(function () {
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    }, 500)
  })
})
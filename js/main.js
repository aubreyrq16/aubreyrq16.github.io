/*global $, jQuery, alert*/
$(document).ready(function () {
  'use strict'

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  })

  $('#filter-portfolio-nav .filter').on('click', function () {
    $('#filter-portfolio-nav .filter').removeClass('font-bold')
    $(this).addClass('font-bold')

    portfolioIsotope.isotope({ filter: $(this).data('filter') })
  })
});
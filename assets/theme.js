// theme.js

$(document).ready(function () {
    // Mobile menu toggle
    $('.mobile-menu-toggler').on('click', function () {
      $('.mobile-menu-overlay').toggleClass('active');
      $('.mobile-menu-container').toggleClass('active');
    });
  
    // Search toggle
    $('.search-toggle').on('click', function () {
      $('.header-search-wrapper').toggleClass('active');
    });
  
    // Custom JS code here
  });
  
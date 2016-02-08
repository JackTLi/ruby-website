// Generated by CoffeeScript 1.10.0
(function() {
  var checkOverflow300, checkOverflow400, current_item, num_items, portfolio_items;

  portfolio_items = ["knowledgehook", "jamaquiz", "familybbq", "impactreport", "partnerpackage", "allpartnersmeeting"];

  num_items = portfolio_items.length;

  current_item = -1;

  jQuery(function() {
    $(".sliding-link").click(function() {
      event.preventDefault();
      return $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 400);
    });
    $(".toggle-more").click(function() {
      return $(this).parent().toggleClass('expanded');
    });
    $(".slide-toggle").click(function() {
      $('#hamburger').toggleClass('open');
      $('.nav-slider').toggleClass('open');
      $('.dimmer').toggleClass('open');
      return $('body').toggleClass("fixed-position");
    });
    $(".primary-link").click(function() {
      $('#hamburger').toggleClass('open');
      $('.nav-slider').toggleClass('open');
      $('.dimmer').toggleClass('open');
      $('body').toggleClass("fixed-position");
      $('.portfolio-menu').removeClass('open');
      $('.primary-menu').removeClass('portfolio-opened');
      return $('.bottom-nav-items').removeClass('portfolio-opened');
    });
    $('#nav-portfolio').click(function() {
      $('.portfolio-menu').toggleClass('open');
      $('.primary-menu').toggleClass('portfolio-opened');
      return $('.bottom-nav-items').toggleClass('portfolio-opened');
    });
    $('.prev-portfolio').click(function() {
      current_item = current_item - 1;
      if (current_item < 0) {
        current_item = num_items - 1;
      }
      return window.location.href = portfolio_items[current_item] + ".html";
    });
    return $('.next-portfolio').click(function() {
      current_item = (current_item + 1) % num_items;
      window.location.href = portfolio_items[current_item] + ".html";
    });
  });

  $(window).load(function() {
    var current_path, i, item, j, len;
    checkOverflow300();
    checkOverflow400();
    current_path = window.location.pathname.split("/").pop();
    current_path = current_path.split(".html")[0];
    current_item = -1;
    for (i = j = 0, len = portfolio_items.length; j < len; i = ++j) {
      item = portfolio_items[i];
      if (item === current_path) {
        current_item = i;
        $('#pfnav-' + portfolio_items[current_item]).addClass('selected-page');
      }
    }
    if (current_item === -1) {
      $('#navigation-arrows').addClass('hidden');
    }
    return $(".se-pre-con").fadeOut(500);
  });

  $(window).resize(function() {
    checkOverflow300();
    return checkOverflow400();
  });

  checkOverflow400 = function() {
    return $('.overflowable400').each(function() {
      if ($(this).height() > 400) {
        return $(this).addClass('overflowed400');
      } else {
        return $(this).removeClass('.overflowed400');
      }
    });
  };

  checkOverflow300 = function() {
    return $('.overflowable300').each(function() {
      if ($(this).height() > 300) {
        return $(this).addClass('overflowed300');
      } else {
        return $(this).removeClass('.overflowed300');
      }
    });
  };

}).call(this);

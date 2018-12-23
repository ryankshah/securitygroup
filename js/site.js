$(function() {

    var aboutLoaded = true;

    $('#content').load('pages/about.html');

    $('.content-change').on('click', function(e) {
        var attr = $(this).attr('content');

        if(attr === 'about') {
            aboutLoaded = true;
            $('#aboutSubNav').slideDown(300);
        } else {
            aboutLoaded = false;
            $('#aboutSubNav').slideUp(300);
        }

        var content = 'pages/' + attr + '.html';

        $('#content').load(content);

        e.preventDefault();
    });

    // Function for modals
    $(document).delegate('.modal-toggle', 'click', function(e) {
        var modal = $(this).attr('data-modal');

        $(modal).addClass('active');

        e.preventDefault();
    });

    $(document).delegate('.modal-close', 'click', function(e) {
        $(this).closest('.modal').removeClass('active');
        e.preventDefault();
    });

    // Select all links with hashes
    /*$('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });*/
});

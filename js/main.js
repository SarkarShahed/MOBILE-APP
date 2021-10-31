(function($){ "use strict";
             
/*=========================================================================
        Preloader
=========================================================================*/
$(window).on('load', function() {
    $('body').addClass('loaded');
});

/*=========================================================================
        Sticky Header Animation & Scroll To Top
=========================================================================*/     
        
    $(window).on('scroll', function() {
        

        if ($(window).scrollTop() > 50 ) {

            $('body').addClass('scrollActive');

        } else {
            $('body').removeClass('scrollActive');
        }
        
        
        //Scroll To Top
        if ($('body').scrollTop() >= 50) {
            
			// If page is scrolled more than 50px
			$('.scroll-to-top').fadeIn(200);    // Fade in the arrow
            
		} else {
            
			$('.scroll-to-top').fadeOut(200);   // Else fade out the arrow
            
		}
    });

 /*=========================================================================
        Scroll Spy
=========================================================================*/
    $('body').scrollspy({
        
        target: '#navbar',
        offset: 60
        
    });

/*=========================================================================
	Video Background
=========================================================================*/
	var YTselector = $(".hero_area");
	YTselector.YTPlayer();
             
/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
    smoothScroll.init({
		offset: 60
	});

/*=========================================================================
	NiceScroll Active
=========================================================================*/
    $(window).on('load', function() {
        $("html").niceScroll({
            background: "#fff",
            cursorcolor:"#744da8",
            cursorwidth:"16px",
            scrollspeed: 40,
            mousescrollstep: 60,
            cursorborder:"0px solid #eaeaea",
            cursorborderradius: "0px",
            autohidemode: false,
            zindex: "999"
        });  
    });             
/*=========================================================================
        Active venobox
=========================================================================*/
  $('.img_popup').venobox();
             
/*=========================================================================
        textrotator
=========================================================================*/
    $(".rotate").textrotator({
      animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 2000 // How many milliseconds until the next word show.
    });

             
/*=========================================================================
        ScreenShot Carousel
=========================================================================*/       

        function getSlide() {
            var wW = $(window).width();
            if (wW < 601) {
                return 1;
            }
            return 3;
        }
      
        var mySwiper = $('.screen_carousel').swiper({
      
            mode:'horizontal',
            loop: true,
            speed: 1000,
            autoplay: 1000,
            effect: 'coverflow',
            slidesPerView: getSlide(),
            grabCursor: true,
            pagination: '.screen-pagination',
            paginationClickable: true,
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            keyboardControl: true,
            coverflow: {
                rotate: 0,
                stretch: 90,
                depth: 200,
                modifier: 1,
                slideShadows : true
            }
        });
             
/*=========================================================================
        Testimonial Carousel
=========================================================================*/

    var swiper = new Swiper('.testi_carousel', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 1000,
        autoplay: 1000
    });
             
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();
             
/*=========================================================================
       AjaxChimp
=========================================================================*/
        // mailchimp start
    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//IconicThemes.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
             
})(jQuery);


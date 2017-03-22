(function($) {
    'use strict';
    jQuery(document).ready(function(){

		// Navigation
	    $(window).scroll(function() {
	        if ($(".navbar-default").offset().top > 10) {
	            $(".navbar-fixed-top").addClass("top-nav-collapse");
	        } else {
	            $(".navbar-fixed-top").removeClass("top-nav-collapse");
	        }
	        
	    });

	    // Portfolio
		$('.portfolio-wrapper').mixItUp();

		// Magnific Popup
		$('.portfolio-popup').magnificPopup({
		  	type: 'image',
		  		gallery: {
		      		enabled: true
		  		},
		  	zoom: {
		      	enabled: true,
		      	duration: 300, // don't foget to change the duration also in CSS
		      	opener: function(element) {
		          return element.find('img');
		      	}
		  	}
		});

    });

})(jQuery); 
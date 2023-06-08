$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();



// Assuming you have previous and next buttons with class names "prev-btn" and "next-btn" respectively

document.querySelector('.prev-btn').addEventListener('click', function() {
	const slides = document.querySelector('.slides');
	slides.style.transform = 'translateX(0%)';
  });
  
  document.querySelector('.next-btn').addEventListener('click', function() {
	const slides = document.querySelector('.slides');
	slides.style.transform = 'translateX(-33.33%)'; /* Adjust this value based on the number of slides */
  });
  
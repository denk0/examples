;(function($) {
	'use strict';

	// Dropdown part
	$('.ba-dropdown-toggle').on('click', function(){
		$(this).siblings('.ba-dropdown').slideToggle('fast');
	});

	// Popup part
	$('.ba-open-popup').on('click', function(){
		var popup = $(this).data('popup');
		$('.ba-popup[data-popup=' + popup + ']').fadeIn();
	});
	$('.ba-popup .ba-close').on('click', function() {
		$(this).parents('.ba-popup').fadeOut();
	});

	// isotope part
	// simple
	var $simpleGrid = $('#simple-grid').isotope({});
	$('#simple-filters').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$simpleGrid.isotope({ filter: filterValue });
	});
	// advanced
	var $advancedGrid = $('#advanced-grid').isotope({});
	var filters = {};
	$('#advanced-filters').on( 'click', 'button', function() {
		var $this = $(this);
		var $buttonGroup = $this.parents('ul');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		filters[ filterGroup ] = $this.attr('data-filter');
		var filterValue = concatValues( filters );
		$advancedGrid.isotope({ filter: filterValue });
	});
	function concatValues( obj ) {
		var value = '';
		for ( var prop in obj ) {
			value += obj[ prop ];
		}
		return value;
	}

	// masonry part
	$(window).on('load', function() { // in order to render layout after all the things loaded
		$('.ba-masonry-grid').masonry({
			itemSelector: '.grid-item',
		  	columnWidth: 160
		});
	});

	// sliders part
	$('#ba-slider-1').slick();

	$('#ba-slider-2').slick({
		dots: true,
		arrows: false,
	  	infinite: false,
	  	speed: 300,
	  	slidesToShow: 4,
	  	slidesToScroll: 4,
	});

	$('#ba-slider-3').slick({
		centerMode: true,
  		centerPadding: '60px',
  		slidesToShow: 3,
	});



})(jQuery);
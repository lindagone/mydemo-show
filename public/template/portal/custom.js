$(function(){
	$('#container').isotope({
		// options
		itemSelector : '.portal',
		masonry: {
          
        },
	});	
	$("div.drawer-toggler").click(function(e){
		console.log($("#drawer-wrapper").size());
		$("#drawer-wrapper").toggleClass("showdrawer",500)
		return false;
	})
	
})
/*-----------------------------------------------------------------------------------*/
/*	CAROUSEL
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function($){
'use strict';
	
	var carousel = new jQuery.ebor_carousel(jQuery('#index-carousel'));
	var elementCarousel = new jQuery.ebor_carousel(jQuery('#element-carousel'));

});
/*-----------------------------------------------------------------------------------*/
/*	ALTERNATE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function($){
'use strict';
	
	jQuery('.portfolio-alt-details').css('display','block');
	jQuery('.the_portfolio.alt li').each(function(){
		jQuery(this).height( jQuery('img', this).height() );
	});
	
	jQuery(window).smartresize(function(){
		jQuery('.the_portfolio.alt li').each(function(){
			jQuery(this).height( jQuery('img', this).height() );
		});
	});
	
	jQuery('.the_portfolio.alt li').hover(function(){
		jQuery('img', this).stop().animate({ 'top' : '-'+jQuery(this).height() / 2+'px' }, 800);
		jQuery('div', this).stop().animate({ 'top' : '-'+jQuery(this).height()+'px' }, 250);
	}, function(){
		jQuery('img', this).stop().animate({ 'top' : '0' }, 250);
		jQuery('div', this).stop().animate({ 'top' : '0' }, 250);
	});

});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function($){
'use strict';
	
	jQuery('.the_portfolio').isotope().css('overflow','');
	jQuery(window).smartresize(function(){
		jQuery('.the_portfolio').isotope('reLayout');
		
		if( jQuery(window).width() < 959){
			jQuery('.the_portfolio li').removeClass('translate-left');
			jQuery('.the_portfolio li:nth-child(2n)').addClass('translate-left');
		} else {
			jQuery('.the_portfolio li').removeClass('translate-left');
			jQuery('.the_portfolio li:nth-child(4n-1), .the_portfolio li:nth-child(4n)').addClass('translate-left');
		}
	});
	
	jQuery('#filter ul a').click(function(){
		jQuery('#filter-button, #filter ul a').removeClass('active');
		jQuery(this).addClass('active');
		var isotopeTitle = jQuery(this).text();
		jQuery('.isotope-title').text(isotopeTitle);
		var filter = jQuery(this).attr('href');
		if ( filter == '*' ) {
			jQuery('.the_portfolio').isotope({ filter: '*' });
			if( jQuery(window).width()  < 959){
				jQuery('.the_portfolio li').removeClass('translate-left');
				jQuery('.the_portfolio li:nth-child(2n)').addClass('translate-left');
			} else {
				jQuery('.the_portfolio li').removeClass('translate-left');
				jQuery('.the_portfolio li:nth-child(4n-1), .the_portfolio li:nth-child(4n)').addClass('translate-left');
			}
		} else {
			jQuery('.the_portfolio').isotope({ filter: '.'+filter });
			if( jQuery(window).width()  < 959){
				setTimeout(function(){
					jQuery('.the_portfolio li').removeClass('translate-left');
					var counter = 0;
					jQuery('.the_portfolio li').not('.isotope-hidden').each(function(){
						counter++;
						if( counter % 2 == 0 ){
							jQuery(this).addClass('translate-left');
						}
					});
				}, 800);
			} else {
				setTimeout(function(){
					jQuery('.the_portfolio li').removeClass('translate-left');
					var counter = 0;
					jQuery('.the_portfolio li').not('.isotope-hidden').each(function(){
						counter++;
						if( counter % 3 == 0 || counter % 4 == 0 ){
							jQuery(this).addClass('translate-left');
						}
					});
				}, 800);
			}
		}
		return false;
	});
	
	if( jQuery(window).width()  < 959){
		jQuery('.the_portfolio li').removeClass('translate-left');
		jQuery('.the_portfolio li:nth-child(2n)').addClass('translate-left');
	} else {
		jQuery('.the_portfolio li').removeClass('translate-left');
		jQuery('.the_portfolio li:nth-child(4n-1), .the_portfolio li:nth-child(4n)').addClass('translate-left');
	}
	
});
/*-----------------------------------------------------------------------------------*/
/*	FULLWIDTH SLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function($) {
	if (jQuery.fn.cssOriginal != undefined) jQuery.fn.css = jQuery.fn.cssOriginal;
	if( jQuery('body').hasClass('index') ){
		var theHeight = 440;
	} else {
		var theHeight = 600;
	}
	var api = jQuery('.wide-banner').revolution({
		delay: 5500,
		startheight: theHeight,
		startwidth: 1020,
		hideThumbs: 200,
		thumbWidth: 100,
		// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		thumbHeight: 50,
		thumbAmount: 5,
		navigationType: "bullet",
		// bullet, thumb, none
		navigationArrows: "none",
		// nexttobullets, solo (old name verticalcentered), none
		navigationStyle: "round",
		// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
		navigationHAlign: "left",
		// Vertical Align top,center,bottom
		navigationVAlign: "bottom",
		// Horizontal Align left,center,right
		navigationHOffset: 0,
		navigationVOffset: 0,
		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,
		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,
		touchenabled: "on",
		// Enable Swipe Function : on/off
		onHoverStop: "on",
		// Stop Banner Timet at Hover on Slide on/off
		stopAtSlide: -1,
		// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops: -1,
		// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
		hideCaptionAtLimit: 0,
		// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit: 0,
		// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit: 0,
		// Hide the whole slider, and stop also functions if Width of Browser is less than this value
		shadow: 0,
		//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
		fullWidth: "on" // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
	});
	
	jQuery('.index .wide-banner ul li img').each(function(){
		jQuery(this).css({ 'width' : jQuery(this).attr('width'), 'height' : jQuery(this).attr('height') });
	});
	
	api.bind("revolution.slide.onchange",function (e,data) {
		var offsetLeft = jQuery('.wide-bannercontainer').find('.bullet.selected').position().left;
		jQuery('.tp-timer-wrapper').css('left', offsetLeft);
	});
	
	var counter = 0;
	jQuery('.wide-bannercontainer .bullet').each(function(){
		counter++;
		jQuery(this).prepend('<span>'+counter+'</span>');
	});

	jQuery('.tp-timer-wrapper, .bullet').width( jQuery('.wide-bannercontainer').width() / jQuery('.bullet').length );
	
	if(jQuery(".wide-bannercontainer").length > 0){
		jQuery(window).smartresize(function(){
			jQuery('.tp-timer-wrapper, .bullet').animate({ 'width' : jQuery('.wide-bannercontainer').width() / jQuery('.bullet').length }, 1, function(){
				setTimeout(function(){
					var offsetLeft = jQuery('.wide-bannercontainer').find('.bullet').eq(api.revcurrentslide()).position().left;
					jQuery('.tp-timer-wrapper').css('left', offsetLeft);
				}, 100);
			});
		});
	}
});
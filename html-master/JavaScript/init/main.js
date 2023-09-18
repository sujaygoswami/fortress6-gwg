jQuery(document).ready(function(){









function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();



// skew content first view
if ($(window).width() >= 1200) {
  jQuery('.start-page-skew-content-module-view-wrap .start-page-skew-content-module').each(function(){
      jQuery(this).find('.bild-col .the-bild').addClass('set-back');
  });
};


// skew content with image set back responsive
if ($(window).width() < 1200) {
  jQuery('.skew-content-with-image-module .the-skew-img').addClass('set-back');
};


// overlap box inherit with banner
jQuery('.overlaped-box.inherit-with-banner').detach().appendTo('.static-image-with-text-banner');


// responsive-wrap-container
jQuery('.responsive-wrap-container').each(function(){
  if ($(window).width() < 1200) {
  
      jQuery(this).wrap('<div class="container"></div>');

  };
});


// responsive-bottom-content-appender
jQuery('.responsive-bottom-content-appender').each(function(){
  var AREA = jQuery(this).find('.responsive-bottom-content-area');
  if ($(window).width() < 1200) {
  
      jQuery(this).detach().appendTo('main');

      jQuery('.push-to-responsive-bottom-content-appender').detach().appendTo(AREA);
      jQuery('.push-to-responsive-bottom-content-appender').removeClass('d-none');
    
  };
});



//tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})







// object notation
var site = {}



site.GOTOP = function() {
  
      
  if (jQuery(document).scrollTop() > 100) {
    jQuery('.go-top').show();
    jQuery('.go-top').addClass('fadeInUp');
    jQuery('.go-top').removeClass('fadeOutDown');
  }
  else {
    jQuery('.go-top').addClass('fadeOutDown');
    jQuery('.go-top').removeClass('fadeInUp');
  }

    


};


site.ITEMWRAPPERTYPE1FUNCTIONDESKTOP = function() {
  $.fn.chunk = function(size) {
    var arr = [];
    for (var i = 0; i < this.length; i += size) {
      arr.push(this.slice(i, i + size));
    }
    return this.pushStack(arr, "chunk", size);
  }
  
  jQuery('.listing-wrapper-type-1 .items-holder > .item').chunk(3).wrap('<div class="news-listing-row"><div class="container"><div class="container-inset container-inset-both"><div class="news-listing-module special-grid-type-1 element-gap element-gap-large"><div class="row lg-grid"></div></div></div></div></div>');


};
site.ITEMWRAPPERTYPE1FUNCTIONRESPONSIVE = function() {

  jQuery('.listing-wrapper-type-1 .items-holder').wrapInner('<div class="container responsive-attach-container"><div class="news-listing-module"><div class="row default-grid attach-row"></div></div></div>');
  

};

if ($(window).width() >= 1200) {
  site.ITEMWRAPPERTYPE1FUNCTIONDESKTOP();
}else{
  site.ITEMWRAPPERTYPE1FUNCTIONRESPONSIVE();
}





jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});


jQuery(window).scroll(function() {
  site.GOTOP();
});

site.GOTOP();


// go top with footer change
jQuery('footer.footer').viewportChecker({
  classToAdd:'footer-visible',
  repeat: true,    
  });






// chat-bot-alt-view
jQuery('.chat-bot-alt-view').each(function(){
  var windowSize = jQuery(window).width();
  var BG = jQuery(this).find('.chat-bot-alt-img').attr('src');
  var PARACONTEXT = jQuery(this).find('.chat-bot-alt-content');
  var ICONICGROUPTEXT = jQuery(this).find('.iconic-group-text');

  if (windowSize < 1800) {
    jQuery(this).find('.responsive-skew-banner').css('background-image', 'url(' + BG + ')');
  }

  if (windowSize < 1200 && windowSize >= 768) {
    jQuery(PARACONTEXT).detach().insertAfter(this);
    jQuery(PARACONTEXT).wrap('<div class="container"></div>');
  }

  // if (windowSize < 1800 && windowSize >= 1200) {
  //   jQuery(PARACONTEXT).detach().insertAfter(ICONICGROUPTEXT);
  // }

  if (windowSize < 768) {
    jQuery(PARACONTEXT).detach().insertAfter(ICONICGROUPTEXT);
  }


});



// touch submenu
jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});



 // carousel
 jQuery('.image-with-overlay-text-carousel').slick({
  dots: true,
  infinite: false
});

jQuery('.image-with-overlay-text-carousel').each(function(){
  var MAINSLICKLIST = jQuery(this).find('.slick-list');
  var SLICKDOTS = jQuery(this).find('.slick-dots');
  jQuery(this).find('.slick-arrow, .slick-dots').wrapAll('<div class="slick-nav"></div>');
  jQuery(this).find('.slick-nav').detach().insertAfter(MAINSLICKLIST);
  jQuery(this).find('.slick-next').detach().insertAfter(SLICKDOTS);
});


jQuery('.image-with-overlay-text-carousel.has-text-image-both .carousel-cell').each(function(){
  var CAROUSELCONTENT = jQuery(this).find('.carousel-content');
  var CAROUSELIMAGE = jQuery(this).find('.carousel-image');
  var INTROHEAD = jQuery(this).find('.intro-head');

  if ($(window).width() < 1200) {
    jQuery(this).find(CAROUSELCONTENT).detach().insertAfter(CAROUSELIMAGE);
    jQuery(this).find(CAROUSELIMAGE).append('<div class="responsive-intro-header-holder"></div>');
    var INTROHOLDER = jQuery(this).find('.responsive-intro-header-holder');
    jQuery(this).find(INTROHEAD).detach().appendTo(INTROHOLDER);
    
  }

});

jQuery('.image-with-overlay-text-carousel.has-text-image-both').each(function(){
  if ($(window).width() < 1200) {
    var CAROUSELIMAGEHEIGHT = jQuery(this).find('.carousel-image').height();
    jQuery(this).find('.slick-arrow').detach().appendTo(this);
    jQuery(this).find('.slick-arrow').wrapAll('<div class="responsive-direction-nav slick-nav-responsive"><div class="table-wrap"><div class="table-cell middle-line"></div></div></div>');
    jQuery(this).find('.responsive-direction-nav').height(CAROUSELIMAGEHEIGHT);
  }
});  


// responsive-item-global-grouping
site.RESPONSIVEITEMGLOBALGROUPING = function() {

  jQuery('.responsive-item-global-grouping').each(function(){
    var GROUPITEM = jQuery(this).find('.item-group');
    var GROUPHOLDER = jQuery(this).find('.responsive-item-global-grouping-holder');
    var EXCEPTITEM = jQuery(this).find('.responsive-global-grouping-except');

    

    jQuery(GROUPITEM).detach().appendTo(GROUPHOLDER);

    jQuery(GROUPITEM).removeClass('element-gap white-text-color');

    jQuery(GROUPHOLDER).wrapInner('<div class="the-carousal owl-carousel global-owl-carousel responsive-item-grouping-slider"></div>');

    jQuery(EXCEPTITEM).detach().appendTo(this);

    jQuery('.global-owl-carousel.responsive-item-grouping-slider').owlCarousel({
      loop:false,
      margin:0,
      nav:true,
      dots: true,
      items:1
    });
    

  });


  jQuery('.responsive-item-global-grouping:last-child').parents('body').find('footer.footer').addClass('bg-light-type-2');

};
if ($(window).width() < 1200) {
  site.RESPONSIVEITEMGLOBALGROUPING();
};




// product gallery
jQuery('.product-detail-gallery .main-carousel').slick({
  dots: true,
  infinite: true,
  arrows: false,
  adaptiveHeight: false
});
jQuery('.product-detail-gallery').each(function(){
  var FINALHEIGHT = jQuery(this).find('.plan-build').height();
  jQuery(this).find('.carousel-cell').height(FINALHEIGHT);
  jQuery(this).find('.carousel-cell:not(.plan-build)').addClass('set-back');
  jQuery(this).height(FINALHEIGHT);
});

// overlay image with text card gallery

jQuery('.responsive-carousel-view:not(.responsive-carousel-view-negative).type1').each(function(){
  if ($(window).width() < 1200) {
  
    jQuery(this).find('> .row.default-grid').removeClass('row default-grid element-gap element-gap-normal global-isotop-grid isotop-xlg-only no-row-gap has-bottom-gap');
    jQuery(this).find('> div').addClass('the-carousal owl-carousel global-owl-carousel type-1 responsive-center');
    jQuery(this).find('.my-col').addClass('item');
    jQuery(this).find('.my-col').removeClass('col-6 my-col col-4');
    
    
  }
});

jQuery('.global-owl-carousel.type-1').parents('section').addClass('overflow-x-hidden');
jQuery('.global-owl-carousel.type-1:not(.responsive-center)').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  dots: true,
  center:false,
  startPosition: 0,
  mouseDrag: false,
  responsive:{
    0:{
        items:1,
        margin: 15
    },
    768:{
      items:2,
      margin: 15
    },
    1200:{
        items:2
    }
  }
});

jQuery('.global-owl-carousel.type-1.responsive-center').owlCarousel({
  loop: false,
  margin:30,
  nav:true,
  dots: true,
  center:true,
  startPosition: 0,
  mouseDrag: false,
  dotsEach: false,
  slideBy: 1,
  responsive:{
    0:{
        items:1,
        margin: 15,
        center: true,
        loop: true
    },
    768:{
      items:2,
      margin: 15,
      center: true,
      loop: true
    },
    1200:{
        items:2
    }
  }
});

if ($(window).width() >= 1200) {
jQuery('.overlay-image-with-text-card-module.carousal-view .owl-carousel.type-2').parents('section').addClass('overflow-x-hidden');
jQuery('.overlay-image-with-text-card-module.carousal-view .owl-carousel.type-2').owlCarousel({
  loop:false,
  margin:40,
  nav:true,
  dots: true,
  items: 3,
  center:false,
  startPosition: 0,
  mouseDrag: false
});
}

jQuery('.global-owl-carousel .owl-dots button').each(function(){
  var DOTNUMBER = jQuery(this).index();
  jQuery(this).find('span').html(DOTNUMBER + 1);
});

jQuery('.global-owl-carousel').each(function(){
  var OWLPREV = jQuery(this).find('.owl-prev');
  jQuery(this).find('.owl-dots').detach().insertAfter(OWLPREV);
});





// overlaped-box position-right-bottom
jQuery('.overlaped-box.position-right-bottom').each(function(){
  var HEIGHT = jQuery(this).height();
  var APPLIEDHEIGHT = HEIGHT / 2;
  jQuery(this).css('bottom', - APPLIEDHEIGHT);
});

// accordion list item
// jQuery('.accordion-list-item .accordion-item').each(function(){
//   var INDEX = jQuery(this).index();
//   jQuery(this).attr('data-index', INDEX + 1);
//   var DATAINDEX = jQuery(this).attr('data-index');
//   jQuery(this).find('.accordion-header').prepend('<span></span>');
//   jQuery(this).find('.accordion-header span').html(DATAINDEX + '.');
// });


jQuery('.accordion-list-item').each(function(){
  var accordionIndex = 1;
  jQuery(this).find('.accordion-item').each(function(){
    var INDEX = accordionIndex ++;
    jQuery(this).attr('data-index', INDEX);
    var DATAINDEX = jQuery(this).attr('data-index');
    jQuery(this).find('.accordion-header').prepend('<span></span>');
    jQuery(this).find('.accordion-header span').html(DATAINDEX + '.');
  });
});


// has-section-bg-image
jQuery('.has-section-bg-image .section-bg-box, .has-module-bg-image .module-bg-box').each(function(){
  var WIDTH = jQuery(this).find('img').width();
  var HEIGHT = jQuery(this).find('img').height();
  jQuery(this).width(WIDTH);
  jQuery(this).parent('.has-section-bg-image').css('min-height', HEIGHT);
});


// accordion main
jQuery('.site-accordion').each(function(){
  jQuery(this).find('.accordion-item:first-child .accordion-button').removeClass('collapsed');
  jQuery(this).find('.accordion-item:first-child .accordion-button').attr('aria-expanded', 'true');
  jQuery(this).find('.accordion-item:first-child .accordion-collapse').addClass('show');
  jQuery(this).find('.frame').addClass('normal-text-element-module basic-entry');
});


// frame
jQuery('.frame header').each(function(){
  jQuery(this).append('<span></span>');
});


// special-attach-line-content-box
jQuery('.special-attach-line-content-box.within-center-container').parents('section').addClass('overflow-x-hidden');


// fancy box
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


// logo-carousel
jQuery('.logo-carousel .owl-carousel').owlCarousel({
  loop:true,
  margin:190,
  nav:true,
  dots: false,
  items:4,
  responsive:{
    0:{
      margin:67,
      items:2
    },
    768:{
      margin:67,
      items:3
    },
    1200:{
      margin:67
    },
    1800:{
      margin:267
    }
}
});

// custom select menu
jQuery('.custom-select-field select').selectmenu();

// site-dropdown
jQuery('.filtered-module-on-refresh').each(function(){
  var ACTIVEITEM = jQuery(this).find('.dropdown-menu li.active a').html();
  jQuery(this).find('button').html(ACTIVEITEM);
});


// dropdown filter
jQuery('.addresses-module h3').matchHeight();
jQuery('.dropdown-filter-module').each(function(){

  var $grid = jQuery(this).find('.filter-grid').isotope();

  jQuery(this).find('.filter-button-group .dropdown-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    var ITEMTEXT = $(this).find('.dropdown-item').html();
    $grid.isotope({ filter: filterValue });
    jQuery(this).parents('.dropdown').find('> button').html(ITEMTEXT);
  });

});


// search-map-module
if ($(window).width() >= 1200) {
jQuery('.search-map-module .interactive-map-main-svg .map-activity-area').click(function(e){
  var DATAMAPPRIMARYINFO1 = jQuery(this).attr('data-map-primary-info-1');
  var DATAMAPPRIMARYINFO2 = jQuery(this).attr('data-map-primary-info-2');
  var DATAMAPADDRESSINFO1 = jQuery(this).attr('data-map-address-info-1');
  var DATAMAPADDRESSINFO2 = jQuery(this).attr('data-map-address-info-2');
  var DATAMAPMAILTO = jQuery(this).attr('data-map-mail-to');
  

  console.log(DATAMAPPRIMARYINFO1, DATAMAPPRIMARYINFO2, DATAMAPADDRESSINFO1, DATAMAPADDRESSINFO2, DATAMAPMAILTO);

  jQuery('.search-map-module .interactive-map-main-svg .map-activity-area').not(this).attr('data-status-map-path', ''); 
  jQuery(this).attr('data-status-map-path', 'active');
  


  jQuery(this).parents('.search-map-module').find('.current-map-information h6').html(DATAMAPPRIMARYINFO1);
  jQuery(this).parents('.search-map-module').find('.current-map-information h3').html(DATAMAPPRIMARYINFO2);
  jQuery(this).parents('.search-map-module').find('.current-map-information span.address-info-1').html(DATAMAPADDRESSINFO1);
  jQuery(this).parents('.search-map-module').find('.current-map-information span.address-info-2').html(DATAMAPADDRESSINFO2);
  jQuery(this).parents('.search-map-module').find('.current-map-information span.address-info-mailto a').attr('href', 'mailto:' + DATAMAPMAILTO);
  jQuery(this).parents('.search-map-module').find('.current-map-information span.address-info-mailto a').html(DATAMAPMAILTO);

  e.stopPropagation();

});

jQuery('.search-map-module .interactive-map-main-svg path.first-info-to-show').trigger('click');
jQuery('.search-map-module .interactive-map-main-svg path.first-info-to-show').focus();
}


// multi class buttons
jQuery('.green-button').addClass('site-btn-type-2 icon-right-direction-arrow');


// footer copyright text
if ($(window).width() < 1200) {
  
  var RESPONSIVEFOOTERCOPYRIGHTTEXT = jQuery('.responsive-copyright-text .normal-text-element-module p');
  var NORMALCOPYRIGHTTEXT = jQuery('footer.footer .copy-right-text .the-copy-right-text');

  jQuery(NORMALCOPYRIGHTTEXT).detach().appendTo(RESPONSIVEFOOTERCOPYRIGHTTEXT);
  
  
};

// mobile menu
jQuery('.site-mobile-nav-trigger .trigger input').click(function(){
  var OVERLAYMOBILEMENU = jQuery('.overlay-mobile-menu');
  if ($(this).is(":checked")){
    jQuery(OVERLAYMOBILEMENU).show();
    jQuery(OVERLAYMOBILEMENU).addClass('fadeInDown');
    jQuery(OVERLAYMOBILEMENU).removeClass('fadeOutUp');
    jQuery(this).parents('header.header').addClass('mobile-menu-open');
  }else{
    jQuery(OVERLAYMOBILEMENU).removeClass('fadeInDown');
    jQuery(OVERLAYMOBILEMENU).addClass('fadeOutUp');
    jQuery(this).parents('header.header').removeClass('mobile-menu-open');
  }
    
});

jQuery('.mobile-nav .mobile-sub-expand').click(function(){
  jQuery(this).parent().find('.sub-menu').slideToggle();
  jQuery(this).parent().toggleClass('menu-expanded');
});

site.MOBILEMENUHEADERSCROLLFUNCTION = function() {
  
    if (jQuery(document).scrollTop() > 100) {
      jQuery('header.header > .main-wrap').addClass('scrolled-in-mobile');
    }
    else {
      jQuery('header.header > .main-wrap').removeClass('scrolled-in-mobile');
    }
};

jQuery(window).scroll(function() {
  site.MOBILEMENUHEADERSCROLLFUNCTION();
});
site.MOBILEMENUHEADERSCROLLFUNCTION();

// responsive overlapped box site form
jQuery('.responsive-overlapped-box-parent .overlaped-box .site-form-view-1').each(function(){
  var COLWITHINFIRSTROW = jQuery(this).find('.col-within-first-row');
  var COLWITHINSECONDROW = jQuery(this).find('.col-within-second-row');
  var MAINPARENT = jQuery(this).find('.responsive-col-move-parent');

  jQuery(COLWITHINSECONDROW).detach().appendTo(MAINPARENT);

  jQuery(COLWITHINSECONDROW).wrapAll('<div class="row form-row tiny-grid element-gap element-gap-normal responsive-col-move-prev-row d-none d-xlg-flex"></div>');
  
});

// responsive overlapped box parent
jQuery('.responsive-overlapped-box-parent').each(function(){

  var OVERLAPPEDBOX = jQuery(this).find('.overlaped-box');
  var OVERLAPPEDBOXPLACE = jQuery(this).find('.responsive-overlapped-box-place');

  if ($(window).width() < 1200) {
    jQuery(OVERLAPPEDBOX).detach().appendTo(OVERLAPPEDBOXPLACE);
  };

});

// responsive col move prev row
jQuery('.responsive-col-move-parent').each(function(){

  var MOVINGITEM = jQuery(this).find('.responsive-col-move-prev-row > .my-col');
  var PLACE = jQuery(this).find('.responsive-col-move-place');

  if ($(window).width() < 1200) {
    jQuery(MOVINGITEM).detach().appendTo(PLACE);
  };

});


// responsive-para-parent
jQuery('.responsive-para-parent').each(function(){

  var MOVINGITEM = jQuery(this).find('.reveal-para, .reveal-module');
  var PLACE = jQuery(this).find('.responsive-para-revealead-area');

  if ($(window).width() < 1200) {
    jQuery(MOVINGITEM).detach().insertAfter(PLACE);
  };

});


// responsive-skew-absolute-bild
jQuery('.responsive-skew-absolute-bild').each(function(){

  var HEIGHT = jQuery(this).find('img').height();
  
  if ($(window).width() < 1200) {
    jQuery(this).css('top', - HEIGHT/2);
  };

});

// responsive footer no bg
if ($(window).width() < 1200) {
  jQuery('section.responsive-bg-transparent:last-child').parents('body').find('footer.footer').addClass('responsive-no-bg');
};

// reponsive overlap type skew content
jQuery('.skew-content-with-image-module.responsivew-overlap-type').each(function(){
  var CONTENTHOLDER = jQuery(this).find('.skew-content-holder');
  var IMAGEHOLDER = jQuery(this).find('.skew-image-holder');
  var MAINWRAP = jQuery(this).find('.skew-main-wrap');
  var ICONICGROUPHEAD = jQuery(this).find('.iconic-group-text');
  if ($(window).width() < 1200) {
    jQuery(IMAGEHOLDER).detach().prependTo(MAINWRAP);
    jQuery(ICONICGROUPHEAD).detach().prependTo(IMAGEHOLDER);
    jQuery(IMAGEHOLDER).addClass('normal-text-element-module basic-entry');
  }
});

// uberuns responsive placemnment
jQuery('.uberuns-graphics-content-module').each(function(){
  var BOTTOMELEMENT = jQuery(this).find('.bottom-col');
  var FIRSTELEMENT = jQuery(this).find('> .row').find('> .my-col:first-child');
  var BOTTOMCOLBILD = jQuery(this).find('.bottom-col .bild');
  var BOTTOMCOLCONTEXT = jQuery(this).find('.bottom-col .context');
  if ($(window).width() < 1200) {
    jQuery(BOTTOMELEMENT).detach().insertAfter(FIRSTELEMENT);
    jQuery(BOTTOMCOLBILD).detach().insertAfter(BOTTOMCOLCONTEXT);
  }
});


// product-detail-with-form-module
jQuery('.product-detail-with-form-module').each(function(){
  var FORMCOL = jQuery(this).find('.form-col');
  var PRODUCTCOL = jQuery(this).find('.product-col');

  if ($(window).width() < 1200) {
    jQuery(FORMCOL).detach().insertAfter(PRODUCTCOL);
  }
});


// footer accordion
if ($(window).width() < 768) {
  jQuery('.accordion-heading-responsive').click(function(){
    jQuery(this).parent().find('.accordion-content-responsive').slideToggle();
    jQuery(this).toggleClass('expanded');
  });
}


// responsive-prev-moved-section
if ($(window).width() < 1200) {
  jQuery('.responsive-prev-moved-section').each(function(){
    var PREVELEMENT = jQuery(this).prev();
    jQuery(this).detach().insertBefore(PREVELEMENT);
  });
};


// side-by-placed-curve-content
jQuery('.side-by-placed-curve-content').parents('.section-row').addClass('d-none d-xlg-block');



// set back

jQuery('.set-back').each(function(){

  var SETBACK = jQuery(this).find('img').attr('src');
   jQuery(this).css('background-image', 'url(' + SETBACK + ')');
 
 });




});








// load
jQuery(window).load(function(){

// skew content first view
  if ($(window).width() >= 1200) {
    jQuery('.start-page-skew-content-module-view-wrap .direction-legend').each(function(){
        jQuery(this).find('img').addClass('d-inline-block animated fadeInDown');
    });
  };
  
  


var siteLoad = {}




siteLoad.GLOBALISOTOPXLGONLY = function() {
  
  // isotop xlg only
  if ($(window).width() >= 1200) {
    jQuery('.global-isotop-grid.isotop-xlg-only').isotope({
      // options
      itemSelector: '.my-col'
    });
  };
      
  
}; 

siteLoad.GLOBALISOTOPALLDEVICE = function() {
  
  // isotop all device

    jQuery('.global-isotop-grid.isotop-all-device').isotope({
      // options
      itemSelector: '.my-col'
    });

      
  
}; 
  




setTimeout(function() {
  siteLoad.GLOBALISOTOPXLGONLY();
  siteLoad.GLOBALISOTOPALLDEVICE();
}, 100);





// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.iconic-widget-module .the-icon').matchHeight();
  jQuery('.iconic-widget-module .the-context').matchHeight();

  jQuery('.responsive-carousel-view:not(.responsive-carousel-view-negative).type1 .owl-item').matchHeight();

  if ($(window).width() < 1200) {
    jQuery('.product-listing-module.responsive-carousel-view:not(.responsive-carousel-view-negative) .product-title').matchHeight();
  }


  jQuery('.upload-title').matchHeight();


  jQuery('.news-listing-module .news-main-title').matchHeight();

  
  
  











jQuery(window).resize(function(){


});



jQuery('.site-custom-ui-select').click(function(){
  var WIDTH = jQuery(this).width();
  jQuery('.ui-selectmenu-menu ul').width(WIDTH);
});


// section bg
var FOOTERBGCOLOR = jQuery('.has-section-bg:last-child').attr('data-section-bg');
jQuery('footer.footer').addClass(FOOTERBGCOLOR);



});


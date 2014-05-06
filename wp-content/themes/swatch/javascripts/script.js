var animationSpeed = 400;

(function($) {
    $(document).ready(function() {

        // Initallize flexslider
        initSliders();

        // Hide address bar on IOs
        hideBar();

        // Add class to navbar when scrolled
        navbarScroll();

        // Icon hovers
        iconHovers();

        // Icon animations
        iconAnimations();

        // setup contact form
        setupContactForm();

        // creeate twitter feeds
        createTwitter();

        // Init portfolio filters
        filtersInit();

        // Init magnific popup
        lightboxInit();

        // Init bootstrap's carusel
        carouselInit();

        // Init bootstrap's tooltop
        tooltipInit();

        // Revolution Slider Init
        revInit();

        // Init Audio player
        audioInit();

        // Init Video Player
        videoInit();

        // Accordion toggles
        accordionInit();

        // Knob init
        knobInit();

        // Scroll to top
        scrollToTop();

        // Scroll around sections
        smoothScroll();

        // fix for embeded youtube videos shortcode index
        fixEmbededVideosIndex();

        // check for wordpress calendar widget
        wpCalendar();

        // Start isotpe
        isotopeInit();
    });


// Function that changes the class of the fixed header after some scrolling
function navbarScroll() {
    var header = $(".navbar-inner");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 230) {
            header.addClass("navbar-scrolled");
        } else {
            header.removeClass("navbar-scrolled");
        }
    });
}

function initSliders(){
    $('.flexslider[id]').filter(function(){
        return $(this).parents('.carousel').length < 1;
    }).each(function(){
        var that = this;
        $(this).imagesLoaded().done( function(instance){
            flexInit(that);
        });
    });
}

// Initialize flexlider function
function flexInit(element) {
        // is our slider inside a masonry container?
        var $isotopeContainer = $(element).closest('ul.isotope');

        // We use data atributes on the flexslider items to control the behaviour of the slideshow
        var slider = $(element),

            //data-slideshow: defines if the slider will start automatically (true) or not
            sliderShow = slider.attr('data-flex-slideshow') == "false" ? false : true,

            //data-flex-animation: defines the animation type, slide (default) or fade
            sliderAnimation = !slider.attr('data-flex-animation') ? "slide" : slider.attr('data-flex-animation'),

            //data-flex-speed: defines the animation speed, 7000 (default) or any number
            sliderSpeed = !slider.attr('data-flex-speed') ? 7000 : slider.attr('data-flex-speed'),

            //data-flex-duration: defines the transition speed in milliseconds
            sliderDuration = !slider.attr('data-flex-duration') ? 600 : slider.attr('data-flex-duration'),

            //data-flex-directions: defines the visibillity of the nanigation arrows, hide (default) or show
            sliderDirections = slider.attr('data-flex-directions') == "hide" ? false : true,

            //data-flex-directions-type: defines the type of the direction arrows, fancy (with bg) or simple
            sliderDirectionsType = slider.attr('data-flex-directions-type') == "fancy" ? "flex-directions-fancy" : "",

            //data-flex-directions-position: defines the positioning of the direction arrows, default (inside the slider) or outside the slider
            sliderDirectionsPosition = slider.attr('data-flex-directions-position') == "outside" ? "flex-directions-outside" : "",

            //data-flex-controls: defines the visibillity of the nanigation controls, hide (default) or show
            sliderControls = slider.attr('data-flex-controls') == "thumbnails" ? "thumbnails" : slider.attr('data-flex-controls') == "hide" ? false : true,

            //data-flex-controlsposition: defines the positioning of the controls, inside (default) absolute positioning on the slideshow, or outside
            sliderControlsPosition = slider.attr('data-flex-controlsposition') == "inside" ? "flex-controls-inside" : "flex-controls-outside",

            //data-flex-controlsalign: defines the alignment of the controls, center (default) left or right
            sliderControlsAlign = !slider.attr('data-flex-controlsalign') ? "flex-controls-center" : 'flex-controls-' + slider.attr('data-flex-controlsalign'),

            //data-flex-itemwidth: the width of each item in case of a multiitem carousel, 0 (default for 100%) or a nymber representing pixels
            sliderItemWidth = !slider.attr('data-flex-itemwidth') ? 0 : parseInt(slider.attr('data-flex-itemwidth'), 10),

            //data-flex-itemmax: the max number of items in a carousel
            sliderItemMax = !slider.attr('data-flex-itemmax') ? 0 : parseInt(slider.attr('data-flex-itemmax'), 0),

            //data-flex-itemmin: the max number of items in a carousel
            sliderItemMin = !slider.attr('data-flex-itemmin') ? 0 : parseInt(slider.attr('data-flex-itemmin'), 0);

            //data-flex-captionvertical: defines the vertical positioning of the captions, top or bottom
            sliderCaptionsVertical = slider.attr('data-flex-captionvertical') == "top" ? "flex-caption-top" : "";

            //data-flex-captionvertical: defines the horizontal positioning of the captions, left or right or alternate
            sliderCaptionsHorizontal = slider.attr('data-flex-captionhorizontal') == "alternate" ? "flex-caption-alternate" : 'flex-caption-'+ slider.attr('data-flex-captionhorizontal');

        //assign the positioning classes to the navigation
        slider.addClass(sliderControlsPosition).addClass(sliderControlsAlign).addClass(sliderDirectionsType).addClass(sliderDirectionsPosition).addClass(sliderCaptionsHorizontal).addClass(sliderCaptionsVertical);

        slider.flexslider({
            slideshow: sliderShow,
            animation: sliderAnimation,
            slideshowSpeed: parseInt(sliderSpeed),
            animationSpeed: parseInt(sliderDuration),
            itemWidth: sliderItemWidth,
            minItems: sliderItemMin,
            maxItems: sliderItemMax,
            controlNav: sliderControls,
            directionNav: sliderDirections,
            prevText: "",
            nextText: "",
            smoothHeight: true,
            useCSS : false,
            after: function(slider) {
                if($isotopeContainer.length > 0 ){
                    // if flexslider is inside masonry container, trigger relayout in case of uneven sized images
                    $isotopeContainer.isotope( 'reLayout' );
                }
            }
        });
}


// funcrion to hide the address bar on mobile devices
function hideBar() {
    if( ( navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i) ) ) {
        if(window.addEventListener){
            window.addEventListener("load",function() {
                // Set a timeout...
                setTimeout(function(){
                    // Hide the address bar!
                    window.scrollTo(0, 1);
                }, 0);
            });
        }
    }
}


// Function to change Social icon colors on hover
function iconHovers(){
    $('[data-iconcolor]').each(function(){
        var element         = $(this);
        var original_color  =$(element).css('background-color');
        var original_text_color  =$(element).find('i').css('color');
        element.on('mouseenter', function(){
            element.css('background-color' , element.attr('data-iconcolor'));
            if (element.parents('.social-icons').hasClass('social-simple')) {
                element.find('i').css('color' , element.attr('data-iconcolor'));
            }
        });
        element.on('mouseleave', function(){
            element.css('background-color' ,original_color);
            if (element.parents('.social-icons').hasClass('social-simple')) {
                element.find('i').css('color' , original_text_color);
            }
        });

    });
}


// Function to animate icon on hover
function iconAnimations(){
    $('[data-animation]').each(function(){
        var element         = $(this),
            elementParent   = $(element).parent();


        elementParent.on('mouseenter', function(){
            element.addClass('animated ' + element.attr('data-animation'));
        });
        elementParent.on('mouseleave', function(){
            element.removeClass('animated ' + element.attr('data-animation'));
        });

    });
}


// Contact form validation function
function setupContactForm() {
    // bind submit handler to form
    $('#contactForm').on('submit', function(e) {
        // prevent native submit
        e.preventDefault();
        // clear all inputs tooltips
        $( ':input' ).tooltip( 'destroy' );
        // clear all errors
        $( '.control-group' ).removeClass( 'error' );

        // submit the form
        $(this).ajaxSubmit({
            url: 'contact_me.php',
            type: 'post',
            dataType: 'json',
            beforeSubmit: function() {
                // disable submit button
                $( ':input[name="submitButton"]' ).attr( 'disabled','disabled' );
            },
            success: function( response, status, xhr, form ) {
                if( response.status == "ok" ) {
                    // mail sent ok - display sent message
                    for( var msg in response.messages ) {
                        showInputMessage( response.messages[msg], 'success' );
                    }
                    // clear the form
                    form[0].reset();
                }
                else {
                    for( var error in response.messages ) {
                        showInputMessage( response.messages[error], 'error' );
                    }
                }
                // make button active
                $( ':input[name="submitButton"]' ).removeAttr( 'disabled' );
            },
            error: function() {
                for( var error in response.messages ) {
                    showInputMessage( response.messages[error], 'error' );
                }
                // make button active
                $( ':input[name="submitButton"]' ).removeAttr( 'disabled' );
            }
        });
        return false;
    });
}


// Input popup function for error messages
function showInputMessage( message, status ) {
    var $input = $(':input[name="' + message.field + '"]');
    $input.tooltip( { title: message.message, placement : message.placement, trigger: 'manual' } );
    $input.tooltip( 'show' );
    $input.parents( '.control-group' ).addClass( status );
}


// Twitter feed function
function createTwitter() {
    $( '.twitter-feed' ).each( function() {
        $( this ).tweet({
            count: 3,
            username: 'tweepsum',
            loading_text: "searching twitter...",
            template: '<i class="icon-twitter"></i>{text} <small class="info text-italic"> {time}</small>'
        });
    });
}


// Magnific popup init function
function lightboxInit() {
    $('.magnific').magnificPopup({
        type:'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.magnific-youtube, .magnific-vimeo, .magnific-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false
    });
    $('.magnific-gallery').each(function(index , value){
        var gallery = $(this);
        var galleryImages = $(this).data("links").split(",");
        var galleryTitle = $(this).attr("title");
        var items = [];
        for(var i=0;i<galleryImages.length; i++){
            items.push({
                src:galleryImages[i],
                title:galleryTitle
            });
        }
        gallery.magnificPopup({
            mainClass: 'mfp-fade',
            items:items,
            gallery:{
                enabled:true
            },
            type: 'image'
        });
    });
    $('.product-gallery').magnificPopup({
        delegate: 'li figcaption a',
        type: 'image',
        mainClass: 'mfp-fade',
        gallery:{
            enabled:true,
            navigateByImgClick:true
        }
    });
}


// Isotope init function
function isotopeInit() {
    var $container = $('.isotope');

    $container.imagesLoaded().done( function(){
        setTimeout(function(){
            $container.isotope({});
        },100);
    });

    $('.isotope-filters a').click(function(){
      var selector = $(this).attr('data-filter');
      $(this).parents('.isotope-filters').find('a').removeClass('active');
      $(this).addClass('active');
      $container.isotope({ filter: selector });
      return false;
    });
    // rearrange items on resize
    $(window).smartresize(function(){
      $container.isotope('reLayout');
    });

}


// Portfolio filters animation function
function filtersInit() {
    var $Filter = $('.isotope-filters');
    var FilterTimeOut;
    $Filter.find('li:first').addClass('active');
    $Filter.find('li:not(.active)').hide();
    $Filter.hover(function(){
        clearTimeout(FilterTimeOut);
        if( $(window).width() < 959 )
        {
            return;
        }
        FilterTimeOut=setTimeout(function(){ $Filter.find('li:not(.active)').stop(true, true).animate({width: 'show' }, 250, 'swing'); }, 100);
    },function(){
        if( $(window).width() < 959 )
        {
            return;
        }
        clearTimeout(FilterTimeOut);
        FilterTimeOut=setTimeout(function(){ $Filter.find('li:not(.active)').stop(true, true).animate({width: 'hide' }, 250, 'swing'); }, 100);
    });
    $(window).resize(function() {
        if( $(window).width() < 959 )
        {
            $Filter.find('li:not(.active)').show();
        }
        else
        {
            $Filter.find('li:not(.active)').hide();
        }
    });
    $(window).resize();
    $Filter.find('a').click(function(){
        $Filter.find('li').not($(this)).removeClass('active');
        $(this).parent('li').addClass('active');
    });
}


// Function to init bootstrap's tooltip
function tooltipInit() {
    $('[data-toggle="tooltip"]').tooltip();
}

// Function to init bootstrap's carousel
function carouselInit() {
    $('.carousel').carousel({
        interval: 7000
    });
    // for initial slide there is no slid event
    initNestedSliders();

    // init nested flexsliders inside each slide when shown
    $('.carousel').on('slid',function(event){
        setTimeout(function(){
            initNestedSliders();
        },0);
    });
}

function initNestedSliders(){
    $('.carousel').find('.active .flexslider[id]').each(function(){
        if(!$(this).hasClass('triggered')){
            $(this).addClass('triggered');
            flexInit(this);
        }
    });
}

// Function to init Revolution Slider
function revInit() {
    // make sure that revolution slider exists
    if( typeof $('.banner').revolution == 'function' ){
        $('.banner').revolution({
            delay:7000,
            startwidth:1170,
            startheight:480,

            onHoverStop:"on",                       // Stop Banner Timer at Hover on Slide on/off

            thumbWidth:100,                         // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
            thumbHeight:50,
            thumbAmount:3,

            hideThumbs:0,
            navigationType:"bullet",                // bullet, thumb, none
            navigationArrows:"solo",                // nexttobullets, solo (old name verticalcentered), none

            navigationStyle:"round",                // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


            navigationHAlign:"center",              // Vertical Align top,center,bottom
            navigationVAlign:"bottom",                 // Horizontal Align left,center,right
            navigationHOffset:0,
            navigationVOffset:20,

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,

            touchenabled:"on",                      // Enable Swipe Function : on/off



            stopAtSlide:-1,                         // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
            stopAfterLoops:-1,                      // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

            hideCaptionAtLimit:0,                   // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
            hideAllCaptionAtLilmit:0,               // Hide all The Captions if Width of Browser is less then this value
            hideSliderAtLimit:0,                    // Hide the whole slider, and stop also functions if Width of Browser is less than this value


            fullWidth:"on",

            shadow:0                                //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

        });
    }
}

// Function to set up the audio player
function audioInit() {
    $( 'audio' ).audioPlayer();
}

function videoInit() {
    $('video').mediaelementplayer({
        pauseOtherPlayers: false
    });
}

// Function to fix accordion arrows
function accordionInit() {
    $('.accordion-body').on('hide', function () {
        $(this).parent('.accordion-group').find('.accordion-toggle').addClass('collapsed');
    });
}

// Function to init Knob
function knobInit() {
    var dialer = $(".chart"),
        track = dialer.attr('data-track-color'),
        bar = dialer.attr('data-bar-color'),
        width = dialer.attr('data-line-width'),
        piesize = dialer.attr('data-size');

    dialer.waypoint(function() {
      $(this).easyPieChart({
        barColor: bar,
        trackColor: track,
        lineWidth: width,
        scaleColor: false,
        animate: 1000,
        size: piesize,
        lineCap: "square"
      });
    }, {
      triggerOnce: true,
      offset: 'bottom-in-view'
    });

    dialer.css("left", "50%");
    dialer.css("margin-left", - piesize/2 );
}

// Scroll to top
function scrollToTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').css("bottom", "12px").css("opacity", "1");
        } else {
            $('.go-top').css("bottom", "-44px").css("opacity", "0");
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    });
}

// Function for smooth scrolling between sections
function smoothScroll() {
    $('.docs-sidebar-menu').on('click','a', function(e) {
        if( this.hash !== '' ) {
            var target = this.hash;
            e.preventDefault();
            $.scrollTo( target, 3 * animationSpeed, {
                axis: 'y',
                onAfter: function() {
                    window.location.hash = target;
                }
            } );
        }
   });
}

function fixEmbededVideosIndex() {
    var frames = document.getElementsByTagName("iframe");
    for (var i = 0; i < frames.length; i++) {
        if(frames[i].src.indexOf('?') == -1){
            frames[i].src += "?wmode=opaque";
        }
        else{
            frames[i].src += "&wmode=opaque";
        }
    }
}

function wpCalendar() {
    var cal = $('#wp-calendar');
    if(cal.length){
        cal.addClass( 'table' );
        var parentSection = cal.parents('section');
        var classes = parentSection.attr('class').split(' ');
        for (var i = 0; i < classes.length; i++) {
            var matches = /^swatch\-(.+)/.exec(classes[i]);
            if (matches !== null) {
                cal.addClass( matches[0] );
            }
        }
    }
}
})(jQuery);
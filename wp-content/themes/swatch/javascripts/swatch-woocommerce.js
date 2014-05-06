(function($) {
    $(document).ready(function() {
        $('body').on('click', '.mini-cart-overview > a', function(event) {
            $.pageslide({
                href: '#mini-cart-container',
                direction: 'left'
            });
            $('.mini-cart-underlay').toggleClass('active');
            event.preventDefault();
        });
        $('body').on('click', '.mini-cart-close', function() {
            $('.mini-cart-underlay').removeClass('active');
        });
    });
})(jQuery);
<?php
/**
 * Empty cart page
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

?>
<section class="section section-commerce <?php echo oxy_get_option( 'woocom_general_swatch' ); ?>">
    <div class="container">
        <div class="row text-center">
            <p><?php _e( 'Your cart is currently empty.', 'woocommerce' ) ?></p>

            <?php do_action('woocommerce_cart_is_empty'); ?>
            <p><a class="btn btn-primary" href="<?php echo get_permalink(woocommerce_get_page_id('shop')); ?>"><?php _e( '&larr; Return To Shop', 'woocommerce' ) ?></a></p>
        </div>
    </div>
</section>


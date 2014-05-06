<?php
/**
 * Shows a woocommerce account page
 *
 * @package Swatch
 * @subpackage Frontend
 * @since 1.0
 *
 * @copyright (c) 2013 Oxygenna.com
 * @license http://wiki.envato.com/support/legal-terms/licensing-terms/
 * @version 1.5.2
 */

global $woocommerce;

?>
<section class="section section-commerce <?php echo oxy_get_option( 'woocom_general_swatch' ); ?>">
    <div class="container">
        <?php $woocommerce->show_messages(); ?>
        <div class="row">
            <div class="span3">
                <?php
                if ( has_nav_menu( 'account' ) ) :
                   wp_nav_menu( array( 'theme_location' => 'account', 'menu_class' => 'nav nav-pills nav-stacked', 'depth' => 0 ) );
                else:
                    _e( 'create an account menu in the admin options', 'swatch-td' );
                endif; ?>
            </div>
            <div class="span9">
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</section>
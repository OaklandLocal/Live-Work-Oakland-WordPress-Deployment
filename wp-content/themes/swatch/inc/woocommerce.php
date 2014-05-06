<?php
/**
 * All Woocommerce stuff
 *
 * @package Swatch
 * @subpackage Admin
 * @since 0.1
 *
 * @copyright (c) 2013 Oxygenna.com
 * @license **LICENSE**
 * @version 1.5.2
 */

add_theme_support( 'woocommerce' );

if( oxy_is_woocommerce_active() ) {
     // Dequeue WooCommerce stylesheet(s)
    if ( version_compare( WOOCOMMERCE_VERSION, "2.1" ) >= 0 ) {
        // WooCommerce 2.1 or above is active
        add_filter( 'woocommerce_enqueue_styles', '__return_false' );
    } else {
        // WooCommerce is less than 2.1
        define( 'WOOCOMMERCE_USE_CSS', false );
    }
    /**
     * All hooks for the shop page and category list page go here
     *
     * @return void
     **/
    function oxy_shop_and_category_hooks() {
        if( is_shop() || is_product_category() ) {
            function oxy_remove_title() {
                return false;
            }
            add_filter( 'woocommerce_show_page_title', 'oxy_remove_title');

            function oxy_shop_layout_start() {
                switch (oxy_get_option('shop_layout')) {
                    case 'sidebar-left':?>
                        <div class="row-fluid"><div class="span3"> <?php get_sidebar(); ?></div><div class="span9"><?php
                        break;
                    case 'sidebar-right': ?>
                        <div class="row-fluid"><div class="span9"><?php
                        break;
                }
            }
            // remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
            add_action('woocommerce_before_main_content', 'oxy_shop_layout_start', 18);

            function oxy_shop_layout_end(){
                switch (oxy_get_option('shop_layout')) {
                    case 'sidebar-left': ?>
                        </div></div><?php
                        break;
                    case 'sidebar-right': ?>
                        </div><div class="span3"><?php get_sidebar(); ?></div></div><?php
                        break;
                }
            }
            add_action('woocommerce_after_main_content', 'oxy_shop_layout_end', 9);

            function oxy_before_breadcrumbs() {
                echo '<div class="row-fluid"><div class="span6 small-screen-center">';
            }
            // remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
            add_action('woocommerce_before_main_content', 'oxy_before_breadcrumbs', 19);

            function oxy_after_breadcrumbs() {
                echo '</div><div class="span6 text-right">';
            }
            add_action('woocommerce_before_main_content', 'oxy_after_breadcrumbs', 20);

            function oxy_after_orderby() {
              echo '</div></div>';
            }
            add_action('woocommerce_before_shop_loop', 'oxy_after_orderby', 30);

        }
    }

    function oxy_single_product_hooks() {
        if( is_product() ) {
            // we need to reposition the messages before the breadcrumbs
            remove_action( 'woocommerce_before_single_product', 'woocommerce_show_messages', 10);
            add_action( 'woocommerce_before_main_content', 'woocommerce_show_messages', 15 );
        }
    }

    add_action( 'wp', 'oxy_shop_and_category_hooks' );
    add_action( 'wp', 'oxy_single_product_hooks');

    // GLOBAL HOOKS - EFFECT ALL PAGES

    // first unhook the global WooCommerce wrappers. They were adding another <div id=content> around.
    remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
    remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

    function oxy_before_main_content_10() {
        echo '<section class="section section-commerce ' . oxy_get_option( 'woocom_general_swatch' ) . '"><div class="container">';
    }
    add_action('woocommerce_before_main_content', 'oxy_before_main_content_10', 10);

    function oxy_after_main_content_10() {
      echo '</div></section>';
    }
    add_action('woocommerce_after_main_content', 'oxy_after_main_content_10', 10);

    function custom_override_breadcrumb_fields($fields) {
        $fields['wrap_before']='<nav class="woocommerce-breadcrumb" itemprop="breadcrumb">';
        $fields['wrap_after']='</nav>';
        $fields['before']='<span>';
        $fields['after']='</span>';
        $fields['delimiter']=' ';
        return $fields;
    }
    add_filter('woocommerce_breadcrumb_defaults','custom_override_breadcrumb_fields');

    // removing default woocommerce image display. Also affects shortcodes.
    remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );

    function oxy_woocommerce_template_loop_product_thumbnail(){
        global $product;
        $image_ids = $product->get_gallery_attachment_ids();
        $back_image = array_shift( $image_ids );
        echo '<div class="product-image">';
        echo '<div class="product-image-front">' .woocommerce_get_product_thumbnail() . '</div>';
        if( null != $back_image ){
            $back_image = wp_get_attachment_image_src( $back_image, 'shop_catalog' );
            echo '<div class="product-image-back"><img src="' . $back_image[0] . '"/></div>';
        }
        echo '</div>';
    }
    add_action( 'woocommerce_before_shop_loop_item_title', 'oxy_woocommerce_template_loop_product_thumbnail', 10 );
}

/*
 *
 * Set default image sizes on activation hook
 *
 */
global $pagenow;
if ( is_admin() && isset( $_GET['activated'] ) && $pagenow == 'themes.php' ) add_action( 'init', 'woocommerce_default_image_dimensions', 1 );
/**
 * Define image sizes
 */
function woocommerce_default_image_dimensions() {
    $catalog = array(
        'width'     => '500',
        'height'    => '500',
        'crop'      => 1
    );

    $single = array(
        'width'     => '700',
        'height'    => '700',
        'crop'      => 1
    );

    $thumbnail = array(
        'width'     => '90',
        'height'    => '90',
        'crop'      => 1
    );

    // Image sizes
    update_option( 'shop_catalog_image_size', $catalog );       // Product category thumbs
    update_option( 'shop_single_image_size', $single );         // Single product image
    update_option( 'shop_thumbnail_image_size', $thumbnail );   // Image gallery thumbs
}

remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description' );
add_action( 'woocommerce_before_main_content', 'woocommerce_taxonomy_archive_description', 11 );

function woocommerce_taxonomy_archive_description() {
    if ( is_tax( array( 'product_cat', 'product_tag' ) ) && get_query_var( 'paged' ) == 0 ) {
        $description = apply_filters( 'the_content', term_description() );
        if ( $description ) {
            echo '<div class="term-description lead">' . $description . '</div>';
        }
    }
}

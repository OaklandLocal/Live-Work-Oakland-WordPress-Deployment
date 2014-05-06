<?php
/**
 * Main functions file
 *
 * @package Swatch
 * @subpackage Frontend
 * @since 0.1
 *
 * @copyright (c) 2013 Oxygenna.com
 * @license http://wiki.envato.com/support/legal-terms/licensing-terms/
 * @version 1.5.2
 */

// create defines
define( 'THEME_NAME', 'Swatch' );
define( 'THEME_SHORT', 'swatch' );

define( 'OXY_THEME_DIR', get_template_directory() . '/' );
define( 'OXY_THEME_URI', get_template_directory_uri() . '/' );

// include extra theme specific code
include OXY_THEME_DIR . 'inc/frontend.php';
include OXY_THEME_DIR . 'inc/modules/tgm-plugin/plugin-options.php';
include OXY_THEME_DIR . 'inc/woocommerce.php';

// create theme
if( class_exists('OxyTheme') ) {
    global $oxy_theme;
    $oxy_theme = new OxyTheme(
        array(
            'text_domain'       => 'swatch-td',
            'admin_text_domain' => 'swatch-admin-td',
            'min_wp_ver'        => '3.4',
            'sidebars' => array(
                'sidebar' => array( 'Sidebar', 'Blog Sidebar' ),
            ),
            'widgets' => array(
                'Swatch_twitter' => 'swatch_twitter.php',
                'Swatch_social'   => 'swatch_social.php',
                'Swatch_wpml_language_selector'  => 'swatch_wpml_language_selector.php',
            ),
            'shortcodes' => array(
                array(
                    'title' => 'Columns',
                    'members' => array(
                        'row',
                        'span1',
                        'span2',
                        'span3',
                        'span4',
                        'span5',
                        'span6',
                        'span7',
                        'span8',
                        'span9',
                        'span10',
                        'span11',
                        'span12',
                    ),
                ),
                array(
                    'title' => 'Layouts',
                    'members' => array(
                        array(
                            'title' => '2 Columns',
                            'members' => array(
                                'layout21',
                                'layout22',
                                'layout23',
                                'layout24',
                                'layout25',
                            ),
                        ),
                        array(
                            'title' => '3 Columns',
                            'members' => array(
                                'layout3',
                            ),
                        ),
                        array(
                            'title' => '4 Columns',
                            'members' => array(
                                'layout4',
                            ),
                        ),
                    ),
                ),
                array(
                    'title' => 'Components',
                    'members' => array(
                        'image',
                        'button',
                        'button-fancy',
                        'alert',
                        'accordions',
                        'tabs',
                        'panel',
                        'progress',
                        'pie',
                        'pricing',
                    ),
                ),
                array(
                    'title' => 'Typography',
                    'members' => array(
                        'lead_paragraph',
                        'blockquote',
                        'iconlist',
                        'fancylist',
                        'icon',
                        'socialicons',
                    ),
                ),
                array(
                    'title' => 'Sections',
                    'members' => array(
                        'section',
                        'services',
                        'slideshow',
                        'portfolio',
                        'testimonials',
                        'recent_posts',
                        'staff_list',
                        'staff_featured',
                        'map'
                    ),
                ),
            ),
        )
    );

    include OXY_THEME_DIR . 'inc/custom-posts.php';
    include OXY_THEME_DIR . 'inc/options/shortcodes/shortcodes.php';
    include OXY_THEME_DIR . 'inc/options/widgets/default_overrides.php';

    if( is_admin() ) {
        include OXY_THEME_DIR . 'inc/options/shortcodes/create-shortcode-options.php';
        include OXY_THEME_DIR . 'inc/backend.php';
        include OXY_THEME_DIR . 'inc/theme-metaboxes.php';
    }
}

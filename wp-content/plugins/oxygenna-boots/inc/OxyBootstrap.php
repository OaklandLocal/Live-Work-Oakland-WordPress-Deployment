<?php
/**
 * Main Plugin class for Boostrap Based themes
 *
 * @package **PLUGIN_NAME**
 * @since 0.1
 *
 * @copyright **COPYRIGHT**
 * @license **LICENSE**
 * @version **PLUGIN_VERSION**
 */

class OxyBootstrap {
    /**
     * Constructor, this should be called plugin base
     */
    function __construct() {
        add_action( 'init', array( &$this, 'init' ) );
    }

    function init() {
        require_once OXY_BSPLUGIN_DIR . 'shortcode-options.php';
        require_once OXY_BSPLUGIN_DIR . 'shortcodes.php';
    }
}
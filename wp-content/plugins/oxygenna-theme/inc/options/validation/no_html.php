<?php
/**
 * Removes all html tags
 *
 * @package **THEME**
 * @subpackage Core
 * @since 1.0
 *
 * @copyright **COPYRIGHT**
 * @license **LICENCE**
 * @version **VERSION**
 */

/**
 * Removes all HTML
 *
 * @package **THEME**
 * @since 1.0
 **/
class OxyNo_html {
    /**
     * Validates the option data
     *
     * @return validated options array
     * @since 1.0
     **/
    function validate( $field, $options, $new_options ) {
        $options[$field['id']] = strip_tags( $new_options[$field['id']] );
        return $options;
    }
}
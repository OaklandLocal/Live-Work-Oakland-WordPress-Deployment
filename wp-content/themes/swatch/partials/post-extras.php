<?php
/**
 * Shows tags, categories and comment count for posts
 *
 * @package Swatch
 * @subpackage Frontend
 * @since 1.3
 *
 * @copyright (c) 2013 Oxygenna.com
 * @license **LICENSE**
 * @version 1.5.2
 */
?>
<div class="post-extras overlay">
    <div class="row-fluid">
        <div class="span8 small-screen-margin-bottom">
            <span class="post-category">
                <?php if( has_category() && oxy_get_option( 'blog_categories' ) == 'on' ) : ?>
                <i class="icon-folder-open"></i>
                <?php the_category( ', ' ); ?>
                <?php endif; ?>
            </span>
            <span class="post-tags">
                <?php if( has_tag() && oxy_get_option( 'blog_tags' ) == 'on' ) : ?>
                <i class="icon-tags"></i>
                <?php the_tags( $before = '', $sep = ', ', $after = '' ); ?>
                <?php endif; ?>
            </span>
        </div>
        <div class="span4 text-right small-screen-center">
            <?php if ( comments_open() && ! post_password_required() && oxy_get_option( 'blog_comment_count' ) == 'on' && !is_single() ) : ?>
            <i class="icon-link"></i>
            <?php comments_popup_link( _x( 'No comments', 'comments number', 'swatch-td' ), _x( '1 comment', 'comments number', 'swatch-td' ), _x( '% comments', 'comments number', 'swatch-td' ) ); ?>
            <?php endif; ?>
        </div>
    </div>
</div>

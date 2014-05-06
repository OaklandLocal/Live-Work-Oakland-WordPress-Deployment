<?php
/*
Template Name: Pods
*/

get_header(); ?>

<?php echo GeoMashup::map('height=200&zoom=15') ?>

<section class="section <?php echo oxy_get_option('blog_swatch'); ?>">
    <div class="container">
        <div class="row-fluid">
            <?php if( oxy_get_option('blog_layout') == 'sidebar-left' ): ?>
            <aside class="span3 sidebar">
                <?php get_sidebar(); ?>
            </aside>
            <?php endif; ?>
            <div class="<?php echo oxy_get_option('blog_layout') == 'full-width' ? 'span12':'span9' ; ?>">
                <?php while ( have_posts() ) : the_post(); ?>

					<?php pods_content() ?>

                <?php endwhile; ?>
            </div>
            <?php if( oxy_get_option('blog_layout') == 'sidebar-right' ): ?>
            <aside class="span3 sidebar">
                <?php get_sidebar(); ?>
            </aside>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>

<?php
/*
Template Name: Pods
*/

get_header(); ?>

<?php if ( function_exists( 'breadcrumb_trail' ) ) breadcrumb_trail(); ?>

<?php echo GeoMashup::map('height=200&zoom=15') ?>

<?php while(have_posts()): the_post(); ?>

	<div id="page" class="fix">
		<div id="page-inner" class="container fix">
			<div id="content-part">
				<article id="entry-<?php the_ID(); ?>" <?php post_class('entry'); ?>>

					<?php pods_content() ?>

					</article>
					</div><!--/content-part-->

					<?php endwhile; ?>
				<div id="sidebar" class="sidebar-right">
				<?php get_sidebar(); ?>
			</div><!--/sidebar-->
		</div><!--/page-inner-->
	</div><!--/page-->

<?php get_footer(); ?>

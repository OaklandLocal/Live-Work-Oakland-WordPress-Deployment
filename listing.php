<?php
/*
Template Name: Listing
*/

get_header(); ?>

<?php echo GeoMashup::map('height=200&zoom=15') ?>

<?php while(have_posts()): the_post(); ?>

	<div id="page" class="fix">
		<div id="page-inner" class="container fix">
			<div id="content-part">
				<article id="entry-<?php the_ID(); ?>" <?php post_class('entry'); ?>>
					<div class="text">
				        
						<h2 class="post-title">
            						<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'swatch-td' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark">
                						<?php the_title(); ?>
            						</a>
        					</h2>

				<p><?php echo get_post_meta($post->ID, 'contact', true); ?>
				<?php 
				$role = get_post_meta( $post->ID, 'role', true );
				if( $role != '') {
				  echo ", $role";
				} 
				?><br />
				
				<?php 
				$phone = get_post_meta( $post->ID, 'phone', true );
				if( $phone != '() -') {
				  echo "$phone <br />";
				} 
				?>

				<?php 
				$email = get_post_meta( $post->ID, 'email', true );
				if( $email != '') {
				  echo "<a href=\"mailto:$email\">$email</a>";
				} 
				?></p>

				<p><?php 
				$website = get_post_meta( $post->ID, 'website', true );
				if( $website != '') {
				  echo "<a href=\"$website\">Website</a>";
				} 
				?><br />

				<?php 
				$facebook = get_post_meta( $post->ID, 'facebook', true );
				if( $facebook != '') {
				  echo "<a href=\"$facebook\">Facebook</a>";
				} 
				?><br />

				<?php 
				$twitter = get_post_meta( $post->ID, 'twitter', true );
				if( $twitter != '') {
				  echo "<a href=\"https://twitter.com/$twitter\">@$twitter</a>";
				} 
				?></p>

				<p><?php echo get_post_meta($post->ID, 'address', true); ?><br />

				<?php echo get_post_meta($post->ID, 'city', true); ?>, CA <?php echo get_post_meta($post->ID, 'zip', true); ?></p>
					<div class="clear"></div>
					</div>
					</article>
					</div><!--/content-part-->

					<?php endwhile; ?>
				<div id="sidebar" class="sidebar-right">
				<?php get_sidebar(); ?>
			</div><!--/sidebar-->
		</div><!--/page-inner-->
	</div><!--/page-->

<?php get_footer(); ?>

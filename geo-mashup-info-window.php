<?php
/**
 * This is the default template for the info window in Geo Mashup maps. 
 *
 * Don't modify this file! It will be overwritten by upgrades.
 *
 * Instead, copy this file to "geo-mashup-info-window.php" in your theme directory, 
 * or info-window.php in the Geo Mashup Custom plugin directory, if you have that 
 * installed. Those files take precedence over this one.
 *
 * For styling of the info window, see map-style-default.css.
 *
 * @package GeoMashup
 */

// A potentially heavy-handed way to remove shortcode-like content
add_filter( 'the_excerpt', array( 'GeoMashupQuery', 'strip_brackets' ) );

?>
<div class="locationinfo post-location-info">
<?php if (have_posts()) : ?>

	<?php while (have_posts()) : the_post(); ?>

		<h2><a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
		<?php if ( function_exists( 'has_post_thumbnail') and has_post_thumbnail() ) : ?>
		<?php the_post_thumbnail(); ?>
		<?php endif; ?>

		<?php if ($wp_query->post_count == 1) : ?>
			<div class="storycontent">
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

			</div>
		<?php endif; ?>

	<?php endwhile; ?>

<?php else : ?>

	<h2 class="center">Not Found</h2>
	<p class="center">Sorry, but you are looking for something that isn't here.</p>

<?php endif; ?>

</div>

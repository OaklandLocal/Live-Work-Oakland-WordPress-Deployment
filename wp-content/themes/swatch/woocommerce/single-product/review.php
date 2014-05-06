<?php
/**
 * Review Comments Template
 *
 * Closing li is left out on purpose!
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $post;
$rating = esc_attr( get_comment_meta( $GLOBALS['comment']->comment_ID, 'rating', true ) );
?>
<div <?php comment_class( 'media media-comment' ); ?>>
	<div class="box-round box-mini pull-left">
		<div class="box-dummy box-inner"></div>
		<?php echo get_avatar( $GLOBALS['comment'], $size='48' ); ?>
	</div>

	<div class="media-body">
		<div class="media-inner">
			<div <?php comment_class(); ?> id="comment-<?php comment_ID() ?>">
				<?php if ($GLOBALS['comment']->comment_approved == '0') : ?>
					<p class="meta"><em><?php _e( 'Your comment is awaiting approval', 'woocommerce' ); ?></em></p>
				<?php else : ?>
					<h5 class="media-heading">
						<?php if ( get_option('woocommerce_enable_review_rating') == 'yes' ) : ?>
							<a class="star-rating" data-placement="right" data-original-title="<?php echo _e( 'Rated ', 'woocommerce' ); echo intval( get_comment_meta( $GLOBALS['comment']->comment_ID, 'rating', true ) ); _e( ' out of 5', 'woocommerce' ); ?>" data-toggle="tooltip"><span style="width:<?php echo ( intval( get_comment_meta( $GLOBALS['comment']->comment_ID, 'rating', true ) ) / 5 ) * 100; ?>%"></span></a>
						<?php endif; ?>
						<?php comment_author_link();
						if ( get_option('woocommerce_review_rating_verification_label') == 'yes' ){
							if ( woocommerce_customer_bought_product( $GLOBALS['comment']->comment_author_email, $GLOBALS['comment']->user_id, $post->ID ) ){
								echo '<em class="verified"> (' . __( 'verified owner', 'woocommerce' ) . ')</em> ';
							}
						}?>
					&ndash; <time itemprop="datePublished" datetime="<?php echo get_comment_date('c'); ?>"><?php echo get_comment_date(__( get_option('date_format'), 'woocommerce' )); ?></time>:
					</h5>
				<?php endif; ?>
				<?php comment_text(); ?>
			</div>
		</div>
	</div>
</div>

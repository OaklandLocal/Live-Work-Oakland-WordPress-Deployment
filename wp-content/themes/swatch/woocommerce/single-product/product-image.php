<?php
/**
 * Single Product Image
 *
 * @author      WooThemes
 * @package     WooCommerce/Templates
 * @version     2.0.14
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $post, $woocommerce, $product;

// fetch all product images
$image_ids = $product->get_gallery_attachment_ids();
// add featured image to the start of the array
array_unshift( $image_ids, get_post_thumbnail_id() );
?>
<div id="product-images" class="flexslider" data-flex-controls="thumbnails" data-flex-controlsalign="left" data-flex-directions-type="fancy">
    <ul class="slides product-gallery">
        <?php foreach( $image_ids as $image_id ) :
            $thumb = wp_get_attachment_image_src( $image_id, 'shop_thumbnail' );
            $single= wp_get_attachment_image_src( $image_id, 'shop_single' );
            $full  = wp_get_attachment_image_src( $image_id, 'full' ); ?>
            <li data-thumb="<?php echo $thumb[0]; ?>">
                <figure>
                    <img src="<?php echo $single[0]; ?>" alt="<?php the_title() ?>">
                </figure>
                <figcaption>
                    <a href="<?php echo $full[0]; ?>">
                        <i class="icon-zoom-in"></i>
                    </a>
                </figcaption>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
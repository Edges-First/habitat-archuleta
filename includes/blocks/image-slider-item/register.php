<?php
/**
 * Gutenberg Blocks setup
 *
 * @package HabitatArchuleta\Blocks\ImageSliderItem
 */

namespace HabitatArchuleta\Blocks\ImageSliderItem;

/**
 * Register the block
 */
function register() {
	register_block_type_from_metadata(
		HABITAT_ARCHULETA_BLOCK_DIR . '/image-slider-item'
	);
}

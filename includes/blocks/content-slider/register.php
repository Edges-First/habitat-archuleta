<?php
/**
 * Gutenberg Blocks setup
 *
 * @package HabitatArchuleta\Blocks\ContentSlider
 */

namespace HabitatArchuleta\Blocks\ContentSlider;

/**
 * Register the block
 */
function register() {
	register_block_type_from_metadata(
		HABITAT_ARCHULETA_BLOCK_DIR . '/content-slider'
	);
}

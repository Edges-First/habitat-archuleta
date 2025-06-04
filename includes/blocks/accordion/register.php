<?php
/**
 * Gutenberg Blocks setup
 *
 * @package HabitatArchuleta\Blocks\Accordion
 */

namespace HabitatArchuleta\Blocks\Accordion;

/**
 * Register the block
 */
function register() {
	register_block_type_from_metadata(
		HABITAT_ARCHULETA_BLOCK_DIR . '/accordion'
	);
}

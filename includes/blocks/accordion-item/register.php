<?php
/**
 * Gutenberg Blocks setup
 *
 * @package HabitatArchuleta\Blocks\AccordionItem
 */

namespace HabitatArchuleta\Blocks\AccordionItem;

/**
 * Register the block
 */
function register() {
	register_block_type_from_metadata(
		HABITAT_ARCHULETA_BLOCK_DIR . '/accordion-item'
	);
}

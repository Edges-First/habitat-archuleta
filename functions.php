<?php
/**
 * WP Theme constants and setup functions
 *
 * @package HabitatArchuleta
 */

// Useful global constants.
define( 'HABITAT_ARCHULETA_VERSION', '0.1.0' );
define( 'HABITAT_ARCHULETA_TEMPLATE_URL', get_template_directory_uri() );
define( 'HABITAT_ARCHULETA_PATH', get_template_directory() . '/' );
define( 'HABITAT_ARCHULETA_INC', HABITAT_ARCHULETA_PATH . 'includes/' );
define( 'HABITAT_ARCHULETA_BLOCK_DIR', HABITAT_ARCHULETA_INC . 'blocks/' );

require_once HABITAT_ARCHULETA_INC . 'core.php';
require_once HABITAT_ARCHULETA_INC . 'overrides.php';
require_once HABITAT_ARCHULETA_INC . 'template-tags.php';
require_once HABITAT_ARCHULETA_INC . 'utility.php';
require_once HABITAT_ARCHULETA_INC . 'blocks.php';
require_once HABITAT_ARCHULETA_INC . 'customizer.php';

// Run the setup functions.
HabitatArchuleta\Core\setup();
HabitatArchuleta\Blocks\setup();
HabitatArchuleta\Customizer\setup();
// Require Composer autoloader if it exists.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}

if ( ! function_exists( 'wp_body_open' ) ) {

	/**
	 * Shim for the the new wp_body_open() function that was added in 5.2
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}

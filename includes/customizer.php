<?php
/**
 * Customizer setup
 *
 * @package HabitatArchuleta
 */

namespace HabitatArchuleta\Customizer;

/**
 * Set up customizer options
 *
 * @return void
 */
function setup() {
	$n = function( $function ) {
		return __NAMESPACE__ . "\\$function";
	};

	add_action( 'customize_register', $n( 'customizer_setup' ) );
}

/**
 * Register customizer controls
 *
 * @param \WP_Customize_Manager $customizer The main customizer object
 */
function customizer_setup( $customizer ) {
	$customizer->add_section(
		'habitat_archuleta_global',
		[
			'title'    => esc_html__( 'Global', 'habitat-archuleta' ),
		]
	);

	$customizer->add_setting(
		'habitat_archuleta_site_notice',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_site_notice_control',
			[
				'label'    => esc_html__( 'Global Site Notice', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_site_notice',
				'type'     => 'text',
			]
		)
	);

	$customizer->add_setting(
		'habitat_archuleta_donate_link',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_donate_link_control',
			[
				'label'    => esc_html__( 'Donate Link', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_donate_link',
				'type'     => 'text',
			]
		)
	);

	$customizer->add_setting(
		'habitat_archuleta_address',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
			'sanitize_callback' => 'sanitize_textarea_field',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_address_control',
			[
				'label'    => esc_html__( 'Address', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_address',
				'type'     => 'textarea',
			]
		)
	);

	$customizer->add_setting(
		'habitat_archuleta_email',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_email_control',
			[
				'label'    => esc_html__( 'Email', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_email',
				'type'     => 'text',
			]
		)
	);

	$customizer->add_setting(
		'habitat_archuleta_phone_number',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_phone_number_control',
			[
				'label'    => esc_html__( 'Phone Number', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_phone_number',
				'type'     => 'text',
			]
		)
	);

	$customizer->add_setting(
		'habitat_archuleta_facebook',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_facebook_control',
			[
				'label'    => esc_html__( 'Facebook', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_facebook',
				'type'     => 'text',
			]
		)
	);
	$customizer->add_setting(
		'habitat_archuleta_instagram',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_instagram_control',
			[
				'label'    => esc_html__( 'Instagram', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_instagram',
				'type'     => 'text',
			]
		)
	);

	$customizer->add_setting(
		'habitat_archuleta_youtube',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_youtube_control',
			[
				'label'    => esc_html__( 'YouTube', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_youtube',
				'type'     => 'text',
			]
		)
	);

	$customizer->add_setting(
		'habitat_archuleta_footer_disclaimer',
		[
			'default'   => '',
			'type'      => 'theme_mod',
			'transport' => 'refresh',
			'sanitize_callback' => 'sanitize_textarea_field',
		]
	);

	$customizer->add_control(
		new \WP_Customize_Control(
			$customizer,
			'habitat_archuleta_footer_disclaimer_control',
			[
				'label'    => esc_html__( 'Footer Disclaimer', 'habitat-archuleta' ),
				'section'  => 'habitat_archuleta_global',
				'settings' => 'habitat_archuleta_footer_disclaimer',
				'type'     => 'textarea',
			]
		)
	);
}
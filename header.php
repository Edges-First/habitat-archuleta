<?php
/**
 * The template for displaying the header.
 *
 * @package HabitatArchuleta
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#d23226" />
		<link rel="shortcut icon" href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/favicon.ico" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<?php wp_body_open(); ?>

		<div id="a11y-catcher">
			<a class="skip-link" href="#main"><?php echo esc_html( 'Skip to content' ); ?></a>
		</div>

		<?php get_template_part( 'partials/header' ); ?>

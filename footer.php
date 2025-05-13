<?php
/**
 * The template for displaying the footer.
 *
 * @package HabitatArchuleta
 */

$donate_link = get_theme_mod( 'habitat_archuleta_donate_link' );
$address = get_theme_mod( 'habitat_archuleta_address' );
$email = get_theme_mod( 'habitat_archuleta_email' );
$phone = get_theme_mod( 'habitat_archuleta_phone_number' );
$disclaimer = get_theme_mod( 'habitat_archuleta_footer_disclaimer' );

?>
	<footer class="footer">
		<div class="container">
			<div class="footer-logo">
				<a href="<?php echo esc_url( get_site_url() ); ?>" class="logo">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="<?php echo esc_html( get_bloginfo( 'name' ) ); ?> Logo" />
					<span class="screen-reader-text"><?php echo esc_html( get_bloginfo( 'name' ) ); ?> Logo</span>
				</a>
				<?php get_template_part( 'partials/social' ); ?>
			</div>
			<div class="footer-details">
				<?php if ( $address ) : ?>
					<p class="address">
						<?php echo nl2br( esc_html( $address ) ); ?>
					</p>
				<?php endif; ?>
				<div class="footer-contact-info">
					<?php if ( $email ) : ?>
						<div class="email">
							<span class="has-brand-blue-color">e.</span>
							<a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a>
						</div>
					<?php endif; ?>
					<?php if ( $phone ) : ?>
						<div class="phone">
							<span class="has-brand-blue-color">p.</span>
							<a href="tel:<?php echo esc_attr( $phone ); ?>"><?php echo esc_html( $phone ); ?></a>
						</div>
					<?php endif; ?>
				</div>
				<?php if ( $disclaimer ) : ?>
					<div class="disclaimer">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/images/equal-housing-logo.png" alt="Equal Housing Opportunity Logo" />
						<?php echo nl2br( esc_html( $disclaimer ) ); ?>
					</div>
				<?php endif; ?>
				<div class="copyright">
					&copy;<?php echo date('Y'); ?> <?php echo esc_html( get_bloginfo( 'name' ) ); ?> All Rights Reserved
				</div>
			</div>
			<nav class="footer-navigation" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
				<div class="wp-block-buttons">
					<a href="<?php echo esc_url( $donate_link ); ?>" class="wp-block-button__link has-brand-green-background-color has-background has-large-font-size">
						Donate
					</a>
				</div>
				<?php
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'menu_class'     => 'footer-menu',
						'container'      => 'ul',
					) );
				?>
			</nav>
		</div>
	</footer>

	<?php wp_footer(); ?>
	</body>
</html>

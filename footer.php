<?php
/**
 * The template for displaying the footer.
 *
 * @package HabitatArchuleta
 */

?>
	<footer class="footer">
		<div class="container">
			<a class="site-logo" href="/">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Habitat for Humanity of Archuleta County Logo" />
			</a>
			<nav class="footer-navigation" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
				<?php
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'menu_class'     => 'footer-menu',
						'container'      => 'ul',
					) );
				?>
			</nav>
		</div>
		<div class="copyright">
			<div class="container">
				<?php echo esc_html( get_bloginfo( 'name' ) ); ?> &copy;<?php echo date('Y'); ?> All Rights Reserved
			</div>
		</div>
	</footer>

	<?php wp_footer(); ?>
	</body>
</html>

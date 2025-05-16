<?php
$site_notice = get_theme_mod( 'habitat_archuleta_site_notice' );
$donate_link = get_theme_mod( 'habitat_archuleta_donate_link' );
?>

<header class="header is-at-top">
	<div class="eyebrow-nav">
		<div class="container">
			<div class="site-notice">
				<?php echo esc_html( $site_notice ); ?>
			</div>
			<div class="eyebrow-actions">
				<?php get_template_part( 'partials/social' ); ?>
				<a href="<?php echo esc_url( $donate_link ); ?>" class="wp-block-button__link has-brand-green-background-color has-background has-large-font-size">
					Donate
				</a>
			</div>
		</div>
	</div>
	<div class="container nav-container">
		<a itemscope itemtype="https://schema.org/Organization" itemprop="url" href="<?php echo esc_url(bloginfo('siteurl')); ?>" class="logo">
			<img class="logo-white" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo.png'; ?>" alt="<?php echo esc_html( get_bloginfo( 'name' ) ); ?> White Logo">
			<img class="logo-color" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo-color.jpg'; ?>" alt="<?php echo esc_html( get_bloginfo( 'name' ) ); ?> Color Logo">
			<span class="screen-reader-text"><?php echo esc_html( bloginfo( 'name' ) ); ?></span>
		</a>

		<button id="nav-trigger" class="menu-toggle" aria-label="Mobile Menu Open/Close">
			<svg class="mobile-nav-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16">
				<path fill="#fff" d="M0 16h24v-2.667H0V16Zm0-6.667h24V6.667H0v2.666ZM0 0v2.667h24V0H0Z"/>
			</svg>
			<svg class="mobile-nav-close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
				<path fill="#fff" d="M16 1.611 14.389 0 8 6.389 1.611 0 0 1.611 6.389 8 0 14.389 1.611 16 8 9.611 14.389 16 16 14.389 9.611 8 16 1.611Z"/>
			</svg>
		</button>

		<nav class="site-navigation" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
			<div class="primary-menu-container">
				<?php
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'menu_class'     => 'primary-menu',
						'menu_id'        => 'primary-nav',
					) );
					?>
			</div>
		</nav>
	</nav>
</header>
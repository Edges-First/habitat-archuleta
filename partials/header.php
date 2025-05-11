<header class="header" aria-expanded="false">
	<div class="container">
		<button id="nav-trigger" aria-label="Menu Open/Close" aria-expanded="false">
			<span>Menu</span>
			<div class="menu-toggle">
				<div class="bar-one"></div>
				<div class="bar-two"></div>
				<div class="bar-three"></div>
			</div>
		</button>

		<a itemscope itemtype="https://schema.org/Organization" itemprop="url" href="<?php echo bloginfo( 'url' ); ?>" class="logo">
			<?php get_template_part( 'assets/svg/logo.svg' ); ?>
			<span class="screen-reader-text"><?php echo esc_html( bloginfo( 'name' ) ); ?></span>
		</a>

		<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
			<div class="wp-block-button">
				<a class="wp-block-button__link wp-element-button" href="https://heli-life.typeform.com/to/CwCK2Z81" target="_blank">Speak With an Expert</a>
			</div>
		</div>
	</div>
	<nav class="site-navigation" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
		<div class="container">
			<?php
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'menu_class'     => 'primary-menu',
					'container'      => 'ul',
				) );
				?>
		</div>
	</nav>
</header>
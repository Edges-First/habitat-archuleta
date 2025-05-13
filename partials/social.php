<?php
	$facebook = get_theme_mod( 'habitat_archuleta_facebook' );
	$instagram = get_theme_mod( 'habitat_archuleta_instagram' );
	$youtube = get_theme_mod( 'habitat_archuleta_youtube' );
?>

<ul class="social-links">
	<?php if ( $instagram ) : ?>
		<li>
			<a class="social-link instagram" target="_blank" href="<?php echo esc_url( $instagram ); ?>" rel="nofollow" title="Follow <?php echo esc_html( get_bloginfo( 'name' ) ); ?> on Instagram">
				<?php get_template_part( 'assets/svg/instagram.svg' ); ?>
			</a>
		</li>
	<?php endif; ?>

	<?php if ( $youtube ) : ?>
		<li>
			<a class="social-link youtube" target="_blank" href="<?php echo esc_url( $youtube ); ?>" rel="nofollow" title="Follow <?php echo esc_html( get_bloginfo( 'name' ) ); ?> on Youtube">
				<?php get_template_part( 'assets/svg/youtube.svg' ); ?>
			</a>
		</li>
	<?php endif; ?>

	<?php if ( $facebook ) : ?>
		<li>
			<a class="social-link facebook" target="_blank" href="<?php echo esc_url( $facebook ); ?>" rel="nofollow" title="Follow <?php echo esc_html( get_bloginfo( 'name' ) ); ?> on Facebook">
				<?php get_template_part( 'assets/svg/facebook.svg' ); ?>
			</a>
		</li>
	<?php endif; ?>
</ul>
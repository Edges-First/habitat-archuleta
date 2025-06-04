<?php
/**
 * Card block markup
 *
 * @package HabitatArchuleta\Blocks\EventCards
 *
 * @var array  $args       {
 *     $args is provided by get_template_call.
 *
 * @type array $attributes Block attributes.
 * @type array $content    Block content.
 * @type array $block      Block instance.
 * }
 */

// Set defaults.

$events = tribe_get_events( [
	'posts_per_page' => 3,
	'featured'       => true,
	'start_date'     => 'now',
] );

if ( count( $events ) < 3 ) {
	$more_events = tribe_get_events( [
		'posts_per_page' => 3 - count( $events ),
		'featured'       => false,
		'start_date'     => 'now',
		'orderby'        => 'date',
		'order'          => 'ASC',
	] );
}

$all_events = array_merge( $events, $more_events );
?>

<div class="wp-block-event-cards">
	<?php foreach ( $all_events as $post ) : ?>
		<?php setup_postdata( $post ); ?>
		<div class="wp-block-event-card">
			<div class="wp-block-event-card__date">
				<?php echo tribe_get_start_date( $post, false ); ?>
			</div>
			<div class="wp-block-event-card__image">
				<?php echo get_the_post_thumbnail( $post, 'medium' ); ?>
			</div>
			<div class="wp-block-event-card__content">
				<h3><?php echo esc_html( $post->post_title ); ?></h3>
				<?php echo tribe_post_excerpt( $post ); ?>
				<?php $venue = tribe_get_venue_details( $post ); ?>
				<?php if ( $venue ) : ?>
					<div class="wp-block-event-card__venue">
						<?php echo $venue['address']; ?>
					</div>
				<?php endif; ?>
				<div class="wp-block-event-card__time">
					Starts at <?php echo tribe_get_start_time( $post ); ?>
				</div>
				<div class="wp-block-button">
					<a href="<?php echo get_the_permalink( $post ); ?>" class="wp-block-button__link has-brand-green-background-color has-background wp-element-button has-reduced-spacing">view details</a>
				</div>
			</div>
		</div>
	<?php endforeach; ?>
</div>

/**
 * Slider frontend block scripts
 */

import { tns } from 'tiny-slider';

export default class Slider {
	/**
	 * Create element reference
	 */
	constructor(selector) {
		this.sliders = document.querySelectorAll(selector);
	}

	/**
	 * Initialize
	 *
	 * @returns {boolean} A forced true
	 */
	init() {
		if (!this.sliders) return false;
		this.sliders.forEach((slider) => {
			// create the slider
			this.setupSlider(slider);
		});

		return true;
	}

	/**
	 * Setup tiny slider
	 * @param {Node} slider Slider row DOM node
	 * @returns Tiny Slider instance
	 */
	setupSlider(slider) {
		const tnsSlider = tns({
			mode: 'gallery',
			container: slider,
			items: 1,
			controls: true,
			nav: false,
			loop: true,
			mouseDrag: true,
			speed: 2000,
			autoHeight: false,
			onInit: (e) => {
				// stylize the buttons
				e.prevButton?.classList.add('wp-block-button__link');
				e.nextButton?.classList.add('wp-block-button__link');
			},
		});

		tnsSlider.events.on('dragEnd', (e) => {
			setTimeout(() => {
				e.container.classList.remove('-noclick');
			}, 300);
		});
		tnsSlider.events.on('dragMove', (e) => {
			e.container.classList.add('-noclick');
		});

		return tnsSlider;
	}
}
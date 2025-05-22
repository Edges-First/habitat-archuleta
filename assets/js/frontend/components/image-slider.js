/**
 * Slider frontend block scripts
 */

import { tns } from 'tiny-slider';

export default class ImageSlider {
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
			container: slider,
			mode: 'gallery',
			items: 1,
			controls: true,
			nav: false,
			mouseDrag: true,
			speed: 3000,
			autoplay: true,
			autoHeight: true,
			center: true,
			onInit: (e) => {
				// stylize the buttons
				e.prevButton?.classList.add('wp-block-button__link');
				e.nextButton?.classList.add('wp-block-button__link');
			},
		});

		return tnsSlider;
	}
}
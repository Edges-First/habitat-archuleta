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
			items: 1,
			controls: true,
			controlsPosition: 'bottom',
			nav: false,
			mouseDrag: true,
			speed: 2000,
			autoplay: true,
			autoHeight: true,
			center: true,
		});

		return tnsSlider;
	}
}
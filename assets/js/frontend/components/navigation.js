import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Navigation {
	/**
	 * Create element reference
	 */
	constructor() {
		this.header = document.querySelector('.header');
		this.sections = document.querySelectorAll('.torso > div');
	}

	/**
	 * Initialize the animate behavior
	 *
	 * @returns {boolean} A forced true
	 */
	init() {
		window.addEventListener('DOMContentLoaded', () =>
			this.setupNavAnimation(this.sections)
		);

		return true;
	}

	/*
	 * Code snippet from https://www.30secondsofcode.org/js/s/rgb-to-hsl
	 */
	RGBToHSL(r, g, b) {
		r /= 255;
		g /= 255;
		b /= 255;

		const l = Math.max(r, g, b);
		const s = l - Math.min(r, g, b);
		const h = s
			? l === r
				? (g - b) / s
				: l === g
				? 2 + (b - r) / s
				: 4 + (r - g) / s
			: 0;
		return [
			60 * h < 0 ? 60 * h + 360 : 60 * h,
			100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
			(100 * (2 * l - s)) / 2,
		];
	}

	checkSectionHSL(section) {
		if (
			section.classList.contains('is-style-gradient') ||
			section.classList.contains('wp-block-cover')
		) {
			this.header.classList.add('is-transparent');
		} else {
			this.header.classList.remove('is-transparent');
		}
	}

	setupNavAnimation(sections) {
		sections.forEach((section) => {
			ScrollTrigger.create({
				trigger: section,
				markers: false,
				start: 'top 60',
				end: 'bottom 60',
				onEnter: () => this.checkSectionHSL(section),
				onEnterBack: () => this.checkSectionHSL(section),
			});
		});
	}
}

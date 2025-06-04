/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   This software or document includes material copied from or derived from
 *   Simple accordion pattern example https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
 *   Copyright © 2019 W3C® (MIT, ERCIM, Keio, Beihang).
 */

/**
 * Accordion
 */
export default class Accordion {
	/**
	 * Create element references
	 */
	constructor() {
		this.accordions = document.querySelectorAll('.accordions');
	}

	/**
	 * Initialize the accordion
	 */
	init() {
		this.handleSetup();
	}

	/**
	 * Setup each accordion
	 *
	 * @returns {boolean} A forced true
	 */
	handleSetup() {
		const { accordions } = this;

		if (!accordions) {
			return false;
		}

		accordions.forEach((accordionSection) => {
			const allowMultiple = accordionSection.hasAttribute(
				'data-allow-multiple'
			);
			const allowToggle =
				allowMultiple || accordionSection.hasAttribute('data-allow-toggle');

			const triggers = accordionSection.querySelectorAll('.activator');

			const accordionItems =
				accordionSection.querySelectorAll('.accordion-item');
			accordionItems.forEach((accordion) => {
				accordion.addEventListener('click', (event) =>
					this.handleAccordionToggle(
						event,
						accordion,
						allowMultiple,
						allowToggle
					)
				);
				accordion.addEventListener('keydown', (event) =>
					this.handleKeyboardEvents(event, triggers)
				);

				// These are used to style the accordion when one of the buttons has focus
				triggers.forEach((trigger) => {
					trigger.addEventListener('focus', () =>
						accordion.classList.add('focus')
					);
					trigger.addEventListener('blur', () =>
						accordion.classList.remove('focus')
					);
				});
			});

			// Minor setup: will set disabled state, via aria-disabled, to an
			// expanded/ active accordion which is not allowed to be toggled close
			if (!allowToggle) {
				// Get the first expanded/ active accordion
				const expanded = accordionSection.querySelector(
					'[aria-expanded="true"]'
				);

				// If an expanded/ active accordion is found, disable
				if (expanded) {
					expanded.setAttribute('aria-disabled', 'true');
				}
			}
		});

		return true;
	}

	/**
	 * Handle accordion toggle
	 *
	 * @param {*} event The click event
	 * @param {*} accordion The accordion element
	 * @param {boolean} allowMultiple Are there multiple accordions
	 * @param {boolean} allowToggle Show multiple accordions be open at the same time
	 */
	handleAccordionToggle(event, accordion, allowMultiple, allowToggle) {
		const { target } = event;

		if (target.classList.contains('activator')) {
			// Check if the current toggle is expanded.
			const isExpanded = target.getAttribute('aria-expanded') === 'true';
			const active = accordion.querySelector('[aria-expanded="true"] ');

			// without allowMultiple, close the open accordion
			if (!allowMultiple && active && active !== target) {
				// Set the expanded state on the triggering element
				active.setAttribute('aria-expanded', 'false');
				const parent = active.parentNode;
				parent.classList.remove('-active');
				// Hide the accordion sections, using aria-controls to specify the desired section
				document
					.getElementById(active.getAttribute('aria-controls'))
					.setAttribute('hidden', '');

				// When toggling is not allowed, clean up disabled state
				if (!allowToggle) {
					active.removeAttribute('aria-disabled');
				}
			}

			if (!isExpanded) {
				// Set the expanded state on the triggering element
				target.setAttribute('aria-expanded', 'true');
				const parent = target.parentNode;
				parent.classList.add('-active');

				// Hide the accordion sections, using aria-controls to specify the desired section
				document
					.getElementById(target.getAttribute('aria-controls'))
					.removeAttribute('hidden');

				// If toggling is not allowed, set disabled state on trigger
				if (!allowToggle) {
					target.setAttribute('aria-disabled', 'true');
				}
			} else if (allowToggle && isExpanded) {
				// Set the expanded state on the triggering element
				target.setAttribute('aria-expanded', 'false');
				// Hide the accordion sections, using aria-controls to specify the desired section
				document
					.getElementById(target.getAttribute('aria-controls'))
					.setAttribute('hidden', '');
			}

			event.preventDefault();
		}
	}

	/**
	 * Setup Keyboard events
	 *
	 * @param {*} event The click event
	 * @param {*} triggers The triggers for opening/closing an accordion
	 */
	handleKeyboardEvents(event, triggers) {
		const { target } = event;
		const key = event.which.toString();

		// 33 = Page Up, 34 = Page Down
		const ctrlModifier = event.ctrlKey && key.match(/33|34/);

		// Is this coming from an accordion header?
		if (target.classList.contains('activator')) {
			// Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
			// 38 = Up, 40 = Down
			if (key.match(/38|40/) || ctrlModifier) {
				const index = triggers.indexOf(target);
				const direction = key.match(/34|40/) ? 1 : -1;
				const { length } = triggers;
				const newIndex = (index + length + direction) % length;

				triggers[newIndex].focus();

				event.preventDefault();
			} else if (key.match(/35|36/)) {
				// 35 = End, 36 = Home keyboard operations
				switch (key) {
					// Go to first accordion
					case '36':
						triggers[0].focus();
						break;
					// Go to last accordion
					case '35':
						triggers[triggers.length - 1].focus();
						break;
					default:
						break;
				}
				event.preventDefault();
			}
		}
	}
}

/**
 * Set up mobile main menu.
 *
 * @param { Node } menuEl 		Menu element dom node
 * @param { Node } triggerEls 	The trigger/hamburger element
 */
export const setupMobileMenu = (menuEl, triggerEl) => {
	if (menuEl) {
		// on click of the menu trigger show the menu (with accessibility)
		const mql = window.matchMedia('(max-width: 63.9375em)');
		const menuLinks = menuEl.querySelectorAll('.menu-item a');

		if (mql.matches) {
			menuEl.setAttribute('aria-hidden', 'true');

			menuLinks.forEach((link) => {
				link.addEventListener('click', () => {
					document.body.classList.toggle('-no-scroll');
					const isActive = triggerEl.getAttribute('aria-expanded') === 'true';
					triggerEl.setAttribute('aria-expanded', !isActive);
					menuEl.setAttribute('aria-hidden', isActive);
					document.body.classList.toggle('menu-active', !isActive);
				});
			});
		} else {
			menuEl.setAttribute('aria-hidden', 'false');
		}

		mql.addEventListener('change', () => {
			if (mql.matches) {
				menuEl.setAttribute('aria-hidden', 'true');
			} else {
				menuEl.setAttribute('aria-hidden', 'false');
			}
		});

		triggerEl.addEventListener('click', () => {
			document.body.classList.toggle('-no-scroll');
			const isActive = triggerEl.getAttribute('aria-expanded') === 'true';
			triggerEl.setAttribute('aria-expanded', !isActive);
			menuEl.setAttribute('aria-hidden', isActive);
			document.body.classList.toggle('menu-active', !isActive);
		});

		// setup submenus
		const withSubnav = menuEl.querySelectorAll('.menu-item-has-children');
		withSubnav.forEach((wrap) => {
			const subMenu = wrap.lastElementChild;
			const id = `${menuEl.id}-sub-${wrap.id}`;
			subMenu.id = id;
			if (mql.matches) {
				subMenu.setAttribute('aria-hidden', true);
				const button = document.createElement('button');
				button.setAttribute('aria-label', 'Open/Close Submenu');
				button.setAttribute('aria-expanded', false);
				button.setAttribute('aria-controls', id);
				button.innerHTML =
					'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25"><path fill="#fff" fill-rule="evenodd" d="M12.398 16.163a.562.562 0 0 1-.796 0l-5.735-5.735a.562.562 0 0 1 0-.795l.266-.266c.22-.22.575-.22.795 0L12 14.44l5.072-5.072c.22-.22.576-.22.795 0l.266.266c.22.22.22.575 0 .795l-5.735 5.735Z" clip-rule="evenodd"/></svg>';
				button.addEventListener('click', () => {
					const isActive = button.getAttribute('aria-expanded') === 'true';
					button.setAttribute('aria-expanded', !isActive);
					subMenu.setAttribute('aria-hidden', isActive);
				});
				subMenu.parentNode.insertBefore(button, subMenu);
			}

			mql.addEventListener('change', () => {
				if (mql.matches) {
					subMenu.setAttribute('aria-hidden', true);
					const button = document.createElement('button');
					button.setAttribute('aria-label', 'Open/Close Submenu');
					button.setAttribute('aria-expanded', false);
					button.setAttribute('aria-controls', id);
					button.addEventListener('click', () => {
						const isActive = button.getAttribute('aria-expanded') === 'true';
						button.setAttribute('aria-expanded', !isActive);
						subMenu.setAttribute('aria-hidden', isActive);
					});
					subMenu.parentNode.insertBefore(button, subMenu);
				}
			});
		});
	}
};

/**
 * Set scroll down/up functionality.
 */
export const peekABooMenu = ({ selector }) => {
	const header = document.querySelector(selector);

	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		header.classList.remove('is-at-top');
	} else {
		header.classList.add('is-at-top');
	}
};

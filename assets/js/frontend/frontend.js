import {
	setupMobileMenu,
	peekABooMenu,
} from './components/navigation-functions';
import Navigation from './components/navigation';

const navigation = new Navigation();
navigation.init();

window.onscroll = () => {
	peekABooMenu({ selector: '.header' });
};

setupMobileMenu(
	document.querySelector('.site-navigation'),
	document.getElementById('nav-trigger')
);
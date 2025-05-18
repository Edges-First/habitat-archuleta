import {
	setupMobileMenu,
	peekABooMenu,
} from './components/navigation-functions';
import Navigation from './components/navigation';
import Slider from './components/slider';
import ImageSlider from './components/image-slider';

const navigation = new Navigation();
navigation.init();

window.onscroll = () => {
	peekABooMenu({ selector: '.header' });
};

setupMobileMenu(
	document.querySelector('.site-navigation'),
	document.getElementById('nav-trigger')
);

const slider = new Slider('.content-slider');
slider.init();

const gallery = new ImageSlider('.image-slider');
gallery.init();
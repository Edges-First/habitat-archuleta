/**
 * Dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

/**
 * Edit component.
 */
const ImageSliderItemBlockEdit = () => {
	const innerBlocksTemplate = [
		['core/group', { className: 'slider-content' }, [
			['core/columns', { className: 'slider-columns' }, [
				['core/column', { className: 'slider-column-left' }, [
					['core/image', {
						className: 'slider-image',
						url: 'http://habitat-archuleta.local/wp-content/uploads/2025/05/icon-key.svg',
					}]
				]],
				['core/column', { className: 'slider-column-right' }, [
					['core/quote', {
						className: 'slider-quote',
						placeholder: 'Add your quote here...'
					}]
				]]
			]]
		]]
	];

	return (
		<div className="image-slider-item">
			<InnerBlocks
				template={innerBlocksTemplate}
			/>
		</div>
	);
};

ImageSliderItemBlockEdit.propTypes = editPropsShape;
export default ImageSliderItemBlockEdit;

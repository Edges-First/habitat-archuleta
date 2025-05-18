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
		['core/cover', { className: 'has-custom-content-position is-position-center-left' }, [
			['core/group', { className: 'slider-content' }, [
				['core/image', {
					className: 'slider-icon',
					url: 'http://habitat-archuleta.local/wp-content/uploads/2025/05/icon-key.svg',
				}],
				['core/group', { className: 'text-content' }, [
					['core/heading', { level: 1, placeholder: 'Headline' }],
					['core/paragraph', { placeholder: 'Add Content...' }]
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

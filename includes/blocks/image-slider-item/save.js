/**
 * Block HTML saved to the database
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

const ImageSliderItemSave = () => {

	return (
		<div className="image-slider-item">
			<InnerBlocks.Content />
		</div>
	);
};

ImageSliderItemSave.propTypes = editPropsShape;
export default ImageSliderItemSave;

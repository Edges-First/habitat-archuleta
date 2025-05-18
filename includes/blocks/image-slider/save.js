/**
 * Block HTML saved to the database
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

const ImageSliderBlockSave = () => (
	<div className="wp-block-habitat-archuleta-image-slider">
		<div className="image-slider">
			<InnerBlocks.Content />
		</div>
	</div>
);

// Set the propTypes
ImageSliderBlockSave.propTypes = editPropsShape;
export default ImageSliderBlockSave;

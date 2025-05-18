/**
 * Block HTML saved to the database
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

const ContentSliderBlockSave = () => (
	<div className="content-slider">
		<InnerBlocks.Content />
	</div>
);

// Set the propTypes
ContentSliderBlockSave.propTypes = editPropsShape;
export default ContentSliderBlockSave;

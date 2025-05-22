/**
 * Block HTML saved to the database
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

const ContentSliderBlockSave = () => (
	<div className="wp-block-habitat-archuleta-content-slider">
		<div className="content-slider">
			<InnerBlocks.Content />
		</div>
	</div>
);

// Set the propTypes
ContentSliderBlockSave.propTypes = editPropsShape;
export default ContentSliderBlockSave;

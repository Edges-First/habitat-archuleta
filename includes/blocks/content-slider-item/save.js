/**
 * Block HTML saved to the database
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

const ContentSliderItemSave = () => {

	return (
		<div className="content-slider-item">
			<InnerBlocks.Content />
		</div>
	);
};

ContentSliderItemSave.propTypes = editPropsShape;
export default ContentSliderItemSave;

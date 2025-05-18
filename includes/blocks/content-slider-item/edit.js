/**
 * Dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

/**
 * Edit component.
 */
const ContentSliderItemBlockEdit = () => {
	const innerBlocksTemplate = [
		['core/cover', {}, [
			['core/pullquote']
		]]
	];

	return (
		<div className="content-slider-item">
			<InnerBlocks
				template={innerBlocksTemplate}
				allowedBlocks={['core/heading', 'core/paragraph', 'core/pullquote', 'core/cover']}
			/>
		</div>
	);
};

ContentSliderItemBlockEdit.propTypes = editPropsShape;
export default ContentSliderItemBlockEdit;

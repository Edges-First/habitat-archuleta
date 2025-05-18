/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

/**
 * Edit component.
 */
const ContentSliderBlockEdit = ({ className }) => {
	const blockProps = useBlockProps({
		className: `content-slider ${className}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={[['habitat-archuleta/content-slider-item']]}
				allowedBlocks={['habitat-archuleta/content-slider-item']}
			/>
		</div>
	);
}

// Set the propTypes
ContentSliderBlockEdit.propTypes = editPropsShape;
export default ContentSliderBlockEdit;

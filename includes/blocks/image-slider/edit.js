/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

/**
 * Edit component.
 */
const ImageSliderBlockEdit = ({ className }) => {
	const blockProps = useBlockProps({
		className: `image-slider ${className}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={[['habitat-archuleta/image-slider-item']]}
				allowedBlocks={['habitat-archuleta/image-slider-item']}
			/>
		</div>
	);
}

// Set the propTypes
ImageSliderBlockEdit.propTypes = editPropsShape;
export default ImageSliderBlockEdit;

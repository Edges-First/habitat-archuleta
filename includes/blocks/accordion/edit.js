/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

/**
 * Edit component.
 */
const AccordionBlockEdit = ({ className }) => {
	const blockProps = useBlockProps({
		className: `accordion ${className}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={[['habitat-archuleta/accordion-item']]}
				allowedBlocks={['habitat-archuleta/accordion-item']}
			/>
		</div>
	);
}

// Set the propTypes
AccordionBlockEdit.propTypes = editPropsShape;
export default AccordionBlockEdit;

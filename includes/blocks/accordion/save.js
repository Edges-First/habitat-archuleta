/**
 * Block HTML saved to the database
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

const AccordionBlockSave = () => (
	<div className="accordions"
		data-allow-toggle
	>
		<InnerBlocks.Content />
	</div>
);

// Set the propTypes
AccordionBlockSave.propTypes = editPropsShape;
export default AccordionBlockSave;

/**
 * Block HTML saved to the database
 */
import { InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

const AccordionItemSave = ({ attributes }) => {
	const { label } = attributes;
	const id = label ? label.replace(/\s+/g, '-').replace('.', '').toLowerCase() : '';

	return (
		<div className="accordion-item">
			<button className="activator" aria-expanded="false" aria-controls={id}>
				<div>{label}</div>
				<span className="activator-indicator">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 47 23"><path fill="#000" d="M47 2.507c0 .766-.307 1.519-.878 2.008-5.387 4.618-21.208 17.343-21.361 17.468L23.499 23l-1.262-1.017C21.59 21.456 6.262 9.133.875 4.515-.09 3.687-.288 2.105.437 1.001 1.16-.103 2.543-.329 3.509.5c4.432 3.815 16.117 13.252 19.99 16.364C27.36 13.751 39.046 4.314 43.489.5c.966-.828 2.348-.602 3.072.502.296.452.439.98.439 1.506Z"/></svg>
				</span>
			</button>
			<div
				className="accordion-item__content"
				id={id}
				role="region"
				hidden="hidden"
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

AccordionItemSave.propTypes = editPropsShape;
export default AccordionItemSave;

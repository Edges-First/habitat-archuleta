/**
 * Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

import { editPropsShape } from './props-shape';

/**
 * Edit component.
 */
const AccordionItemBlockEdit = ({ attributes, setAttributes }) => {
	const { label } = attributes;

	return (
		<>
			<div className="accordion-item__label">
				<h3 className="title">
					<RichText
						className="accordion-item__button"
						tagName="div"
						placeholder={__('Label', 'habitat-archuleta')}
						value={label}
						onChange={(label) => setAttributes({ label })}
					/>
				</h3>
			</div>
			<div className="accordion-item__content ani-able">
				<InnerBlocks template={[['core/paragraph']]} />
			</div>
		</>
	);
};

AccordionItemBlockEdit.propTypes = editPropsShape;
export default AccordionItemBlockEdit;

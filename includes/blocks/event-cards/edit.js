/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import { editPropsShape } from './props-shape';

/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               The block props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {array}    props.video         Video media.
 * @param {string}   props.className     Class name for the block.
 * @param {Function} props.setAttributes Sets the value for block attributes.
 * @return {Function} Render the edit screen
 */
const EventCards = ({ className }) => {
	const blockProps = useBlockProps({
		className: `wp-block-event-cards ${className}`,
	});

	return (
		<div {...blockProps}>
			<ServerSideRender block="habitat-archuleta/event-cards" />
		</div>
	);
};

// Set the propTypes
EventCards.propTypes = editPropsShape;

export default EventCards;

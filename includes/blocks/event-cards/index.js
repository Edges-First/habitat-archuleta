/**
 * Card
 */

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import block from './block.json';

/**
 * Register block
 */
registerBlockType(block.name, {
	title: block.title,
	description: block.description,
	category: block.category,
	attributes: block.attributes,
	styles: block.styles,
	edit,
	save,
});

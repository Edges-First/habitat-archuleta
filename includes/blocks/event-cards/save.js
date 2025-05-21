/**
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#save
 *
 * @return {null} Dynamic blocks do not save the HTML.
 */

import { InnerBlocks } from '@wordpress/block-editor';

const EventCards = () => <InnerBlocks.Content />;

export default EventCards;

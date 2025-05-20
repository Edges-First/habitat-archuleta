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
		['core/group', { className: 'slider-content' }, [
			['core/group', { className: 'container' }, [
				['core/image', {
					className: 'slider-image',
					url: 'http://habitat-archuleta.local/wp-content/uploads/2025/05/240a61d90106764d8fb4862c43cf8b7b5b8f459a.jpg',
				}],
				['core/pullquote', {
					className: 'slider-quote',
					placeholder: 'Add your quote here...'
				}]
			]]
		]]
	];

	return (
		<div className="content-slider-item">
			<InnerBlocks
				template={innerBlocksTemplate}
			/>
		</div>
	);
};

ContentSliderItemBlockEdit.propTypes = editPropsShape;
export default ContentSliderItemBlockEdit;

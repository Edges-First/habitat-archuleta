import PropTypes from 'prop-types';

export const propsShape = {
	className: PropTypes.string,
};

export const editPropsShape = {
	...propsShape,
	clientId: PropTypes.string,
	isSelected: PropTypes.bool,
	setAttributes: PropTypes.func.isRequired,
};

export const viewPropShape = {
	images: PropTypes.array,
};

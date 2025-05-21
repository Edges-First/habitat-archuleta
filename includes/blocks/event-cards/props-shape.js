import PropTypes from 'prop-types';

export const propsShape = {
	className: PropTypes.string,
};

export const editPropsShape = {
	...propsShape,
	setAttributes: PropTypes.func.isRequired,
};

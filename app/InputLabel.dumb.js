import React, {PropTypes} from 'react';

const InputLabel = ({
  title,
}) => (
		<label>{title}</label>
);

InputLabel.propTypes = {
	title: React.PropTypes.string.isRequired,
};

export default InputLabel;

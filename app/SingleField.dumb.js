import React, {PropTypes} from 'react';

import InputLabel from './InputLabel'

const SingleField = ({
  title,
  name,
  inputType,
  placeholder,
  content,
  handler,
  min,
  max,
  step
}) => (
	<div>
		{title ? (<InputLabel title={title} />)
            : null}
		<input
			name={name}
			type={inputType}
  		placeholder={placeholder}
			value={content}
			onChange={handler}
      max={max}
      min={min}
      step={step}
      className="Select-control"
      />
	</div>
);

SingleField.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	name: React.PropTypes.string.isRequired,
	handler: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
	title: React.PropTypes.string,
};

export default SingleField;

import React, {PropTypes} from 'react';

const SingleField = ({
  title = 'Single Field',
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
		<label>{title}</label>
		<input
			name={name}
			type={inputType}
  		placeholder={placeholder}
			value={content}
			onChange={handler}
      max={max}
      min={min}
      step={step} />
	</div>
);

SingleField.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	name: React.PropTypes.string.isRequired,
	handler: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]),
	placeholder: React.PropTypes.string,
	title: React.PropTypes.string,
};

export default SingleField;

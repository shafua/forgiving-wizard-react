import React, {PropTypes} from 'react';

const EmailField = ({
  title = 'Email Field',
  name,
  placeholder = 'Input ur email',
  content,
  handler,
  validation
}) => (
	<div>
		<label>{title}</label>
		<input
			name={name}
			type="email"
  		placeholder={placeholder}
			value={content}
			onChange={handler} />
    {
      validation ?
        (validation === 'ok' ? <span style={{color: '#0f0'}}>ok</span>
      : <span style={{color: '#f00'}}>wrong</span>)
      : null
    }
	</div>
);

EmailField.propTypes = {
	name: React.PropTypes.string.isRequired,
	handler: React.PropTypes.func.isRequired,
	content: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	title: React.PropTypes.string,
};

export default EmailField;

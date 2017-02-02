import React, {PropTypes} from 'react';

import InputLabel from './InputLabel'

const EmailField = ({
  title = 'Email Field',
  name,
  placeholder = 'Input ur email',
  content,
  handler,
  validation
}) => (
	<div>
    {title ? (<InputLabel title={title} />)
            : null}
		<input
			name={name}
			type="email"
  		placeholder={placeholder}
			value={content}
			onChange={handler}
      className="Select-control"
      />
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

import React from 'react';

import Input from '@salesforce/design-system-react/components/input'; 

class InputWithFixedTextRight extends React.Component {

	render() {
		return (
            <Input
                id="fixed-text-id"
                fixedTextRight={this.props.fixedTextRight}
                label={this.props.label}
                placeholder={this.props.placeholder}
            />
		);
	}
}
export default InputWithFixedTextRight;
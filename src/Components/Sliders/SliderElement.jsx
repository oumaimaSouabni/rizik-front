import React from 'react';

import Slider from '@salesforce/design-system-react/components/slider';

class SliderElement extends React.Component {

	state = {
		value: this.props.value,
	};

	handleChange = (event, { value }) => {
		this.setState({ value });
	};

	render() {
		return (
			<Slider
				{...this.props}
				value={this.state.value}
				onChange={this.handleChange}
			/>
		);
	}
}
export default SliderElement
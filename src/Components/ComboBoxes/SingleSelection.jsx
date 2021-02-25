import React from 'react';
import Combobox from '@salesforce/design-system-react/components/combobox';

const accounts = [
	{
		id: '1',
		label: 'Modèle de régression logistique',
		subTitle: 'Account • San Francisco',
	},
	{
		id: '2',
		label: 'Salesforce.com, Inc.',
		subTitle: 'Account • San Francisco',
	},
	{
		id: '3',
		label: "Paddy's Pub",
		subTitle: 'Account • Boston, MA',
	},

];

class SingleSelection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			selection: [],
		};
	}

	render() {
		const labels = this.props.labels
		return (
		
				<Combobox
					id="combobox-readonly-single"
					events={{
						onSelect: (event, data) => {
							if (this.props.action) {
								this.props.action('onSelect')(
									event,
									...Object.keys(data).map((key) => data[key])
								);
							} else if (console) {
								console.log('onSelect', event, data);
							}
							this.setState({
								inputValue: '',
								selection: data.selection,
							});
						},
					}}
					labels={{
						label: labels.label,
						placeholder: labels.placeholder,
					}}
					options={accounts}
					selection={this.state.selection}
					value={this.state.inputValue}
					variant="readonly"
				/>
		);
	}
}
export default SingleSelection
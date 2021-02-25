import React from 'react';

import Card from '@salesforce/design-system-react/components/card';
//import CardEmpty from '@salesforce/design-system-react/components/card/empty';
//import CardFilter from '@salesforce/design-system-react/components/card/filter';
//import DataTable from '@salesforce/design-system-react/components/data-table';
//import DataTableColumn from '@salesforce/design-system-react/components/data-table/column';
import Icon from '@salesforce/design-system-react/components/icon';
//import Button from '@salesforce/design-system-react/components/button'; 



//Components




class CardForm extends React.Component {


	render() {

		return (

				<div className="slds-grid slds-grid_vertical">
					<Card
						id="ExampleCard"

						headerActions={
							this.props.headerActions

						}
						heading={this.props.heading}
						icon={this.props.icon}
						footer=  {this.props.footer}
					>
					
						{this.props.children}			
					{/*code du formulaire*/}
					</Card>
				</div>
		);
	}
}

export default CardForm

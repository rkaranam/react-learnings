import React from 'react';
import { itemsList } from './../config/constants';

export default class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsList
		};
		// this.onDismiss = this.onDismiss.bind(this);
	}

	onDismiss(objectId) {
		console.log('Function onDismiss');

		console.log(this);

		// Type 1
		// const updatedItemsList = this.state.itemsList.filter(function isNotId(item) {
		// 	return item.objectId !== objectId;
		// });

		// Type 2
		// const updatedItemsList = this.state.itemsList.filter((item) => {
		// 	return item.objectId !== objectId;
		// });

		// Type 3
		// function isNotId(item) {
		// 	return item.objectId !== objectId;
		// }
		// const updatedItemsList = this.state.itemsList.filter(isNotId);

		// Type 4
		// const isNotId = (item) => item.objectId !== objectId;
		// const updatedItemsList = this.state.itemsList.filter(isNotId);

		// Type 5
		const updatedItemsList = this.state.itemsList.filter((item) => item.objectId !== objectId);

		this.setState({
			itemsList: updatedItemsList
		});
	}

	// class methods can be auto-bound using JavaScript ES6 arrow functions
	onClickMe = () => console.log('Function onClickMe');

	render() {
		return (
			<div className="items">
				{this.state.itemsList.map((item) => (
					<div key={item.objectId}>
						<span>
							<a href={item.url}>{item.title}</a>
						</span>
						<div className="details">
							<p>Author: {item.author}</p>
							<p>Comments: {item.num_comments}</p>
							<p>Points Scored: {item.points}</p>
						</div>
						<button
							type="button"
							onClick={() => {
								this.onDismiss(item.objectId);
							}}
						>
							Dismiss
						</button>
						<button type="button" onClick={this.onClickMe}>
							Click Me
						</button>
						<hr />
					</div>
				))}
			</div>
		);
	}
}

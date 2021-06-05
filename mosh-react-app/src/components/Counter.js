import React from 'react';

export default class Counter extends React.Component {
	state = { value: 0 };

	handleIncrement = () => {
		this.setState((prevState) => ({
			value: prevState.value + 1
		}));
	};

	handleDecrement = () => {
		this.setState((prevState) => ({
			value: prevState.value - 1
		}));
	};

	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<label htmlFor="counter">Counter</label>
				{this.state.value}
				<div style={{ marginTop: '1rem' }}>
					<button type="button" onClick={this.handleIncrement}>
						Increment +
					</button>
					{'  '}
					<button type="button" onClick={this.handleDecrement}>
						Decrement -
					</button>
				</div>
			</div>
		);
	}
}

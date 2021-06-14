import React from 'react';

export default class Reservation extends React.Component {
    
    constructor(args) {
        super(args);
        this.state = {
            isGoing: false,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const { numberOfGuests } = this.state;
        event.preventDefault();
        const target = event.target;
        console.log("Target: ", target);
        console.log(this.state);
        alert("Number of Guests: " + numberOfGuests);
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is Going: 
                    <input
                      type="checkbox"
                      name="isGoing"
                      checked={this.state.isGoing}
                      onChange={this.handleInputChange}/>                       
                </label>
                <br/>
                <label>
                    Number of Guests:
                    <input
                     type="number"
                     name="numberOfGuests"
                     value={this.state.numberOfGuests}
                     onChange={this.handleInputChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
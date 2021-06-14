import React from 'react';

export default class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textValue : ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ textValue: event.target.value });
        console.log("Text Value:", this.state.textValue);
    }

    handleFormSubmit(event) {
        alert('A name was submitted: ' + this.state.textValue);   
        event.preventDefault();     
    }

    render() {
        const { textValue } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Name: <input type="text" value={textValue} onChange={this.handleNameChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}
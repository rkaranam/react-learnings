import React from 'react';

export default class TutorialSites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: ''
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleSelectChange(event) {
        this.setState({ selectValue: event.target.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        alert('Your Favorite Site: ' + this.state.selectValue);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Pick your website: 
                    <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                        <option value="educative">Educative</option>
                        <option value="scrimba">Scrimba</option>
                        <option value="whizlabs">Whizlabs</option>
                        <option value="pluralsight">Pluralsight</option>
                        <option value="acloudguru">ACloudGuru</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}
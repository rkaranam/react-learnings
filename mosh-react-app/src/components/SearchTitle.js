import React from 'react';
import { itemsList } from './../config/constants';

// const isSearched = (searchTerm) => {
//     return function(item) {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
// }

const isSearched = (searchTerm) => (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase());

export default class SearchTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsList,
            searchTerm: ''
        }
        this.onSearchItem = this.onSearchItem.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onSearchItem(event) {
        this.setState({ searchTerm: event.target.value });
    }

    onRemove(id) {
        const updatedList = this.state.itemsList.filter(item => item.objectId !== id);
        this.setState({ itemsList: updatedList });
    }

    render() {

        const { itemsList, searchTerm } = this.state;

        return (
            <div className="search-app">
                <SearchForm pattern={searchTerm} onSearchChange={this.onSearchItem}/>
                
                <Result list={itemsList} pattern={searchTerm} onDismiss={this.onRemove}/>                
            </div>
        );
    }

}

class SearchForm extends React.Component {
    render() {

        const { pattern, onSearchChange } = this.props;

        return(
            <div className="search-title">
                <h3>Search By Title</h3>
                <form>
                    <p>
                        <input type="text" value={pattern} onChange={onSearchChange}/>
                    </p>
                </form>
            </div>
        );
    }
}

class Result extends React.Component {
    render() {

        const { list: items, pattern, onDismiss } = this.props;

        return(
            <div className="search-result">
                {
                    items.filter(isSearched(pattern)).map(item => 
                        <div key={item.objectId} className="item">
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>
                                <p>Author: {item.author}</p>
                                <p>Comments: {item.num_comments} and Points: {item.points}</p>
                                <p>
                                    <button type="button" onClick={() => onDismiss(item.objectId)}>Remove</button>
                                </p>
                            </span>
                        </div>
                    )
                }
            </div>
        );
    }
}
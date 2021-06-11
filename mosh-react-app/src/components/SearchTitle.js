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
    }

    onSearchItem(event) {
        this.setState({ searchTerm: event.target.value });
    }

    onRemove(id) {
        const updatedList = this.state.itemsList.filter(item => item.objectId !== id);
        this.setState({ itemsList: updatedList });
    }

    render() {
        return (
            <div>
                <div className="SearchTitle">
                    <h3>Search By Title</h3>
                    <form>
                        <p>
                            <input type="text" onChange={this.onSearchItem}/>
                        </p>
                    </form>
                </div>
                {
                    this.state.itemsList.filter(isSearched(this.state.searchTerm)).map(item => 
                        <div key={item.objectId} className="item">
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>
                                <p>Author: {item.author}</p>
                                <p>Comments: {item.num_comments} and Points: {item.points}</p>
                                <p>
                                    <button type="button" onClick={() => this.onRemove(item.objectId)}>Remove</button>
                                </p>
                            </span>
                        </div>
                    )
                }
            </div>
        );
    }

}
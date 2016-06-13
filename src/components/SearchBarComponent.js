/*
 * SearchBarComponent
 * */

import React from "react";

class SearchBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    
    render() {
        console.log(this.props);
        return (
            <div className="search-bar">
                <input type="text"
                       value={this.state.term}
                       onChange={(event)=>this.onInputChange(event.target.value)}
                       placeholder="search the videos that u want "
                />
            </div>
        )
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBarComponent;
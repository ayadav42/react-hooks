import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); //otherwise page refreshes

        //TODO: Make sure we call
        //callback function from parent
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>
                        Video Search
                    </label>
                    <input
                        type="text"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    // onChange={e => this.setState({term: e.target.value})}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;

/*class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault(); //otherwise page refreshes

        //TODO: Make sure we call
        //callback function from parent
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>
                            Video Search
                        </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            // onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
*/

/*
Uncontrolled Input --> Controlled Input
To hook up to the state of the class
To store data in state and not DOM

AIzaSyDI50yAwP1eL-t87BG_xJ2zuW03zw7gfTM
*/
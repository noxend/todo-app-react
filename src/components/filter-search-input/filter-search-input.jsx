import React from 'react';
import './filter-search-input.css'

export default class FilterSearchInput extends React.Component {

    constructor() {
        super();

        this.state = {
            term: ''
        }

        this.onSearchChange = (e) => {
            const term = e.target.value;
            this.setState({ term  });
            this.props.onSearchChange(term);
        }
    }

    render() {
        return(
            <div className="col-lg-9 col-md-8 col-sm-12">
                <input value={ this.state.term }
                        onChange={ this.onSearchChange }
                        type="text" className="form-control"
                        placeholder="Search..."/>
            </div>
        );
    }
}

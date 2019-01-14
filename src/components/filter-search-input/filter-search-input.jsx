import React from 'react';
import './filter-search-input.css'

export default class FilterSearchInput extends React.Component {

    render() {
        return(
            <div className="col-lg-9 col-md-8 col-sm-12 mb-sm-2 mb-lg-0">
                <input type="text" className="form-control" placeholder="Search..."/>
            </div>
        );
    }
}

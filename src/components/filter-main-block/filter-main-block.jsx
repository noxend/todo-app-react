import React from 'react';

import FilterSearchInput from '../filter-search-input';
import FilterButtons from '../filter-buttons';

import './filter-main-block.css'

const FilterMainBlock = ({ onSearchChange, filter, onFilterChange }) => {
    return(
        <div className="todo-filter form-row">
            <FilterSearchInput onSearchChange={ onSearchChange } />
            <FilterButtons filter={ filter } onFilterChange={ onFilterChange }/>
        </div>
    );
}

export default FilterMainBlock;
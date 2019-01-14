import React from 'react';

import FilterSearchInput from '../filter-search-input';
import FilterButtons from '../filter-buttons';

import './filter-main-block.css'

const FilterMainBlock = () => {
    return(
        <div className="todo-filter form-row">
            <FilterSearchInput />
            <FilterButtons />
        </div>
    );
}

export default FilterMainBlock;
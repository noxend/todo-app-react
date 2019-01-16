import React from 'react';

import './header.css';

import FilterMainBlock from '../filter-main-block';
import StatusBlock from '../status-block';

const Header = ( {done, toDo, onSearchChange, filter, onFilterChange} ) => {
    return (
        <div className="header">
            <StatusBlock done={ done } toDo={ toDo } />
            <FilterMainBlock onSearchChange={ onSearchChange } filter={ filter } onFilterChange={ onFilterChange } />
        </div>
    );
}

export default Header;
import React from 'react';

import './main-container.css'

import ListBox from '../list-box';
import Header from '../header';
import AddNewItemBlock from '../add-new-item-block';

const MainContainer = ({todos,
    onDeleted,
    onAddNewItem,
    onToggleImportant,
    onToggleDone,
    toDo,
    done,
    onSearchChange,
    filter,
    onFilterChange}) => {
    
    return (
        <div className="container">
            <div className="todo-container">
                <Header toDo={ toDo } done={ done } onSearchChange={ onSearchChange } filter={ filter } onFilterChange={ onFilterChange }/>
                <ListBox todos={ todos }
                         onDeleted={ onDeleted }
                         onToggleImportant={ onToggleImportant }
                         onToggleDone={ onToggleDone }/>
                <AddNewItemBlock onAddNewItem={ onAddNewItem } />
            </div>
        </div>
    );
}

export default MainContainer;


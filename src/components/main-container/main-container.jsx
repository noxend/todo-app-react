import React from 'react';

import './main-container.css'

import ListBox from '../list-box';
import Header from '../header';

const MainContainer = ({todos, onDeleted}) => {
    
    return (
        <div className="container">
            <div className="todo-container">
                <Header />
                <ListBox todos={todos} onDeleted={onDeleted} />
            </div>
        </div>
    );
}

export default MainContainer;


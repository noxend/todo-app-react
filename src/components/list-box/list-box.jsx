import React from 'react';

import './list-box.css';

import ListItem from '../list-item/list-item'

const ListBox = ({ todos, onDeleted }) =>  {

    const todosEl = todos.map(({title, main, id, important, done}) => {
        return <ListItem done={done}
                        important={important}
                        title={title}
                        main={main}
                        key={id}
                        onDeleted={ () => { onDeleted(id) } }/>
    });

    return (
        <ul className='list-group list-box'>
            {todosEl}
        </ul>
    );
}

export default ListBox;
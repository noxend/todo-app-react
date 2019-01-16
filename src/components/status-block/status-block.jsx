import React from 'react';

const StatusBlock = ({ toDo, done }) => {

    return(
        <div className='status-block d-flex align-items-end justify-content-between'>
            <h2>Wednesday, 16</h2>
            <p>{ toDo } more to do, { done } done</p>
        </div>
    );
}

export default StatusBlock;

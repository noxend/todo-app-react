import React, { Component } from 'react';

import MainContainer from '../main-container';



export default class App extends Component {

    constructor() {
        super();

        this.state = {
            todos: [
                { id: 1, title: "Buy milk lonlg long task no very log long task Buy milk lonlg long task no very log long task", important: false, done: false },
                { id: 2, title: "Sleap", important: false, done: true },
                { id: 3, title: "Buy a car", important: true, done: false },
                { id: 4, title: "Write react app", important: true, done: false },
                { id: 5, title: "Go to ATB", important: false, done: true },
                { id: 6, title: "Learn react", important: true, done: false },
            ]
        };

        this.onDeleted = (id) => {
            this.setState(({ todos }) => {
                const index = todos.findIndex((el) => el.id === id);
                const before = todos.slice(0, index);
                const after = todos.slice(index + 1);
                const newTodoList = [...before, ...after];

                return {
                     todos: newTodoList
                }
            });
        };
    }

    render() {

        const { todos } = this.state;

        return (
            <MainContainer todos={ todos } onDeleted={ this.onDeleted }/>
        );
    }
}
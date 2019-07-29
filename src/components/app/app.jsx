import React, { Component } from "react";

import MainContainer from "../main-container";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { id: 2, title: "First task", important: false, done: true },
        { id: 3, title: "Second task", important: true, done: false },
        { id: 4, title: "Third task", important: false, done: false }
      ],
      term: '',
      filter: 'all'
    };


    this.fiterItems = (items, fiter) => {
      switch (fiter) {
        case 'all':
          return items;

        case 'active':
          return items.filter((el) => !el.done);

        case 'important':
          return items.filter((el) => el.important);

        case 'done':
          return items.filter((el) => el.done);

        default:
          return items;
      }
    }

    this.searchItem = (items, term) => {
      
      if(term.length === 0){
        return items
      }
      return items.filter((item) => {
        return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    };

    this.onSearchChange = (term) => { 
      this.setState({ term });
    };

    this.onFilterChange = (filter) => {
      this.setState({ filter });
    }

    this.onToggleImportant = (id) => {
      this.setState(({ todos }) => {
        const index = todos.findIndex(el => el.id === id);
        const oldItem = todos[index];
        const newItem = { ...oldItem, important: !oldItem.important };
        const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
        return { todos: newArr };
      });
    };

    this.onToggleDone = (id) => {
      this.setState(({ todos }) => {
        const index = todos.findIndex(el => el.id === id);
        const oldItem = todos[index];
        const newItem = { ...oldItem, done: !oldItem.done };
        const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
        return { todos: newArr };
      });
    };

    this.onDeleted = id => {
      this.setState(({ todos }) => {
        const index = todos.findIndex(el => el.id === id);
        const newTodoList = [...todos.slice(0, index),
                             ...todos.slice(index + 1)];
        return {
          todos: newTodoList
        };
      });
    };

    this.onAddNewItem = text => {
      const newItem = {
        id: Date.now(),
        title: text,
        important: false,
        done: false
      };

      this.setState(({ todos }) => {
        return {
          todos: [...todos, newItem]
        };
      });
    };
  }

  componentDidMount() {
    fetch('/api/article')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    const { todos, term, filter } = this.state;

    const visibleItems = this.fiterItems(this.searchItem(todos, term), filter);

    const doneCount = this.state.todos.filter((item) => item.done === true).length;
    const todoCount = this.state.todos.length - doneCount;

    return (
      <MainContainer
        toDo={ todoCount } done={ doneCount }
        todos={ visibleItems }
        onDeleted={ this.onDeleted }
        onAddNewItem={ this.onAddNewItem }
        onToggleImportant={ this.onToggleImportant }
        onToggleDone={ this.onToggleDone }
        onSearchChange={ this.onSearchChange }
        filter={ filter }
        onFilterChange={ this.onFilterChange }
      />
    );
  }
}

import React, { Component } from "react";

import "./list-item.css";

export default class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

    this.onClickButtonImportant = () => {
      this.setState(({ important }) => {
        return {
          important: !important
        };
      });
    };

    this.onClickButtonDone = () => {
      this.setState(({ done }) => {
        return {
          done: !done,
        };
      });
    };
  }

  render() {
    const { title, onDeleted, onToggleDone, onToggleImportant, done, important } = this.props;

    let styleItem =
      "list-group-item todo-item d-flex justify-content-between align-items-center";

    const iconImportant = important ? ( <i className="fas fa-star" /> ) : ( <i className="far fa-star" /> );
    const iconDone = done ? ( <i className="fas fa-check-circle" /> ) : ( <i className="far fa-circle" /> );

    if (important) {
      styleItem += " important";
    }

    if (done) {
      styleItem += " done";
    }

    return (
      <li className={ styleItem }>
        <span onClick={onToggleDone}>
          { title } { important ? <i className="fas fa-star" /> : null }
        </span>
        <div className="btn-group">
          <button onClick={onToggleDone} className="btn btn-success">{ iconDone }</button>
          <button
            onClick={onToggleImportant}
            className="btn btn-warning">
            { iconImportant }
          </button>
          <button onClick={onDeleted} className="btn btn-danger">
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </li>
    );
  }
}

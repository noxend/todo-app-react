import React, { Component } from "react";

import "./filter-buttons.css";

export default class FilterButtons extends Component {
  constructor() {
    super();
    this.state = {};

    this.buttons = [
      { name: "all", label: "All" },
      { name: "done", label: "Done" },
      { name: "active", label: "Active" },
      { name: "important", label: <i className="fas fa-star" /> }
    ];
  }

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const ifActive = filter === name;

      return (
        <button
          key={name}
          type="button"
          className={`btn btn-dark ${ifActive ? "active" : "  "} col`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div
        className="btn-group col-lg-3 col-md-4 col-sm-12"
        role="group"
        aria-label="Basic example"
      >
        {buttons}
      </div>
    );
  }
}

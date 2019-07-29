import React from "react";
import "./add-new-item-block.css";

export default class AddNewItemBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      label: ''
    };

    this.onLabelChange = (e) => {
      this.setState({ label: e.target.value });
    };

    this.onClearInput = () => {
      console.log();
      
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onAddNewItem(this.state.label);      
    }
  };

  render() {
    return (
      <form onSubmit={ this.onSubmit } className="form-row add-new-item-block d-flex align-items-center">
        <div className="col-lg-11 col-md-10 col-sm-12">
          <input
            type="text"
            className="form-control"
            onChange={ this.onLabelChange }
            placeholder="What needs to be done?"/>
        </div>
        <div className="col-lg-1 col-md-2 col-sm-12">
          <button
            onClick={ this.onSubmit }
            type="button"
            className="btn btn-dark col">
            Add
          </button>
        </div>
      </form>
    );
  }
}

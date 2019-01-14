import React from "react";

import "./filter-buttons.css";

const FilterButtons = () => {
  return (
    <div className="btn-group col-lg-3 col-md-4 col-sm-12" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-dark col">All</button>
      <button type="button" className="btn btn-dark col">Done</button>
      <button type="button" className="btn btn-dark col">Active</button>
    </div>
  );
};

export default FilterButtons;

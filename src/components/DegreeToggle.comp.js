import React from "react";

export const DegreeToggle = ({ degreetype, updateForecastDegree }) => {
  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="celsius"
          value="celsius"
          checked={degreetype === "celsius"}
          onChange={updateForecastDegree}
        />
        <label className="form-check-label" htmlFor="celsius">
          Celsius
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="celsius"
          value="fahrenheit"
          checked={degreetype === "fahrenheit"}
          onChange={updateForecastDegree}
        />
        <label className="form-check-label" htmlFor="celsius">
          Fahrenheit
        </label>
      </div>
    </div>
  );
};

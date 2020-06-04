import React from "react";

const BarraProgreso = ({ progressValue }) => {
  return (
    <div>
      <progress id="file" value={progressValue} max="100"></progress>;
      <label for="file">{progressValue}%</label>
    </div>
  );
};

export default BarraProgreso;

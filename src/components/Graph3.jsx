import Plot from "react-plotly.js";

import React from "react";
const Graph3 = () => {
  return (
    <div className="flex justify-center ">
      <Plot
        data={[{ type: "bar", x: [1, 2, 3, 4, 5], y: [2, 5, 3, 9, 5] }]}
        layout={{ width: 850, height: 600, title: "Graph 3" }}
      />
    </div>
  );
};
export default Graph3;

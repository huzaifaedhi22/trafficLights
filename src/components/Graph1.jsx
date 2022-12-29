import Plot from "react-plotly.js";

import React from "react";
const Graph1 = () => {
  return (
    <div className="flex justify-center mt-[50px]">
      <Plot
        data={[{ type: "bar", x: [1, 2, 3, 4, 5], y: [2, 5, 3, 9, 4] }]}
        layout={{ width: 850, height: 600, title: "Traffic Lights" }}
      />
    </div>
  );
};
export default Graph1;

import Plot from "react-plotly.js";

import React, { useEffect } from "react";
const Graph1 = ({ data }) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3002/");
      const data = await res.json();
      console.log(data);
      console.log(data[1]);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="flex justify-center ">
      <Plot
        data={[{ type: "bar", x: [1, 2], y: [3, 5] }]}
        layout={{ width: 850, height: 600, title: "Traffic Lights" }}
      />
    </div>
  );
};
export default Graph1;

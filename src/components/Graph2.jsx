import Plot from "react-plotly.js";
import React, { useEffect } from "react";
const Graph2 = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3002/");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="flex justify-center ">
      <Plot
        data={[{ type: "bar", x: [1, 2], y: [7, 10] }]}
        layout={{ width: 850, height: 600, title: "Graph 2" }}
      />
    </div>
  );
};
export default Graph2;

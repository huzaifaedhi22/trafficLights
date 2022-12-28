import Plot from "react-plotly.js";
import React from "react";
const DataPage = () => {
  return (
    <div className="bg-bg1 h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r -top-[250px] -right-[250px] w-[700px] h-[700px] rounded-full"></div>
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[800px] left-[350px] w-[200px] h-[200px] rounded-full"></div>
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[400px] -left-[100px] w-[300px] h-[300px] rounded-full"></div>
        <div className="header h-10 text-white flex justify-center">
          <div className="flex text-2xl pt-1 gap-x-10">
            <div className="text-[#E2E6FA]">IOT Project</div>
          </div>
        </div>
        <div className="flex justify-center mt-[100px]">
          <Plot
            data={[{ type: "bar", x: [1, 2, 3, 4], y: [2, 5, 3] }]}
            layout={{ width: 850, height: 600, title: "Traffic Lights" }}
          />
        </div>
      </div>
    </div>
  );
};
export default DataPage;

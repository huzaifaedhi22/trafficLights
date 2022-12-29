import React, { useState } from "react";
import Graph1 from "./components/Graph1";
import Graph2 from "./components/Graph2";
import Graph3 from "./components/Graph3";

const DataPage = () => {
  const [graph, setGraph] = useState("graph1");

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
        {graph === "graph1" && <Graph1 />}
        {graph === "graph2" && <Graph2 />}
        {graph === "graph3" && <Graph3 />}

        <div id="footer" className="w-[100%] h-[50px] mt-[50px] ">
          <div className="flex justify-between  rounded-3xl ">
            <div className="text-white flex  text-xl justify-center gap-8 w-[100%] ">
              <button
                onClick={() => {
                  setGraph("graph1");
                }}
              >
                Graph 1
              </button>
              <button
                onClick={() => {
                  setGraph("graph2");
                }}
              >
                Graph 2
              </button>
              <button
                onClick={() => {
                  setGraph("graph3");
                }}
              >
                Graph 3
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataPage;

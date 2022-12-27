import React from "react";
import { Bar } from "react-chartjs-2";

const DataPage = (state) => {
  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default DataPage;

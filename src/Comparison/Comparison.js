import React from "react";
import { Line } from "react-chartjs-2";
import './Comparison.css';

function Comparison(props) {
  const state = {
    labels: ["0%", "20%", "40%", "60%", "80%", "100%"],
    datasets: [
      {
        label: "percentile",
        fill: false,
        lineTension: 0.5,
        pointRadius: 10, 
        pointBackgroundColor: ["#FFFFFF", "#FFFFFF", "blue", "orange", "#FFFFFF", "#FFFFFF"], 
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [12, 22, props.p, 72, 32, 11],
      },
    ],
  };

  return (
    <div className="container1">
      <div className="header1">
        <h3 className="heading1">Comparison Graph</h3>
      </div>

      <div className="text1">
        <p>
          <b>You scored {props.p}% percentile</b> which is lower than the
          average percentile 72% of all the engineers who took this assessment
        </p>
      </div>

      <Line className="chart1"
        data={state}
        options={{
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default Comparison;

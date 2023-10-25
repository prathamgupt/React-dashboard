import React from "react";
import { useState } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import './Question.css';
import AdsClickIcon from '@mui/icons-material/AdsClick';

function Question(props) {
  const state = {
    datasets: [
      {
        backgroundColor: ["#0000FF", "#808080"],
        data: [props.q, 15 - props.q],
      },
    ],
  };

  return (
    <div className="container">
      <div className="header">
        <h3 className="heading">Question Analysis</h3>
        <div className="score">
        <b>
          {props.q < 10 ? `0${props.q}` : props.q}/15
        </b>
        </div>
      </div>
      <p>
        <b>You scored {props.q} out of 15.</b> However, it still needs some improvements.
      </p>
      <Doughnut className="chart" data={state} />
      <AdsClickIcon className="icon1" style={{fontSize: 50}}/>
    </div>
  );
}

export default Question;


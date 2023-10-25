import React, { useState,useRef } from "react";
import "./App.css";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Quick from "./Quick/Quick";
import Question from "./Question/Question";
import Comparison from "./Comparison/Comparison";
import Syllabus from "./Syllabus/Syllabus";
import "./App.css"; 

function App() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const handleUpdateClick = () => {
    setLoginFormVisible(true);
  };

  const handleLoginFormClose = () => {
    setLoginFormVisible(false);
  };
  const rankref=useRef();
  const percentileref=useRef();
  const scoreref=useRef();
  const [rank,setRank]=useState(0);
  const [percentile,setPercentile]=useState(0);
  const [score,setScore]=useState(0);
  const handleSubmit = () => {
    const newPercentile = parseInt(percentileref.current.value, 10);
    const newScore = parseInt(scoreref.current.value, 10);
  
    if (newPercentile < 0 || newPercentile > 100) {
      alert("Please enter a valid percentile between 0 and 100.");
    } else if (newScore < 0 || newScore > 15) {
      alert("Please enter a valid score between 0 and 15.");
    } else {
      setPercentile(newPercentile);
      setScore(newScore);
      setRank(rankref.current.value);
      setLoginFormVisible(false);
    }
  };
  

  return (
    <div>
      <div>
        <div className="grid-container">
          <div className="item1">
            <Header />
          </div>
          <div className="item2">
            <Dashboard />
          </div>
          <div className="item3">
            <div className="flex-container">
              <div className="d1">
                <table>
                  <tr>
                    <td rowSpan={2}>
                    <img
                      src="data:image/png;base64,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"
                      alt="html" />
                    </td>
                    <td>
                      <h3>
                        <b>Hypertext Markup Language</b>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text">
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="d2">
                <button className="update" onClick={handleUpdateClick}>
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="item4">
            <Quick r={rank} p={percentile} s={score}/>
          </div>
          <div className="item5"><Syllabus/></div>
          <div className="item6"><Question q={score}/></div>
          <div className="item7"><Comparison p={percentile}/></div>
        </div>
      </div>
      {isLoginFormVisible && (
  <div className="login-popup">
  <img className="inside"
                      src="data:image/png;base64,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"
                      alt="html" />
    <form onSubmit={handleSubmit} className="form">
      <h2>Update Scores</h2>
      <div className="lable-container">
      <div className="form-label-input">
        <label style={{ display: 'inline-block', width: '50%', marginRight: '10px' }}>
          <h3>1.   Update your rank:</h3>
        </label>
        <input type="text" className="form-input" ref={rankref} style={{ width: '50%' }} required/>
      </div>
      <div className="form-label-input">
        <label style={{ display: 'inline-block', width: '50%', marginRight: '10px' }}>
          <h3>2.   Update your percentile:</h3>
        </label>
        <input type="text" className="form-input" ref={percentileref} style={{ width: '50%' }} required/>
      </div>
      <div className="form-label-input">
        <label style={{ display: 'inline-block', width: '50%', marginRight: '10px' }}>
          <h3>3.  Update your current score (out of 15):</h3>
        </label>
        <input type="text" className="form-input" ref={scoreref} style={{ width: '50%' }} required/>
      </div>
      </div>
      <div className="button-container">
        <button onClick={handleLoginFormClose} className="cancel-button">
          Cancel
        </button>
        <button type="submit" className="submit-button">
          Save
        </button>
      </div>
    </form>
  </div>
)}

    </div>
  );
}

export default App;

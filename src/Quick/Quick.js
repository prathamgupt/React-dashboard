import React from "react";
import "./Quick.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
function Quick(props) {
  return (
    <div className="parent">
      <div className="change">
        <h3>
          <b>Quick Statistics</b>
        </h3>
        <table>
          <tr>
            <td className="d1" style={{ paddingLeft: 10, paddingRight: 100 }}>
              <table>
                <tr>
                  <td rowSpan={2}>
                    <EmojiEventsIcon sx={{ fontSize: 50 }} />
                  </td>
                  <td>
                    <h3>{props.r}</h3>
                  </td>
                </tr>
                <tr>
                  <td style={{fontSize:"18px"}}>YOUR RANK</td>
                </tr>
              </table>
            </td>
            <td className="d2" style={{ paddingRight: 100 }}>
              <table>
                <tr>
                  <td rowSpan={2}>
                    <ContentPasteIcon sx={{ fontSize: 50 }} />
                  </td>
                  <td>
                    <h3>{props.p}%</h3>
                  </td>
                </tr>
                <tr>
                <td style={{fontSize:"18px"}}>PERCENTILE</td>
                </tr>
              </table>
            </td>
            <td className="d3">
              <table>
                <tr>
                  <td rowSpan={2}>
                    <CheckBoxIcon sx={{ fontSize: 50 }} />
                  </td>
                  <td>
                    <h3>{props.s < 10 ? `0${props.s}` : props.s}/15</h3>
                  </td>
                </tr>
                <tr>
                <td style={{fontSize:"18px"}}>CORRECT ANSWERS</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Quick;

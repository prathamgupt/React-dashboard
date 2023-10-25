import React from "react";
import './Dashboard.css';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="element">
        <EqualizerIcon className="icon" />
        <div className="ele1">Dashboard</div>
      </div>
      <div className="element">
        <WorkspacePremiumIcon className="icon" />
        <div className="ele2">Skill Test</div>
      </div>
      <div className="element">
        <FileCopyOutlinedIcon className="icon" />
        <div className="ele3">Internships</div>
      </div>
    </div>
  );
}

export default Dashboard;

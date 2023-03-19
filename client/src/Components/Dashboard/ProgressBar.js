import React, { useState } from "react";
import "./ProgressBar.css";
const ProgressBar = ({ progress }) => {
  const [percentage, setPercentage] = useState(0);

  React.useEffect(() => {
    setPercentage(progress);
  }, [progress]);

  return (
    <div className="ProgressBar">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="p_1">{progress}%</p>
    </div>
  );
};

export default ProgressBar;

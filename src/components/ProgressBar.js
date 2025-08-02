// src/components/ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ completedCount, totalCount }) => {
  const percent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
        <span className="progress-label">
          {completedCount} of {totalCount} champions completed
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

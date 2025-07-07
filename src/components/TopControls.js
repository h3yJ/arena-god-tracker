// src/components/TopControls.js
import React from 'react';
import './TopControls.css';

const TopControls = ({
  searchTerm,
  setSearchTerm,
  hideCompleted,
  setHideCompleted,
  showCompletedLast,
  setShowCompletedLast
}) => {
  return (
    <div className="top-controls">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <label className="control-toggle">
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={(e) => setHideCompleted(e.target.checked)}
        />
        Hide Completed
      </label>

      <label className="control-toggle">
        <input
          type="checkbox"
          checked={showCompletedLast}
          onChange={(e) => setShowCompletedLast(e.target.checked)}
        />
        Show Incomplete First
      </label>
    </div>
  );
};

export default TopControls;

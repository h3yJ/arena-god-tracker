// src/App.js
import React, { useState, useEffect } from 'react';
import championData from './data/champions.json';
import ChampionCard from './components/ChampionCard';

import './App.css';


function App() {
  const [completedChamps, setCompletedChamps] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('completedChamps');
    return saved ? JSON.parse(saved) : {};
  });

  const champions = Object.values(championData.data);

  const toggleChampion = (id) => {
    const updated = {
      ...completedChamps,
      [id]: !completedChamps[id],
    };
    setCompletedChamps(updated);
    localStorage.setItem('completedChamps', JSON.stringify(updated));
  };

  return (
    <div className="champion-grid">
      {champions.map((champ) => (
        <ChampionCard
          key={champ.id}
          champ={champ}
          completed={completedChamps[champ.id]}
          onToggle={toggleChampion}
        />
      ))}
    </div>
  );
}

export default App;

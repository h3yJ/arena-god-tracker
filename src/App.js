// src/App.js
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import championData from './data/champions.json';
import ChampionCard from './components/ChampionCard';
import RoleFilter from './components/RoleFilter';
import TopControls from './components/TopControls';

import './App.css';

function App() {
  const [completedChamps, setCompletedChamps] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('completedChamps');
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedRole, setSelectedRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);
  const [showCompletedLast, setShowCompletedLast] = useState(false);

  const champions = Object.values(championData.data);

  const toggleChampion = (id) => {
    const updated = {
      ...completedChamps,
      [id]: !completedChamps[id],
    };
    setCompletedChamps(updated);
    localStorage.setItem('completedChamps', JSON.stringify(updated));
  };

  // Apply filtering and sorting to champions
  let filteredChampions = [...champions];

  // Filter by selected role
  if (selectedRole) {
    filteredChampions = filteredChampions.filter((champ) =>
      champ.tags.includes(selectedRole)
    );
  }

  // Filter by search term
  if (searchTerm.trim()) {
    filteredChampions = filteredChampions.filter((champ) =>
      champ.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Hide completed champions
  if (hideCompleted) {
    filteredChampions = filteredChampions.filter(
      (champ) => !completedChamps[champ.id]
    );
  }

  // Show completed champions at the end
  if (showCompletedLast) {
    filteredChampions.sort((a, b) => {
      const aCompleted = completedChamps[a.id] ? 1 : 0;
      const bCompleted = completedChamps[b.id] ? 1 : 0;
      return aCompleted - bCompleted;
    });
  }

  const [isSticky, setIsSticky] = useState(false);

  // Keep filter bar
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!isSticky && currentScroll > 110) {
        setIsSticky(true);
      } else if (isSticky && currentScroll < 90) {
        setIsSticky(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  return (
    <div>
      <h1 className="page-title">Arena God Tracker</h1>

      <div className="filter-bar-wrapper">
        <div className={`filter-bar ${isSticky ? 'sticky-active' : ''}`}>
          <TopControls
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            hideCompleted={hideCompleted}
            setHideCompleted={setHideCompleted}
            showCompletedLast={showCompletedLast}
            setShowCompletedLast={setShowCompletedLast}
          />
          <RoleFilter selectedRole={selectedRole} onSelectRole={setSelectedRole} />
        </div>
      </div>

      <div className="content-container">
        <div className="champion-grid">
          {filteredChampions.map((champ) => (
            <ChampionCard
              key={champ.id}
              champ={champ}
              completed={completedChamps[champ.id]}
              onToggle={toggleChampion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

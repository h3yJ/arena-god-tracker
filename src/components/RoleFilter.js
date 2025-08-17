// src/components/RoleFilter.js
import React from 'react';
import './RoleFilter.css';

const roles = [
  { name: 'Fighter', icon: 'Fighter_icon.webp' },
  { name: 'Marksman', icon: 'Marksman_icon.webp' },
  { name: 'Assassin', icon: 'Slayer_icon.webp' },
  { name: 'Mage', icon: 'Mage_icon.webp' },
  { name: 'Tank', icon: 'Tank_icon.webp' },
  { name: 'Support', icon: 'Support_icon.webp' },
];

const RoleFilter = ({ selectedRole, onSelectRole }) => {
  return (
    <div className="role-filter">
      {roles.map((role) => (
        <div
          key={role.name}
          className={`role-icon-wrapper ${selectedRole === role.name ? 'selected' : ''}`}
          onClick={() => onSelectRole(selectedRole === role.name ? null : role.name)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/roles/${role.icon}`}
            alt={role.name}
            className="role-icon"
            title={role.name}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
};

export default RoleFilter;

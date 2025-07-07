// src/components/ChampionCard.js
import './ChampionCard.css';

const ChampionCard = ({ champ, completed, onToggle }) => {
  return (
    <div
      className={`champion-card ${completed ? 'completed' : ''}`}
      onClick={() => onToggle(champ.id)}
    >
      <div className="champion-content">
        <div className="icon-container">
          <img
            src={`/icons/${champ.image.full}`}
            alt={champ.name}
            className="champion-icon"
            draggable="false"
          />
          {completed && (
            <svg className="checkmark" viewBox="0 0 24 24" width="16" height="16">
              <path
                d="M4 12l6 6L20 6"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="champion-name">{champ.name}</div>
      </div>
    </div>
  );
};

export default ChampionCard;

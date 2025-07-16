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
          <div className={`icon-border ${completed ? 'completed' : ''}`}>
            <img
              src={`/icons/${champ.image.full}`}
              alt={champ.name}
              className="champion-icon"
              draggable="false"
            />
            {completed && (
              <div className="completion-overlay"></div>
            )}
          </div>

          {completed && (
            <svg className="checkmark" viewBox="0 0 24 24" width="16" height="16">
              <path
                d="M4 12l6 6L20 6"
                fill="none"
                stroke="url(#checkGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="checkGradient" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="gold" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>

        <div className="champion-name">{champ.name}</div>
      </div>
    </div>
  );
};

export default ChampionCard;

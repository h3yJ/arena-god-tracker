// src/components/ChampionCard.js

const ChampionCard = ({ champ, completed, onToggle }) => {
  return (
    <div
      className={`champion-card ${completed ? 'completed' : ''}`}
      onClick={() => onToggle(champ.id)}
    >
      <div className="icon-container">
        <img
          src={`/icons/${champ.image.full}`}
          alt={champ.name}
          className="champion-icon"
        />
        {completed && <div className="checkmark">✔</div>}
      </div>
      <div className="champion-name">{champ.name}</div>
    </div>
  );
};

export default ChampionCard;

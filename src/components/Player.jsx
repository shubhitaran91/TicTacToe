import { useState } from "react";

export default function Player({ initialName, symbol, isActive, OnChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing((editing) => !editing);
    if(isEditing){
        OnChangeName(symbol,playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={(e) => handleChange(e)}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

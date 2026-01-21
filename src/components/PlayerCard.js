import React, { useState, useRef, useEffect } from 'react';
import './PlayerCard.css';

const PlayerCard = ({ name, score, symbol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const inputRef = useRef(null);

  useEffect(() => {
    setTempName(name);
  }, [name]);

  const handleFocus = () => {
    setIsEditing(true);
    setTimeout(() => {
        if (inputRef.current) inputRef.current.select();
    }, 0);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (tempName.trim() === '') {
        setTempName(name); // Revert if empty
    } else {
        onNameChange(tempName);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div className={`player-card ${isActive ? 'active' : ''} ${symbol.toLowerCase()}`}>
        <div className="player-avatar">
            {symbol}
        </div>
        <div className="player-info">
            {isEditing ? (
                <input
                    ref={inputRef}
                    className="player-name-input"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <div className="player-name" onClick={handleFocus} title="Click to edit name">
                    {name}
                </div>
            )}
            <div className="player-score">Score: {score}</div>
        </div>
    </div>
  );
};

export default PlayerCard;

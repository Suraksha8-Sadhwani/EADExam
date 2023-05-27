import React, { useState } from 'react';
function UserParticipation({ choices, onSelect }) {
    const [selectedChoice, setSelectedChoice] = useState('');
  
    const handleSelect = (e) => {
      setSelectedChoice(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSelect(selectedChoice);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {choices.map((choice) => (
          <div key={choice.id}>
            <input type="radio" id={choice.id} name="choice" value={choice.id} onChange={handleSelect} />
            <label htmlFor={choice.id}>{choice.label}</label>
          </div>
        ))}
        <button type="submit" disabled={!selectedChoice}>
          Vote
        </button>
      </form>
    );
}
export default UserParticipation

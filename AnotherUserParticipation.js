import React, { useState } from 'react';
function AnotherUserParticipation({ onReset }) {
    return (
      <div>
        <button onClick={onReset}>Reset Selection</button>
      </div>
    );
  }
  
  export default AnotherUserParticipation
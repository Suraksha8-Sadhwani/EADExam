// import logo from './logo.svg';
// import './App.css';

// import React, { useState } from 'react';
// import PollDisplay from './PollDisplay'
// import UserParticiption from './UserParticipation'
// import ThankYouMessage from './ThankYouMessage';
// import AnotherUserParticipation from './AnotherUserParticipation';
// import Timer from './Task2/Timer';

// function App() {
//   const [choices, setChoices] = useState([
//     { id: 1, label: 'JavaScript', votes: 0 },
//     { id: 2, label: 'Python', votes: 0 },
//     { id: 3, label: 'Java', votes: 0 },
//     { id: 4, label: 'C#', votes: 0 },
//   ]);

//   const [hasVoted, setHasVoted] = useState(false);
//   const [showReset, setShowReset] = useState(false);

//   const handleSelect = (choiceId) => {
//     setChoices((prevChoices) =>
//       prevChoices.map((choice) => {
//         if (choice.id === Number(choiceId)) {
//           return { ...choice, votes: choice.votes + 1 };
//         }
//         return choice;
//       })
//     );
//     setHasVoted(true);
//   };

//   const handleReset = () => {
//     setShowReset(false);
//     setHasVoted(false);
//   };

//   return (
//     <div>
//       <h1>Polling App</h1>
//       <PollDisplay question="What is your favorite programming language?" choices={choices} />
//       {!hasVoted ? (
//         <UserParticiption choices={choices} onSelect={handleSelect} />
//       ) : (
//         <div>
//           <ThankYouMessage />
//           {!showReset && <AnotherUserParticipation onReset={() => setShowReset(true)} />}
//         </div>
//       )}
//       {showReset && <UserParticiption choices={choices} onSelect={handleSelect} />}
//       <Timer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}

export default App;




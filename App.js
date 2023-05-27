import logo from './logo.svg';
import './App.css';
import PollDisplay from './PollDisplay'
import UserParticiption from './UserParticipation'
import ThankYouMessage from './ThankYouMessage';
import AnotherUserParticipation from './AnotherUserParticipation';

function App() {
  const [choices, setChoices] = useState([
    { id: 1, label: 'JavaScript', votes: 0 },
    { id: 2, label: 'Python', votes: 0 },
    { id: 3, label: 'Java', votes: 0 },
    { id: 4, label: 'C#', votes: 0 },
  ]);

  const [hasVoted, setHasVoted] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleSelect = (choiceId) => {
    setChoices((prevChoices) =>
      prevChoices.map((choice) => {
        if (choice.id === Number(choiceId)) {
          return { ...choice, votes: choice.votes + 1 };
        }
        return choice;
      })
    );
    setHasVoted(true);
  };

  const handleReset = () => {
    setShowReset(false);
    setHasVoted(false);
  };

  return (
    <div>
      <h1>Polling App</h1>
      <PollDisplay question="What is your favorite programming language?" choices={choices} />
      {!hasVoted ? (
        <UserParticipation choices={choices} onSelect={handleSelect} />
      ) : (
        <div>
          <ThankYouMessage />
          {!showReset && <AnotherUserParticipation onReset={() => setShowReset(true)} />}
        </div>
      )}
      {showReset && <UserParticipation choices={choices} onSelect={handleSelect} />}
    </div>
  );
}

//   return (
//     <div className="App">
//     <PollDisplay />
    <UserParticiption />
//     <AnotherUserParticipation />
//     <ThankYouMessage />
//     </div>
//   );
// }

export default App;


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
//         <UserParticipation choices={choices} onSelect={handleSelect} />
//       ) : (
//         <div>
//           <ThankYouMessage />
//           {!showReset && <AnotherUserParticipation onReset={() => setShowReset(true)} />}
//         </div>
//       )}
//       {showReset && <UserParticipation choices={choices} onSelect={handleSelect} />}
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const anecdotes = [
    "A common mistake that people make when trying to design something completely foolproof was to underestimate the ingenuity of complete fools.",
    "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Software gets slower faster than hardware gets faster.",
    "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilisation.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));

  const handleSelectedClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVoteClick = () => {
    const newArray = [...votes];
    newArray[selected]++;
    setVotes(newArray);
  }

  const findLargest =() => {
    let largest = 0;
    for(let i = 1; i < votes.length; i++) {
      if(votes[i] > votes[largest]) {
        largest = i;
      }
    }

    return largest;
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleSelectedClick}>next anecdote</button>
      <button onClick={handleVoteClick}>vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[findLargest()]}</p>
    </div>
  );
}

export default App;

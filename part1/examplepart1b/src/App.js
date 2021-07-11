import React from 'react';
import {useState} from 'react';

const History = ({allClicks}) => {
  if(allClicks.length === 0) {
    return(
      <div>
        <p>The app is used by pressing the buttons</p>
      </div>
    )
  } else {
    return (
      <div>
        Button press history: {allClicks.join(' ')}
      </div>
    )
  }
}

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    };

    setAllClicks(allClicks.concat("L"));
    setClicks(newClicks);
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    };

    setAllClicks(allClicks.concat("R"));
    setClicks(newClicks);
  }

  return (
    <div>
      {clicks.left}
      <Button text="Increase Left" handleClick={handleLeftClick}/>
      <Button text="Increase Right" handleClick={handleRightClick}/>
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;

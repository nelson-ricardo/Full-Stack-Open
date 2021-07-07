import React from 'react';
import {useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>
        increase
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>

  );
};

export default App;

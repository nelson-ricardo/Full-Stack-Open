import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get('http://localhost:3001/notes')
    .then(response => {
      console.log('promised fulfilled')
      setNotes(response.data)
    })
  }, [])

  console.log('render', notes.length, 'notes');

  return (
    <div >
      Hello World
    </div>
  );
}

export default App;

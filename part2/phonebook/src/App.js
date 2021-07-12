import React, { useState } from "react";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Filter from "./components/Filter";

function App() {
  //states for the persons and new name
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  //event handlers
  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  };

  const handleNumberChange = (event) => {
    const value = event.target.value;
    setNewNumber(value);
  };

  const handleNewPerson = (event) => {
    event.preventDefault();

    const names = persons
      .map((person) => Object.values(person))
      .reduce((values, value) => values.concat(value[0]), []);

    if (names.includes(newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);

    const filter = persons.filter((person) =>
      person.name.toLowerCase().includes(search)
    );
    setFilter(filter);
  };

  return (
    <div>
      <div>
        <Filter search={search} handleSearchChange={handleSearchChange} />
      </div>
      <h2>PhoneBook</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleNewPerson={handleNewPerson}
      />
      <h2>Numbers</h2>
      <div>
        {search.length === 0
          ? persons.map((person) => (
              <Contact
                key={person.number}
                name={person.name}
                number={person.number}
              />
            ))
          : filter.map((person) => (
              <Contact
                key={person.number}
                name={person.name}
                number={person.number}
              />
            ))}
      </div>
    </div>
  );
}

export default App;

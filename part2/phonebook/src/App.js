import React, { useState, useEffect } from "react";

import Person from "./components/Person";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Notification from './components/Notification';

import contactServices from "./services/contacts";

function App() {
  //states for the persons and new name
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  //state for filtered persons and search
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  //state for notifications about changes in db
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(false);

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
      if (
        window.confirm(
          `${newName} is already in the phonebook, would you like to update the phone number`
        )
      ) {
        const personToUpdate = persons.find(
          (person) => person.name === newName
        );
        const changedPerson = { ...personToUpdate, number: newNumber };
        contactServices
          .updateNumber(personToUpdate.id, changedPerson)
          .then((response) => {
            console.log("success");
            const updatedPersons = persons.map(person => person.id !== response.id ? person : response);
            
            setError(false);
            setNotification(`${changedPerson.name}'s phone number has been updated`);
            setTimeout(() => {
              setError(null)
            }, 5000)
            
            setPersons(updatedPersons);
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => {
            console.log(error)
            setError(true);
            setNotification("Failure")
            setTimeout(() => {
              setError(null)
            }, 2000);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      contactServices.create(newPerson).then((data) => {
        setError(false);
        setNotification(`${newPerson.name} has been added to the phonebook`);
        setTimeout(() => {
          setError(null)
        }, 2000)
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const contactDel = (id, name) => {
    if (window.confirm(`Do you want to delete the contact of ${name}`)) {
      contactServices.delContact(id).then((data) => {
        const newPersons = persons.filter((person) => person.id !== id);
        setPersons(newPersons);
        setNotification(`${name} has been deleted`)
        setError(false);
        setTimeout(() => {
          setError(null)
        }, 2000)
      });
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);

    const filter = persons.filter((person) =>
      person.name.toLowerCase().includes(search)
    );
    setFilter(filter);
  };

  //useEffect hook
  useEffect(() => {
    contactServices.getAll().then((data) => setPersons(data));
  }, []);

  return (
    <div>
      {
        <Notification error={error} notification={notification}/>        
      }
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
              <Person key={person.id} person={person} delCon={contactDel} />
            ))
          : filter.map((person) => (
              <Person key={person.id} person={person} delCon={contactDel} />
            ))}
      </div>
    </div>
  );
}

export default App;

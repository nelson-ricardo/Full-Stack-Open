import React from 'react';

const Form = ({newName, newNumber, handleNameChange, handleNumberChange, handleNewPerson}) => {

    return (
      <form onSubmit={handleNewPerson}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="person-name"
            value={newName}
            onChange={handleNameChange}
          />
          <br />
          <label htmlFor="number">Number</label>
          <input
            type="text"
            name="number"
            id="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
}

export default Form;
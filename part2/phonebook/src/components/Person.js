import React from "react";

const Person = ({person, delCon}) => {
  return (
    <div>
      <p key={person.key}>
        {person.name} : {person.number}
      </p>
      <button
        onClick={() => delCon(person.id,person.name)}
      >
        delete
      </button>
    </div>
  );
};

export default Person;

import { useState } from 'react';
import React from 'react';
import data from './data';
import Person from './Person';

const List = () => {
  const [persons, setPersons] = useState(data);
  return (
    <div className='birthdayList'>
      <h1>{persons.length} Birthdays today</h1>
      {persons.map((person) => {
        // {...persons} übergibt den Inhalt des objects, kann im component destructered werden
        return <Person key={person.id} {...person} />;
      })}
      <button className='btn btn-block' onClick={() => setPersons([])}>
        Clear All
      </button>
    </div>
  );
};

export default List;

import React from 'react';

const Person = ({ image, name, age }) => {
  return (
    <div className='person'>
      <img src={image} alt='Picture of Birthday Person' />
      <div className='person__details'>
        <h2>{name}</h2>
        <h3>{age} years</h3>
      </div>
    </div>
  );
};

export default Person;

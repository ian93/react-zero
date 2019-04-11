import React from 'react';

import classes from './Person.css';

const person = (props) => {
  // const prob = Math.random();
  // if (prob > 0.8) {
  //     throw new Error('Something wrong.');
  // }
  console.log('[Person.js] rendering Person');

  return (
    <div className="Person">
      <p onClick={props.click}>
        I&apos;m&nbsp;
        { props.name }
        , and I&apos;m&nbsp;
        { props.age }
        &nbsp;years old!
      </p>
      <p>{ props.children }</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;

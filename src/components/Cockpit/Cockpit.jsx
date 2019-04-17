import React, { useEffect, useRef, useContext } from 'react';

import TextValidator from '../TextValidator/TextValidator';
import Char from '../CharBlock/CharBlock';
import AuthContext from '../../context/auth-context';

import './Cockpit.css';

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved data to the cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in Cockpit.js');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd Cockpit.js');
    };
  });

  let charBlock = null;
  if (props.input.length !== 0) {
    charBlock = (
      <div>
        <TextValidator length={props.input.length} />
        <Char text={props.input} click={props.delete} />
      </div>
    );
  }

  let btnClass = '';
  let btnText = 'Show hidden persons.';
  if (props.showPersons) {
    btnClass = 'Red';
    btnText = 'Hide persons.';
  }

  const assignedClasses = [];
  if (props.input.length < 5) {
    assignedClasses.push('red');
  }
  if (props.input.length < 3) {
    assignedClasses.push('bold');
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Input text</p>
      <input
        type="text"
        onChange={event => {
          props.texted(event);
        }}
        value={props.input}
      />
      {charBlock}
      <div>
        <button type="button" onClick={authContext.login}>
          Login
        </button>
      </div>
      <div>
        <button
          type="button"
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default React.memo(cockpit);

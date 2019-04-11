import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';
  let btnText = 'Show hidden persons.';
  if (props.showPersons) {
    btnClass = classes.Red;
    btnText = 'Hide persons.';
  }

  return (
    <div className="Cockpit">
      <h1>{ props.title }</h1>
      <div>
        <button
          type="button"
          className={btnClass}
          onClick={props.clicked}
        >
          { btnText }
        </button>
      </div>
    </div>
  );
};

export default React.memo(cockpit);

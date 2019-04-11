import React from 'react';

const charBlock = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
  };

  return (props.text.split('').map((character, index) => (
    <div
      className="CharBlock"
      role="button"
      tabIndex={index}
      key={index}
      onClick={() => { props.click(index); }}
      style={style}
    >
      { character }
    </div>
  )));
};

export default charBlock;

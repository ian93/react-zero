import React from 'react';

const withClass = (WrappedClasses, className) => props => (
  <div className={className}>
    <WrappedClasses {...props} />
  </div>
);

export default withClass;

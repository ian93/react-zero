import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

import './Person.css';

class Person extends Component {
  // const prob = Math.random();
  // if (prob > 0.8) {
  //     throw new Error('Something wrong.');
  // }

  // Make ESLint believe this should be functional component, not class component.
  fakeFuncForESLint = () => {}

  render() {
    console.log('[Person.js] rendering Person');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I&apos;m&nbsp;
          { this.props.name }
          , and I&apos;m&nbsp;
          { this.props.age }
          &nbsp;years old!
        </p>
        <p>{ this.props.children }</p>
        <input type="text" onChange={this.props.change} value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  change: PropTypes.func,
};

Person.defaultProps = {
  name: 'Ian',
  age: 30,
  click: () => {},
  change: () => {},
};

export default withClass(Person, 'Person');

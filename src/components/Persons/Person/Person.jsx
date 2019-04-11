import React, { Component } from 'react';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

import './Person.css';

class Person extends Component {
  // const prob = Math.random();
  // if (prob > 0.8) {
  //     throw new Error('Something wrong.');
  // }

  render() {
    this.console.log('[Person.js] rendering Person');
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

export default withClass(Person, 'Person');

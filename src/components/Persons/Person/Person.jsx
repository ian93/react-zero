import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';

import './Person.css';

class Person extends Component {
  // const prob = Math.random();
  // if (prob > 0.8) {
  //     throw new Error('Something wrong.');
  // }

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering Person');
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Login</p>
        )}
        <p onClick={this.props.click}>
          I&apos;m&nbsp;
          {this.props.name}, and I&apos;m&nbsp;
          {this.props.age}
          &nbsp;years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => { this.inputElement = inputEl; }}
          ref={this.inputElementRef}
          onChange={this.props.change}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  change: PropTypes.func
};

Person.defaultProps = {
  name: 'Ian',
  age: 30,
  click: () => {},
  change: () => {}
};

export default withClass(Person, 'Person');

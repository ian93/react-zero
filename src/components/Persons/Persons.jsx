import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps', props);
  //     return state;
  // }

  // // or use PureComponent for automaticly check all the props
  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[Persons.js] shouldComponentUpdate');
  //     return (
  //         nextProps.persons === this.props.persons ||
  //         nextProps.clicked !== this.props.persons ||
  //         nextProps.changed !== this.props.persons
  //         ) ? false : true;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotsBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  render() {
    console.log('[Persons.js] rendering Persons ...');
    return (
      this.props.persons.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          click={() => { this.props.clicked(index); }}
          change={(event) => { this.props.changed(event, person.id); }}
          isAuth={this.props.isAuthenticated}
        />
      ))
    );
  }
}

export default Persons;

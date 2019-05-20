import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
 const [personsState, setPersonsState] = useState({
  persons: [
    {name: 'Chinmay', age: '28'},
    {name: 'Manu', age: '29'},
    {name: 'Stephanie', age: '26'}
  ],
  otherState: 'some other value'
 });

 const [otherState, setOtherState] = useState({otherState: 'some other value'});
  console.log(personsState, otherState)
 const switchNameHandler = () => {
  //  console.log('was clicked')
  // this.state.persons[0].name='Maxmillian';
  setPersonsState({
    persons: 
    [
      {name: 'Chinmay Moharir', age: '28'},
      {name: 'Manu', age: '29'},
      {name: 'Stephanie', age: '27'}
    ],
    otherState: personsState.otherState
  });
 
};
 
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age = {personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age = {personsState.persons[1].age} >My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age = {personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;

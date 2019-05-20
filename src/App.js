import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
 state = {
  persons: [
    {name: 'Chinmay', age: '28'},
    {name: 'Manu', age: '29'},
    {name: 'Stephanie', age: '26'}
  ],
  otherState: 'some other value'
 }

//  const [otherState, setOtherState] = useState({otherState: 'some other value'});
  // console.log(personsState, otherState)
 switchNameHandler = (newName) => {
  //  console.log('was clicked')
  // this.state.persons[0].name='Maxmillian';
  this.setState({
    persons: 
    [
      {name: 'Chinmay', age: '28'},
      {name: 'Manu', age: '29'},
      {name: 'Stephanie', age: '27'}
    ]
  })
 
}

nameChangedHandler = (event) => {
  this.setState({
    persons: 
    [
      {name: 'Chinmay', age: '28'},
      {name: event.target.value, age: '29'},
      {name: 'Stephanie', age: '27'}
    ]
  })
}
 render(){
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => this.switchNameHandler('Chinmay Moharir')}>Switch name</button>
      <Person 
        name={this.state.persons[0].name} 
        age = {this.state.persons[0].age} />
      <Person 
        name={this.state.persons[1].name} 
        age = {this.state.persons[1].age} 
        click = {this.switchNameHandler.bind(this, 'Chinmay!!!')} 
        changed = {this.nameChangedHandler} >My Hobbies: Racing</Person>
      <Person 
        name={this.state.persons[2].name} 
        age = {this.state.persons[2].age} />
    </div>
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}
}

export default App;

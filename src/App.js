import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
 state = {
  persons: [
    {name: 'Chinmay', age: '28'},
    {name: 'Manu', age: '29'},
    {name: 'Stephanie', age: '26'}
  ],
  otherState: 'some other value',
  showPersons: false
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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

 render(){

  const style= {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style = {style}
        onClick={this.togglePersonsHandler}>Switch name</button>
      {this.state.showPersons === true ? 
        <div>
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
        </div> : null
    }
    
      
    </div>
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

class App extends Component {
  render() {
    return (
      <div className="container" style={styles}>
    
        <Header />
        <TaskInput />
        <TaskList />
      </div>
    );
  }
}
const styles = {
    backgroundColor: "#81E4BD"
}
export default App;
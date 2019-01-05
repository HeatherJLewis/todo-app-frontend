import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import FlowerImage from './components/FlowerImage';

class App extends Component {
  render() {
    return (
      <div className="container" style={styles}>
      <div className="row">
                    <div className="col-md-12 col-lg-8">
            <Header />
              </div>
            <div class="col-lg-4 d-none d-lg-block">
            <FlowerImage />
                </div>
            </div>
        <TaskInput />
        <p>Keep It Simple, Stupid</p>
        <TaskList />
      </div>
    );
  }
}
const styles = {
    backgroundColor: "#81E4BD"
}
export default App;

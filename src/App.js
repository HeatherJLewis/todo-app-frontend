import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

class App extends Component {
  render() {
    return (
      <div className="container" style={styles}>
      <div className="row">
                    <div className="col-md-12 col-lg-8">
            <Header />
              </div>
            <div class="col-lg-4 d-none d-lg-block">
                    <p>Hello There!</p>
                </div>
            </div>
        {/* <Header /> */}
        <TaskInput />
        <p>Keep It Simple, Stupid</p>
        <TaskList />
        <Header />
      </div>
    );
  }
}
const styles = {
    backgroundColor: "#81E4BD"
}
export default App;

            // <img src="images/23823171-illustration-of-a-pink-flower-on-a-white-background.jpg
            //         " alt="Flower" style="width:360px;height:360px;"> 
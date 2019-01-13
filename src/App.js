import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import FlowerImage from './components/FlowerImage';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.taskDone = this.taskDone.bind(this);
  }  

  addTask(task) {
    this.setState ({
      tasks: [...this.state.tasks, task]
    })
  }

  taskDone(id) {
    this.setState ({
      tasks: this.state.tasks.map(tasks => {
        if (tasks.id === id) {
          return {
            ...tasks,
            completed: !tasks.completed
          }
        } else {
          return tasks;
        }
      })
    })
  }

  render() {
    return (
      <div className="container" style={styles}>
        <div><br></br></div>
        <div className="row">
            <div className="col-md-12 col-lg-8">
              <Header />
            </div>
            <div class="col-lg-4 d-none d-lg-block">
              <FlowerImage />
            </div>
        </div>
        <TaskInput onSaveTaskHandler={this.addTask}/>
        <p>Keep It Simple, Stupid</p>
        <TaskList 
        tasks={this.state.tasks}
        onDoneTaskHandler={this.taskDone}
        />
      </div>
    );
  }
}
const styles = {
    backgroundColor: "#81E4BD"
}
export default App;
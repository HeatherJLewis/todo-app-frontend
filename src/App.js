import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import FlowerImage from './components/FlowerImage';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      tasksToDo: []
    };
    this.addTask = this.addTask.bind(this);
    this.taskDone = this.taskDone.bind(this);
    // this.tasksYetToDo = this.tasksYetToDo.bind(this);
  }  

  addTask(task) {
    this.setState ({
      tasks: [...this.state.tasks, task]
    })
  }
//I want to iterate through to find the id that matches with the task I want to delete and set the completed status to true
//Id needs to come from tasks.id and needs to be drawn from the taskList component
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
    this.setState ({
      tasksToDo: this.state.tasks.filter(tasks => tasks.completed != false)
  });
  }

  // tasksYetToDo(tasks) {
  //     this.setState ({
  //       tasksToDo: this.state.tasks.filter(tasks => tasks.completed != false)
  //   });
  // }

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
        tasksToDo={this.state.tasksToDo}
        onDoneTaskHandler={this.taskDone}
        // tasksLeftHandler={this.tasksYetToDo}
        />
      </div>
    );
  }
}
const styles = {
    backgroundColor: "#81E4BD"
}
export default App;
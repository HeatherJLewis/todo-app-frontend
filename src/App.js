import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import FlowerImage from './components/FlowerImage';
import TasksService from './service/tasks';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.taskDone = this.taskDone.bind(this);
    this.taskDelete = this.taskDelete.bind(this);

  }

  async componentDidMount() {
    const tasks = await TasksService.getTasks();
    // console.log(tasks);
    this.setState({ tasks: tasks });
  }

  async addTask(task) {

    const response = await TasksService.saveTask(task);
    // console.log(response);
    task.taskId = response.insertId;

    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  //I want to iterate through to find the id that matches with the task I want to delete and set the completed status to true
  //Id needs to come from tasks.id and needs to be drawn from the taskList component

  async taskDone(taskId) {
    const response = await TasksService.updateTask(taskId);

    this.setState({
      tasks: this.state.tasks.map(tasks => {
        if (tasks.taskId === taskId) {
          return {
            ...tasks,
            taskCompleted: !tasks.taskCompleted
          }
        } else {
          return tasks;
        }
      })
    })
  }

  async taskDelete(taskId) {
    const response = await TasksService.deleteTask(taskId);

    this.setState({
      tasks: this.state.tasks.filter(tasks => tasks.taskId !== taskId)
    });
};


  render() {
    return (
      <div className="container" style={styles}>
        <div><br></br></div>
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <Header />
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <FlowerImage />
          </div>
        </div>
        <TaskInput onSaveTaskHandler={this.addTask} />
        <p>Keep It Simple, Stupid</p>
        <TaskList
          tasks={this.state.tasks}
          onDoneTaskHandler={this.taskDone}
          onDeleteTaskHandler={this.taskDelete}
        />
      </div>
    );
  }
}
const styles = {
  backgroundColor: "#81E4BD"
}
export default App;
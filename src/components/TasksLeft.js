import React from 'react';

class TasksLeft extends React.Component {

    render() {       
        return <h1 styles={styles}>You have {this.props.tasksToDo.length} {this.props.tasksToDo.length !== 1 ? "tasks" : "task"} remaining!</h1>
    }
}
const styles = {
    paddingTop : "10px",
    paddingBottom : "10px",
    textAlign: "center",
}
export default TasksLeft;


// const filteredItems = this.props.tasks.filter(this.props.tasks.completed => this.props.tasks.completed !== true);
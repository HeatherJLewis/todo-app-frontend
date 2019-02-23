import React from 'react';
import Pluralize from 'react-pluralize';

class TasksLeft extends React.Component {

    render() {

    // Work out how many of the tasks are left to complete
        // let tasksRemaining = 0;
        // for(let task of this.props.tasks) {
        //     if(task.taskCompleted === false) {
        //         tasksRemaining++;
        //     }
        // };
    
        return <h1 styles={styles}>You have <Pluralize singular={'task'} zero={"no tasks"} count={this.props.tasksLeft} /> remaining!</h1>
    }
}
const styles = {
    paddingTop : "10px",
    paddingBottom : "10px",
    textAlign: "center",
}
export default TasksLeft;

import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    constructor(props) {
        super(props)

        this.onDeleteTaskHandler = this.onDeleteTaskHandler.bind(this);

    }
    onDeleteTaskHandler(taskDescription) {
        this.props.deleteTask();
    }

    render() {
    
        return (
            <div>
            <TasksLeft tasks={this.props.tasks}/>
                {this.props.tasks.map((task, i) => 
            <Task tasks={this.props.tasks} onDeleteTaskHandler={this.onDeleteTaskHandler} taskDescription={task.description} key={i} />
                )}
           </div>
        );
    }
};

export default TaskList;
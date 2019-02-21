import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    constructor(props) {
        super(props)

        this.onDoneClicked = this.onDoneClicked.bind(this);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }
    onDoneClicked(taskId) {                        
        this.props.onDoneTaskHandler(taskId)
    };

    onDeleteClicked(taskId) {                        
        this.props.onDeleteTaskHandler(taskId)
    };


    render() {
    
        return (
            <div>
            <TasksLeft tasks={this.props.tasks}/>
                {this.props.tasks.map((task, i) => 
            <Task
            taskId={task.taskId}
            tasks={this.props.tasks} 
            task={task}
            key={this.props.taskId}
            onDoneClicked={this.onDoneClicked}
            onDeleteClicked={this.onDeleteClicked}
            />
                )}
           </div>
        );
    }
};

export default TaskList;
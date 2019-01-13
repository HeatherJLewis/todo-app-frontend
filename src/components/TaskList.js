import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    constructor(props) {
        super(props)

        this.onDoneClicked = this.onDoneClicked.bind(this);

    }
    onDoneClicked(taskId) {                        
        this.props.onDoneTaskHandler(taskId);
        // alert(this.props.description)
    };

    render() {
    
        return (
            <div>
            <TasksLeft tasks={this.props.tasks}/>
                {this.props.tasks.map((task, i) => 
            <Task 
            task={task}
            key={this.props.tasks.id}
            onDoneClicked={() => this.onDoneClicked(this.props.tasks.id)} />
                )}
           </div>
        );
    }
};

export default TaskList;
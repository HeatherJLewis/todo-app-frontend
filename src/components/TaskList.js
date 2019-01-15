import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    constructor(props) {
        super(props)

        this.onDoneClicked = this.onDoneClicked.bind(this);
        // this.taskCompleteClicked = this.taskCompleteClicked.bind(this);

    }
    onDoneClicked(taskId) {                        
        this.props.onDoneTaskHandler(taskId)
        // alert(this.props.description)
    };

    // taskCompleteClicked() {
    //     this.props.tasksLeftHandler()
    // };

    render() {
    
        return (
            <div>
            <TasksLeft tasksToDo={this.props.tasksToDo}/>
                {this.props.tasks.map((task, i) => 
            <Task 
            task={task}
            key={this.props.tasks.id}
            // onDoneClicked={() => this.onDoneClicked(this.props.tasks.id)} />
            onDoneClicked={this.onDoneClicked}
            // taskCompleteClicked={taskCompleteClicked}
            />
                )}
           </div>
        );
    }
};

export default TaskList;
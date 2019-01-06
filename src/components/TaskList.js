import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    
    render() {
    
        return (
            <div>
            <TasksLeft tasks={this.props.tasks}/>
    {
        this.props.tasks.map((task, i) => 
       <Task taskDescription={task.description} key={i} />
       )}
           </div>
        );
    }
};

export default TaskList;
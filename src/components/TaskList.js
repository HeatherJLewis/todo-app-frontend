import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    
    render() {
    
        const tasks = [
            "Feed Dog",
            "Feed Cat",
            "Feed Children",
            "Feed the Parakeet"
                ]
    
        return (
            <div>
            <h1>You have {tasks.length} tasks remaining!</h1>
    {
        tasks.map((task, i) => 
       <Task taskDescription={task} key={i} />
       )}
           </div>
        );
    }
};

export default TaskList;
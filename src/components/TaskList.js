import React from 'react';
import Task from './Task';



class TaskList extends React.Component {

    render() {
        const tasks = [
            "Feed Dog",
            "Feed Cat",
            "Feed Children"
                ]
            
        return (
            <div>
    
    {
        tasks.map((task, i) => 
       <Task taskDescription={task} key={i} />
       )}
           </div>
        );
    }

};

export default TaskList;
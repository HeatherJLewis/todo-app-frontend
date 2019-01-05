import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    
    render() {
    
        const tasks = [
            "Feed Dog",
            "Feed Cat",
            "Feed Children",
            "Feed the Llama",
            "Feed Husband",
            "Feed Pygmy Vine Bat"
                ]
    
        return (
            <div>
            <TasksLeft tasks={tasks}/>
    {
        tasks.map((task, i) => 
       <Task taskDescription={task} key={i} />
       )}
           </div>
        );
    }
};

export default TaskList;
import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    
    render() {
    
        const tasks = [
            {
                description : "Feed Dog"
            },
            {
                description : "Feed Cat"
            },
            {
                description : "Feed Llama"
            },
            ]
    
        return (
            <div>
            <TasksLeft tasks={tasks}/>
    {
        tasks.map((task, i) => 
       <Task taskDescription={task.description} key={i} />
       )}
           </div>
        );
    }
};

export default TaskList;
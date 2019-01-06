import React from 'react';
import Task from './Task';
import TasksLeft from './TasksLeft';

class TaskList extends React.Component {
    
    render() {
    
        const tasks = [
            {
                id : 1,
                description : "Feed Dog",
                completed : false
            },
            {
                id : 2,
                description : "Feed Cat",
                completed : false
            },
            {
                id : 3,
                description : "Feed Llama",
                completed : false
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
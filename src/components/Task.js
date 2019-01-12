import React from 'react';
import TaskDeleteButton from './TaskDeleteButton.js'
import TaskDoneButton from './TaskDoneButton.js'
import TasksLeft from './TasksLeft.js';

class Task extends React.Component {

    render() {
        return (
            <div>
                <div className="row" style={styles}>
                    <div className="col-12 col-sm-12 col-md-10 border">
                        {this.props.taskDescription}
                        </div>
                    <div className="col-6 col-sm-6 col-md-1" >
                        <TaskDoneButton taskDescription={this.props.taskDescription}/>
                        </div>
                    <div className="col-6 col-sm-6 col-md-1">
                        <TaskDeleteButton />
                        </div>
                </div>
            </div>
        );
    }

};
const styles = {
    paddingTop : "10px",
    paddingBottom : "10px"
}
export default Task;
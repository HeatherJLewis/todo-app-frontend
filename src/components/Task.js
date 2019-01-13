import React from 'react';
import TaskDoneButton from './TaskDoneButton.js'

class Task extends React.Component {
    constructor(props) {
        super(props)
        
        // this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }
    // onDeleteClicked() {
    //     this.props.onDeleteTaskHandler(this.props.taskDescription);

    // }    
    handleDoneClick() {
        this.props.onDoneClicked();
    }
  
  
  
  
    render() {
        return (
            <div>
                <div className="row" style={styles}>
                    <div className="col-12 col-sm-12 col-md-10 border" style={{textDecoration: this.props.tasks.completed ? "line-through" : ""}}>
                        {this.props.taskDescription}
                        </div>
                    <div className="col-6 col-sm-6 col-md-1" >
                        <input className="btn btn-success" type="submit" value="Done" onClick={this.handleDoneClick} />
                        </div>
                    <div className="col-6 col-sm-6 col-md-1">
                        <input className="btn btn-primary" type="submit" value="Delete" onClick={this.onDeleteClicked} />
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
import React from 'react';
// import TaskDoneButton from './TaskDoneButton.js'

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.handleDoneClick=this.handleDoneClick.bind(this);
        this.handleDeleteClick=this.handleDeleteClick.bind(this);
    }

    handleDoneClick() {
        this.props.onDoneClicked(this.props.task.id);
    }

    handleDeleteClick() {
        this.props.onDeleteClicked(this.props.task.id);
    }

    
    render() {
        return (
            <div>
                <div className="row" style={styles}>
                    <div className="col-12 col-sm-12 col-md-10 border" style={{textDecoration: this.props.task.completed ? "line-through" : ""}}>
                        {this.props.taskId} - {this.props.task.taskDescription}
                        </div>
                    <div className="col-6 col-sm-6 col-md-1" >
                        <input className="btn btn-success" type="submit" value="Done" onClick={this.handleDoneClick}  />
                        </div>
                    <div className="col-6 col-sm-6 col-md-1">
                        <input className="btn btn-primary" type="submit" value="Delete" onClick={this.handleDeleteClick} />
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

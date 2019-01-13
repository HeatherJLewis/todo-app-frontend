
import React from 'react';
import shortid from 'shortid';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskDescription: ""
        };
    
        //Event binding functions
        this.onSubmitClicked = this.onSubmitClicked.bind(this);
        this.onTextFieldUpdated = this.onTextFieldUpdated.bind(this);
    }
    //Function fires when Submit button clicked
    onSubmitClicked() {
        const taskToBeAdded = {
            id: shortid.generate,
            description: this.state.taskDescription,
            completed: false
        }
        this.props.onSaveTaskHandler(taskToBeAdded);
        this.setState({
            taskDescription: ""
        })
    }

    //Function fires when the text box is filled
    onTextFieldUpdated(event) {
        const description = event.target.value;
        {this.setState ({
                taskDescription: description
        });
    }
}


    render() {
        return (
                <div className="form-group">
                  <div className="container">
                      <div className="row" style={styles}>
                          <div className="col-sm-12 col-md-11">
                             <input type="text" value={this.state.taskDescription} className="form-control" placeholder="Add your next task here. Keep it SMART!" onChange={this.onTextFieldUpdated} />
                          </div>
                          <div className="col-sm-1 col-md-1">
                            <button type="button" className="btn btn-primary" onClick={this.onSubmitClicked} >Submit</button>
                          </div>
                      </div>
                      </div>
                </div>
        );
    }

};
const styles = {
    paddingTop : "10px",
    paddingBottom : "10px",
}
export default TaskInput;

//  id="taskToAdd" aria-describedby="taskAdd" className="form-control"
import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitClicked = this.onSubmitClicked.bind(this);
    }
    onSubmitClicked() {
        alert('Hello There');
    }
    render() {
        return (
            <form>
                <div className="form-group">
                  <div className="container">
                      <div className="row" style={styles}>
                          <div className="col-sm-12 col-md-11">
                             <input type="taskAdd" className="form-control" id="taskToAdd" aria-describedby="taskAdd" placeholder="Add your next task here. Keep it SMART!" />
                          </div>
                          <div className="col-sm-1 col-md-1">
                            <button type="submit" className="btn btn-primary" onClick={this.onSubmitClicked} >Submit</button>
                          </div>
                      </div>
                      </div>
                      </div>
                  </form>
        );
    }

};
const styles = {
    paddingTop : "10px",
    paddingBottom : "10px",
}
export default TaskInput;
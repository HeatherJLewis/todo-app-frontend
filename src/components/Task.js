import React from 'react';
// import DoneButton from './DoneButton.js'

class Task extends React.Component {

    constructor(props) {
        super(props);
    this.onDoneClicked = this.onDoneClicked.bind(this);
    }

    onDoneClicked () {
        alert('Well Done!');
    }

    render() {
        return (
            <div>
                <div className="row" style={styles}>
                    <div className="col-12 col-sm-12 col-md-10 border">
                        {this.props.taskDescription}
                    </div>
                    <div className="col-6 col-sm-6 col-md-1">
                    <input className="btn btn-success" type="submit" value="Done" onClick={this.onDoneClicked} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-1">
                        <input className="btn btn-primary" type="submit" value="Delete" onClick={this.onDoneClicked} />
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
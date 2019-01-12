import React from 'react';

class TaskDeleteButton extends React.Component {

    constructor(props) {
        super(props);
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }

    onDeleteClicked () {
        alert('Are you sure?')
    }

    render() {
        return (
            <div>
                <input className="btn btn-primary" type="submit" value="Delete" onClick={this.onDeleteClicked} />
            </div>
        );
    }

};
const styles = {
    paddingTop : "10px",
    paddingBottom : "10px"
}
export default TaskDeleteButton;
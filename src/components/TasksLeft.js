import React from 'react';

class TasksLeft extends React.Component {

    render() {
        return <h1 styles={styles}>You have {this.props.tasks.length} tasks remaining!</h1>
    }
}
const styles = {
    paddingTop : "10px",
    paddingBottom : "10px",
    textAlign: "center",
}
export default TasksLeft;
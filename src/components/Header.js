import React from 'react';

class Header extends React.Component {

    render() {
        return (<h1 style={styles.header}>Heather's To Do App</h1>);
    }

}

const styles = {
    header : {
            color: "#FFAD4F",
            backgroundColor: "#1E3F63",
            fontSize: "100px",
            fontFamily: "Cormorant Garamond",
            textAlign: "center",
            borderRadius: "30%",
            paddingTop : "30px",
            paddingBottom : "30px",
        }
    };

export default Header;

// color: #FFAD4F;
//     background-color: #1E3F63;
//     font-size: 150px;
//     font-family: 'Cormorant Garamond', serif;
//     text-align: center;
//     borderRadius: 30%;
import React from 'react';

class Header extends React.Component {

    render() {
        return (<h1 style={styles.header}>To Do App</h1>);
    }

}

const styles = {
    header : {
            color: "#FFAD4F",
            backgroundColor: "#1E3F63",
            fontSize: "150px",
            fontFamily: "Cormorant Garamond",
            textAlign: "center",
        }
    };

export default Header;

// color: #FFAD4F;
//     background-color: #1E3F63;
//     font-size: 150px;
//     font-family: 'Cormorant Garamond', serif;
//     text-align: center;
//     border-radius: 30%;
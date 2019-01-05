import React from 'react';
import Flower from './images/23823171-illustration-of-a-pink-flower-on-a-white-background.jpg';

class FlowerImage extends React.Component {

    render() {
        return (
            <div>
            <img 
          src={prettyFlower.src}
          alt={prettyFlower.alt}
          width={prettyFlower.width}
          height={prettyFlower.height}
        //   styles={styles}
           />
            </div>
        );
    }

};

const prettyFlower = {
        src: Flower,
    alt: 'PrettyFlower',
    width:"360px",
    height:"360px",
    paddingTop : "10px",
    paddingBottom : "10px",
  };
export default FlowerImage;
import React from "react";
import './Picturebg.css';

class Picturebg extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentImage: "mypic.png",
        };
    }
    toggleImage = () => {
        const {currentImage} = this.state;
        const newImage = currentImage === "mypic.png" ? "marlou.png" : "mypic.png";

        this.setState({currentImage: newImage});
    };
render()
{
    return(
            <div>
                
                <div className="CircleContainer">
                    <div className="box"></div>
                    
                <div className="Circle"  onClick={this.toggleImage}>
                <img src={this.state.currentImage} className="App-logo" alt="logo"/>
                </div>
                </div>

                <div className="container">

                    <div className="image-container">
                    <img className="image" src="atom.png"></img>
                    <img className="imageColored" src="coloredlogo/reactcolored.png"></img>
                    </div>

                    <div className="image-container">
                    <img className="image" src="css-3.png"></img>
                    <img className="imageColored" src="coloredlogo/csscolored.png"></img>
                    </div>

                    <div className="image-container">
                    <img className="image" src="html.png"></img>
                    <img className="imageColored" src="coloredlogo/htmlcolored.png"></img>
                    </div>

                    <div className="image-container">
                    <img className="image" src="java.png"></img>
                    <img className="imageColored" src="coloredlogo/javacolored.png"></img>
                    </div>

                    <div className="image-container">
                    <img className="image" src="java-script.png"></img>
                    <img className="imageColored" src="coloredlogo/java-scriptcolored.png"></img>
                    </div>

                </div>
            </div>
    );

}

}

export default Picturebg;
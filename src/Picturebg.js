import React from "react";
import './Picturebg.css';

class Picturebg extends React.Component
{
render()
{
    return(
            <div>
                
                <div className="CircleContainer">
                    <div className="box"></div>
                    
                <div className="Circle">
                <img src="mypic.png" className="App-logo" alt="logo" />
                </div>
                </div>

                <div className="container">

                    <div class="image-container">
                    <img className="image" src="atom.png"></img>
                    <img className="imageColored" src="coloredlogo/reactcolored.png"></img>
                    </div>

                    <div class="image-container">
                    <img className="image" src="css-3.png"></img>
                    <img className="imageColored" src="coloredlogo/csscolored.png"></img>
                    </div>

                    <div class="image-container">
                    <img className="image" src="html.png"></img>
                    <img className="imageColored" src="coloredlogo/htmlcolored.png"></img>
                    </div>

                    <div class="image-container">
                    <img className="image" src="java.png"></img>
                    <img className="imageColored" src="coloredlogo/javacolored.png"></img>
                    </div>

                    <div class="image-container">
                    <img className="image" src="java-script.png"></img>
                    <img className="imageColored" src="coloredlogo/java-scriptcolored.png"></img>
                    </div>

                </div>
            </div>
    );

}

}

export default Picturebg;
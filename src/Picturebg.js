import React from "react";
import './Picturebg.css';

class Picturebg extends React.Component
{
    componentDidMount()
    {

   const imageColored = document.querySelectorAll('.imageColored');

   imageColored.forEach(image => {
    let touchStartX = 0;
    let isHovered = false;
    
    image.addEventListener('touchstart', (e) => {
        e.preventDefault();
        touchStartX = e.touches[0].clientX;
       image.classList.add('hovered');
    });

    image.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touchX = e.touches[0].clientX;
        if(touchX < touchStartX)
        {
            image.classList.remove('hovered');
        }
        else{
            image.classList.add('hovered');
        }
    });
    image.addEventListener('touchend', () => {
        if (!isHovered) {
            image.classList.remove('hovered');
          }
    });
   });         
}

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
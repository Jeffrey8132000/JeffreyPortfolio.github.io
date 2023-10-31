// Bottomdesign.js

import React from 'react';
import './Bottom.css'; // Import your CSS for styling

class Bottom extends React.Component {
  render() {
    return (
        <div className="bottom">
                <div id='aboutme' class="divaboutme">
                    <div class="about">
                    <p class="aboutme">ABOUT ME</p>

                    <p class="aboutmeparagraph">
                    With a commitment to continuous improvement and a
                    genuine passion for Java programming and CSS, I strive to
                    bring a positive attitude and adaptable mindset to any
                    work environment. I am dedicated to maintaining a
                    humble approach, always eager to learn and grow. I
                    believe in the power of collaboration and am excited
                    about the opportunity to apply my Java and CSS skills to
                    contribute to your dynamic team.
                    </p>

                    <a class="aboutmeparagraph" target='_blank' href="https://drive.google.com/file/d/1JXOlfJmlMRCyPj-XiuVJbEKM-zi4KrP6/view?usp=drive_link" download="Resume.pdf">-Download Resume-</a>

                    </div>

                    <img src="monke.jpg" className="monke"></img>
                </div>

                <div className='educbg'>
                  <p>EDUCATIONAL BACKGROUND</p>
                </div>

                <div className='college'>
                  <div className='ndmu'><img className='ndmupic' src='ndmu logo.png'></img></div>

                  <div className='school'>
                  <h2>NOTRE DAME OF MARBEL UNIVERSITY 2019-2023</h2>
                  <h3>Bachelor of Science in Information Technology</h3>
                  </div>
                </div>

                <div className='highschool'>
                  <div className='school'>
                  <h2>Koronadal National Comprehensive High School(KNCHS) 2013-2019</h2>
                  <h3>Secondary Level</h3>
                  </div>
                  <div className='knchs'><img className='knchspic' src='knchs.png'></img></div>
                </div>

                <div className='elementary'>
                  <div className='kces2'>
                    <div className='kces2cover'><img className='kces2img' src='kces2.jpg'></img></div>
                  </div>

                  <div className='school'>
                  <h2>Koronadal Comprehensive Elementary School II 2006-2012</h2>
                  <h3>Elementary Level</h3>
                  </div>
                </div>

                <div className='Contactinfo'>
                    <div class="facebook">
                      <img src='facebook.png' className='facebookpng' />
                      <a href="https://www.facebook.com/jeffreybonauster" target="_blank">Jeff A. Villasenor</a>
                    </div>
                    <div className='email'>
                      <img src='email.png' className='emailpng'/>
                      <a href="https://accounts.google.com/" target='_blank'>jeffreyvillasenor626@gmail.com</a>
                    </div>
                    <div  id='contactinformation' className='phone'>
                      <img src='iphone.png' className='iphonepng'/>
                      <p className='num'>09635430620</p>
                    </div>
                </div>
                


        </div>
    );
  }
}

export default Bottom;

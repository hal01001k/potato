import React from 'react'
import { IntroStyle } from "./Attributes"
function Intro (){
    return(
        <div className="container">
            <div className="intro" style={IntroStyle}>
            <p>
                Hi, I'm <a href="https://www.linkedin.com/in/hitesh-daksh-6b287537/">Hitesh Daksh</a>, born on 13th of October 1998.
                Bangalore, India.
            </p>
            </div>
        </div>
    )
}
export default Intro;

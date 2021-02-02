import React from 'react'
import { IntroStyle,contain } from "./Attributes"

function Intro (){
    return(
        <div style={contain}>
            <div className="intro" style={IntroStyle}>
            <p>
                Hi! I'm <a href="https://www.linkedin.com/in/hitesh-daksh-6b287537/">Hitesh Daksh</a>,<br/> born on 13th of October 1998.
                <br/>Bangalore, India.
            </p>
            </div>
        </div>
    )
}
export default Intro;

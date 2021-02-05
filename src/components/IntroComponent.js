import React from 'react'
import {IntroStyle,IntroStylesm, contain,containsm} from "./Attributes"


function Intro() {
    return (
        <div>
            <div style={contain}>
                <div className="d-none d-lg-block intro" style={IntroStyle}>
                    <p>
                        Hi! I'm <a href="https://www.linkedin.com/in/hitesh-daksh-6b287537/">Hitesh Daksh</a>,<br/> born
                        on 13th of October 1998.
                        <br/>Bangalore, India.
                    </p>
                </div>
            </div>
            <div class="d-sm-none" style={containsm }>
                <div className="intro" style={IntroStylesm}>
                    <p>
                        Hi! I'm <a href="https://www.linkedin.com/in/hitesh-daksh-6b287537/">Hitesh Daksh</a>,<br/> born
                        on 13th of October 1998.
                        <br/>Bangalore, India.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro;

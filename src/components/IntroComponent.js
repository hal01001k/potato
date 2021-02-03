import React from 'react'
import {IntroStyle,IntroStylesm, contain} from "./Attributes"


function Intro() {
    return (
        <div>
            <div className="d-none d-lg-block" style={contain}>
                <div className="intro" style={IntroStyle}>
                    <p>
                        Hi! I'm <a href="https://www.linkedin.com/in/hitesh-daksh-6b287537/">Hitesh Daksh</a>,<br/> born
                        on 13th of October 1998.
                        <br/>Bangalore, India.
                    </p>
                </div>
            </div>
            <div class="d-sm-none" style={contain}>
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

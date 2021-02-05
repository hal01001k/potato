import React from 'react'
import { SubStyle, SubStylesm,contain,containsm } from './Attributes'
function SubIntro(){
    return(
        <div className="subintro" >
            <div className="d-none d-lg-block" style={contain}>
                <div style={SubStyle}>
                I am a final-year Under Graduate student and,<br/>
                I love Food and Memes.
                My areas of interest include<br/> problem solving, machine learning and Data Science.<br/>
                I enjoy reading and running.
                </div>
            </div>
            <div class="d-sm-none" style={containsm} >
                <div style={SubStylesm}>
                I am a final-year Under Graduate student and <br/>
                I love Food and Memes.
                My areas of interest include<br/>problem solving, machine learning and Data Science.<br/>
                I enjoy reading and running.
                </div>
            </div>
        </div>
    )
}
export default SubIntro;

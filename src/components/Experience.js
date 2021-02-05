import React from "react";
import {contain, exp,expsm,containsm} from "./Attributes";

function Exp() {
    return (
        <div className="ep">
            <div className="d-none d-lg-block" style={exp}>
                <div  style={ contain }>
                Current Position:<br/>
                <p style={{fontSize:34,textAlign:"right"}}>at <a href="https://www.intellectdesign.com/">intellect design arena ltd.</a></p>
                <text style={{fontSize:90,textAlign:"left"}}>intern </text>
                full-time, analyst
                </div>
            </div>
            <div className="d-sm-none" style={expsm }>
                <div style={containsm}>
                Current Position:<br/>
                <p style={{fontSize:8,textAlign:"right"}}>at <a href="https://www.intellectdesign.com/">intellect design arena ltd.</a></p>
                <text style={{fontSize:30,textAlign:"left"}}>intern </text>
                full-time, analyst
                </div>
            </div>
        </div>
    )
}

export default Exp;

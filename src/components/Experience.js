import React from "react";
import {contain, exp,expsm} from "./Attributes";

function Exp() {
    return (
        <div className="ep" style={ contain }>
            <div className="d-none d-lg-block" style={exp}>
                Current Position:<br/>
                <p style={{fontSize:34,textAlign:"right"}}>at <a href="https://www.intellectdesign.com/">intellect design arena ltd.</a></p>
                <text style={{fontSize:90,textAlign:"left"}}>intern </text>
                full-time, analyst
            </div>
            <div className="d-sm-none" style={expsm }> Current Position:<br/>
                <p style={{fontSize:8,textAlign:"right"}}><a href="https://www.intellectdesign.com/">intellect design arena ltd.</a></p>
                <text style={{fontSize:30,textAlign:"left"}}>intern </text>
                full-time, analyst
            </div>
        </div>
    )
}

export default Exp;

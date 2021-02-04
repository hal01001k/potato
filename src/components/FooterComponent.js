import React from 'react'
import {contain, foot} from "./Attributes";

function Footer (){
    return(
        <div className="footer">
            <div style={contain}>
                <div style={foot} className="projectSection"> made with {"<"}3</div>
            </div>
        </div>
    )
}
export default Footer;

import React from "react";
import { contain, skill, skillsm,sk2,sk3 } from "./Attributes";
function Skills(){
    return(
        <div className="sk" style={contain} >
            <div className="d-none d-lg-block" style={skill} >
                Skills: <br/>
                <p>
                    <text >python</text>
                    <text style={sk2}>C</text>
                    <text style={sk3}>react.js</text>
                    <text style={sk2}>Java</text>
                    <text style={sk3}>Javascript</text>
                    <text style={sk2}>mongoDB</text>
                </p>
                <p>
                    <text style={sk3}>node.js</text>
                    <text style={sk2}>full-stack Development</text>
                    <text style={sk3}>pandas</text>
                </p>
                <p>
                    <text style={sk2}>Data Science</text>
                    <text style={sk3}>machine learning</text>
                    <text style={sk2}>numpy</text>
                </p>
            </div>
            <div className="d-sm-none" style={ skillsm } >
                Skills:<br/>
                <p>python, C, react.js, Java, Javascript<br/>
                mongoDB, node.js ,full-stack Development, pandas<br/>
                Data Science, machine learning, numpy</p>
            </div>
        </div>
    )
}
export default Skills;

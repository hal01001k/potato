import React from "react";
import { contain, skill, skillsm,sk2,sk3 } from "./Attributes";
function Skills(){
    return(
        <div className="sk" style={contain} >
            <div className="d-none d-lg-block" style={skill} >
                <text style={{paddingRight:"60px"}}>Skills :</text>  well versed;<text style={sk2}>intermediate;</text><text style={sk3}>trainee;</text><br/>
                <hr/>
                    <p style={{textAlign:"right"}}>
                        <text >python</text>
                        <text style={sk2}>node.js</text>
                        <text style={sk3}>machine learning</text>
                        <text style={sk2}>mongoDB</text>

                </p>
                <p style={{textAlign:"right"}}>
                    <text style={sk2}>Java</text>
                    <text style={{paddingLeft:"60px"}}>react.js</text>
                    <text style={sk2}>full-stack Development</text>
                    <text style={sk3}>pandas</text>
                </p>
                <p style={{textAlign:"right"}}>
                    <text style={{paddingRight:"45px"}}>C</text>
                    <text style={sk3}>Data Science</text>
                    <text style={sk2}>Javascript</text>
                    <text style={sk3}>numpy</text>
                </p>
            </div>
            <div className="d-sm-none" style={ skillsm } >
                Skills:<br/>
                <p style={{textAlign:"right"}}>python, C, react.js, Java, Javascript<br/>
                mongoDB, node.js ,full-stack Development, pandas<br/>
                Data Science, machine learning, numpy</p>
            </div>
        </div>
    )
}
export default Skills;

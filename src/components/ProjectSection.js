import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import {contain, project} from './Attributes'
function Project() {
    return (
        <div style={contain}>
            <div className="projectSection" style={project}>
                my projects:<br/>
                <p style={{ textAlign:"right" }}>
                    - <a href="https://mushrooms-ml1.herokuapp.com/">Ml App</a>
                </p>
                <p style={{ textAlign:"right" }}>
                    - <a href="https://hal01001k.github.io/cornerstone/">website</a>
                </p>
            </div>
        </div>
    )
}

export default Project;

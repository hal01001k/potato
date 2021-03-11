import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import {contain, project,containsm,projectsm} from './Attributes'
function Project() {
    return (
        <div className="projectSection">
            <div className="d-none d-lg-block" style={contain}>
                <div style={project}>
                    my projects:<br/>
                    <p style={{ textAlign:"right" }}>
                        - <a href="https://mushrooms-ml1.herokuapp.com/">Ml App</a>
                    </p>
                    <p style={{ textAlign:"right" }}>
                        - <a href="https://hal01001k.github.io/link">website</a>
                    </p>
                </div>
            </div>
            <div class="d-sm-none" style={containsm}>
                <div style={projectsm}>
                    my projects:<br/>
                    <p style={{ textAlign:"right" }}>
                        - <a href="https://mushrooms-ml1.herokuapp.com/">Ml App</a>
                    </p>
                    <p style={{ textAlign:"right" }}>
                        - <a href="https://hal01001k.github.io/link/">website</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project;

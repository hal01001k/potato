import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {contain, Education} from './Attributes'
import done from '../images/Done.jpg'
function EduSection() {
    return (
        <div className="cl" style={contain} >
            <div className="projectSection" style={Education}>
                Education:<br/>
            </div>
            <div className="edu">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(250, 250, 250)', color: '#000000'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(250, 250, 250)'}}
                        date="2017 - 2021"
                        icon = {<img src={done} className = "img_logo" style={{
                            border: "1px solid #d1c8c8"
                        }} alt={"dooone"}/>}
                    >
                        <h4 className="vertical-timeline-element-title">Indian Institute of Information Technology</h4>
                        <h5 className="vertical-timeline-element-subtitle">Tiruchirappalli, TN</h5>
                        <p>
                            Computer Science and Engineering, Under Graduate
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(250, 250, 250)', color: '#000000'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(250, 250, 250)'}}
                        date="2014 - 2016"
                        icon = {<img src={done} className = "img_logo" style={{
                                border: "1px solid #d1c8c8"
                               }} alt={"dooone"}/>}
                    >
                        <h4 className="vertical-timeline-element-title">Sri Chaitnaya</h4>
                        <h5 className="vertical-timeline-element-subtitle">Bangalore, KA</h5>
                        <p>
                            High School Diploma, CBSE Board 86%
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(250, 250, 250)', color: '#000000'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(250, 250, 250)'}}
                        date="2014"
                        icon = {<img src={done} className = "img_logo" style={{
                            border: "1px solid #d1c8c8"
                        }} alt={"dooone"}/>}
                    >
                        <h4 className="vertical-timeline-element-title">Montfort School</h4>
                        <h5 className="vertical-timeline-element-subtitle">Bangalore, KA</h5>
                        <p>
                            General Schooling, 9 CGPA
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default EduSection;

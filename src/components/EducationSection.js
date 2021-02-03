import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {contain, Education} from './Attributes'

function EduSection() {
    return (
        <div className="cl" style={contain} >
            <div className="projectSection" style={Education}>
                Education:<br/>
            </div>
            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(250, 250, 250)', color: '#000000'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(250, 250, 250)'}}
                        date="2017 - 2021"
                        iconStyle={{background: 'rgb(204,204,255)'}}
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
                        iconStyle={{background: 'rgb(204,204,255)'}}
                        //iconStyle={{ background:"transparent"}}
                        //icon={<Done/>}
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
                        iconStyle={{background: 'rgb(204,204,255)'}}
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

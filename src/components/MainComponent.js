import React,{Component} from 'react'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Intro from "./IntroComponent";
import SubIntro from "./SubIntro";
import Project from "./ProjectSection";
import EduSection from "./EducationSection";
import Skills  from "./Skills"
class Main extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Intro/>
                <SubIntro/>
                <Project/>
                <Skills/>
                <EduSection/>
                <Footer/>
            </div>
        );
    }
}
export default Main;

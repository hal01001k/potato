import React,{Component} from 'react'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Intro from "./IntroComponent";
import SubIntro from "./SubIntro";
import Project from "./ProjectSection";
class Main extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Intro/>
                <SubIntro/>
                <Project/>
                <Footer/>
            </div>
        );
    }
}
export default Main;

import React,{Component} from 'react'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Intro from "./IntroComponent";
import SubIntro from "./SubIntro";
class Main extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Intro/>
                <SubIntro/>
                <Footer/>
            </div>
        );
    }
}
export default Main;

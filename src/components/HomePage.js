import React from "react";
import Jumbotron from './Jumbotron';
import AboutSection from './AboutSection';
import Portfolio from './Portfolio'
import Skills from './Skills';
import Footer from './Footer';

export default class HomePage extends React.Component{

render() {
    return (
        <div>
        <Jumbotron />        
        <AboutSection />    
        <Portfolio />
        <Skills />
        <Footer />
        </div>
    )
  }
}
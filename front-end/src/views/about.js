import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
import AboutTab from '../components/about/about-tab';
import ABTwwd from '../components/about/about-wwd';
 
const headerinfo={
  title:'About the GPI',
  desc:''
}

 class Errorpage extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="About Us" />
        <AboutTab activeTab="wwd" /> 
        <ABTwwd />        
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Errorpage;

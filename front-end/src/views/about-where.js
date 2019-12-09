import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
import AboutTab from '../components/about/about-tab';
import ABTwww from '../components/about/about-www';
 
const headerinfo={
  title:'Where We Work',
  desc:''
}

 class Errorpage extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="About Us" />
        <AboutTab activeTab="www" /> 
        <ABTwww />        
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Errorpage;

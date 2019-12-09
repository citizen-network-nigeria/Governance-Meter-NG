import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
import AboutTab from '../components/about/about-tab';
import ABTwwa from '../components/about/about-wwa';
 
const headerinfo={
  title:'Who We Are',
  desc:''
}

 class Errorpage extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="About Us" />
        <AboutTab activeTab="wwa" /> 
        <ABTwwa />        
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Errorpage;

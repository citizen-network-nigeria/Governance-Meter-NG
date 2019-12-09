import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
import AboutTab from '../components/about/about-tab';
import ABTgpi from '../components/about/about-gpi';
 
const headerinfo={
  title:'GPI and the SDGs',
  desc:''
}

 class Errorpage extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="About Us" />
        <AboutTab activeTab="gpi" /> 
        <ABTgpi />        
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Errorpage;

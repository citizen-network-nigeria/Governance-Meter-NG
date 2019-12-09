import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
import AboutTab from '../components/about/about-tab';
import ABTsap from '../components/about/about-sap';
 
const headerinfo={
  title:'Sponsors and Partners',
  desc:''
}

 class Errorpage extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="About Us" />
        <AboutTab activeTab="sap" /> 
        <ABTsap />        
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Errorpage;

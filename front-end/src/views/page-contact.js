import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
 import Contact from '../components/pages/contact';
 
const headerinfo={
  title:'Contact Us',
  desc:''
}

 class PageResources extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="Get in Touch With Us" />
        <Contact />        
        <Footer />
      </React.Fragment>
     )
   }
 }


export default PageResources;

import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
import AboutTab from '../components/about/about-tab';
import Resource from '../components/pages/get-involved';
 
const headerinfo={
  title:'Get Involved',
  desc:''
}

 class PageGet extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="Get Involved" />
         <Resource />        
        <Footer />
      </React.Fragment>
     )
   }
 }

export default PageGet;

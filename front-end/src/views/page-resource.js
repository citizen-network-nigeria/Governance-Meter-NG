import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/about/bodyheader';
 import Resource from '../components/pages/resources';
 
const headerinfo={
  title:'GPI Resources',
  desc:''
}

 class PageResources extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="Resources" />
         <Resource />        
        <Footer />
      </React.Fragment>
     )
   }
 }


export default PageResources;

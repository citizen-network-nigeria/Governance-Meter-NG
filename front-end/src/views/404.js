import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/GPI/bodyheader';
import Hometab from '../components/GPI/hometab';
import HomeStory from '../components/GPI/homeIndicatorStories';
import HomeUpdates from '../components/GPI/homeUpdates';
import HomeMap from '../components/GPI/homeMap';

const headerinfo={
  title:'Page Not Found',
  desc:''
}

 class Errorpage extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="404: Page Not Found" />         
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Errorpage;

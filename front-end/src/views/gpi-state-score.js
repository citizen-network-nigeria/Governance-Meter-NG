import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/GPI/bodyheader';
import Hometab from '../components/GPI/hometab';
import ResultByState from '../components/GPI/ResultByState';
import ColorCodeBox from '../components/GPI/gpiColorCodeBox';
 
 const headerinfo={
  title:'GPI State Score Board',
  desc:'This is the additional explanation that comes with this. It is generic for all states'
}

 class GPIResultBoard extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="2020 GPI State Result Board" />
        <Hometab activeTab='state-board' /> 
        <ResultByState />
        <ColorCodeBox />
        <Footer />
      </React.Fragment>
     )
   }
 }

export default GPIResultBoard;

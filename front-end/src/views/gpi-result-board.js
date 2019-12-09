import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/GPI/bodyheader';
import Hometab from '../components/GPI/hometab';
import GeneralResult from '../components/GPI/GeneralResult';
import ColorCodeBox from '../components/GPI/gpiColorCodeBox';
 
 const headerinfo={
  title:'GPI Score Board',
  desc:'2020 Annual Governance Performance Index Scoreboard for all states in Nigeria and the FCT.'
}

 class GPIResultBoard extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="2020 GPI Result Board" />
        <Hometab activeTab='result-board' /> 
        <GeneralResult />
        <ColorCodeBox />
        <Footer />
      </React.Fragment>
     )
   }
 }

export default GPIResultBoard;

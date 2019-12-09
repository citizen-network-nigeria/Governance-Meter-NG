import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/GPI/bodyheader';
import Hometab from '../components/GPI/hometab';
import IndicatorStories from '../components/GPI/indicator-stories';
import ColorCodeBox from '../components/GPI/compareChartCode';
 
 const headerinfo={
  title:'GPI Indicator Stories',
  desc:'Follow peoples submitted stories on different indicators used for the GPI across different states.'
}

 class GPIIndicatorStories extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="GPI Indicator Stories" />
        <Hometab activeTab='indicator-stories' /> 
        <IndicatorStories />
        <Footer />
      </React.Fragment>
     )
   }
 }

export default GPIIndicatorStories;

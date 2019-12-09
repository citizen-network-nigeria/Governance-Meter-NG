import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/GPI/bodyheader';
import Hometab from '../components/GPI/hometab';
import CompareState from '../components/GPI/compare-states';
import ColorCodeBox from '../components/GPI/compareChartCode';
 
 const headerinfo={
  title:'GPI Compare State Performances',
  desc:'Get more insights from the GPI by viewing a state GPI relative to other states. You can compare with upto three states.'
}

 class GPICompareState extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
        <BodyHeader title="Compare States GPI Performances" />
        <Hometab activeTab='compare-states' /> 
        <CompareState />
        <ColorCodeBox />
        <Footer />
      </React.Fragment>
     )
   }
 }

export default GPICompareState;

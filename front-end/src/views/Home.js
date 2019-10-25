import React from 'react';
import Headerhome from '../components/header/headerHome';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/body/bodyheader';
import Hometab from '../components/body/hometab';
import HomeStory from '../components/body/homeIndicatorStories';
import HomeUpdates from '../components/body/homeUpdates';
import HomeMap from '../components/body/homeMap';


 class Home extends React.Component{ 
   render(){
     return(
      <React.Fragment>
        <Headerhome /> 
        <BodyHeader title="2020 Governance Performance Index" />
        <Hometab /> 
        <HomeMap />
        <HomeStory />
        <HomeUpdates />
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Home;

import React from 'react';
import Headerhome from '../components/header/headerHome';
import Footer from '../components/footer/footer';
import BodyHeader from '../components/GPI/bodyheader';
import Hometab from '../components/GPI/hometab';
import HomeStory from '../components/GPI/homeIndicatorStories';
import HomeUpdates from '../components/GPI/homeUpdates';
import HomeMap from '../components/GPI/homeMap';


 class Home extends React.Component{ 
   render(){
     return(
      <React.Fragment>
        <Headerhome /> 
        <BodyHeader title="2020 Governance Performance Index" />
        <Hometab activeTab='map' /> 
        <HomeMap />
        <HomeStory />
        <HomeUpdates />
        <Footer />
      </React.Fragment>
     )
   }
 }

export default Home;

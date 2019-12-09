import React from 'react';
import Headerpage from '../components/header/headerPages';
import Footer from '../components/footer/footer';
 import Hometab from '../components/GPI/hometab';
import DownloadBox from '../components/GPI/download';
  
 const headerinfo={
  title:'Download the GPI',
  desc:''
}

 class GPIResultBoard extends React.Component{ 
   render(){  
     return(
      <React.Fragment>
        <Headerpage info={headerinfo} /> 
         <Hometab activeTab='download' /> 
         <DownloadBox />
         <Footer />
      </React.Fragment>
     )
   }
 }

export default GPIResultBoard;

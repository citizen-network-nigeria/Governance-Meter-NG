import React from 'react';
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';

class headerhome extends React.Component{
    render(){
        return(
            <div className="no-padding no-margin">  
                <HeaderTop />
                <HeaderBottom />
            </div>
        )
    }
}
 export default headerhome;
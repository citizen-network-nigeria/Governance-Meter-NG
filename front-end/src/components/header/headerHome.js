import React from 'react';
import HeaderTop from './headerTop';
import HeaderBottomhome from './headerBottomHome';

class headerhome extends React.Component{
    render(){
        return(
            <div className="no-padding no-margin">  
                <HeaderTop />
                <HeaderBottomhome />
            </div>
        )
    }
}
 export default headerhome;
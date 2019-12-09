import React from 'react';
import HeaderTop from './headerTop';
import HeaderBottomPages from './headerBottomPages';

class headerPage extends React.Component{
    render(){
        return(
            <div className="no-padding no-margin">  
                <HeaderTop />
                <HeaderBottomPages info={this.props.info} />
            </div>
        )
    }
}
 export default headerPage;
import React, {Component} from 'react';
 
class BodyHeader extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="side-margin">
                     <div className="body-title-bag">
                         <h3 className="green-pry-color">{this.props.title} </h3>
                     </div>
                 </div>
             </div>
        )
    }
}

export default BodyHeader;
import React, {Component} from 'react';
 
class BodyHeader extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="">
                     <div className="body-title-bag">
                         <h3 className="blue-pry-color">{this.props.title} </h3>
                     </div>
                 </div>
             </div>
        )
    }
}

export default BodyHeader;
import React, {Component} from 'react';
 
class ButtonPry extends React.Component{
    render(){
        return(
            <button  
            className={this.props.data.class} 
            id={this.props.data.id} 
            title={this.props.data.text}
            > 
            {this.props.data.text}
            </button>
        )
    }
}

export default ButtonPry;
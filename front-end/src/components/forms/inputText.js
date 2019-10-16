import React, {Component} from 'react';
 
class InputText extends React.Component{
    render(){
        return(
            <input type= {this.props.type} 
            className={this.props.data.class} 
            id={this.props.data.id} 
            name={this.props.data.name}
            placeholder={this.props.data.placeholder} />
        )
    }
}

export default InputText;
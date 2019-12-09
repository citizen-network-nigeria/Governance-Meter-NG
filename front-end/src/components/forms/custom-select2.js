import React from 'react';
 
class CustomSelect extends React.Component{
      constructor(props){
        super(props);
        this.state={
          csToggle:false,
          selectBox:"selected-items selected-hide",
          currentOption:this.props.data.options[0]
        }

       }
    
    getfirstCS =()=>{
       this.setState(
        state =>({
           currentOption: this.props.data.options[0]
        })
    ); 
    }
      

    toggleCS=()=>{ 
      if(this.state.csToggle){  
        this.setState(
            state =>({
              selectBox:"selected-items selected-hide",
              csToggle: !state.csToggle,
            })
        );  
          }
          else{ 
            this.setState(
              state =>({
                selectBox:"selected-items",
                csToggle: !state.csToggle,
              })
          );
          }
    }

    pushCSValue=(val)=>{
       this.props.data.callback(val);
       this.setState(
        state =>({
          selectBox:"selected-items selected-hide",
          csToggle: !state.csToggle,
          currentOption:val
        })
    );
    }

 
    render(){  
        return(  <div>  
                    <div onClick={this.toggleCS} className="select-selected" 
                        style={{color:this.props.data.optionCol, fontSize:this.props.data.fontSize,textTransform:"none"}}>
                          {this.state.currentOption }
                     </div>
                     <div className={this.state.selectBox}>
                         {this.props.data.options.map((opt)=>(
                             <div onClick={()=>this.pushCSValue(opt)} 
                            style={{color:"#636b6f", fontWeight:"bold", fontSize:this.props.data.fontSize}}> {opt} 
                              </div>
                            ))}
                      </div>
                 </div>
                 
        ) 
    }
}

export default CustomSelect;
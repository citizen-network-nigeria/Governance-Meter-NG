import React from 'react';
  
class Hometab extends React.Component{

        constructor(props){
            super(props)
            this.state={
                url:this.props.url,
                source:this.props.source,
            }
        }
         

    render(){ if(this.state.source==='youtube'){
        return(
            <div className="abt-video-box">
                <iframe title="GPI Impact" controls='1' style={{width:'100%',outline:'none', minHeight:"15em"}} src={this.state.url} ></iframe>
            </div> 
        )
    }}
}

export default Hometab;
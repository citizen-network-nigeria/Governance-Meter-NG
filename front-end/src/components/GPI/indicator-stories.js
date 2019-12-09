import React from 'react';
import CustomSelect from '../forms/custom-select';
import CustomSelect2 from '../forms/custom-select2';
import StoryBox from './indicator-stories-box';
import Indicators from '../../Data/indicator-list';

import {unmountComponentAtNode} from 'react-dom';
 


class IndicatorStories extends React.Component{
    constructor(props){
      super(props);

      this.state={
        state:'General',
        dataset:'Random',
        indicator:'Random',
        dataType:'Text Only',
        indicators:["Add Datapoint"]
      }
      this.ref=React.createRef();
      this.data1={
        wrapperClass:'c-s-box1',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatestate,
        options: ['Add State', 'Abia', 'Adamawa', 'Bauchi', 'Benue', 'Calaber', 'Delta', 'Edo', 'Lagos']
      }
      this.data2={
        wrapperClass:'c-s-box2',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatedatatype,
        options: ['Text Only', 'Text Only', 'Text and Photos', 'Text and Videos',  'Text and Document']
      }
      
      this.data5={
        wrapperClass:'c-s-box5',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatedataset,
        options: ['Add Dataset', 'Human Development', 'Welfare', 'Education', 'Health', 'Economic Opportunity', 'Public Management', 'Business Environment', 'Infrastructure', 'Rural Environment', 'Security And Rule of Law', 'Rule Of Law', 'Transparency And Accountability','Personal Safety', 'State Security', 'Inclusion And Human Rights', 'Participation', 'Rights', 'Gender']
      }
        
        
    }

    
    updatestate=(val)=>{
      this.setState(
        state =>({  state: val  })
      ); }
      updatedatatype =(val)=>{
        this.setState(
          state =>({  dataType: val  })
        ); }
       
    updateindicator =(val)=>{  
          this.setState(
            state =>({  indicator: val  })
          ); }
   updatedataset =(val)=>{
  var   indArray=this.setIndicators(val);
        this.setState(
          state =>({  dataset: val, indicators:indArray }),
         ); }
    
    getIndicators =()=>{  
      return this.state.indicators;
    }
    setIndicators =(val)=>{
      let indArray = [];  
      if(val==="Human Development" || val==="Economic Opportunity" || val=="Security And Rule of Law" || val=="Inclusion And Human Rights" ){
        if(val==="Human Development"){ var dcode="HD";}
        if(val==="Economic Opportunity"){ var dcode="EO";}
        if(val==="Security And Rule of Law"){ var dcode="SRL";}
        if(val==="Inclusion And Human Rights"){ var dcode="IHR";} 
            Indicators[dcode].map((indchild)=>{  
              let indchildd=indchild.replace(/ /g,'');  
              Indicators[indchildd].map((ii)=>{
                indArray.push(ii);
              })
              
            })
      }
      else{ let vall=val.replace(/ /g,'');    
          Indicators[vall].map((ii)=>{
            indArray.push(ii); 
          })
      }
      return indArray;
    }
     
    indicatorData =()=>{ 
       let data4={
        wrapperClass:'c-s-box4',
        instanceID:'comp-1',
        fontSize:'0.7em',
        optionCol:'#636b6f',
        callback:this.updateindicator,
        options: this.state.indicators
      }
       return data4;
    }

      childData =()=>{
        let data ={
          state: this.state.state,
          dataset: this.state.dataset,
          indicator: this.state.indicator,
          dataType: this.state.dataType
        }
        return data;
      }

    render(){   
        return( 
          <React.Fragment> 
             <div className="no-padding no-margin">  
                 <div className="main-padding no-top-margin" >  
                     <div className="Result-intro" >
                         <p > Follow real stories and media submitted by real people for the GPI </p>
                     </div>

                     <div className="comp-flex-box">
                          <div>
                              <div className="comp-text-hd"> Select State</div>
                              <div className="comp-add-state "> 
                                <div className="customm-select  c-s-box1">
                                  <CustomSelect data={this.data1} /> 
                                </div>
                              </div>
                          </div>
                          <div>
                                  <div className="comp-text-hd">Select Dataset</div>
                                  <div className="comp-add-state">
                                    <div className="customm-select  c-s-box5">
                                      <CustomSelect data={this.data5} /> 
                                    </div>
                                  </div>
                          </div>
                          <div>
                                <div className="comp-text-hd">Select Datapoint</div>
                                <div className="comp-add-state">
                                  <div ref={this.ref} className="customm-select  c-s-box4" id="cleanthis">
                                     
                                    <CustomSelect2 data={this.indicatorData()} /> 
                                  </div>
                                </div>
                          </div>
                          <div>
                              <div className="comp-text-hd"> Story With</div>
                              <div className="comp-add-state">
                                <div  className="customm-select  c-s-box2">
                                  <CustomSelect data={this.data2} /> 
                                </div>
                              </div>
                          </div>
                            
                     </div>
                         <hr/>
                 <br />

                     
                 </div>
             </div>
            <StoryBox data = {this.childData()} /> 
            </React.Fragment>
             
        )
    }
}

export default IndicatorStories;





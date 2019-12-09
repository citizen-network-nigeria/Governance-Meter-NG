import React from 'react';
 import CustomSelect from '../forms/custom-select';
import CompareChartBox from './compareChartBox';



class HomeMap extends React.Component{
    constructor(props){
      super(props);

      this.data1={
        wrapperClass:'c-s-box1',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatestate1,
        options: ['Add State', 'Abia', 'Adamawa', 'Bauchi', 'Benue', 'Calaber', 'Delta', 'Edo', 'Lagos']
      }
      this.data2={
        wrapperClass:'c-s-box2',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatestate2,
        options: ['Add State', 'Abia', 'Adamawa', 'Bauchi', 'Benue', 'Calaber', 'Delta', 'Edo', 'Lagos']
      }
      this.data3={
        wrapperClass:'c-s-box3',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatestate3,
        options: ['Add State', 'Abia', 'Adamawa', 'Bauchi', 'Benue', 'Calaber', 'Delta', 'Edo', 'Lagos']
      }
      this.data4={
        wrapperClass:'c-s-box4',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatestate4,
        options: ['Add State', 'Abia', 'Adamawa', 'Bauchi', 'Benue', 'Calaber', 'Delta', 'Edo', 'Lagos']
      }
      this.data5={
        wrapperClass:'c-s-box5',
        instanceID:'comp-1',
        optionCol:'#636b6f',
        callback:this.updatestate5,
        options: ['Add Dataset','Governance Performance Index', 'Human Development', 'Welfare', 'Education', 'Health', 'Economic Opportunity', 'Public Managment', 'Business Environment', 'Infrastructure', 'Rural Environment', 'Security & Rule of Law', 'Rule of Law', 'Transparency and Accountability','Persoanl Safety', 'State Security', 'Inclusion & Human Rights', 'Participation', 'Rights', 'Gender']
      }
        
        this.state={
          stateSelect1:'',
          stateSelect2:'',
          stateSelect3:'',
          stateSelect4:'',
          dataset:''
        }
    }

    
    updatestate1 =(val)=>{
      this.setState(
        state =>({  stateSelect1: val  })
      ); }
      updatestate2 =(val)=>{
        this.setState(
          state =>({  stateSelect2: val  })
        ); }
      updatestate3 =(val)=>{
        this.setState(
          state =>({  stateSelect2: val  })
        ); }
        updatestate4 =(val)=>{
          this.setState(
            state =>({  stateSelect2: val  })
          ); }
        updatestate5 =(val)=>{
        this.setState(
          state =>({  dataset: val  })
        ); }



    render(){  
        return(
             <div className="no-padding no-margin">
                 <div className="main-padding no-top-margin" >
                     <div className="Result-intro" >
                         <p > Compare the GPI Performance of states against up to three states. </p>
                     </div>

                     <div className="comp-flex-box">
                          <div className="comp-text-hd">1. Select State</div>
                          <div className="comp-add-state "> 
                            <div className="customm-select  c-s-box1">
                              <CustomSelect data={this.data1} /> 
                            </div>
                          </div>
                          <div className="comp-add-state">
                            <div className="customm-select  c-s-box2">
                              <CustomSelect data={this.data2} /> 
                            </div>
                          </div>
                          <div className="comp-add-state">
                            <div className="customm-select  c-s-box3">
                              <CustomSelect data={this.data3} /> 
                            </div>
                          </div>
                          <div className="comp-add-state">
                            <div className="customm-select  c-s-box4">
                              <CustomSelect data={this.data4} /> 
                            </div>
                          </div>
                           
                          <div className="comp-text-hd">2. Select Dataset</div>
                          <div className="comp-add-dataset">
                            <div className="customm-select  c-s-box5">
                              <CustomSelect data={this.data5} /> 
                            </div>
                          </div>
                     </div>
 
                        <hr/>
                <div className="comp-main-box">
                   <CompareChartBox />
                </div> <br />

                     
                 </div>
             </div>
              
        )
    }
}

export default HomeMap;





import React from 'react';
import { Link} from 'react-router-dom';
 
class Hometab extends React.Component{

        constructor(props){
            super(props)
            this.state={
                wwdclass:"subhead-tab-b tab-align",
                wwwclass:'subhead-tab-b tab-align',
                wwaclass:'subhead-tab-b tab-align',
                gpiclass:'subhead-tab-b tab-align',
                sapclass:'subhead-tab-b tab-align-last-odd ',
                downloadclass:'subhead-tab-b '
            }
        }
        componentWillMount(){
            let active = this.props.activeTab;
            if(active==="wwd"){
                this.setState(
                    state =>({
                        wwdclass:"subhead-tab-b tab-align subhead-tab-active-b"
                    })
                );
            }

            if(active==="www"){
                this.setState(
                    state =>({
                        wwwclass:"subhead-tab-b tab-align subhead-tab-active-b"
                    })
                );
            }

            if(active==="wwa"){
                this.setState(
                    state =>({
                        wwaclass:"subhead-tab-b tab-align subhead-tab-active-b"
                    })
                );
            }

            if(active==="gpi"){
                this.setState(
                    state =>({
                        gpiclass:"subhead-tab-b tab-align subhead-tab-active-b"
                    })
                );
            }

            if(active==="sap"){
                this.setState(
                    state =>({
                        sapclass:"subhead-tab-b tab-align-last-odd subhead-tab-active-b"
                    })
                );
            }
 


        }

    render(){ 
        return(
             <div style={{backgroundColor:'#e9ecef'}} className="no-padding no-margin">
                 <div className="">
                      
                     <div className="body-tab main-padding">
                     <Link to='/about-us/what-we-do' className={this.state.wwdclass}>What We Do</Link>
                     <Link to='/about-us/where-we-work' className={this.state.wwwclass}>Where We Work</Link>
                     <Link to='/about-us/who-we-are' className={this.state.wwaclass}>Who We Are</Link>
                     <Link to='/about-us/gpi-and-sdgs' className={this.state.gpiclass}>GPI & SDGs</Link>
                     <Link to='/about-us/sponsors-and-partners' className={this.state.sapclass}>Sponsors & Partners</Link>
                      </div>
                      
                 </div>
             </div>
        )
    }
}

export default Hometab;
import React from 'react';
import { Link} from 'react-router-dom';
 
class Hometab extends React.Component{

        constructor(props){
            super(props)
            this.state={
                mapclass:"subhead-tab tab-align",
                boardclass:'subhead-tab tab-align',
                compareclass:'subhead-tab tab-align',
                storiesclass:'subhead-tab tab-align',
                scoreclass:'subhead-tab tab-align',
                downloadclass:'subhead-tab tab-align-last-odd'
            }
        }
        componentDidMount(){
            let active = this.props.activeTab;
            if(active==="map"){
                this.setState(
                    state =>({
                        mapclass:"subhead-tab tab-align subhead-tab-active"
                    })
                );
            }

            if(active==="result-board"){
                this.setState(
                    state =>({
                        boardclass:"subhead-tab tab-align subhead-tab-active"
                    })
                );
            }

            if(active==="state-board"){
                this.setState(
                    state =>({
                        scoreclass:"subhead-tab tab-align subhead-tab-active"
                    })
                );
            }

            if(active==="compare-states"){
                this.setState(
                    state =>({
                        compareclass:"subhead-tab tab-align subhead-tab-active"
                    })
                );
            }

            if(active==="indicator-stories"){
                this.setState(
                    state =>({
                        storiesclass:"subhead-tab tab-align subhead-tab-active"
                    })
                );
            }

            if(active==="download"){
                this.setState(
                    state =>({
                        downloadclass:"subhead-tab tab-align-last-odd subhead-tab-active"
                    })
                );
            }






        }

    render(){ 
        return(
             <div style={{backgroundColor:'#e9ecef'}} className="no-padding no-margin">
                 <div className="">
                      
                     <div className="body-tab main-padding">
                     <Link to='/' className={this.state.mapclass}>Map Visualization</Link>
                     <Link to='/GPI/result-board' className={this.state.boardclass}>Result Board</Link>
                     <Link to='/GPI/state-board' className={this.state.scoreclass}>State Scores</Link>
                     <Link to='/GPI/compare-states' className={this.state.compareclass}>Compare States</Link>
                     <Link to='/GPI/indicator-stories' className={this.state.storiesclass}>Indicator Stories</Link>
                     <Link to='/download' className={this.state.downloadclass}>Download</Link>
                     </div>
                      
                 </div>
             </div>
        )
    }
}

export default Hometab;
import React from 'react';
import {withRouter} from 'react-router';
import  {useHistory} from 'react-router-dom';
import {browserHistory} from 'react-router'



class HomeMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stateSelect:'kogi'
        }
    }
    
  componentDidMount(sets){    
    //let history=useHistory();
    let storeThis=this;
    let pp= this.props;
    function updateActiveState (val){  
        window.history.pushState(null, null,'/GPI/state-board?state='+val )
      //history.push('/GPI/state-board?state='+val) ;

      //browserHistory.push('/GPI/state-board?state='+val);
      //this.props.history.push('/GPI/state-board?state='+val);
     // window.location='/GPI/state-board?state='+val;
     /* storeThis.setState(
        state =>({
          stateSelect: val
      })
      ); */
    }

    var x, i, j, selElmnt, a, b, c;  
     x = document.getElementsByClassName("customm-select");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
       a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
       b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
         
        c = document.createElement("DIV"); 
        c.innerHTML = selElmnt.options[j].innerHTML; 
        c.addEventListener("click", function(e) {
             
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            //sets(h.innerHTML);
            updateActiveState(this.innerHTML);
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
         
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    
    function closeAllSelect(elmnt) {
       
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    document.addEventListener("click", closeAllSelect);
  }

    render(){  
        return(
             <div className="no-padding no-margin white-bg">
                 <div className="main-padding no-top-margin" >
                     <div className="Result-intro" > <br/>
                         <p > The <strong>GPI State Score Board</strong> highlights states performance on the GPI and on each specific indicators. This provides a more detailed information about each state's final outcome on the GPI.  </p>
                     </div>

                     <div className="row">
                         <div className="col-md-3">
                             <div>
                                 <div className="customm-select" >
                                    <select>
                                      <option value="0">Abia</option>
                                      <option value="0">Abia</option>
                                      <option value="1">Adamawa</option>
                                      <option value="2">Bauchi</option>
                                      <option value="3">Cross River</option>
                                      <option value="4">Benue</option>
                                      <option value="5">Edo</option>
                                      <option value="6">Kogi</option>
                                      <option value="7">Kwara</option>
                                      <option value="8">Oyo</option>
                                      <option value="9">Osun</option>
                                      <option value="10">Rivers</option>
                                      <option value="11">Lagos</option>
                                      <option value="12">Ondo</option>
                                    </select>
                                  </div>

                             </div>
                         </div>
                         <div className="col-md-3">
                            <div className="gpi-title-col"> <span className="g-title">Population:</span> 
                              <span className="g-value">5million </span></div>
                         </div>
                         <div className="col-md-3">
                              <div className="gpi-title-col"><span className="g-title"> GPI score:</span> <span className="g-value"> 44.5</span></div>
                         </div>
                         <div className="col-md-3">
                              <div className="gpi-title-col"> <span className="g-title"> Rank: </span> 
                              <span className="g-value"> 23rd </span> </div>
                         </div>
                     </div>

                        <hr/>

                     <div className="result-board">
                          
                         <div className="row">
                             
                                  <div className="col-md-6 col-lg-3">
                                    <div className="card-1">
                                    <table className="main-result-table">
                                        <tr >
                                              <td> </td>
                                              <td className="gpi-minor-title">score</td>
                                              <td className="gpi-minor-title">rank</td>
                                              <td className="gpi-minor-title">strength</td>
                                        </tr>
                                        <tr className="hd-gpi-head">
                                            <td className="gpi-tb-main green-sec-color">Human Development</td>
                                            <td className="thead-td-main-1">57.5</td>
                                            <td className="thead-td-main-1">15th</td>
                                            <td className="thead-td-main-1">
                                                  <div className="index-strength-0 green-pry-bg"></div>
                                            </td>
                                        </tr>
                                      <tbody>  
                                      <tr className="sub-head-0" >
                                            <td className="gpi-tb-main-1">Welfare</td>
                                            <td className="thead-td-main-2">49.7</td>
                                            <td className="thead-td-main-2">4th</td>
                                            <td className="thead-td-main-2" > 
                                              <div className="index-strength-1 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Welfare Policies & Services</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Promotion of Socio-economic Integration of Youth</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Social Safety Nets</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Social Inclusion</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                         
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>

                                  <div className="col-md-6 col-lg-3">
                                  <div className="card-1">
                                    <table className="main-result-table">
                                       <tr > <td> </td>
                                              <td className="gpi-minor-title">score</td>
                                              <td className="gpi-minor-title">rank</td>
                                              <td className="gpi-minor-title">strength</td>
                                        </tr>
                                        <tr className="eo-gpi-head">
                                            <td className="gpi-tb-main blue-pry-color">Economic Opportunity</td>
                                            <td className="thead-td-main-1">67.5</td>
                                            <td className="thead-td-main-1">9th</td>
                                            <td className="thead-td-main-1">
                                                  <div className="index-strength-0 green-pry-bg"></div>
                                            </td>
                                        </tr>
                                      <tbody>
                                      <tr className="sub-head-0" >
                                            <td className="gpi-tb-main-1">Public Management</td>
                                            <td className="thead-td-main-2">49.7</td>
                                            <td className="thead-td-main-2">4th</td>
                                            <td className="thead-td-main-2" > 
                                              <div className="index-strength-1 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Government Statistical Capacity</td>
                                            <td className="thead-td-main-3">29.7</td>
                                            <td className="thead-td-main-3">24th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Civil Registration</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Effectiveness of the Public Service</td>
                                            <td className="thead-td-main-3">59.7</td>
                                            <td className="thead-td-main-3">14th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Online Public Services</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Diversification of Revenue Sources</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                       
                                         
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3">
                                  <div className="card-1">
                                    <table className="main-result-table">
                                        <tr >  <td> </td>
                                              <td className="gpi-minor-title">score</td>
                                              <td className="gpi-minor-title">rank</td>
                                              <td className="gpi-minor-title">strength</td>
                                        </tr>
                                        <tr className="srl-gpi-head">
                                            <td className="gpi-tb-main lemon-sec-color">Security & Rule of Law</td>
                                            <td className="thead-td-main-1">67.5</td>
                                            <td className="thead-td-main-1">9th</td>
                                            <td className="thead-td-main-1">
                                                  <div className="index-strength-0 green-pry-bg"></div>
                                            </td>
                                        </tr>
                                       
                                      <tbody>
                                      <tr className="sub-head-0" >
                                            <td className="gpi-tb-main-1">Rule of Law</td>
                                            <td className="thead-td-main-2">49.7</td>
                                            <td className="thead-td-main-2">4th</td>
                                            <td className="thead-td-main-2" > 
                                              <div className="index-strength-1 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Independence of Judiciary</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Independence & Transparency of the Judicial Process</td>
                                            <td className="thead-td-main-3">46.7</td>
                                            <td className="thead-td-main-3">13th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Access to Justice</td>
                                            <td className="thead-td-main-3">69.7</td>
                                            <td className="thead-td-main-3">3rd</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Property Rights</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                       
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3">
                                  <div>
                                    <table className="main-result-table">
                                       <tr >  <td> </td>
                                              <td className="gpi-minor-title">score</td>
                                              <td className="gpi-minor-title">rank</td>
                                              <td className="gpi-minor-title">strength</td>
                                        </tr>
                                        <tr className="ihr-gpi-head">
                                            <td className="gpi-tb-main milk-pry-color">Inclusion & Human Rights</td>
                                            <td className="thead-td-main-1">67.5</td>
                                            <td className="thead-td-main-1">9th</td>
                                            <td className="thead-td-main-1">
                                                  <div className="index-strength-0 green-pry-bg"></div>
                                            </td>
                                        </tr>
                                       
                                      <tbody>
                                      <tr className="sub-head-0" >
                                            <td className="gpi-tb-main-1">Participation</td>
                                            <td className="thead-td-main-2">49.7</td>
                                            <td className="thead-td-main-2">4th</td>
                                            <td className="thead-td-main-2" > 
                                              <div className="index-strength-1 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Political Participation</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Civil Society Participation</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Democratic Elections</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Capacity of Election Monitoring Agencies</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="gpi-tb-main-2">Political Entry Barrier</td>
                                            <td className="thead-td-main-3">49.7</td>
                                            <td className="thead-td-main-3">4th</td>
                                            <td className="thead-td-main-3"> 
                                              <div className="index-strength-2 green-pry-bg"></div> 
                                            </td>
                                        </tr>
                                       
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>
                                  </div>
                              </div>
                  <div className="db-txt"> <br/> <br/> <strong>NOTE:</strong> A historical graph will be shown here when we have GPI data of upto two years.</div>
                 </div>
             </div>
              
        )
    }
}

export default HomeMap;





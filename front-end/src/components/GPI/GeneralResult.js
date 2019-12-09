import React from 'react';
 

class HomeMap extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="main-padding no-top-margin" >
                     <div className="Result-intro" >
                         <p > The <strong>Result Board</strong> Highlights states performance on the key indicators in the Governance Performance Index at a glance. The relative position of states on the GPI is shown below along with their relative performance on each major group of indicators </p>
                     </div>

                        <div className="gpi-title green-pry-color">Governance Performance Index in a glance</div>

                     <div className="result-board">
                         <div className="row">
                             <div className="col-sm-3">
                                 <div className="gpi-title-2" >GPI</div>
                             </div>
                             <div className="col-sm-9">
                                 <div className="row">
                                 <div className="col-sm-3">
                                    <span className="gpi-title-3 green-sec-color"> Human Development </span>
                                 </div>
                                 <div className="col-sm-3">
                                     <span className="gpi-title-3 blue-pry-color"> Economic Opportunity </span>
                                 </div>
                                 <div className="col-sm-3">
                                     <span className="gpi-title-3 lemon-pry-color"> Safety & Rule of Law </span>
                                 </div>
                                 <div className="col-sm-3">
                                     <span className="gpi-title-3 milk-pry-color"> Inclusion & Human Rights </span>
                                 </div>
                                 </div>
                             </div>
                         </div>
                         <div className="row">
                              <div className="col-sm-3">
                                  <table className="main-result-table">
                                      <thead className="gpi-head">
                                            <td className="thead-td-main" >STATE</td>
                                            <td className="thead-td-minor">score</td>
                                            <td className="thead-td-minor">rank</td>
                                            <td className="thead-td-minor">strength</td>
                                      </thead>
                                      <tbody>
                                      <tr>
                                            <td className="tbody-td-main">Abia</td>
                                            <td className="tbody-td-minor">49.7</td>
                                            <td className="tbody-td-minor">4th</td>
                                            <td className="tbody-td-minor"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-main">Abia</td>
                                            <td className="tbody-td-minor">49.7</td>
                                            <td className="tbody-td-minor">4th</td>
                                            <td className="tbody-td-minor"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-main">Abia</td>
                                            <td className="tbody-td-minor">49.7</td>
                                            <td className="tbody-td-minor">4th</td>
                                            <td className="tbody-td-minor"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr></tr>
                                        <tr></tr>
                                      </tbody>
                                  </table>
                              </div>

                              <div className="col-sm-9">
                                  <div className="row">
                                  <div className="col-md-3">
                                    <div>
                                    <table className="main-result-table">
                                      <thead className="hd-gpi-head">
                                            <td className="thead-td-minor-sub">score</td>
                                            <td className="thead-td-minor-sub">rank</td>
                                            <td className="thead-td-minor">strength</td>
                                      </thead>
                                      <tbody>
                                      <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub-c" > <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>

                                  <div className="col-md-3">
                                  <div>
                                    <table className="main-result-table">
                                      <thead className="eo-gpi-head">
                                            <td className="thead-td-minor-sub">score</td>
                                            <td className="thead-td-minor-sub">rank</td>
                                            <td className="thead-td-minor">strength</td>
                                      </thead>
                                      <tbody>
                                      <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub-c" > <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                  <div>
                                    <table className="main-result-table">
                                      <thead className="srl-gpi-head">
                                            <td className="thead-td-minor-sub">score</td>
                                            <td className="thead-td-minor-sub">rank</td>
                                            <td className="thead-td-minor">strength</td>
                                      </thead>
                                      <tbody>
                                      <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub-c" > <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                  <div>
                                    <table className="main-result-table">
                                      <thead className="ihr-gpi-head">
                                            <td className="thead-td-minor-sub">score</td>
                                            <td className="thead-td-minor-sub">rank</td>
                                            <td className="thead-td-minor">strength</td>
                                      </thead>
                                      <tbody>
                                      <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub-c" > <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                        <tr>
                                            <td className="tbody-td-minor-sub">49.7</td>
                                            <td className="tbody-td-minor-sub">4th</td>
                                            <td className="tbody-td-minor-sub strength-box"> <div className="index-strength green-pry-bg"></div> </td>
                                        </tr>
                                       </tbody>
                                  </table>
                                    </div>
                                  </div>
                                  </div>
                              </div>


                         </div>
                     </div>





                 </div>
             </div>
              
        )
    }
}

export default HomeMap;





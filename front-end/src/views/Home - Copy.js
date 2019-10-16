import React from 'react';
import logo from '../img/icon.png';
import '../css/App.css';
let slackurl="https://join.slack.com/t/citizennetworkng/shared_invite/enQtNzU3NDU3NDY0MTAyLWE5YzI1MWU2MDAwMDczOTViNjg0ZTk3ZGFkN2I5ZmYxMjJiYmJhYzMxODM4YTE3YTNjYTExMWM4OTc3ZGRmYWM";
let    taigaurl="https://tree.taiga.io/project/citizennetworknigeria-governance-meter-project/timeline";
let    githuburl="https://github.com/citizen-network-nigeria/Governance-Meter-NG";
let    docs="https://governancemeter.org.ng/documents/PartnersGuide.pdf";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="header-big"> Governance Performance Index </h2>
        <p className="text">
          We are building a platform to measure and track governance across Nigeria. Kindly join us to build this platform. We are managing this project on Taiga.io, hosting the code on Github and Communicating through Slack. <br/><br/> Please Join these platforms with the links below
        </p>
        <div className="links">
          <a href={taigaurl}>Taiga</a>
          <a href={githuburl}>Github</a>
          <a href ={slackurl}> Slack</a>
        </div>
        <p className="text-small">
        For additional information, please see the <a href="https://governancemeter.org.ng"> front page </a> or download <a href={docs}> this document </a>
        </p>
         
      </header>
    </div>
  );
}

export default Home;

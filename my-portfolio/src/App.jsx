import logo from "./logo.svg";
import "./App.css";
import React from "react";
const { Octokit } = require("@octokit/core");
function App() {


  
  const getRepos = async () =>{
   const octokit = new Octokit({auth:'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'})
    let Response = await octokit.request("GET /users/{username}/repos",{username:"Brilynd"})
    console.log(await Response)
  }

  console.log(getRepos())
  return (
    <React.Fragment>
      <div className="Background-Wrapper">
        <h2 id="Homepage-Jumbotron-Text">Hello, I am <span id="Homepage-Name-Highlight">Brilynd Madeya</span>. a full-stack developer web developer in college!</h2>
        <div id="Homepage-Btn-Container">
        <button id="Homepage-Btn">Read About Me</button>
        </div>
      </div>
      <div className="Background-Wrapper"></div>
      <div className="Background-Wrapper"></div>
      <div className="Background-Wrapper"></div>
      <div className="Background-Wrapper"></div>
      <div className="Background-Wrapper"></div>
    </React.Fragment>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import Navbar from "./Componets/Navbar";
import { useEffect } from "react";
const { Octokit } = require("@octokit/core");
function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getRepos()
  },[]);
  const getRepos = async () => {
    let accountProjects = await fetch(
      "https://api.github.com/users/Brilynd/repos"
    );
    accountProjects = await accountProjects.json();
    let response = await accountProjects.map((item) => {
      return { Name: item.name, Url: item.html_url };
    });
    setProjects(response);
    console.log(projects);
  };
  return (
    <React.Fragment>
      <div className="Background-Wrapper">
        <div className="Background-Centered">
          <h2 id="Homepage-Jumbotron-Text">
            Hello, I am <span id="Homepage-Name-Highlight">Brilynd Madeya</span>
            . a full-stack developer web developer in college!
          </h2>
          <div id="Homepage-Btn-Container">
            <button
              id="Homepage-Btn"
            >
              Read About Me
            </button>
          </div>
        </div>
      </div>

      <div className="Background-Wrapper">
        <Navbar />
        <div className="Background-Centered" id="Skills-Wrapper">
          <h1>Skill and Languages</h1>
        <div className="Skills-Container">
          <div>
            <h2>Frontend and Design</h2>
            <p>Figma 1 year(s)</p>
            <p>SCSS 1 year(s)</p>
            <p>CSS 1 year(s)</p>
            <p>Tailwind.css 1 year(s)</p>
            <p>Javascript 1 year(s)</p>
            <p>HTML 1 year(s)</p>
            <p>React 1 year(s)</p>
          </div>
          <div>
            <h2>Backend</h2>
            <p>Node.js 1 year(s)</p>
            <p>Asp.net .5 year(s)</p>
            <p>C# .5 year(s)</p>
            <p>.Net .5 year(s)</p>
            <p>Express.js 1 year(s)</p>
            <p>MongoDB 1 year(s)</p>
            <p>Firebase 1 year(s)</p>
          </div>
          <div>
            <h2>Machine Learning and AI</h2>
            <p>Prophet .5 year(s)</p>
            <p>Tensor Flow .5 year(s)</p>
            <p>MatplotLib .5 year(s)</p>
            <p>Seaborn .5 year(s)</p>
          </div>
        </div>
        </div>
      </div>
      <div className="Background-Wrapper">
        <div className="Background-Centered" id="Education-Wrapper">
              <h1>Education</h1>
              <p id='Education-Text'>I am currently an  undergrad college student in my 3rd year studying computer science at <span>East Stroudsburg Universtity</span></p>
              <div>
                <h3>Relavent Courses</h3>
              <ul>
                <li>Calc 1 & 2</li>
                <li>Descrete Math</li>
                <li>Data Structures and Algorithms</li>
                <li>Computer Science 1 & 2</li>
                <li>Computer Orginization</li>
              </ul>
              </div>
        </div>
      </div>
      <div className="Background-Wrapper">
        <Navbar />
      </div>
      <div className="Background-Wrapper">
        <div className="Project-Container">
          <h1>Projects</h1>
          <div>
        {projects.length!=0 && projects.map(item=>{
          return(
            <a href={item.Url}>
            <div>
              <h1>{item.Name}</h1>
            </div>
            </a>
          )
        })}
        </div>
        </div>
      </div>
      <div className="Background-Wrapper">
        <Navbar />
        
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML + CSS ",
    level: "begginer",
    color: "#f7c1b5",
  },
  {
    skill: "JavaScript ",
    level: "advanced",
    color: "#b5f5c1",
  },
  {
    skill: "Web Design ",
    level: "advanced",
    color: "#c5d0ff",
  },
  {
    skill: "Git and GitHub ",
    level: "intermediate",
    color: "#ecf0b7",
  },
  {
    skill: "React ",
    level: "advanced",
    color: "#f3b5ef",
  },
];

function App() {
  return (
    <div className="container">
      <Image />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <>
      <div className="card-container">
        <h2>Angelika Sowka</h2>
        <p>
          Crafting beautiful, functional digital experiences. When I'm away from
          my desk, you can find me bouldering, creating art, or clearing my head
          on a long walk.
        </p>
        <ToolsList />
      </div>
    </>
  );
}

function Image() {
  return <img className="img" src="portrait.jpg" alt="" />;
}

function ToolsList() {
  return (
    <div className="tools-container">
      {skills.map((skill) => (
        <ToolTag skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function ToolTag({ skill, color, level }) {
  return (
    <div className="tool" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "begginer" && "👶"}
        {level === "advanced" && "👌🏻"}
        {level === "intermediate" && "👍🏻"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <ToolTag toolName="HTML + CSS 💪🏻" />
      <ToolTag toolName="JavaScript💪🏻" />
      <ToolTag toolName="Web Design 💪🏻" />
      <ToolTag toolName="Git and GitHub 👌🏻" />
      <ToolTag toolName="React 👍🏻" />
    </div>
  );
}

function ToolTag(props) {
  return <p className="tool">{props.toolName}</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

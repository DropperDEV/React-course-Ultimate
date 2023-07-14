import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import img from "./img.jpg";

const skillData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#f27413",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#fae20a",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#23f50c",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#ff1414",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#e84e33",
  },
];

function App() {
  return (
    <main className="container">
      <Img image={img} name="James Costa" />
      <Text
        name="James Costa"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit eu lectus vel eleifend. Sed ut faucibus urna, quis placerat ante. Vivamus eleifend lacinia risus ut hendrerit. Morbi eu quam vestibulum, laoreet velit sed, viverra lectus. Quisque ullamcorper eu lacus non tincidunt. Morbi iaculis blandit massa ut fringilla. Ut porta est ac nibh suscipit congue. Phasellus diam nulla, commodo vel enim sit amet, accumsan tincidunt sapien. Cras id commodo"
      />
    </main>
  );
}

function Img(props) {
  return (
    <div className="container-divImg">
      <img
        src={props.image}
        alt={props.name}
        className="container-divImg-img"
      />
    </div>
  );
}

function Text(props) {
  const skills = skillData;
  const skillsNum = skills.length;
  return (
    <div className="container-divText">
      <h1 className="container-divText-title">{props.name}</h1>
      <p className="container-divText-paragraph">{props.paragraph}</p>
      {skillsNum > 0 ? (
        <div className="container-divText-containerFeatures">
          {skills.map((hability) => (
            <Features
              skill={hability.skill}
              key={hability.name}
              color={hability.color}
              level={hability.level}
            />
          ))}
        </div>
      ) : (
        <p>"No habilitys has been declared"</p>
      )}
    </div>
  );
}

function Features({ skill, color, level }) {
  return (
    <div
      className="container-divText-containerFeatures-component"
      style={{ backgroundColor: color }}
    >
      <p>{skill}</p>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

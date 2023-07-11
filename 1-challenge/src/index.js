import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import img from "./img.jpg";

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
  return (
    <div className="container-divText">
      <h1 className="container-divText-title">{props.name}</h1>
      <p className="container-divText-paragraph">{props.paragraph}</p>
      <div className="container-divText-containerFeatures">
        <Features features={{ color: "yellow", text: "JAVASCRIPT", emoji: "💪" }} />
        <Features features={{ color: "blue", text: "HTML+CSS", emoji: "💪" }} />
        <Features features={{ color: "green", text: "Web Design", emoji: "💪" }} />
        <Features features={{ color: "pink", text: "Git and Github", emoji: "👍" }} />
        <Features features={{ color: "cyan", text: "REACT", emoji: "💪" }} />
        <Features features={{ color: "red", text: "REACT", emoji: "Svelte👶" }} />
      </div>
    </div>
  );
}

function Features(props) {
  const { color, text, emoji } = props.features;
  return (
    <div
      className="container-divText-containerFeatures-component"
      style={{ backgroundColor: color }}
    >
      <p>{text}</p>
      <span>{emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

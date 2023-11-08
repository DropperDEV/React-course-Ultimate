import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander
        expanded={true}
        expandButtonText="Show more"
        collapseButtonText="Show less"
        className="box"
        color="blue"
        collapsedNumWords={20}
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        expanded={true}
        expandButtonText="Show text"
        collapseButtonText="Show less"
        className="box"
        color="purple"
        collapsedNumWords={20}
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        expandButtonText="Show more"
        collapseButtonText="Show less"
        color="red"
        collapsedNumWords={20}
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapseButtonText,
  collapsedNumWords,
  expandButtonText,
  color,
  expanded,
  className,
  children,
}) {
  const [expand, setExpand] = useState(false);
  const textExpanderStyle = {
    color,
  };

  const displayText = expand
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  function handleClick(expand) {
    setExpand(!expand);
  }

  return (
    <div className={className}>
      <p>{displayText}</p>
      <span onClick={() => handleClick(expand)} style={textExpanderStyle}>
        {expand ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}

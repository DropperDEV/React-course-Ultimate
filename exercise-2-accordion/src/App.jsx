import { useState } from "react";
import "./styles.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <ItemsAcc title={item.title} num={i+1} text={item.text} key={item.title} />
      ))}
    </div>
  );
}

function ItemsAcc({num,title, text}) {
  const [isOpen, setIsOpen] = useState(false)
  function handleClickisOpen(){
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <div className={isOpen === false ? "item" : "item open"} onClick={handleClickisOpen}>
      <p className="number">{num}</p>
      <h1 className="title">{title}</h1>
      <span className="icon">{isOpen === false ? "➖" : "➕"}</span>
      <div style={isOpen === false ? { display: "none" }: {}} className="content-box">{text}</div>
    </div>
  );
}

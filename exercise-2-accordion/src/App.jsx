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
  const [curOpen, setCurOpen] = useState(0);

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <ItemsAcc
          setCurOpen={setCurOpen}
          title={item.title}
          num={i + 1}
          key={item.title}
          curOpen={curOpen}
        >
          {item.text}
        </ItemsAcc>
      ))}
      <ItemsAcc
        setCurOpen={setCurOpen}
        title="Simplesmente Miau"
        num="DEZ"
        curOpen={curOpen}
      >
        <ul>
          <li>Primeiro. Seja um gato(a)</li>
          <li>Segundo. Sinta vontade de miar</li>
          <li>Terceiro. Mie</li>
        </ul>
      </ItemsAcc>
    </div>
  );
}

function ItemsAcc({ num, title, setCurOpen, curOpen, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    setCurOpen(num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <h1 className="title">{title}</h1>
      <span className="icon">{isOpen === false ? "➖" : "➕"}</span>
      <div
        style={isOpen === false ? { display: "none" } : {}}
        className="content-box"
      >
        {children}
      </div>
    </div>
  );
}

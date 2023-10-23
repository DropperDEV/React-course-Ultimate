import { useState } from "react";
import  Form from "./Form";
import  Logo from "./Logo";
import  PackingList from "./PackingList";
import  Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAdditems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClickResetItems(){
    const confirmed = window.confirm("Are you sure you want to delete all itens")
    confirmed && setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClickResetItems={handleClickResetItems}
      />
      <Stats items={items} />
    </div>
  );
}



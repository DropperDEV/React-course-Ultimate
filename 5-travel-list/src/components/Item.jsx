export default function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)} />
      <p>{item.quantity}</p>
      <p> {item.description}</p>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

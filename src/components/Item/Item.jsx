import React from "react";

const Items = ({ item, onToggleItem, onDeleteItem }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button type="submit" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
};

export default Items;

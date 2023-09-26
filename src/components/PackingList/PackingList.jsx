// import React, { useState } from "react";

import { useState } from "react";
import Items from "../Item/Item";

const PackingList = ({ items, onToggleItem, onDeleteItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div>
        <select
          className="actions"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">State to input</option>
          <option value="description">State to description</option>
          <option value="packed">State to packed </option>
        </select>
        <button className="actions">clear</button>
      </div>
    </div>
  );
};

export default PackingList;

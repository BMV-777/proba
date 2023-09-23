import { useState } from "react";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handelAddItem(item) {
    setItems([...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,

              packed: !item.packed,
            }
          : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItem} />
      <PackingList
        items={items}
        onToggleItem={handelToggleItem}
        onDeleteItem={handelDeleteItem}
      />
      <Stats />
    </div>
  );
}

export default App;

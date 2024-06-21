import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import ItemCard from "./Components/ItemCard";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menus")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setFilteredItems(menuItems);
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <Header filterItems={filterItems} />
        </div>
        <div className="section-center">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
export default App;

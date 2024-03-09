import { useState, useEffect } from "react";
import menuData from "./menu.json";

const Menu = () => {
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    setFilteredMenu(menuData); // Initialize filteredMenu state with menuData on component mount
  }, []);

  const filterMenu = (category) => {
    if (category === "all") {
      setFilteredMenu(menuData);
    } else {
      const filtered = menuData.filter((item) => item.category === category);
      setFilteredMenu(filtered);
    }
  };

  return (
    <div>
      <div className="filters">
        <button onClick={() => filterMenu("all")}>All</button>
        <button onClick={() => filterMenu("breakfast")}>Breakfast</button>
        <button onClick={() => filterMenu("lunch")}>Lunch</button>
        <button onClick={() => filterMenu("shakes")}>Shakes</button>
      </div>
      <div className="menu">
        {filteredMenu.map((item) => (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Menu;

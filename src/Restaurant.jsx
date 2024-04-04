import { useState, useEffect } from "react";
import menuData from "./menu.json";

const Menu = () => {
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    setFilteredMenu(menuData);
  }, []);

  return (
    <>
      {" "}
      <div className="container">
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
    </>
  );
};

export default Menu;

//restaurant firstclass should have unlimited menu choices, while the rest should have blocked meals. the design should be like a slide, for food and drinks
